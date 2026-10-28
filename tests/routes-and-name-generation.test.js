import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { matchRoutes } from "react-router-dom";
import {
  categoryRoutes,
  generatorCatalog,
  getGeneratorByPath,
} from "../src/data/catalog.js";
import { buildBusinessBrandNames } from "../src/utils/businessBrandNames.js";

const routeManifest = [
  { path: "/" },
  { path: "/all-generators" },
  { path: "/search" },
  { path: "/guides" },
  { path: "/about" },
  { path: "/contact" },
  { path: "/privacy-policy" },
  { path: "/terms" },
  { path: "/terms-and-conditions" },
  ...categoryRoutes.map(({ path }) => ({ path })),
  ...generatorCatalog.map(({ path }) => ({ path })),
  { path: "*" },
];

test("published generator paths are unique and resolve to their own metadata", () => {
  const paths = generatorCatalog.map(({ path }) => path);
  assert.equal(new Set(paths).size, paths.length);
  const registeredPaths = routeManifest
    .map(({ path }) => path)
    .filter((path) => path !== "*");
  assert.equal(new Set(registeredPaths).size, registeredPaths.length);

  for (const generator of generatorCatalog) {
    assert.equal(getGeneratorByPath(generator.path)?.id, generator.id);
    const matchedRoute = matchRoutes(routeManifest, generator.path)?.at(-1);
    assert.equal(matchedRoute?.route.path, generator.path);
  }
});

test("category destinations do not collide with generator destinations", () => {
  const generatorPaths = new Set(generatorCatalog.map(({ path }) => path));
  const categoryPaths = categoryRoutes.map(({ path }) => path);
  assert.equal(new Set(categoryPaths).size, categoryPaths.length);

  for (const path of categoryPaths) {
    assert.equal(generatorPaths.has(path), false, `${path} is used by a category and a generator`);
    assert.equal(matchRoutes(routeManifest, path)?.at(-1)?.route.path, path);
  }

  for (const category of categoryRoutes) {
    assert.ok(category.categories.length > 0);
    assert.ok(
      category.categories.every((name) =>
        generatorCatalog.some((generator) => generator.category === name)
      )
    );
  }
});

test("business and brand generator paths resolve to their intended generator", () => {
  assert.equal(getGeneratorByPath("/business-names")?.id, "business");
  assert.equal(getGeneratorByPath("/brand-names")?.id, "brand");
  assert.equal(
    matchRoutes(routeManifest, "/business-names/")?.at(-1)?.route.path,
    "/business-names"
  );
  assert.equal(
    matchRoutes(routeManifest, "/brand-names/")?.at(-1)?.route.path,
    "/brand-names"
  );
});

test("unknown generator slugs match only the not-found route", () => {
  const matchedRoute = matchRoutes(routeManifest, "/not-a-real-generator")?.at(-1);
  assert.equal(matchedRoute?.route.path, "*");
});

test("legacy terms URL resolves to its compatibility route", () => {
  const matchedRoute = matchRoutes(routeManifest, "/terms-and-conditions")?.at(-1);
  assert.equal(matchedRoute?.route.path, "/terms-and-conditions");
});

test("sitemap is valid XML structure and includes every generator/category route", () => {
  const sitemap = readFileSync(new URL("../public/sitemap.xml", import.meta.url), "utf8");
  assert.match(sitemap, /^<\?xml version="1\.0" encoding="UTF-8"\?>/);
  assert.match(sitemap, /<urlset\b[^>]*>[\s\S]*<\/urlset>\s*$/);

  const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert.equal(locations.length, (sitemap.match(/<url>/g) || []).length);
  for (const route of [...generatorCatalog, ...categoryRoutes]) {
    assert.ok(
      locations.includes(`https://namegenx.com${route.path}`),
      `Sitemap is missing ${route.path}`
    );
  }
});

test("Vercel sends direct SPA route requests to the React app entry point", () => {
  const vercelConfig = JSON.parse(
    readFileSync(new URL("../vercel.json", import.meta.url), "utf8")
  );
  assert.ok(
    vercelConfig.rewrites.some(
      ({ source, destination }) =>
        source === "/(.*)" && destination === "/index.html"
    )
  );
});

test("business and brand names reflect user keywords and filters", () => {
  const businessNames = buildBusinessBrandNames({
    keyword: "Northstar",
    industry: "technology",
    style: "professional",
    tone: "professional",
    count: 10,
    random: () => 0,
  });
  const brandNames = buildBusinessBrandNames({
    keyword: "Northstar",
    secondKeyword: "Bloom",
    industry: "fashion",
    style: "creative",
    tone: "friendly",
    count: 20,
    random: () => 0,
  });

  assert.equal(businessNames.length, 10);
  assert.ok(businessNames.every((name) => name.toLowerCase().includes("northstar")));
  assert.ok(brandNames.some((name) => name.toLowerCase().includes("bloom")));
  assert.notDeepEqual(brandNames, businessNames);
});

test("business and brand filter selections alter the generated suggestions", () => {
  const modernTech = buildBusinessBrandNames({
    keyword: "Orbit",
    industry: "technology",
    tone: "bold",
    style: "modern",
    count: 10,
    random: () => 0,
  });
  const premiumFashion = buildBusinessBrandNames({
    keyword: "Orbit",
    industry: "fashion",
    tone: "elegant",
    style: "premium",
    count: 10,
    random: () => 0,
  });
  assert.notDeepEqual(modernTech, premiumFashion);
});

test("name generation handles empty input and respects the selected length", () => {
  assert.deepEqual(buildBusinessBrandNames({ keyword: "   " }), []);

  const names = buildBusinessBrandNames({
    keyword: "Nova",
    style: "short",
    maxLength: 12,
    count: 10,
    random: () => 0,
  });
  assert.equal(names.length, 10);
  assert.ok(names.every((name) => name.length <= 12));
});

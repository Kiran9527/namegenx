/**
 * NameGenX SEO Utility
 * File: src/utils/seo.js
 */

const SITE_NAME = "NameGenX";
const SITE_URL = "https://namegenx.com";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

const upsertMeta = ({ selector, attribute, key, content }) => {
  if (content === undefined || content === null || content === "") return;

  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", String(content));
};

const upsertLink = (rel, href) => {
  if (!href) return;

  let element = document.head.querySelector(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
};

const upsertJsonLd = (structuredData) => {
  const id = "namegenx-json-ld";
  let script = document.getElementById(id);

  if (!structuredData) {
    script?.remove();
    return;
  }

  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(structuredData);
};

export const setSEO = ({
  title,
  description,
  canonical,

  // Open Graph
  ogTitle,
  ogDescription,
  ogUrl,
  ogType = "website",
  ogImage = DEFAULT_IMAGE,

  // Twitter / X
  twitterCard = "summary_large_image",
  twitterTitle,
  twitterDescription,
  twitterImage = ogImage,

  // Robots
  robots = "index, follow",

  // Structured Data
  structuredData,
}) => {
  if (typeof document === "undefined") return;

  if (title) {
    document.title = title;
  }

  upsertMeta({
    selector: 'meta[name="description"]',
    attribute: "name",
    key: "description",
    content: description,
  });

  upsertMeta({
    selector: 'meta[name="robots"]',
    attribute: "name",
    key: "robots",
    content: robots,
  });

  const canonicalUrl = canonical
    ? new URL(canonical, SITE_URL).href
    : undefined;

  upsertLink("canonical", canonicalUrl);

  upsertMeta({
    selector: 'meta[property="og:title"]',
    attribute: "property",
    key: "og:title",
    content: ogTitle || title,
  });

  upsertMeta({
    selector: 'meta[property="og:description"]',
    attribute: "property",
    key: "og:description",
    content: ogDescription || description,
  });

  upsertMeta({
    selector: 'meta[property="og:url"]',
    attribute: "property",
    key: "og:url",
    content: ogUrl || canonicalUrl,
  });

  upsertMeta({
    selector: 'meta[property="og:type"]',
    attribute: "property",
    key: "og:type",
    content: ogType,
  });

  upsertMeta({
    selector: 'meta[property="og:site_name"]',
    attribute: "property",
    key: "og:site_name",
    content: SITE_NAME,
  });

  upsertMeta({
    selector: 'meta[property="og:image"]',
    attribute: "property",
    key: "og:image",
    content: ogImage,
  });

  upsertMeta({
    selector: 'meta[name="twitter:card"]',
    attribute: "name",
    key: "twitter:card",
    content: twitterCard,
  });

  upsertMeta({
    selector: 'meta[name="twitter:title"]',
    attribute: "name",
    key: "twitter:title",
    content: twitterTitle || title,
  });

  upsertMeta({
    selector: 'meta[name="twitter:description"]',
    attribute: "name",
    key: "twitter:description",
    content: twitterDescription || description,
  });

  upsertMeta({
    selector: 'meta[name="twitter:image"]',
    attribute: "name",
    key: "twitter:image",
    content: twitterImage,
  });

  upsertJsonLd(structuredData);
};
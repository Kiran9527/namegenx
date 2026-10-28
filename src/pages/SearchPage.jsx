import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { generatorCatalog } from "../data/catalog";
import { setSEO } from "../utils/seo";
import FAQSection from "../components/FAQSection";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get("q") || "").trim().toLowerCase();

  const matches = query
    ? generatorCatalog.filter((item) => {
        const haystack = [item.title, item.category, item.description, ...item.tags]
          .join(" ")
          .toLowerCase();
        return haystack.includes(query);
      })
    : generatorCatalog.slice(0, 8);

  useEffect(() => {
    setSEO({
      title: query ? `Search results for “${query}” | NameGenX` : "Search NameGenX Generators",
      description:
        "Search NameGenX tools for usernames, brand names, gaming names, fantasy ideas, and more.",
      canonical: "https://namegenx.com/search",
      ogTitle: query ? `Search results for “${query}” | NameGenX` : "Search NameGenX Generators",
      ogDescription:
        "Find the right naming tool across social media, gaming, business, and creative projects.",
      ogUrl: "https://namegenx.com/search",
      ogType: "website",
      twitterCard: "summary_large_image",
      twitterTitle: query ? `Search results for “${query}” | NameGenX` : "Search NameGenX Generators",
      twitterDescription:
        "Search the NameGenX catalog for fast, relevant naming tools and inspiration.",
    });
  }, [query]);

  return (
    <main className="catalog-page">
      <section className="catalog-hero narrow">
        <p className="eyebrow">Name search</p>
        <h1>{query ? `Results for “${query}”` : "Explore NameGenX"}</h1>
        <p>
          Search across the catalog to find the most relevant naming tool for your
          next identity, brand, or project.
        </p>
      </section>

      {matches.length === 0 ? (
        <section className="empty-state">
          <h2>No generator match found</h2>
          <p>Try a broader keyword like “gaming”, “brand”, “fantasy”, or “instagram”.</p>
          <Link to="/all-generators" className="primary-link">
            Browse all generators
          </Link>
        </section>
      ) : (
        <section className="catalog-section">
          <div className="catalog-grid">
            {matches.map((item) => (
              <article className="catalog-card" key={item.title}>
                <span className="category-tag">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="catalog-meta">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <Link to={item.path}>Open tool</Link>
              </article>
            ))}
          </div>
        </section>
      )}
      <FAQSection page="search" title="Search help and FAQs" />
    </main>
  );
};

export default SearchPage;

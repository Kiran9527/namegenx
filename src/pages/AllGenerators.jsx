import { useEffect } from "react";
import { Link } from "react-router-dom";
import { categoryGroups, generatorCatalog } from "../data/catalog";
import { setSEO } from "../utils/seo";
import FAQSection from "../components/FAQSection";

const AllGenerators = () => {
  useEffect(() => {
    setSEO({
      title: "All Name Generators | NameGenX",
      description:
        "Browse all NameGenX generator categories, from Instagram usernames and gaming tags to business, fantasy, and baby-name ideas.",
      canonical: "https://namegenx.com/all-generators",
      ogTitle: "All Name Generators | NameGenX",
      ogDescription:
        "Explore premium name generators across usernames, business ideas, fantasy worlds, and more.",
      ogUrl: "https://namegenx.com/all-generators",
      ogType: "website",
      twitterCard: "summary_large_image",
      twitterTitle: "All Name Generators | NameGenX",
      twitterDescription:
        "Discover NameGenX tools for usernames, gaming, business naming, fantasy, and creative identity generation.",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "NameGenX All Generators",
        url: "https://namegenx.com/all-generators",
        description:
          "Directory of NameGenX name generation tools across social media, business, fantasy, gaming, and baby names.",
      },
    });
  }, []);

  return (
    <main className="catalog-page">
      <section className="catalog-hero">
        <p className="eyebrow">Discover every tool</p>
        <h1>All Name Generators</h1>
        <p>
          Explore a complete set of name-generation utilities for personal brands,
          gaming identities, product ideas, fantasy worlds, business naming, and
          more.
        </p>
      </section>

      {Object.entries(categoryGroups).map(([category, items]) => (
        <section key={category} className="catalog-section">
          <div className="section-header narrow">
            <p className="eyebrow">{category}</p>
            <h2>{category}</h2>
          </div>

          <div className="catalog-grid">
            {items.map((item) => (
              <article className="catalog-card" key={item.title}>
                <span className="category-tag">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="catalog-meta">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <Link to={item.path}>Open generator</Link>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="catalog-section featured">
        <div className="section-header narrow">
          <p className="eyebrow">Quickly browse</p>
          <h2>Popular starting points</h2>
        </div>

        <div className="catalog-grid compact">
          {generatorCatalog.slice(0, 4).map((item) => (
            <Link className="mini-card" key={item.title} to={item.path}>
              {item.title}
            </Link>
          ))}
        </div>
      </section>
      <FAQSection page="catalog" title="All generators: frequently asked questions" />
    </main>
  );
};

export default AllGenerators;

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { categoryRoutes, generatorCatalog, getCategoryByKey } from "../data/catalog";
import { setSEO } from "../utils/seo";
import FAQSection from "../components/FAQSection";

const CategoryPage = ({ categoryKey }) => {
  const config = getCategoryByKey(categoryKey);
  const generators = config
    ? generatorCatalog.filter((item) => config.categories.includes(item.category))
    : [];

  useEffect(() => {
    if (!config) return;
    const title = `${config.title} | NameGenX`;
    const canonical = `https://namegenx.com${config.path}`;
    setSEO({
      title,
      description: config.description,
      canonical,
      ogTitle: title,
      ogDescription: config.description,
      ogUrl: canonical,
      ogType: "website",
      twitterCard: "summary_large_image",
      twitterTitle: title,
      twitterDescription: config.description,
    });
  }, [config]);

  if (!config) {
    return (
      <main className="not-found-page">
        <section className="not-found-card">
          <h1>Category not found</h1>
          <Link className="primary-link" to="/all-generators">Browse all generators</Link>
        </section>
      </main>
    );
  }

  return (
    <main className="catalog-page">
      <section className="catalog-hero">
        <p className="eyebrow">Generator category</p>
        <h1>{config.title}</h1>
        <p>{config.description}</p>
      </section>

      <section className="catalog-section">
        {generators.length ? (
          <div className="catalog-grid">
            {generators.map((item) => (
              <article className="catalog-card" key={item.id}>
                <span className="category-tag">{item.category}</span>
                <h2>{item.title}</h2>
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
        ) : (
          <p className="empty-state">There are no generators in this category yet.</p>
        )}
      </section>

      <FAQSection category={config} title={`${config.title} FAQs`} />

      <section className="catalog-section">
        <div className="section-header narrow">
          <p className="eyebrow">Discover</p>
          <h2>More generator categories</h2>
        </div>
        <div className="catalog-grid compact">
          {categoryRoutes.filter((item) => item.key !== categoryKey).map((item) => (
            <Link className="mini-card" key={item.key} to={item.path}>
              {item.title}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default CategoryPage;

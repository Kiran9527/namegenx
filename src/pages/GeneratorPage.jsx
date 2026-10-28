import { useEffect } from "react";
import { Link } from "react-router-dom";
import BusinessBrandGenerator from "../components/BusinessBrandGenerator";
import UsernameGenerator from "../components/UsernameGenerator";
import { categoryRoutes, getGeneratorById } from "../data/catalog";
import { setSEO } from "../utils/seo";
import FAQSection from "../components/FAQSection";

const GeneratorPage = ({ generator }) => {
  const category = categoryRoutes.find((item) =>
    item.categories.includes(generator.category)
  );
  const relatedGenerators = generator.related
    .map((id) => getGeneratorById(id))
    .filter(Boolean);

  useEffect(() => {
    const title = `${generator.title} | NameGenX`;
    const canonical = `https://namegenx.com${generator.path}`;
    setSEO({
      title,
      description: generator.description,
      canonical,
      ogTitle: title,
      ogDescription: generator.description,
      ogUrl: canonical,
      ogType: "website",
      twitterCard: "summary_large_image",
      twitterTitle: title,
      twitterDescription: generator.description,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: generator.title,
        url: canonical,
        applicationCategory: "UtilityApplication",
        operatingSystem: "All",
        description: generator.description,
      },
    });
  }, [generator]);

  return (
    <main className="catalog-page generator-page">
      <nav className="generator-breadcrumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span aria-hidden="true">/</span>
        {category && <Link to={category.path}>{category.title}</Link>}
        {category && <span aria-hidden="true">/</span>}
        <span aria-current="page">{generator.title}</span>
      </nav>

      <section className="catalog-hero">
        <p className="eyebrow">Free online generator</p>
        <h1>{generator.title}</h1>
        <p>{generator.description}</p>
        <div className="catalog-meta">
          {generator.tags.slice(0, 4).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </section>

      <section className="catalog-section">
        <div className="catalog-card generator-form-card">
          {generator.id === "business" || generator.id === "brand" ? (
            <BusinessBrandGenerator generator={generator} />
          ) : (
            <UsernameGenerator type={generator.type} />
          )}
        </div>
      </section>

      {relatedGenerators.length > 0 && (
        <section className="catalog-section related-generator-section">
          <div className="section-header narrow">
            <p className="eyebrow">Keep exploring</p>
            <h2>Related name generators</h2>
          </div>
          <div className="catalog-grid compact">
            {relatedGenerators.map((item) => (
              <Link className="mini-card" key={item.id} to={item.path}>
                {item.title}
              </Link>
            ))}
          </div>
        </section>
      )}
      <FAQSection generator={generator} title={`${generator.title} FAQs`} />
    </main>
  );
};

export default GeneratorPage;

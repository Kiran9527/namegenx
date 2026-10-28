import { useEffect } from "react";
import { Link } from "react-router-dom";
import { setSEO } from "../utils/seo";
import FAQSection from "../components/FAQSection";

const guides = [
  {
    title: "How to Choose a Strong Username",
    text: "Keep it short, memorable, and easy to spell. Prioritize clarity over complexity so the name stays useful across platforms.",
  },
  {
    title: "Naming a Business Without Looking Generic",
    text: "Aim for a name that reflects your market position, sounds credible, and leaves room for product expansion.",
  },
  {
    title: "Building Better Fantasy Names",
    text: "Use rhythm, sound patterns, and cultural cues to make fictional names feel distinctive without becoming unreadable.",
  },
  {
    title: "Choosing a Baby Name That Ages Well",
    text: "A strong name should balance style, pronunciation, and emotional resonance so it feels fitting at every age.",
  },
];

const GuidesPage = () => {
  useEffect(() => {
    setSEO({
      title: "Naming Guides & Resources | NameGenX",
      description:
        "Learn how to create stronger usernames, business names, fantasy identities, and personal names with NameGenX’s naming guides.",
      canonical: "https://namegenx.com/guides",
      ogTitle: "Naming Guides & Resources | NameGenX",
      ogDescription:
        "Explore practical naming advice for social media, business, fantasy, and personal branding.",
      ogUrl: "https://namegenx.com/guides",
      ogType: "website",
      twitterCard: "summary_large_image",
      twitterTitle: "Naming Guides & Resources | NameGenX",
      twitterDescription:
        "Get actionable naming tips for usernames, brands, and creative identities.",
    });
  }, []);

  return (
    <main className="catalog-page">
      <section className="catalog-hero">
        <p className="eyebrow">Guides</p>
        <h1>Naming Guides & Resources</h1>
        <p>
          Explore useful naming strategies for usernames, brands, fantasy worlds,
          and personal identities.
        </p>
      </section>

      <section className="catalog-section">
        <div className="catalog-grid">
          {guides.map((guide) => (
            <article className="catalog-card" key={guide.title}>
              <span className="category-tag">Guide</span>
              <h3>{guide.title}</h3>
              <p>{guide.text}</p>
              <Link to="/all-generators">Browse generator ideas</Link>
            </article>
          ))}
        </div>
      </section>
      <FAQSection page="guides" title="Naming guide FAQs" />
    </main>
  );
};

export default GuidesPage;

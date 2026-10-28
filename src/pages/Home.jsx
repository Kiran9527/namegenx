import Hero from "../components/Hero";
import Features from "../components/Features";
import PopularGenerators from "../components/PopularGenerators";
import CTA from "../components/CTA";
import { setSEO } from "../utils/seo";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getGeneratorById } from "../data/catalog";
import FAQSection from "../components/FAQSection";

const categoryHighlights = [
  {
    label: "Instagram",
    text: "Stylish handles for creators, brands, and personal profiles.",
    generatorId: "instagram",
  },
  {
    label: "YouTube",
    text: "Channel names that are memorable and easy to search.",
    generatorId: "youtube",
  },
  {
    label: "Gaming",
    text: "Epic gamer tags built for competitive and casual play.",
    generatorId: "gaming",
  },
];

const Home = () => {
  useEffect(() => {
    setSEO({
      title:
        "Username Generator for Instagram, YouTube & Gaming | NameGenX",
      description:
        "Generate unique usernames for Instagram, YouTube, and gaming instantly. Free, fast, and creative username generator by NameGenX.",
      canonical: "https://namegenx.com/",
      ogTitle:
        "Username Generator for Instagram, YouTube & Gaming | NameGenX",
      ogDescription:
        "Create unique usernames for social media and gaming instantly. Free, fast, and creative username generator.",
      ogUrl: "https://namegenx.com/",
      ogType: "website",
      twitterCard: "summary_large_image",
      twitterTitle:
        "Username Generator for Instagram, YouTube & Gaming | NameGenX",
      twitterDescription:
        "Free username generator for Instagram, YouTube, and gaming. Get 20 unique usernames instantly.",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "NameGenX",
        url: "https://namegenx.com/",
        applicationCategory: "UtilityApplication",
        operatingSystem: "All",
        description:
          "Free username generator for Instagram, YouTube, and gaming platforms.",
      },
    });
  }, []);

  return (
    <>
      <Hero />
      <Features />

      <section className="home-showcase">
        <div className="section-header">
          <p className="eyebrow">Browse by category</p>
          <h2>Find the right style for your digital identity</h2>
        </div>

        <div className="category-grid">
          {categoryHighlights.map((item) => (
            <article className="category-card" key={item.label}>
              <span className="category-tag">{item.label}</span>
              <p>{item.text}</p>
              <Link to={getGeneratorById(item.generatorId).path}>Open generator</Link>
            </article>
          ))}
        </div>
      </section>

      <PopularGenerators />

      <FAQSection page="home" title="Everything you need to know before you pick a name" />

      <CTA />
    </>
  );
};

export default Home;

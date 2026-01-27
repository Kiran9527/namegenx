import Hero from "../components/Hero";
import Features from "../components/Features";
import PopularGenerators from "../components/PopularGenerators";
import CTA from "../components/CTA";
import { setSEO } from "../utils/seo";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    setSEO({
      title:
        "Username Generator for Instagram, YouTube & Gaming | NameGenX",

      description:
        "Generate unique usernames for Instagram, YouTube, and gaming instantly. Free, fast, and creative username generator by NameGenX.",

      canonical: "https://namegenx.com/",

      /* =========================
         OPEN GRAPH (Facebook, LinkedIn)
      ========================= */
      ogTitle:
        "Username Generator for Instagram, YouTube & Gaming | NameGenX",

      ogDescription:
        "Create unique usernames for social media and gaming instantly. Free, fast, and creative username generator.",

      ogUrl: "https://namegenx.com/",
      ogType: "website",

      /* =========================
         TWITTER CARD
      ========================= */
      twitterCard: "summary_large_image",

      twitterTitle:
        "Username Generator for Instagram, YouTube & Gaming | NameGenX",

      twitterDescription:
        "Free username generator for Instagram, YouTube, and gaming. Get 20 unique usernames instantly.",

      /* =========================
         STRUCTURED DATA (JSON-LD)
      ========================= */
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
      <PopularGenerators />
      <CTA />
    </>
  );
};

export default Home;

import "./About.css";
import { useEffect } from "react";
import { setSEO } from "../utils/seo";
const About = () => {
    useEffect(() => {
  setSEO({
    title: "About NameGenX – Smart Username Generator",

    description:
      "Learn how NameGenX helps creators and gamers generate unique usernames for Instagram, YouTube, and gaming platforms.",

    canonical: "https://namegenx.com/about",

    /* =========================
       OPEN GRAPH
    ========================= */
    ogTitle: "About NameGenX – Smart Username Generator",
    ogDescription:
      "Discover how NameGenX helps creators and gamers generate unique usernames across social media and gaming platforms.",
    ogUrl: "https://namegenx.com/about",
    ogType: "website",

    /* =========================
       TWITTER
    ========================= */
    twitterCard: "summary_large_image",
    twitterTitle: "About NameGenX",
    twitterDescription:
      "Learn how NameGenX helps creators and gamers find unique usernames instantly.",

    /* =========================
       STRUCTURED DATA
    ========================= */
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About NameGenX",
      url: "https://namegenx.com/about",
      description:
        "About NameGenX, a free username generator for Instagram, YouTube, and gaming platforms.",
    },
  });
}, []);

  return (
    <main className="about-page">
      {/* Header */}
      <section className="about-hero">
        <h1>About NameGen</h1>
        <p>Helping creators find their perfect digital identity</p>
      </section>

      {/* Mission */}
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          At NameGen, we believe that everyone deserves a unique and memorable
          online identity. Whether you're starting a YouTube channel, building
          your Instagram presence, launching a gaming career, or creating a
          business brand, your username is the foundation of your digital
          identity.
        </p>
        <p>
          We created this platform to solve a common problem: finding the
          perfect username shouldn't be frustrating or time-consuming. Our
          advanced generation algorithms combine creativity with practicality
          to deliver suggestions that are unique, meaningful, and memorable.
        </p>
      </section>

      {/* What We Do */}
      <section className="about-section">
        <h2>What We Do</h2>
        <p>
          NameGen is a comprehensive username and name generation platform that
          serves multiple purposes. We help social media creators find catchy
          usernames for Instagram, YouTube, Twitter, and TikTok.
        </p>
        <p>
          We assist gamers in discovering epic usernames that stand out in
          competitive gaming environments and help entrepreneurs and businesses
          create brandable, professional names.
        </p>
      </section>

      {/* Values */}
      <section className="about-section">
        <h2>Our Values</h2>

        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">👤</div>
            <h3>User-Focused</h3>
            <p>
              We build tools that solve real problems for real people.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">🎯</div>
            <h3>Quality First</h3>
            <p>
              Every suggestion is carefully crafted to be unique and memorable.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">❤️</div>
            <h3>Community Driven</h3>
            <p>
              We listen to feedback and continuously improve based on user
              needs.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">⚡</div>
            <h3>Innovation</h3>
            <p>
              We leverage cutting-edge technology to deliver the best experience.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="about-section">
        <h2>Why Choose NameGen?</h2>
        <p>
          Unlike other username generators that produce random, meaningless
          combinations, NameGen focuses on quality and relevance. Our algorithms
          understand context and create suggestions that actually make sense for
          your use case.
        </p>
        <p>
          We’re committed to providing a free, accessible tool with no
          registration, no hidden fees, and no limits. Finding your perfect
          username should be easy, fun, and completely free.
        </p>
      </section>

      {/* Looking Forward */}
      <section className="about-section">
        <h2>Looking Forward</h2>
        <p>
          We’re constantly improving NameGen based on user feedback and emerging
          trends. Our roadmap includes expanding to more categories, adding
          advanced customization options, and integrating real-time availability
          checking.
        </p>
        <p>
          Thank you for choosing NameGen. We’re here to help you create a digital
          identity you’ll be proud to use across all platforms.
        </p>
      </section>
    </main>
  );
};

export default About;

import "./PrivacyPolicy.css";
import { useEffect } from "react";
import { setSEO } from "../utils/seo";

const PrivacyPolicy = () => {
  useEffect(() => {
  setSEO({
    title: "Privacy Policy | NameGenX",

    description:
      "Read NameGenX’s privacy policy to understand how we collect, use, and protect user information on our username generator platform.",

    canonical: "https://namegenx.com/privacy-policy",

    /* =========================
       OPEN GRAPH
    ========================= */
    ogTitle: "Privacy Policy | NameGenX",
    ogDescription:
      "Learn how NameGenX collects, uses, and protects your personal information.",
    ogUrl: "https://namegenx.com/privacy-policy",
    ogType: "website",

    /* =========================
       TWITTER
    ========================= */
    twitterCard: "summary_large_image",
    twitterTitle: "Privacy Policy | NameGenX",
    twitterDescription:
      "Understand how NameGenX handles and protects user data.",

    /* =========================
       STRUCTURED DATA
    ========================= */
    structuredData: {
      "@context": "https://schema.org",
      "@type": "PrivacyPolicy",
      name: "Privacy Policy - NameGenX",
      url: "https://namegenx.com/privacy-policy",
      description:
        "Privacy policy explaining how NameGenX collects, uses, and protects user information.",
    },
  });
}, []);

  return (
    <main className="privacy-page">
      {/* Header */}
      <section className="privacy-hero">
        <h1>Privacy Policy</h1>
        <p className="privacy-date">Last updated: January 26, 2026</p>
      </section>

      {/* Content */}
      <section className="privacy-content">
        <h2>Introduction</h2>
        <p>
          Welcome to NameGen ("we", "our", or "us"). We are committed to protecting
          your privacy and ensuring you have a positive experience on our
          website. This Privacy Policy explains how we collect, use, disclose,
          and safeguard your information when you use our services.
        </p>
        <p>
          By accessing or using our website, you agree to this Privacy Policy. If
          you do not agree, please do not use our services.
        </p>

        <h2>Information We Collect</h2>

        <h3>Information You Provide</h3>
        <p>
          We collect information you voluntarily provide, such as keywords used
          for username generation and details submitted through our contact
          forms, including name, email address, and message content.
        </p>

        <h3>Automatically Collected Information</h3>
        <p>
          When you visit our website, we may automatically collect information
          such as IP address, browser type, device information, pages visited,
          and time spent on pages. This data helps us improve performance and
          user experience.
        </p>

        <h2>Cookies and Tracking Technologies</h2>
        <p>
          We use cookies and similar technologies to track activity on our
          website. You can instruct your browser to refuse cookies, but some
          features may not function properly.
        </p>
        <h2>Advertising and Third-Party Services</h2>

        <h3>Google AdSense</h3>
        <p>
          We use Google AdSense to display advertisements. Google uses cookies to
          serve ads based on users’ visits to this and other websites.
        </p>
        <p>
          You can opt out of personalized advertising by visiting Google Ad
          Settings or www.aboutads.info.
        </p>

        <h3>Analytics Services</h3>
        <p>
          We may use third-party analytics tools to understand how users interact
          with our website and improve our services.
        </p>

        <h2>Data Security</h2>
        <p>
          We implement reasonable security measures to protect your information.
          However, no method of transmission over the Internet is completely
          secure.
        </p>

        <h2>Data Retention</h2>
        <p>
          We retain personal information only as long as necessary to fulfill
          the purposes outlined in this policy, unless a longer retention period
          is required by law.
        </p>

        <h2>Your Privacy Rights</h2>
        <ul>
          <li>Access and receive a copy of your personal information</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your personal information</li>
        </ul>

        <h2>Children's Privacy</h2>
        <p>
          Our services are not intended for children under 13. We do not
          knowingly collect personal data from children.
        </p>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy periodically. Changes will be posted
          on this page with an updated revision date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          through our contact page.
        </p>
      </section>
    </main>
  );
};

export default PrivacyPolicy;

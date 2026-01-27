import "./Terms.css";
import { useEffect } from "react";
import { setSEO } from "../utils/seo";

const Terms = () => {
   useEffect(() => {
  setSEO({
    title: "Terms & Conditions | NameGenX",

    description:
      "Read the terms and conditions for using NameGenX’s username generator services for Instagram, YouTube, and gaming.",

    canonical: "https://namegenx.com/terms-and-conditions",

    /* =========================
       OPEN GRAPH
    ========================= */
    ogTitle: "Terms & Conditions | NameGenX",
    ogDescription:
      "Review the terms and conditions for using NameGenX’s username generator platform.",
    ogUrl: "https://namegenx.com/terms-and-conditions",
    ogType: "website",

    /* =========================
       TWITTER
    ========================= */
    twitterCard: "summary_large_image",
    twitterTitle: "Terms & Conditions | NameGenX",
    twitterDescription:
      "Read the terms and conditions for using NameGenX’s username generator services.",

    /* =========================
       STRUCTURED DATA
    ========================= */
    structuredData: {
      "@context": "https://schema.org",
      "@type": "TermsAndConditions",
      name: "Terms & Conditions - NameGenX",
      url: "https://namegenx.com/terms-and-conditions",
      description:
        "Terms and conditions governing the use of NameGenX username generator services.",
    },
  });
}, []);

  return (
    <main className="terms-page">
      {/* Header */}
      <section className="terms-hero">
        <h1>Terms & Conditions</h1>
        <p className="terms-date">Last updated: January 26, 2026</p>
      </section>

      {/* Content */}
      <section className="terms-content">
        <h2>Agreement to Terms</h2>
        <p>
          Welcome to NameGen. These Terms and Conditions ("Terms") govern your
          access to and use of our website and username generation services. By
          accessing or using our website, you agree to be bound by these Terms.
          If you disagree with any part of these Terms, you may not access or use
          our services.
        </p>
        <p>
          We reserve the right to modify these Terms at any time. Updated Terms
          will be posted on this page with a new "Last updated" date. Continued
          use of our website indicates acceptance of the updated Terms.
        </p>

        <h2>Use of Our Services</h2>

        <h3>Permitted Use</h3>
        <p>
          You may use our username generation services for personal or commercial
          purposes, provided you comply with these Terms and all applicable laws.
          Our services are provided free of charge, and you may generate as many
          usernames as needed for legitimate purposes.
        </p>


        <h2>Intellectual Property Rights</h2>

        <h3>Our Content</h3>
        <p>
          All content on this website, including text, graphics, logos, images,
          and software, is the property of NameGen or its licensors and is
          protected by intellectual property laws. Unauthorized use is strictly
          prohibited.
        </p>

        <h3>Generated Usernames</h3>
        <p>
          Generated usernames are provided as suggestions only. We do not claim
          ownership of generated usernames and make no guarantees regarding
          availability, uniqueness, or suitability.
        </p>

        <h2>Disclaimer of Warranties</h2>
        <p>
          Our services are provided "as is" and "as available" without warranties
          of any kind. We do not guarantee uninterrupted service, error-free
          operation, or specific outcomes from using our services.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, NameGen shall not be liable for
          any indirect, incidental, special, or consequential damages arising
          from your use of our services.
        </p>
        <p>
          Our total liability shall not exceed the amount paid for our services,
          which is zero, as our services are provided free of charge.
        </p>

        <h2>Third-Party Links and Services</h2>
        <p>
          Our website may contain links to third-party websites or services. We
          are not responsible for their content, privacy policies, or practices.
          Use of third-party services is at your own risk.
        </p>

        <h2>Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless NameGen from any claims,
          damages, or expenses arising from your use of our services or violation
          of these Terms.
        </p>

        <h2>Termination</h2>
        <p>
          We reserve the right to suspend or terminate access to our services at
          any time without notice if you violate these Terms.
        </p>

        <h2>Governing Law</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws
          of the jurisdiction in which NameGen operates.
        </p>

        <h2>Severability</h2>
        <p>
          If any provision of these Terms is deemed invalid, the remaining
          provisions shall remain in full force and effect.
        </p>

        <h2>Entire Agreement</h2>
        <p>
          These Terms, together with our Privacy Policy, constitute the entire
          agreement between you and NameGen.
        </p>

        <h2>Contact Information</h2>
        <p>
          If you have any questions about these Terms, please contact us through
          our contact page.
        </p>
      </section>
    </main>
  );
};

export default Terms;

import "./Contact.css";
import { useEffect, useState } from "react";
import { setSEO } from "../utils/seo";
import FAQSection from "../components/FAQSection";

const Contact = () => {
  // SEO
  useEffect(() => {
    setSEO({
      title: "Contact NameGenX – Support & Feedback",

      description:
        "Contact NameGenX for support, feedback, or questions about our username generators for Instagram, YouTube, and gaming.",

      canonical: "https://namegenx.com/contact",

      /* =========================
         OPEN GRAPH
      ========================= */
      ogTitle: "Contact NameGenX – Support & Feedback",
      ogDescription:
        "Get in touch with NameGenX for help, feedback, or questions about our username generator tools.",
      ogUrl: "https://namegenx.com/contact",
      ogType: "website",

      /* =========================
         TWITTER
      ========================= */
      twitterCard: "summary_large_image",
      twitterTitle: "Contact NameGenX",
      twitterDescription:
        "Contact NameGenX for support or questions about our username generator tools.",

      /* =========================
         STRUCTURED DATA
      ========================= */
      structuredData: {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact NameGenX",
        url: "https://namegenx.com/contact",
        description:
          "Contact page for NameGenX, a free username generator for Instagram, YouTube, and gaming platforms.",
      },
    });
  }, []);


  // Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Saving message on this device...");

    try {
      const savedMessages = JSON.parse(
        window.localStorage.getItem("namegenx-contact-messages") || "[]"
      );
      if (!Array.isArray(savedMessages)) {
        throw new Error("Stored messages are not in the expected format.");
      }
      savedMessages.unshift({ ...form, savedAt: new Date().toISOString() });
      window.localStorage.setItem(
        "namegenx-contact-messages",
        JSON.stringify(savedMessages.slice(0, 20))
      );
      setStatus("Message saved on this device only. It has not been sent.");
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      setStatus("Could not save your message. No message was sent.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="contact-page">
      {/* Header */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Have questions or feedback? We'd love to hear from you!</p>
      </section>

      {/* Form */}
      <section className="contact-form-section">
        <div className="contact-card">
          <h3>Save a Message</h3>
          <p className="contact-sub">
            This frontend-only form saves a private draft in this browser. It does not send email or contact the site owner.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="contact-row">
              <div className="contact-field">
                <label>Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact-field">
              <label>Subject *</label>
              <input
                type="text"
                name="subject"
                placeholder="What is this about?"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field">
              <label>Message *</label>
              <textarea
                name="message"
                placeholder="Tell us more..."
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="contact-btn"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save on This Device"}
            </button>

            {status && <p className="contact-status" role="status">{status}</p>}
          </form>
        </div>
      </section>
      <FAQSection page="contact" title="Contact and message FAQs" />
    </main>
  );
};

export default Contact;

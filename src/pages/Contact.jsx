import "./Contact.css";
import { useEffect, useState } from "react";
import { setSEO } from "../utils/seo";

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

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending message...");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully! We’ll get back to you soon.");
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("❌ Server error. Please try later.");
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
          <h3>Send us a Message</h3>
          <p className="contact-sub">
            Fill out the form below and we'll get back to you as soon as possible
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
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && <p className="contact-status">{status}</p>}
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;

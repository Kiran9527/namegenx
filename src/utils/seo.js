export const setSEO = ({
  title,
  description,
  canonical,

  // Open Graph
  ogTitle,
  ogDescription,
  ogUrl,
  ogType = "website",

  // Twitter
  twitterCard = "summary_large_image",
  twitterTitle,
  twitterDescription,

  // Structured Data
  structuredData,
}) => {
  /* =========================
     TITLE
  ========================= */
  if (title) {
    document.title = title;
  }

  /* =========================
     META DESCRIPTION
  ========================= */
  if (description) {
    let meta = document.querySelector("meta[name='description']");
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);
  }

  /* =========================
     CANONICAL
  ========================= */
  if (canonical) {
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonical);
  }

  /* =========================
     OPEN GRAPH TAGS
  ========================= */
  const setOG = (property, content) => {
    if (!content) return;
    let meta = document.querySelector(`meta[property='${property}']`);
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("property", property);
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", content);
  };

  setOG("og:title", ogTitle || title);
  setOG("og:description", ogDescription || description);
  setOG("og:url", ogUrl || canonical);
  setOG("og:type", ogType);
  setOG("og:site_name", "NameGenX");

  /* =========================
     TWITTER TAGS
  ========================= */
  const setTwitter = (name, content) => {
    if (!content) return;
    let meta = document.querySelector(`meta[name='${name}']`);
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", name);
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", content);
  };

  setTwitter("twitter:card", twitterCard);
  setTwitter("twitter:title", twitterTitle || title);
  setTwitter("twitter:description", twitterDescription || description);

  /* =========================
     STRUCTURED DATA (JSON-LD)
  ========================= */
  if (structuredData) {
    let script = document.querySelector(
      "script[type='application/ld+json']"
    );

    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(structuredData);
  }
};

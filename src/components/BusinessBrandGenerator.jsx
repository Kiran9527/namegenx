import { useState } from "react";
import { buildBusinessBrandNames } from "../utils/businessBrandNames";
import "./UsernameGenerator.css";
import "./BusinessBrandGenerator.css";

const industries = [
  ["general", "General"],
  ["technology", "Technology"],
  ["food", "Food & beverage"],
  ["fashion", "Fashion"],
  ["health", "Health & wellness"],
  ["finance", "Finance"],
  ["retail", "Retail"],
  ["creative", "Creative services"],
];

const styles = [
  ["short", "Short"],
  ["modern", "Modern"],
  ["creative", "Creative"],
  ["premium", "Premium"],
  ["professional", "Professional"],
];

const tones = [
  ["bold", "Bold"],
  ["friendly", "Friendly"],
  ["elegant", "Elegant"],
  ["innovative", "Innovative"],
  ["professional", "Professional"],
];

const readFavorites = (storageKey) => {
  try {
    const saved = window.localStorage.getItem(storageKey);
    const favorites = JSON.parse(saved || "[]");
    return Array.isArray(favorites) ? favorites : [];
  } catch {
    return [];
  }
};

const copyText = async (value) => {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const input = document.createElement("textarea");
  input.value = value;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.opacity = "0";
  document.body.appendChild(input);
  input.select();
  const copied = document.execCommand("copy");
  document.body.removeChild(input);
  if (!copied) throw new Error("Clipboard access is unavailable.");
};

const BusinessBrandGenerator = ({ generator }) => {
  const [keyword, setKeyword] = useState("");
  const [secondKeyword, setSecondKeyword] = useState("");
  const [industry, setIndustry] = useState("general");
  const [tone, setTone] = useState("professional");
  const [style, setStyle] = useState("modern");
  const [maxLength, setMaxLength] = useState(30);
  const [count, setCount] = useState(20);
  const [results, setResults] = useState([]);
  const [favorites, setFavorites] = useState(() =>
    readFavorites(`namegenx-favorites-${generator.id}`)
  );
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const isBrand = generator.id === "brand";

  const generate = () => {
    if (!keyword.trim() || !/[a-z0-9]/i.test(keyword)) {
      setError("Enter a keyword containing at least one letter or number.");
      setStatus("");
      return;
    }

    setError("");
    setStatus("");
    setLoading(true);
    window.setTimeout(() => {
      try {
        const names = buildBusinessBrandNames({
          keyword,
          secondKeyword,
          industry,
          tone,
          style,
          count,
          maxLength,
        });
        if (names.length === 0) {
          setError("No names could be generated. Try a different keyword.");
        } else {
          setResults(names);
        }
      } catch {
        setError("Name generation failed. Please adjust your choices and try again.");
      } finally {
        setLoading(false);
      }
    }, 0);
  };

  const copy = async (value, label) => {
    try {
      await copyText(value);
      setError("");
      setStatus(label);
    } catch {
      setError("Could not copy to the clipboard. Check your browser permissions.");
      setStatus("");
    }
  };

  const toggleFavorite = (name) => {
    const nextFavorites = favorites.includes(name)
      ? favorites.filter((favorite) => favorite !== name)
      : [name, ...favorites].slice(0, 30);
    setFavorites(nextFavorites);

    try {
      window.localStorage.setItem(
        `namegenx-favorites-${generator.id}`,
        JSON.stringify(nextFavorites)
      );
      setStatus(
        nextFavorites.includes(name) ? "Name saved to favorites." : "Favorite removed."
      );
      setError("");
    } catch {
      setError("Favorites could not be saved in this browser.");
      setStatus("");
    }
  };

  return (
    <div className="business-brand-generator username-generator">
      <div className="generator-toolbar">
        <label className="field-wrap">
          <span>{isBrand ? "Brand keyword" : "Business keyword"} *</span>
          <input
            type="text"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            placeholder={isBrand ? "e.g. orbit, bloom, summit" : "e.g. northstar, fresh, pixel"}
            maxLength={40}
            required
          />
        </label>

        <label className="field-wrap">
          <span>Industry or product category</span>
          <select value={industry} onChange={(event) => setIndustry(event.target.value)}>
            {industries.map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </label>

        {isBrand && (
          <label className="field-wrap">
            <span>Brand personality</span>
            <select value={tone} onChange={(event) => setTone(event.target.value)}>
              {tones.map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </label>
        )}

        <label className="field-wrap">
          <span>Naming style</span>
          <select value={style} onChange={(event) => setStyle(event.target.value)}>
            {styles.map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </label>

        <label className="field-wrap">
          <span>Optional second keyword</span>
          <input
            type="text"
            value={secondKeyword}
            onChange={(event) => setSecondKeyword(event.target.value)}
            placeholder="Combine another idea"
            maxLength={40}
          />
        </label>

        <div className="inline-controls">
          <label className="field-wrap compact">
            <span>Maximum name length</span>
            <select value={maxLength} onChange={(event) => setMaxLength(Number(event.target.value))}>
              <option value={12}>Short (12 characters)</option>
              <option value={20}>Medium (20 characters)</option>
              <option value={30}>Long (30 characters)</option>
            </select>
          </label>
          <label className="field-wrap compact">
            <span>Number of results</span>
            <select value={count} onChange={(event) => setCount(Number(event.target.value))}>
              <option value={10}>10 names</option>
              <option value={20}>20 names</option>
              <option value={30}>30 names</option>
            </select>
          </label>
        </div>
      </div>

      <div className="business-brand-actions">
        <button type="button" className="generator-button" onClick={generate} disabled={loading}>
          {loading ? "Generating..." : `Generate ${isBrand ? "Brand" : "Business"} Names`}
        </button>
        {results.length > 0 && (
          <>
            <button type="button" className="action-button secondary" onClick={generate} disabled={loading}>
              Regenerate
            </button>
            <button
              type="button"
              className="action-button secondary"
              onClick={() => copy(results.join("\n"), "All names copied.")}
            >
              Copy all
            </button>
          </>
        )}
      </div>

      {error && <p className="generator-message error" role="alert">{error}</p>}
      {status && <p className="generator-message" role="status">{status}</p>}

      {favorites.length > 0 && (
        <section className="favorites-strip" aria-label="Saved favorites">
          <span>Saved favorites</span>
          <div className="favorite-tags">
            {favorites.map((favorite) => (
              <button
                type="button"
                key={favorite}
                className="favorite-tag"
                onClick={() => copy(favorite, "Favorite copied.")}
              >
                {favorite}
              </button>
            ))}
          </div>
        </section>
      )}

      {results.length > 0 && (
        <div className="results-grid" aria-live="polite">
          {results.map((name) => (
            <article className="result-card" key={name}>
              <div className="result-name">{name}</div>
              <div className="result-actions">
                <button type="button" className="action-button" onClick={() => copy(name, "Name copied.")}>
                  Copy
                </button>
                <button
                  type="button"
                  className="action-button secondary"
                  onClick={() => toggleFavorite(name)}
                >
                  {favorites.includes(name) ? "Saved" : "Save"}
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      <aside className="naming-tips">
        <h2>{isBrand ? "Brand naming tips" : "Business naming tips"}</h2>
        <p>
          Keep the name easy to say and spell, check that it fits your audience,
          and review trademark, domain, and business-name availability independently.
          Suggestions are creative ideas and are not legally or commercially cleared.
        </p>
      </aside>

    </div>
  );
};

export default BusinessBrandGenerator;

import { useState } from "react";
import "./UsernameGenerator.css";

const WORDS = [
  "tech", "tube", "gaming", "media", "hub", "studio", "world",
  "zone", "play", "official", "pro", "x", "daily", "prime"
];

const SUFFIXES = ["tv", "yt", "hq", "live", "official", "x"];

const UsernameGenerator = ({ type }) => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const createName = () => {
    const base =
      keyword.trim().length > 0
        ? keyword.toLowerCase().replace(/\s+/g, "")
        : WORDS[Math.floor(Math.random() * WORDS.length)];

    const suffix =
      SUFFIXES[Math.floor(Math.random() * SUFFIXES.length)];

    const number = Math.floor(Math.random() * 999);

    return `${base}${suffix}${number}`;
  };

  const generateNames = () => {
    setLoading(true);

    const set = new Set();
    let attempts = 0;

    // SAFE LOOP (NO FREEZE)
    while (set.size < 20 && attempts < 500) {
      set.add(createName());
      attempts++;
    }

    setResults([...set]);
    setLoading(false);
  };

  return (
    <div className="username-generator">
      <input
        type="text"
        placeholder={`Enter ${type} keyword (optional)`}
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      {/* IMPORTANT: type="button" prevents page reload */}
      <button type="button" onClick={generateNames} disabled={loading}>
        {loading ? "Generating..." : "Generate"}
      </button>

      {results.length > 0 && (
        <ul className="results">
          {results.map((name, index) => (
            <li key={index} className="result-item">
              <span>{name}</span>

              <div className="actions">
                <button
                  type="button"
                  onClick={() => navigator.clipboard.writeText(name)}
                >
                  Copy
                </button>

                
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsernameGenerator;

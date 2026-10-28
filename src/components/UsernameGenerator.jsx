import { useState } from "react";
import "./UsernameGenerator.css";

const generatorProfiles = {
  instagram: {
    label: "Instagram",
    wordBank: [
      "luna",
      "pixel",
      "nova",
      "vivid",
      "bright",
      "horizon",
      "echo",
      "glow",
      "mint",
      "zen",
      "hive",
      "velvet",
      "muse",
      "craft",
      "north",
    ],
    prefixes: ["", "neo", "wild", "pure", "ink", "mid", "sky", "vibe"],
    suffixes: ["studio", "club", "lab", "hq", "daily", "works", "lane", "vibes"],
    styles: {
      clean: ["bytes", "frame", "studio", "grid", "list", "spark"],
      edgy: ["haze", "reign", "wave", "signal", "thrive", "knight"],
      premium: ["guild", "vector", "valet", "atlas", "motive", "phase"],
      playful: ["pop", "bloom", "pixel", "pocket", "mood", "orbit"],
    },
  },
  youtube: {
    label: "YouTube",
    wordBank: [
      "channel",
      "stream",
      "prime",
      "signal",
      "frame",
      "pulse",
      "vibe",
      "motion",
      "focus",
      "trail",
      "north",
      "rally",
      "icon",
      "quest",
    ],
    prefixes: ["live", "peak", "drift", "view", "play", "next", "daily", "matter"],
    suffixes: ["tv", "cast", "lab", "live", "zone", "vault", "works", "wire"],
    styles: {
      clean: ["labs", "network", "up", "signal", "focus", "story"],
      edgy: ["rage", "wave", "blast", "forge", "rush", "impact"],
      premium: ["studio", "atlas", "summit", "prime", "notes", "watt"],
      playful: ["funk", "buzz", "bloop", "byte", "kicker", "loop"],
    },
  },
  gaming: {
    label: "Gaming",
    wordBank: [
      "shadow",
      "phantom",
      "blitz",
      "drift",
      "ember",
      "nova",
      "crash",
      "raid",
      "storm",
      "zen",
      "pixel",
      "afterglow",
      "vortex",
      "rogue",
      "wolf",
    ],
    prefixes: ["mid", "alpha", "zero", "ghost", "steel", "swift", "vex", "wild"],
    suffixes: ["x", "ops", "core", "mode", "clan", "byte", "arena", "fire"],
    styles: {
      clean: ["squad", "elite", "tactics", "shift", "forge", "streak"],
      edgy: ["vengeance", "riser", "reaper", "striker", "breaker", "outlaw"],
      premium: ["legend", "vector", "zenith", "command", "dynasty", "pulse"],
      playful: ["pogo", "pepper", "chip", "bunny", "fizz", "glitch"],
    },
  },
  business: {
    label: "Business",
    wordBank: ["peak", "summit", "north", "horizon", "bright", "stone", "atlas", "vector"],
    prefixes: ["", "north", "nova", "prime", "summit", "cobalt", "violet"],
    suffixes: ["labs", "works", "group", "studio", "collective", "logic", "craft"],
    styles: {
      clean: ["co", "works", "studio", "collective", "labs", "group"],
      edgy: ["forge", "signal", "pulse", "hive", "lattice", "north"],
      premium: ["partners", "studio", "capital", "atelier", "summit", "aura"],
      playful: ["pop", "buzz", "spark", "orbit", "mint", "glow"],
    },
  },
  fantasy: {
    label: "Fantasy",
    wordBank: ["elara", "dorian", "thorn", "aurora", "riven", "mira", "gale", "sylva"],
    prefixes: ["moon", "star", "ember", "silver", "myth", "wild", "storm", "dawn"],
    suffixes: ["fall", "vale", "realm", "claw", "song", "forge", "drift", "moon"],
    styles: {
      clean: ["wren", "vale", "song", "glade", "light", "brook"],
      edgy: ["bane", "wrath", "dusk", "thorn", "fang", "rune"],
      premium: ["crown", "realm", "crest", "lore", "forge", "saga"],
      playful: ["sprout", "bloom", "glimmer", "nibble", "puff", "charm"],
    },
  },
  baby: {
    label: "Baby",
    wordBank: ["lily", "milo", "nora", "leo", "zoe", "aria", "henry", "ella"],
    prefixes: ["", "mia", "ava", "leo", "noa", "sora", "lina", "juno"],
    suffixes: ["rose", "bloom", "joy", "sky", "lark", "day", "moon", "haze"],
    styles: {
      clean: ["rose", "joy", "bloom", "lark", "grace", "rain"],
      edgy: ["blaze", "vibe", "wolf", "nova", "sparks", "rowan"],
      premium: ["ella", "maia", "sophie", "elio", "nora", "cora"],
      playful: ["poppy", "bubble", "charm", "bunny", "sprout", "milo"],
    },
  },
  pet: {
    label: "Pet",
    wordBank: ["poppy", "miso", "cookie", "pudding", "biscuit", "peach", "pebble", "cocoa"],
    prefixes: ["little", "tiny", "sun", "pumpkin", "velvet", "miso", "boo", "bunny"],
    suffixes: ["paws", "bop", "bun", "snug", "muffin", "bean", "nugget", "spark"],
    styles: {
      clean: ["paws", "bean", "bunny", "snug", "spark", "muffin"],
      edgy: ["shadow", "ranger", "wolf", "blaze", "storm", "growl"],
      premium: ["luxe", "velvet", "royal", "duchess", "prince", "gem"],
      playful: ["puff", "boop", "biscuit", "pudding", "peach", "zoom"],
    },
  },
  brand: {
    label: "Brand",
    wordBank: ["north", "summit", "atlas", "luma", "ember", "vivid", "grove", "nova"],
    prefixes: ["", "nova", "peak", "grove", "bright", "stone", "ideal", "north"],
    suffixes: ["labs", "works", "forge", "craft", "studio", "logic", "basis", "loop"],
    styles: {
      clean: ["labs", "works", "studio", "logic", "peak", "craft"],
      edgy: ["forge", "signal", "wave", "impact", "thrive", "vibe"],
      premium: ["atelier", "summit", "atelier", "aura", "vector", "guild"],
      playful: ["pop", "spark", "orbit", "bloom", "muse", "glow"],
    },
  },
  team: {
    label: "Team",
    wordBank: ["rally", "summit", "signal", "fusion", "ember", "glow", "trail", "forge"],
    prefixes: ["", "peak", "storm", "north", "union", "swift", "vibe", "legend"],
    suffixes: ["crew", "collective", "unit", "alliance", "forge", "clan", "squad", "works"],
    styles: {
      clean: ["crew", "unity", "collective", "works", "group", "motion"],
      edgy: ["strike", "force", "reign", "hype", "rampage", "blitz"],
      premium: ["alliance", "summit", "guild", "atlas", "collective", "signal"],
      playful: ["bunch", "buzz", "spark", "pals", "orbit", "pop"],
    },
  },
  podcast: {
    label: "Podcast",
    wordBank: ["signal", "echo", "story", "pulse", "frontier", "motive", "sound", "afterglow"],
    prefixes: ["", "live", "story", "air", "signal", "radio", "after", "next"],
    suffixes: ["cast", "wire", "show", "live", "talk", "room", "hour", "studio"],
    styles: {
      clean: ["cast", "show", "talk", "live", "studio", "wire"],
      edgy: ["echo", "reign", "wave", "noise", "thrive", "boom"],
      premium: ["signal", "studio", "summit", "motive", "live", "atlas"],
      playful: ["buzz", "bop", "spark", "pop", "zest", "gig"],
    },
  },
  product: {
    label: "Product",
    wordBank: ["nova", "pulse", "orbit", "forge", "lyra", "signal", "grid", "fluid"],
    prefixes: ["", "aero", "prime", "flow", "cloud", "bright", "zen", "pixel"],
    suffixes: ["ai", "labs", "cloud", "studio", "flow", "suite", "kit", "works"],
    styles: {
      clean: ["flow", "labs", "suite", "kit", "logic", "grid"],
      edgy: ["forge", "vibe", "signal", "pulse", "spark", "launch"],
      premium: ["atlas", "summit", "studio", "aura", "prime", "vector"],
      playful: ["pop", "puff", "glow", "orbit", "buzz", "mint"],
    },
  },
};

const randomFrom = (items) => items[Math.floor(Math.random() * items.length)];

const normalizeKeyword = (value) =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .slice(0, 18);

const buildGeneratedNames = ({ keyword, type, count = 20, style = "clean" }) => {
  const profile = generatorProfiles[type] || generatorProfiles.instagram;
  const safeKeyword = normalizeKeyword(keyword);
  const baseWords = safeKeyword ? [safeKeyword] : profile.wordBank;
  const generated = new Set();
  let attempts = 0;

  while (generated.size < count && attempts < 400) {
    attempts += 1;

    const base = randomFrom(baseWords);
    const prefix = randomFrom(profile.prefixes);
    const suffix = randomFrom(profile.suffixes);
    const tail = randomFrom(profile.styles[style] || profile.styles.clean);
    const number = Math.floor(Math.random() * 99) + 1;

    let name = `${prefix}${base}${tail}`;

    if (Math.random() > 0.4) {
      name = `${base}${suffix}${number}`;
    }

    if (Math.random() > 0.5) {
      name = `${base}${tail}${number}`;
    }

    if (!name || name.length < 4) {
      continue;
    }

    generated.add(name);
  }

  return [...generated].slice(0, count);
};

const copyToClipboard = async (value) => {
  if (!value) return false;

  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(value);
    return true;
  }

  const textArea = document.createElement("textarea");
  textArea.value = value;
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  const copied = document.execCommand("copy");
  document.body.removeChild(textArea);
  if (!copied) throw new Error("Clipboard access is unavailable.");
  return true;
};

const UsernameGenerator = ({ type = "instagram" }) => {
  const [keyword, setKeyword] = useState("");
  const [style, setStyle] = useState("clean");
  const [count, setCount] = useState(20);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState("");
  const [error, setError] = useState("");
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem(`namegenx-favorites-${type}`);
      const parsed = JSON.parse(saved || "[]");
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  const profile = generatorProfiles[type] || generatorProfiles.instagram;

  const updateFavorites = (nextFavorites) => {
    setFavorites(nextFavorites);
    try {
      localStorage.setItem(`namegenx-favorites-${type}`, JSON.stringify(nextFavorites));
      setError("");
    } catch {
      setError("Favorites could not be saved in this browser.");
    }
  };

  const generateNames = () => {
    if (keyword.trim() && !normalizeKeyword(keyword)) {
      setError("Enter a keyword containing at least one letter or number.");
      return;
    }

    setError("");
    setLoading(true);
    const nextResults = buildGeneratedNames({
      keyword,
      type,
      count,
      style,
    });

    setTimeout(() => {
      setResults(nextResults);
      setLoading(false);
      setCopied("");
    }, 200);
  };

  const handleCopy = async (name) => {
    try {
      await copyToClipboard(name);
      setCopied(name);
      setError("");
      window.setTimeout(() => setCopied(""), 1500);
    } catch {
      setCopied("");
      setError("Could not copy to the clipboard. Check your browser permissions.");
    }
  };

  const handleCopyAll = async () => {
    try {
      await copyToClipboard(results.join("\n"));
      setCopied("all");
      setError("");
      window.setTimeout(() => setCopied(""), 1500);
    } catch {
      setError("Could not copy the results. Check your browser permissions.");
    }
  };

  const handleFavorite = (name) => {
    if (favorites.includes(name)) {
      updateFavorites(favorites.filter((item) => item !== name));
      return;
    }

    updateFavorites([name, ...favorites].slice(0, 30));
  };

  const handleShare = async (name) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${profile.label} Username Idea`,
          text: `Check out this ${profile.label.toLowerCase()} username: ${name}`,
        });
        return;
      } catch {
        // Ignore and fall back to copy.
      }
    }

    await handleCopy(name);
  };

  return (
    <div className="username-generator">
      <div className="generator-toolbar">
        <label className="field-wrap">
          <span>Keyword</span>
          <input
            type="text"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            placeholder={`Enter ${profile.label.toLowerCase()} idea`}
            aria-label={`${profile.label} keyword input`}
          />
        </label>

        <div className="inline-controls">
          <label className="field-wrap compact">
            <span>Style</span>
            <select value={style} onChange={(event) => setStyle(event.target.value)}>
              <option value="clean">Clean</option>
              <option value="edgy">Edgy</option>
              <option value="premium">Premium</option>
              <option value="playful">Playful</option>
            </select>
          </label>

          <label className="field-wrap compact">
            <span>Count</span>
            <select value={count} onChange={(event) => setCount(Number(event.target.value))}>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
            </select>
          </label>
        </div>
      </div>

      <button type="button" className="generator-button" onClick={generateNames} disabled={loading}>
        {loading ? "Generating..." : `Generate ${profile.label} Names`}
      </button>
      {error && <p className="generator-message error" role="alert">{error}</p>}

      {results.length > 0 && (
        <div className="generator-result-actions">
          <button type="button" className="action-button secondary" onClick={generateNames}>
            Regenerate
          </button>
          <button type="button" className="action-button secondary" onClick={handleCopyAll}>
            {copied === "all" ? "Copied all" : "Copy all"}
          </button>
        </div>
      )}

      {favorites.length > 0 && (
        <div className="favorites-strip">
          <span>Saved:</span>
          <div className="favorite-tags">
            {favorites.map((favorite) => (
              <button
                type="button"
                key={favorite}
                className="favorite-tag"
                onClick={() => handleCopy(favorite)}
              >
                {favorite}
              </button>
            ))}
          </div>
        </div>
      )}

      {results.length > 0 && (
        <div className="results-grid" aria-live="polite">
          {results.map((name) => (
            <article
              key={name}
              className={`result-card ${copied === name ? "copied" : ""}`}
            >
              <div className="result-name">{name}</div>
              <div className="result-actions">
                <button type="button" className="action-button" onClick={() => handleCopy(name)}>
                  {copied === name ? "Copied" : "Copy"}
                </button>
                <button type="button" className="action-button secondary" onClick={() => handleShare(name)}>
                  Share
                </button>
                <button
                  type="button"
                  className="action-button secondary"
                  onClick={() => handleFavorite(name)}
                  aria-label={`Save ${name} to favorites`}
                >
                  {favorites.includes(name) ? "Saved" : "Save"}
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default UsernameGenerator;

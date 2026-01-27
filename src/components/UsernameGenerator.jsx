import { useState } from "react";
import "./UsernameGenerator.css";

const words = [
    "tech", "hub", "zone", "media", "studio", "brand", "labs", "world",
    "digital", "network", "space", "verse", "group", "team", "factory"
];

const adjectives = [
    "cool", "smart", "fast", "epic", "royal", "bold", "urban", "modern",
    "creative", "dynamic", "future", "prime", "elite"
];

const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

const UsernameGenerator = ({ type }) => {
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState([]);
    const [copied, setCopied] = useState(null); // 👈 track copied text

    const generate = () => {
        const unique = new Set();

        while (unique.size < 20) {
            let name = "";

            if (type === "instagram" || type === "gaming") {
                name = `${keyword || random(words)}${Math.floor(Math.random() * 1000)}`;
            }

            if (type === "youtube") {
                name = `${random(adjectives)} ${keyword || random(words)}`;
            }

            unique.add(name.toLowerCase());
        }

        setResults([...unique]);
        setCopied(null); // reset copied state
    };

    const copy = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(text);

        setTimeout(() => {
            setCopied(null);
        }, 1500);
    };

    return (
        <div className="gen-wrapper">
            <label>Keyword (optional)</label>

            <div className="gen-input-row">
                <input
                    placeholder="e.g. gaming, creative, tech"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value.toLowerCase())}
                />
                <button onClick={generate}>✨ Generate</button>
            </div>

            {results.length > 0 && (
                <div className="gen-results">
                    {results.map((name, i) => (
                        <div
                            key={i}
                            className={`gen-box-card ${copied === name ? "copied" : ""}`}
                        >
                            <div className="gen-box-text">{name}</div>

                            <button
                                className="gen-box-btn"
                                onClick={() => copy(name)}
                            >
                                {copied === name ? "Copied ✓" : "Copy"}
                            </button>
                        </div>
                    ))}
                </div>


            )}
        </div>
    );
};

export default UsernameGenerator;

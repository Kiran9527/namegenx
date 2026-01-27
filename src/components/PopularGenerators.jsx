import { useNavigate } from "react-router-dom";
import "./PopularGenerators.css";

const generators = [
  {
    icon: "📸",
    title: "Instagram Username Generator",
    desc: "Create unique and catchy Instagram usernames that stand out",
    route: "/instagram-username-generator",
  },
  {
    icon: "▶️",
    title: "YouTube Name Generator",
    desc: "Generate memorable channel names for your YouTube content",
    route: "/youtube-name-generator",
  },
  {
    icon: "🎮",
    title: "Gaming Username Generator",
    desc: "Get epic gaming usernames for all your favorite games",
    route: "/gaming-username-generator",
  },
];

const PopularGenerators = () => {
  const navigate = useNavigate();

  return (
    <section className="popular">
      <h2>Popular Generators</h2>

      <div className="popular-grid">
        {generators.map((item, index) => (
          <div className="popular-card" key={index}>
            <div className="popular-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>

            <button
              className="popular-btn"
              onClick={() => navigate(item.route)}
              aria-label={`Go to ${item.title}`}
            >
              Generate Now <span>→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularGenerators;

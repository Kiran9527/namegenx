import { useNavigate } from "react-router-dom";
import { getGeneratorById } from "../data/catalog";
import "./PopularGenerators.css";

const generators = [
  {
    id: "instagram",
    icon: "📸",
    desc: "Create unique and catchy Instagram usernames that stand out",
  },
  {
    id: "youtube",
    icon: "▶️",
    desc: "Generate memorable channel names for your YouTube content",
  },
  {
    id: "gaming",
    icon: "🎮",
    desc: "Get epic gaming usernames for all your favorite games",
  },
];

const PopularGenerators = () => {
  const navigate = useNavigate();

  return (
    <section className="popular">
      <h2>Popular Generators</h2>

      <div className="popular-grid">
        {generators.map((item) => {
          const generator = getGeneratorById(item.id);
          return (
            <div className="popular-card" key={item.id}>
              <div className="popular-icon">{item.icon}</div>
              <h3>{generator.title}</h3>
              <p>{item.desc}</p>

              <button
                className="popular-btn"
                onClick={() => navigate(generator.path)}
                aria-label={`Go to ${generator.title}`}
              >
                Generate Now <span>→</span>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PopularGenerators;

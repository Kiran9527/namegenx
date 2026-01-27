import "./Features.css";

const features = [
  {
    icon: "✨",
    title: "20 Unique Suggestions",
    text: "Get exactly 20 unique, creative suggestions with every generation",
  },
  {
    icon: "⚡",
    title: "Instant Generation",
    text: "Lightning-fast username generation powered by advanced algorithms",
  },
  {
    icon: "🛡️",
    title: "Multiple Categories",
    text: "Support for social media, gaming, and business name generation",
  },
  {
    icon: "📈",
    title: "Check Availability",
    text: "Quickly verify username availability on your target platform",
  },
];

const Features = () => {
  return (
    <section className="features">
      <h2>Why Choose Our Generator?</h2>

      <div className="features-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

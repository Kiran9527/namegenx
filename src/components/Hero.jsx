import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Username & Name
          <br />
          Generator
        </h1>

        <p>
          Create unique, memorable usernames for Instagram, YouTube, Gaming,
          and more. Get 20 instant suggestions with every search.
        </p>

        <div className="hero-buttons">
          <Link to="/instagram-username-generator">Get Started</Link>   
        </div>
      </div>
    </section>
  );
};

export default Hero;

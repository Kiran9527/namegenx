import "./Hero.css";

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
          <a href="/instagram-username-generator" className="btn-primary">Get Started</a>   
        </div>
      </div>
    </section>
  );
};

export default Hero;

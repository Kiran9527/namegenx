import "./CTA.css";
import { Link } from "react-router-dom";
import { getGeneratorById } from "../data/catalog";

const CTA = () => {
  const instagramPath = getGeneratorById("instagram").path;

  return (
    <section className="cta">
      <h2>Ready to Create Your Perfect Username?</h2>

      <p>
        Join thousands of users who have found their perfect username.
        Start generating now!
      </p>

      <Link
        to={instagramPath}
        className="cta-btn"
        aria-label="Start generating Instagram usernames"
      >
        Start Generating
      </Link>
    </section>
  );
};

export default CTA;

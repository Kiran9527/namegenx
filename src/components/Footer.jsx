import { Link } from "react-router-dom";
import { getCategoryByKey, getGeneratorById } from "../data/catalog";
import "./Footer.css";

const Footer = () => {
  const instagramPath = getGeneratorById("instagram").path;
  const youtubePath = getGeneratorById("youtube").path;
  const gamingPath = getGeneratorById("gaming").path;
  const usernamesPath = getCategoryByKey("usernames").path;
  const businessPath = getCategoryByKey("business").path;
  const fantasyPath = getCategoryByKey("fantasy").path;

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h3 className="footer-logo">NameGenX</h3>
          <p>
            Generate unique usernames and names for social media, gaming,
            business, fantasy, and personal branding.
          </p>
        </div>

        <div className="footer-col">
          <h4>Generators</h4>
          <ul>
            <li>
              <Link to="/all-generators">All Generators</Link>
            </li>
            <li>
              <Link to={instagramPath}>Instagram</Link>
            </li>
            <li>
              <Link to={youtubePath}>YouTube</Link>
            </li>
            <li>
              <Link to={gamingPath}>Gaming</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li>
              <Link to={usernamesPath}>Usernames</Link>
            </li>
            <li>
              <Link to={businessPath}>Business & Brand Names</Link>
            </li>
            <li>
              <Link to={fantasyPath}>Fantasy Names</Link>
            </li>
            <li>
              <Link to="/guides">Guides</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

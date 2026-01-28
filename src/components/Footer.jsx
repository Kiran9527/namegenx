import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Brand */}
        <div className="footer-col">
          <h3 className="footer-logo">NameGen</h3>
          <p>
            Generate unique usernames and names for all your social media
            and business needs.
          </p>
        </div>

        {/* Generators */}
        <div className="footer-col">
          <h4>Generators</h4>
          <ul>
            <li>
              <Link to="/instagram-username-generator">Instagram</Link>
            </li>
            <li>
              <Link to="/youtube-name-generator">YouTube</Link>
            </li>
            <li>
              <Link to="/gaming-username-generator">Gaming</Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
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

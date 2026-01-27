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
            <li><a href="/instagram-username-generator">Instagram</a></li>
            <li><a href="/youtube-name-generator">YouTube</a></li>
            <li><a href="/gaming-username-generator">Gaming</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

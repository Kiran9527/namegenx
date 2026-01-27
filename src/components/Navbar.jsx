import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar" aria-label="Main navigation">
        {/* LOGO / BRAND */}
        <div className="nav-left">
          <Link
            to="/"
            className="nav-brand"
            aria-label="NameGen Home - Username Generator"
          >
            
            <span className="nav-title">NameGenX</span>
          </Link>
        </div>

        {/* NAV LINKS */}
        <ul className="nav-right" role="menubar">
          <li role="none">
            <NavLink to="/" role="menuitem" className="nav-link">
              Home
            </NavLink>
          </li>

          <li role="none">
            <NavLink to="/instagram-username-generator" role="menuitem" className="nav-link">
              Instagram
            </NavLink>
          </li>

          <li role="none">
            <NavLink to="/youtube-name-generator" role="menuitem" className="nav-link">
              YouTube
            </NavLink>
          </li>

          <li role="none">
            <NavLink to="/gaming-username-generator" role="menuitem" className="nav-link">
              Gaming
            </NavLink>
          </li>

          <li role="none">
            <NavLink to="/about" role="menuitem" className="nav-link">
              About
            </NavLink>
          </li>

          <li role="none">
            <NavLink to="/contact" role="menuitem" className="nav-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

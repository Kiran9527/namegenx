import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getCategoryByKey } from "../data/catalog";
import "./Navbar.css";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const usernamesPath = getCategoryByKey("usernames").path;
  const businessPath = getCategoryByKey("business").path;
  const gamingPath = getCategoryByKey("gaming").path;

  const handleSubmit = (event) => {
    event.preventDefault();
    const stripped = query.trim();
    if (!stripped) {
      navigate("/all-generators");
      return;
    }
    navigate(`/search?q=${encodeURIComponent(stripped)}`);
  };

  return (
    <header>
      <nav className="navbar" aria-label="Main navigation">
        <div className="nav-left">
          <Link to="/" className="nav-brand" aria-label="NameGenX home">
            <span className="nav-title">NameGenX</span>
          </Link>
        </div>

        <ul className="nav-right" role="menubar">
          <li role="none">
            <NavLink to="/" role="menuitem" className="nav-link">
              Home
            </NavLink>
          </li>
          <li role="none">
            <NavLink to="/all-generators" role="menuitem" className="nav-link">
              All Generators
            </NavLink>
          </li>
          <li role="none">
            <NavLink to={usernamesPath} role="menuitem" className="nav-link">
              Usernames
            </NavLink>
          </li>
          <li role="none">
            <NavLink to={businessPath} role="menuitem" className="nav-link">
              Business
            </NavLink>
          </li>
          <li role="none">
            <NavLink to={gamingPath} role="menuitem" className="nav-link">
              Gaming
            </NavLink>
          </li>
          <li role="none">
            <NavLink to="/guides" role="menuitem" className="nav-link">
              Guides
            </NavLink>
          </li>
          <li role="none">
            <NavLink to="/about" role="menuitem" className="nav-link">
              About
            </NavLink>
          </li>
        </ul>

        <form className="nav-search" onSubmit={handleSubmit}>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search generators"
            aria-label="Search NameGenX generators"
          />
          <button type="submit">Search</button>
        </form>
      </nav>
    </header>
  );
};

export default Navbar;

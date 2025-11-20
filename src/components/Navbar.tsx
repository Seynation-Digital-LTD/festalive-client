import { useState } from "react";
import "../globals.css";
import "../navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar-section">
      <div className="navbar-brand">
        <h1>Festalive</h1>
        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
        </button>
      </div>
      
      <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
        <nav className="navbar">
          <ul>
            <li>Home</li>
            <li>Events</li>
            <li>Influencers</li>
          </ul>
        </nav>
        <div className="nav-auth-buttons">
          <NavLink to="/login">
            <h6>Login</h6>
          </NavLink>
          <NavLink to="/signup">
            <button>Get Started</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

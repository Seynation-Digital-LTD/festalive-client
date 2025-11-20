"use client";
import "../globals.css";
import "../navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar-section">
      <h1>Festalive</h1>
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
  );
};

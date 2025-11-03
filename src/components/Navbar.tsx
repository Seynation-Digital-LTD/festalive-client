"use client";
import "../globals.css";
import "../navbar.css";

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
        <h6>Login</h6>
        <button>Get Started</button>
      </div>
    </div>
  );
};

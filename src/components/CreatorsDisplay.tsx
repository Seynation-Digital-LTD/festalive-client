"use client";
import "../globals.css";
import "../home-display.css";
import { Link } from "react-router-dom";

export const CreatorsDisplayData = [
  {
    id: 1,
    name: "Seynation Digital",
    role: "Music Producer",
    profile: "../assets/profile.jpg",
    desc: "Creating beats that move the soul.",
  },
  {
    id: 2,
    name: "Tech Innovators",
    role: "Tech Community",
    profile: "../assets/profile.jpg",
    desc: "Connecting tech minds across the region.",
  },
  {
    id: 3,
    name: "Artistic Souls",
    role: "Visual Artists",
    profile: "../assets/profile.jpg",
    desc: "Expressing emotions through colors.",
  },
  {
    id: 4,
    name: "Influencer Hub",
    role: "Content Creators",
    profile: "../assets/profile.jpg",
    desc: "Sharing stories that matter.",
  },
];

export const CreatorsDisplay = () => {
  return (
    <section className="main-display-showcase">
      <h2 className="showcase-heading">Featured Creators</h2>
      <div className="showcase-grid">
        {CreatorsDisplayData.map((item) => (
          <div className="creator-card" key={item.id}>
            <div className="creator-img-wrapper">
              <img className="creator-img" src={item.profile} alt={item.name} />
            </div>
            <div className="creator-content">
              <h3>{item.name}</h3>
              <h5>{item.role}</h5>
              <p>{item.desc}</p>
              <Link to={`/creator/${item.id}`}>
                <button className="button-left">View Profile</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

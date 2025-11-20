import { useParams, Link } from "react-router-dom";
import { CreatorsDisplayData } from "../components/CreatorsDisplay";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import "../home-display.css";

export default function CreatorProfilePage() {
  const { id } = useParams();
  const creator = CreatorsDisplayData.find((c) => c.id === Number(id));

  if (!creator) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h2>Creator not found</h2>
        <Link to="/" className="button-left">Go Home</Link>
      </div>
    );
  }

  return (
    <section className="creator-profile-page">
      <Navbar />
      <div className="creator-hero">
        <div className="creator-hero-content">
          <div className="creator-profile-img-wrapper">
            <img src={creator.profile} alt={creator.name} />
          </div>
          <h1>{creator.name}</h1>
          <h4>{creator.role}</h4>
          <p>{creator.desc}</p>
          <div className="creator-stats">
            <div className="stat-item">
              <span>12</span>
              <label>Events</label>
            </div>
            <div className="stat-item">
              <span>1.5k</span>
              <label>Followers</label>
            </div>
            <div className="stat-item">
              <span>4.8</span>
              <label>Rating</label>
            </div>
          </div>
          <button className="button-left">Follow Creator</button>
        </div>
      </div>
      <div className="creator-events-section">
        <h3>Upcoming Events by {creator.name}</h3>
        <p>No upcoming events scheduled at the moment.</p>
      </div>
      <Footer />
    </section>
  );
}

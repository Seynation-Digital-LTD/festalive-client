"use client";
import { useState } from "react";
import "../globals.css";
import "../components/index.css";
import "../components/promote.css";
interface Campaign {
  id: number;
  name: string;
  budget: string;
  duration: string;
  channel: string;
}

export function PromoteDetails({ eventId }: { eventId: number }) {
  const [tab, setTab] = useState<"campaigns" | "analytics" | "assets">("campaigns");
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    budget: "",
    duration: "",
    channel: "Social Media",
  });

  const handleCreateCampaign = () => {
    if (!formData.name || !formData.budget || !formData.duration) return;
    const newCampaign: Campaign = {
      id: campaigns.length + 1,
      ...formData,
    };
    setCampaigns([...campaigns, newCampaign]);
    setShowForm(false);
    setFormData({ name: "", budget: "", duration: "", channel: "Social Media" });
  };

  return (
    <div className="promote-details">
      <div className="promote-tabs">
        <button className={tab === "campaigns" ? "active" : ""} onClick={() => setTab("campaigns")}>
          Campaigns
        </button>
        <button className={tab === "analytics" ? "active" : ""} onClick={() => setTab("analytics")}>
          Analytics
        </button>
        <button className={tab === "assets" ? "active" : ""} onClick={() => setTab("assets")}>
          Assets
        </button>
      </div>

      {/* === Campaigns Tab === */}
      {tab === "campaigns" && (
        <div className="campaigns-tab">
          <h3>Promotion Campaigns</h3>

          {campaigns.length === 0 ? (
            <p className="empty-campaigns">No campaigns yet. Start one below ⬇️</p>
          ) : (
            <ul className="campaign-list">
              {campaigns.map((c) => (
                <li key={c.id} className="campaign-item">
                  <strong>{c.name}</strong> — {c.channel} | {c.duration} | 💰 {c.budget}
                </li>
              ))}
            </ul>
          )}

          {showForm ? (
            <div className="campaign-form">
              <input
                type="text"
                placeholder="Campaign Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Budget (e.g. $200)"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              />
              <input
                type="text"
                placeholder="Duration (e.g. 2 weeks)"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              />
              <select
                value={formData.channel}
                onChange={(e) => setFormData({ ...formData, channel: e.target.value })}
              >
                <option>Social Media</option>
                <option>Email Campaign</option>
                <option>Featured on Festalive</option>
                <option>Discount Codes</option>
              </select>

              <div className="campaign-form-actions">
                <button onClick={handleCreateCampaign}>Save</button>
                <button onClick={() => setShowForm(false)}>Cancel</button>
              </div>
            </div>
          ) : (
            <button className="start-campaign-btn" onClick={() => setShowForm(true)}>
              + Start New Campaign
            </button>
          )}
        </div>
      )}

      {/* === Analytics Tab === */}
      {tab === "analytics" && (
        <div className="analytics-tab">
          <h3>Performance Overview</h3>
          <p>👀 Impressions: 12,430</p>
          <p>🔗 Clicks: 1,120</p>
          <p>🎟️ Conversions: 345 tickets</p>
          <p>📈 CTR: 9%</p>
        </div>
      )}

      {/* === Assets Tab === */}
      {tab === "assets" && (
        <div className="assets-tab">
          <h3>Marketing Materials</h3>
          <p>Download posters, flyers, and QR codes for your event.</p>
          {/* <button className="download-asset-btn">📄 Download Poster</button>
          <button className="download-asset-btn">🔗 Copy Event Link</button>
          <button className="download-asset-btn">📷 Download QR Code</button> */}

          <button className="download-asset-btn">Download Poster</button>
          <button className="download-asset-btn">Copy Event Link</button>
          <button className="download-asset-btn">Download QR Code</button>
        </div>
      )}
    </div>
  );
}

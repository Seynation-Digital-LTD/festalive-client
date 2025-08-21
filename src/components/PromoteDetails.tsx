"use client";
import { useState } from "react";
import "../globals.css";
import "../components/index.css";
import "../components/promote.css";

export function PromoteDetails({ eventId }: { eventId: number }) {
  const [tab, setTab] = useState<"campaigns" | "analytics" | "assets">(
    "campaigns"
  );

  return (
    <div className="promote-details">
      <div className="promote-tabs">
        <button
          className={tab === "campaigns" ? "active" : ""}
          onClick={() => setTab("campaigns")}
        >
          Campaigns
        </button>
        <button
          className={tab === "analytics" ? "active" : ""}
          onClick={() => setTab("analytics")}
        >
          Analytics
        </button>
        <button
          className={tab === "assets" ? "active" : ""}
          onClick={() => setTab("assets")}
        >
          Assets
        </button>
      </div>

      {tab === "campaigns" && (
        <div className="campaigns-tab">
          <h3>Promotion Options</h3>
          <ul>
            <li>📱 Boost on Social Media</li>
            <li>📧 Send Email Campaign</li>
            <li>⭐ Feature on Eventify</li>
            <li>🎟️ Create Discount Codes</li>
          </ul>
          <button className="start-campaign-btn">+ Start New Campaign</button>
        </div>
      )}

      {tab === "analytics" && (
        <div className="analytics-tab">
          <h3>Performance Overview</h3>
          <p>👀 Impressions: 12,430</p>
          <p>🔗 Clicks: 1,120</p>
          <p>🎟️ Conversions: 345 tickets</p>
          <p>📈 CTR: 9%</p>
        </div>
      )}

      {tab === "assets" && (
        <div className="assets-tab">
          <h3>Marketing Materials</h3>
          <p>Download posters, flyers, and QR codes for your event.</p>
          <button className="download-asset-btn">📄 Download Poster</button>
          <button className="download-asset-btn">🔗 Copy Event Link</button>
          <button className="download-asset-btn">📷 Download QR Code</button>
        </div>
      )}
    </div>
  );
}

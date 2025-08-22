"use client";
import { useState } from "react";
import { PromoteTable } from "../components/PromoteTable";
import { PromoteDetails } from "../components/PromoteDetails";
import "../globals.css";
import "../components/index.css";
import "../components/promote.css";

export default function Promote() {
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);

  return (
    <div className="promote-page">
      <div className="promote-layout">
        {/* Sidebar: Events & Campaigns */}
        <PromoteTable onSelectEvent={setSelectedEventId} />

        {/* Main Panel */}
        {selectedEventId ? (
          <PromoteDetails eventId={selectedEventId} />
        ) : (
          <div className="empty-promote">
            📢 Select an event to start promoting
          </div>
        )}
      </div>
    </div>
  );
}

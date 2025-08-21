"use client";
import "../components/promote.css";

interface EventPreview {
  id: number;
  name: string;
  date: string;
  ticketsSold: number;
}

const mockEvents: EventPreview[] = [
  { id: 1, name: "Summer Music Fest", date: "Sep 12", ticketsSold: 230 },
  { id: 2, name: "Tech Conference 2025", date: "Oct 5", ticketsSold: 120 },
  { id: 3, name: "Charity Gala Night", date: "Nov 20", ticketsSold: 85 },
];

export function PromoteTable({
  onSelectEvent,
}: {
  onSelectEvent: (id: number) => void;
}) {
  return (
    <div className="promote-table">
      <h3>My Events</h3>
      {mockEvents.map((event) => (
        <div
          key={event.id}
          className="promote-preview"
          onClick={() => onSelectEvent(event.id)}
        >
          <div className="promote-event-name">{event.name}</div>
          <div className="promote-event-date">{event.date}</div>
          <div className="promote-event-tickets">
            🎟️ {event.ticketsSold} sold
          </div>
        </div>
      ))}
    </div>
  );
}

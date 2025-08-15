"use client";
import React, { useState } from "react";
import "../globals.css";
import "../components/index.css";
import "../components/table.css";

interface EventsData {
  id: number;
  name: string; // Organizer / Host
  event: string; // Event Name
  ticketType: number;
  ticketsSold?: number;
  totalTickets?: number;
  location?: string;
  payment: number; // Revenue
  status: string; // PAID / UNPAID
  venue: string;
  date: string; // YYYY-MM-DD
  action?: string;
}

type EventsTableProps = {
  filters: {
    status: string;
    date: string; // single or range
    location: string;
    search: string;
  };
};

// Sample Events
const Events: EventsData[] = [
  {
    id: 1,
    name: "Apolinary Theonest",
    event: "Festival A",
    ticketType: 1,
    ticketsSold: 120,
    totalTickets: 150,
    location: "City life",
    payment: 3000,
    status: "PAID",
    venue: "Main Hall",
    date: "2025-08-20",
  },
  {
    id: 2,
    name: "Jane Doe",
    event: "Festival B",
    ticketType: 2,
    ticketsSold: 50,
    totalTickets: 100,
    location: "Beach Arena",
    payment: 1500,
    status: "UNPAID",
    venue: "Beach Stage",
    date: "2025-08-21",
  },
  {
    id: 3,
    name: "John Smith",
    event: "Music Night",
    ticketType: 3,
    ticketsSold: 200,
    totalTickets: 250,
    location: "City life",
    payment: 5000,
    status: "PAID",
    venue: "Open Ground",
    date: "2025-08-25",
  },
];

export const EventsTable = ({ filters }: EventsTableProps) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteEvent, setDeleteEvent] = useState<EventsData | null>(null);

  const [showEditModal, setShowEditModal] = useState(false);
  const [editEvent, setEditEvent] = useState<EventsData | null>(null);

  // ---- Filter Events ----
  const filteredEvents = Events.filter((event) => {
    const statusMatch = filters.status
      ? event.status.toLowerCase() === filters.status.toLowerCase()
      : true;

    const locationMatch = filters.location
      ? event.location?.toLowerCase().includes(filters.location.toLowerCase())
      : true;

    const searchMatch = filters.search
      ? event.event.toLowerCase().includes(filters.search.toLowerCase()) ||
        event.name.toLowerCase().includes(filters.search.toLowerCase())
      : true;

    // Date filter (single or range)
    let dateMatch = true;
    if (filters.date) {
      const rangeParts = filters.date.includes("to")
        ? filters.date.split("to").map((p) => p.trim())
        : [filters.date];
      const eventDate = new Date(event.date);

      if (rangeParts.length === 1) {
        const targetDate = new Date(rangeParts[0]);
        dateMatch = eventDate.toDateString() === targetDate.toDateString();
      } else if (rangeParts.length === 2) {
        const startDate = new Date(rangeParts[0]);
        const endDate = new Date(rangeParts[1]);
        dateMatch = eventDate >= startDate && eventDate <= endDate;
      }
    }

    return statusMatch && locationMatch && searchMatch && dateMatch;
  });

  // ---- Delete Handlers ----
  const handleDeleteClick = (event: EventsData) => {
    setDeleteEvent(event);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (deleteEvent) {
      console.log("Deleted event:", deleteEvent);
      // TODO: Implement actual deletion logic
      setShowDeleteModal(false);
      setDeleteEvent(null);
    }
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setDeleteEvent(null);
  };

  // ---- Edit Handlers ----
  const handleEditClick = (event: EventsData) => {
    setEditEvent(event);
    setShowEditModal(true);
  };

  const handleEditChange = (
    field: keyof EventsData,
    value: string | number
  ) => {
    if (editEvent) {
      setEditEvent({ ...editEvent, [field]: value });
    }
  };

  const saveEdit = () => {
    if (editEvent) {
      console.log("Saved event:", editEvent);
      // TODO: Implement actual save logic here
      setShowEditModal(false);
      setEditEvent(null);
    }
  };

  const cancelEdit = () => {
    setShowEditModal(false);
    setEditEvent(null);
  };

  return (
    <div className="events-table-wrapper">
      <h3>Events</h3>
      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Organizer</th>
              <th>Date</th>
              <th>Venue</th>
              <th>Status</th>
              <th>Tickets Sold</th>
              <th>Revenue</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEvents.length > 0 ? (
              filteredEvents.map((item) => (
                <tr key={item.id}>
                  <td>{item.event}</td>
                  <td>{item.name}</td>
                  <td>{item.date}</td>
                  <td>{item.venue}</td>
                  <td>{item.status}</td>
                  <td>
                    {item.ticketsSold ?? 0} / {item.totalTickets ?? "-"}
                  </td>
                  <td>Tzs. {item.payment}</td>

                  <td>
                    <button className="icon-btn edit-btn" title="Edit" onClick={() => handleEditClick(item)}>
                      {/* Pencil Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2L3 10.207V13h2.793L14 4.793 11.207 2zM12 3l1 1-1 1-1-1 1-1z" />
                      </svg>
                    </button>
                    <button className="icon-btn delete-btn" title="Delete" onClick={() => handleDeleteClick(item)}>
                      {/* Trash Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 5h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7H6v7a.5.5 0 0 1-1 0v-7z" />
                        <path
                          fillRule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1 0-2H5h6h2.5a1 1 0 0 1 1 1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118z"
                        />
                      </svg>
                    </button>
                  </td>
                  {/* <td>
                    <button
                      className="icon-btn edit-btn"
                      onClick={() => handleEditClick(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="icon-btn delete-btn"
                      onClick={() => handleDeleteClick(item)}
                    >
                      Delete
                    </button>
                  </td> */}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8}>No events found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* --- Delete Modal --- */}
      {showDeleteModal && deleteEvent && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h4>Delete Event</h4>
            <p>
              Are you sure you want to delete{" "}
              <strong>{deleteEvent.event}</strong>?
            </p>
            <div className="modal-actions">
              <button className="icon-btn confirm-btn" onClick={confirmDelete}>
                Yes, Delete
              </button>
              <button className="icon-btn cancel-btn" onClick={cancelDelete}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- Edit Modal --- */}
      {showEditModal && editEvent && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h4>Edit Event</h4>
            <div className="edit-form">
              <label>
                Event Name:
                <input
                  type="text"
                  value={editEvent.event}
                  onChange={(e) => handleEditChange("event", e.target.value)}
                />
              </label>
              <label>
                Organizer:
                <input
                  type="text"
                  value={editEvent.name}
                  onChange={(e) => handleEditChange("name", e.target.value)}
                />
              </label>
              <label>
                Date:
                <input
                  type="date"
                  value={editEvent.date}
                  onChange={(e) => handleEditChange("date", e.target.value)}
                />
              </label>
              <label>
                Venue:
                <input
                  type="text"
                  value={editEvent.venue}
                  onChange={(e) => handleEditChange("venue", e.target.value)}
                />
              </label>
              <label>
                Tickets Sold:
                <input
                  type="number"
                  value={editEvent.ticketsSold}
                  onChange={(e) =>
                    handleEditChange("ticketsSold", parseInt(e.target.value))
                  }
                />
              </label>
              <label>
                Total Tickets:
                <input
                  type="number"
                  value={editEvent.totalTickets}
                  onChange={(e) =>
                    handleEditChange("totalTickets", parseInt(e.target.value))
                  }
                />
              </label>
              <label>
                Revenue:
                <input
                  type="number"
                  value={editEvent.payment}
                  onChange={(e) =>
                    handleEditChange("payment", parseInt(e.target.value))
                  }
                />
              </label>
              <label>
                Status:
                <select
                  value={editEvent.status}
                  onChange={(e) => handleEditChange("status", e.target.value)}
                >
                  <option value="PAID">PAID</option>
                  <option value="UNPAID">UNPAID</option>
                </select>
              </label>
              <div className="modal-actions">
                <button className="icon-btn confirm-btn" onClick={saveEdit}>
                  Save
                </button>
                <button className="icon-btn cancel-btn" onClick={cancelEdit}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

"use client";
import { useState } from "react";
import "../globals.css";
import "../components/index.css";
import "../components/table.css";

interface BookingData {
  id: number;
  userName: string;
  event: string;
  bookingDate: string;
  tickets: number;
  amount: number;
  status: string; // e.g. CONFIRMED, PENDING, CANCELLED
  paymentMethod?: string;
}

type BookingsTableProps = {
  filters: {
    status: string;
    date: string;
    search: string;
  };
};

// --- Sample Bookings ---
const Bookings: BookingData[] = [
  {
    id: 1,
    userName: "Apolinary Theonest",
    event: "Festival A",
    bookingDate: "2025-08-15",
    tickets: 2,
    amount: 3000,
    status: "CONFIRMED",
    paymentMethod: "Card",
  },
  {
    id: 2,
    userName: "Jane Doe",
    event: "Festival B",
    bookingDate: "2025-08-16",
    tickets: 1,
    amount: 1500,
    status: "PENDING",
    paymentMethod: "M-Pesa",
  },
  {
    id: 3,
    userName: "John Smith",
    event: "Music Night",
    bookingDate: "2025-08-17",
    tickets: 3,
    amount: 3600,
    status: "CANCELLED",
    paymentMethod: "PayPal",
  },
];

export const BookingsPageTable = ({ filters }: BookingsTableProps) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteBooking, setDeleteBooking] = useState<BookingData | null>(null);

  const [showEditModal, setShowEditModal] = useState(false);
  const [editBooking, setEditBooking] = useState<BookingData | null>(null);

  // ---- Filter Bookings ----
  const filteredBookings = Bookings.filter((booking) => {
    const statusMatch = filters.status
      ? booking.status.toLowerCase() === filters.status.toLowerCase()
      : true;

    const searchMatch = filters.search
      ? booking.event.toLowerCase().includes(filters.search.toLowerCase()) ||
        booking.userName.toLowerCase().includes(filters.search.toLowerCase())
      : true;

    let dateMatch = true;
    if (filters.date) {
      const rangeParts = filters.date.includes("to")
        ? filters.date.split("to").map((p) => p.trim())
        : [filters.date];
      const bookingDate = new Date(booking.bookingDate);

      if (rangeParts.length === 1) {
        const targetDate = new Date(rangeParts[0]);
        dateMatch = bookingDate.toDateString() === targetDate.toDateString();
      } else if (rangeParts.length === 2) {
        const startDate = new Date(rangeParts[0]);
        const endDate = new Date(rangeParts[1]);
        dateMatch = bookingDate >= startDate && bookingDate <= endDate;
      }
    }

    return statusMatch && searchMatch && dateMatch;
  });

  // ---- Delete Handlers ----
  const handleDeleteClick = (booking: BookingData) => {
    setDeleteBooking(booking);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (deleteBooking) {
      console.log("Deleted booking:", deleteBooking);
      // TODO: API call for deletion
      setShowDeleteModal(false);
      setDeleteBooking(null);
    }
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setDeleteBooking(null);
  };

  // ---- Edit Handlers ----
  const handleEditClick = (booking: BookingData) => {
    setEditBooking(booking);
    setShowEditModal(true);
  };

  const handleEditChange = (
    field: keyof BookingData,
    value: string | number
  ) => {
    if (editBooking) {
      setEditBooking({ ...editBooking, [field]: value });
    }
  };

  const saveEdit = () => {
    if (editBooking) {
      console.log("Saved booking:", editBooking);
      // TODO: API call for save
      setShowEditModal(false);
      setEditBooking(null);
    }
  };

  const cancelEdit = () => {
    setShowEditModal(false);
    setEditBooking(null);
  };

  return (
    <div className="events-table-wrapper">
      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Event</th>
              <th>Booking Date</th>
              <th>Tickets</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Payment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.length > 0 ? (
              filteredBookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.userName}</td>
                  <td>{booking.event}</td>
                  <td>{booking.bookingDate}</td>
                  <td>{booking.tickets}</td>
                  <td>Tzs. {booking.amount}</td>
                  <td>{booking.status}</td>
                  <td>{booking.paymentMethod || "-"}</td>
                     <td>
                    <button
                      className="icon-btn edit-btn"
                      title="Edit"
                      onClick={() => handleEditClick(booking)}
                    >
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
                    <button
                      className="icon-btn delete-btn"
                      title="Delete"
                      onClick={() => handleDeleteClick(booking)}
                    >
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
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8}>No bookings found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* --- Delete Modal --- */}
      {showDeleteModal && deleteBooking && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h4>Delete Booking</h4>
            <p>
              Are you sure you want to delete booking for{" "}
              <strong>{deleteBooking.event}</strong> by{" "}
              <strong>{deleteBooking.userName}</strong>?
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
      {showEditModal && editBooking && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h4>Edit Booking</h4>
            <div className="edit-form">
              <label>
                User:
                <input
                  type="text"
                  value={editBooking.userName}
                  onChange={(e) =>
                    handleEditChange("userName", e.target.value)
                  }
                />
              </label>
              <label>
                Event:
                <input
                  type="text"
                  value={editBooking.event}
                  onChange={(e) => handleEditChange("event", e.target.value)}
                />
              </label>
              <label>
                Tickets:
                <input
                  type="number"
                  value={editBooking.tickets}
                  onChange={(e) =>
                    handleEditChange("tickets", parseInt(e.target.value))
                  }
                />
              </label>
              <label>
                Amount:
                <input
                  type="number"
                  value={editBooking.amount}
                  onChange={(e) =>
                    handleEditChange("amount", parseInt(e.target.value))
                  }
                />
              </label>
              <label>
                Status:
                <select
                  value={editBooking.status}
                  onChange={(e) =>
                    handleEditChange("status", e.target.value)
                  }
                >
                  <option value="CONFIRMED">CONFIRMED</option>
                  <option value="PENDING">PENDING</option>
                  <option value="CANCELLED">CANCELLED</option>
                </select>
              </label>
              <label>
                Payment Method:
                <input
                  type="text"
                  value={editBooking.paymentMethod || ""}
                  onChange={(e) =>
                    handleEditChange("paymentMethod", e.target.value)
                  }
                />
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

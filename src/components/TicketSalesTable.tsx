"use client";
import { useState } from "react";
import "../globals.css";
import "../components/index.css";
import "../components/table.css";

interface TicketSalesData {
  id: number;
  buyerName: string;
  event: string;
  ticketType: string;
  quantity: number;
  price: number;
  totalPaid: number;
  date: string;
  paymentStatus: string;
  paymentMethod?: string;
}

type TicketSalesTableProps = {
  filters: {
    status: string;
    date: string;
    search: string;
  };
};

// Sample Ticket Sales
const TicketSales: TicketSalesData[] = [
  {
    id: 1,
    buyerName: "Apolinary Theonest",
    event: "Festival A",
    ticketType: "VIP",
    quantity: 2,
    price: 1500,
    totalPaid: 3000,
    date: "2025-08-15",
    paymentStatus: "PAID",
    paymentMethod: "Card",
  },
  {
    id: 2,
    buyerName: "Jane Doe",
    event: "Festival B",
    ticketType: "Regular",
    quantity: 1,
    price: 1500,
    totalPaid: 1500,
    date: "2025-08-16",
    paymentStatus: "REFUNDED",
    paymentMethod: "M-Pesa",
  },
  {
    id: 3,
    buyerName: "John Smith",
    event: "Music Night",
    ticketType: "Early Bird",
    quantity: 3,
    price: 1200,
    totalPaid: 3600,
    date: "2025-08-17",
    paymentStatus: "PAID",
    paymentMethod: "PayPal",
  },
];

export const TicketSalesTable = ({ filters }: TicketSalesTableProps) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteSale, setDeleteSale] = useState<TicketSalesData | null>(null);

  const [showEditModal, setShowEditModal] = useState(false);
  const [editSale, setEditSale] = useState<TicketSalesData | null>(null);

  // ---- Filter Ticket Sales ----
  const filteredSales = TicketSales.filter((sale) => {
    const statusMatch = filters.status
      ? sale.paymentStatus.toLowerCase() === filters.status.toLowerCase()
      : true;

    const searchMatch = filters.search
      ? sale.event.toLowerCase().includes(filters.search.toLowerCase()) ||
        sale.buyerName.toLowerCase().includes(filters.search.toLowerCase())
      : true;

    // Date filter (single or range)
    let dateMatch = true;
    if (filters.date) {
      const rangeParts = filters.date.includes("to")
        ? filters.date.split("to").map((p) => p.trim())
        : [filters.date];
      const saleDate = new Date(sale.date);

      if (rangeParts.length === 1) {
        const targetDate = new Date(rangeParts[0]);
        dateMatch = saleDate.toDateString() === targetDate.toDateString();
      } else if (rangeParts.length === 2) {
        const startDate = new Date(rangeParts[0]);
        const endDate = new Date(rangeParts[1]);
        dateMatch = saleDate >= startDate && saleDate <= endDate;
      }
    }

    return statusMatch && searchMatch && dateMatch;
  });

  // ---- Delete Handlers ----
  const handleDeleteClick = (sale: TicketSalesData) => {
    setDeleteSale(sale);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (deleteSale) {
      console.log("Deleted sale:", deleteSale);
      // TODO: Implement actual deletion logic
      setShowDeleteModal(false);
      setDeleteSale(null);
    }
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setDeleteSale(null);
  };

  // ---- Edit Handlers ----
  const handleEditClick = (sale: TicketSalesData) => {
    setEditSale(sale);
    setShowEditModal(true);
  };

  const handleEditChange = (
    field: keyof TicketSalesData,
    value: string | number
  ) => {
    if (editSale) {
      setEditSale({ ...editSale, [field]: value });
    }
  };

  const saveEdit = () => {
    if (editSale) {
      console.log("Saved sale:", editSale);
      // TODO: Implement actual save logic here
      setShowEditModal(false);
      setEditSale(null);
    }
  };

  const cancelEdit = () => {
    setShowEditModal(false);
    setEditSale(null);
  };

  return (
    <div className="events-table-wrapper">
      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Buyer</th>
              <th>Event</th>
              <th>Ticket Type</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total Paid</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredSales.length > 0 ? (
              filteredSales.map((sale) => (
                <tr key={sale.id}>
                  <td>{sale.buyerName}</td>
                  <td>{sale.event}</td>
                  <td>{sale.ticketType}</td>
                  <td>{sale.quantity}</td>
                  <td>Tzs. {sale.price}</td>
                  <td>Tzs. {sale.totalPaid}</td>
                  <td>{sale.date}</td>
                  <td>{sale.paymentStatus}</td>
                  <td>
                    <button
                      className="icon-btn edit-btn"
                      title="Edit"
                      onClick={() => handleEditClick(sale)}
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
                      onClick={() => handleDeleteClick(sale)}
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
                <td colSpan={9}>No sales found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* --- Delete Modal --- */}
      {showDeleteModal && deleteSale && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h4>Delete Sale</h4>
            <p>
              Are you sure you want to delete sale for{" "}
              <strong>{deleteSale.event}</strong> by{" "}
              <strong>{deleteSale.buyerName}</strong>?
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
      {showEditModal && editSale && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h4>Edit Ticket Sale</h4>
            <div className="edit-form">
              <label>
                Buyer:
                <input
                  type="text"
                  value={editSale.buyerName}
                  onChange={(e) =>
                    handleEditChange("buyerName", e.target.value)
                  }
                />
              </label>
              <label>
                Event:
                <input
                  type="text"
                  value={editSale.event}
                  onChange={(e) => handleEditChange("event", e.target.value)}
                />
              </label>
              <label>
                Ticket Type:
                <input
                  type="text"
                  value={editSale.ticketType}
                  onChange={(e) =>
                    handleEditChange("ticketType", e.target.value)
                  }
                />
              </label>
              <label>
                Quantity:
                <input
                  type="number"
                  value={editSale.quantity}
                  onChange={(e) =>
                    handleEditChange("quantity", parseInt(e.target.value))
                  }
                />
              </label>
              <label>
                Price:
                <input
                  type="number"
                  value={editSale.price}
                  onChange={(e) =>
                    handleEditChange("price", parseInt(e.target.value))
                  }
                />
              </label>
              <label>
                Total Paid:
                <input
                  type="number"
                  value={editSale.totalPaid}
                  onChange={(e) =>
                    handleEditChange("totalPaid", parseInt(e.target.value))
                  }
                />
              </label>
              <label>
                Status:
                <select
                  value={editSale.paymentStatus}
                  onChange={(e) =>
                    handleEditChange("paymentStatus", e.target.value)
                  }
                >
                  <option value="PAID">PAID</option>
                  <option value="UNPAID">UNPAID</option>
                  <option value="REFUNDED">REFUNDED</option>
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

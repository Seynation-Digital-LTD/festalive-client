"use client";
import { useState } from "react";
import "../globals.css";
import "../components/index.css";
import { TicketSalesTable } from "../components/TicketSalesTable";

const filters = [
  {
    id: "status",
    title: "Status",
    type: "select",
    options: ["Paid", "Pending", "Refunded", "Cancelled"],
  },
//   {
//     id: "event",
//     title: "Event",
//     type: "select",
//     options: ["Concert A", "Comedy Night", "Festival X"], 
//   },
  {
    id: "date",
    title: "Date",
    type: "date",
  },
  {
    id: "payment",
    title: "Payment",
    type: "select",
    options: ["M-Pesa", "Airtel Money", "Mixx by Yas", "Halopesa", "T-Pesa" ],
  },
  {
    id: "search",
    title: "Search",
    type: "search",
    placeholder: "Search by buyer name or email...",
  },
  {
    id: "export",
    title: "Export",
    type: "button",
  },
];

export default function TicketSales() {
  const [selectedFilters, setSelectedFilters] = useState({
    status: "",
    event: "",
    date: "",
    payment: "",
    search: "",
  });

  const handleChange = (id: string, value: string) => {
    setSelectedFilters((prev) => ({ ...prev, [id]: value }));
  };

  const handleExport = () => {
    console.log("Exporting ticket sales with filters:", selectedFilters);
    // TODO: Hook into backend export (CSV/Excel/PDF)
  };

  return (
    <div className="inner-components">
      <div className="other-card-events">
        <h4>Ticket Sales</h4>

        {/* Filters */}
        <div className="btn-section">
          {filters.map((filter) => (
            <div key={filter.id} className="left-btns-wrapper">
              {filter.type === "select" && (
                <>
                  <span>{filter.title}</span>
                  <select
                    onChange={(e) => handleChange(filter.id, e.target.value)}
                    value={selectedFilters[filter.id as keyof typeof selectedFilters] || ""}
                  >
                    <option value="">All</option>
                    {filter.options?.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </>
              )}

              {filter.type === "date" && (
                <>
                  <span>{filter.title}</span>
                  <input
                    type="date"
                    onChange={(e) => handleChange(filter.id, e.target.value)}
                    value={selectedFilters.date}
                  />
                </>
              )}

              {filter.type === "search" && (
                <input
                  type="text"
                  placeholder={filter.placeholder}
                  onChange={(e) => handleChange(filter.id, e.target.value)}
                  value={selectedFilters.search}
                />
              )}

              {filter.type === "button" && (
                <button onClick={handleExport}>{filter.title}</button>
              )}
            </div>
          ))}
        </div>

        {/* Ticket Sales Table */}
        <TicketSalesTable filters={selectedFilters} />
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import "../globals.css";
import "../components/index.css";
import { BookingsPageTable } from "../components/BookingPageTable.tsx";

// Filters for Bookings
const filters = [
  {
    id: "status",
    title: "Status",
    type: "select",
    options: ["Confirmed", "Pending", "Cancelled"],
  },
  // {
  //   id: "event",
  //   title: "Event",
  //   type: "select",
  //   options: ["Concert A", "Comedy Night", "Festival X"], 
  // },
  {
    id: "date",
    title: "Booking Date",
    type: "date",
  },
  {
    id: "search",
    title: "Search",
    type: "search",
    placeholder: "Search by user name or email...",
  },
  {
    id: "export",
    title: "Export",
    type: "button",
  },
];

export default function Bookings() {
  const [selectedFilters, setSelectedFilters] = useState({
    status: "",
    event: "",
    date: "",
    search: "",
  });

  const handleChange = (id: string, value: string) => {
    setSelectedFilters((prev) => ({ ...prev, [id]: value }));
  };

  const handleExport = () => {
    console.log("Exporting bookings with filters:", selectedFilters);
    // TODO: Hook backend export (CSV/Excel/PDF)
  };

  return (
    <div className="inner-components">
      <div className="other-card-events">
        <h4>Bookings</h4>

        {/* Filters */}
        <div className="btn-section">
          {filters.map((filter) => (
            <div key={filter.id} className="left-btns-wrapper">
              {/* Select dropdowns */}
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

              {/* Date picker */}
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

              {/* Search */}
              {filter.type === "search" && (
                <input
                  type="text"
                  placeholder={filter.placeholder}
                  onChange={(e) => handleChange(filter.id, e.target.value)}
                  value={selectedFilters.search}
                />
              )}

              {/* Export button */}
              {filter.type === "button" && (
                <button onClick={handleExport}>{filter.title}</button>
              )}
            </div>
          ))}
        </div>

        {/* Bookings table */}
        <BookingsPageTable filters={selectedFilters} />
      </div>
    </div>
  );
}

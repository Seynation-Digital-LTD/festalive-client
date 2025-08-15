"use client";
import { useState } from "react";
import "../globals.css";
import "../components/index.css";
import { EventsTable } from "../components/EventsTable";

const filters = [
  {
    id: "status",
    title: "Status",
    type: "select",
    options: ["Live", "Ended", "Upcoming"],
  },
  {
    id: "date",
    title: "Date",
    type: "date",
  },
  {
    id: "location",
    title: "Location",
    type: "select",
    options: ["Dar es Salaam", "Arusha", "Mwanza"],
  },
  {
    id: "search",
    title: "Search",
    type: "search",
    placeholder: "Search events...",
  },
  {
    id: "export",
    title: "Export",
    type: "button",
  },
];

export default function Events() {
  const [selectedFilters, setSelectedFilters] = useState({
    status: "",
    date: "",
    location: "",
    search: "",
  });

  // Handle change for filters
  const handleChange = (id: string, value: string) => {
    setSelectedFilters((prev) => ({ ...prev, [id]: value }));
  };

  // Example export function
  const handleExport = () => {
    console.log("Exporting events with filters:", selectedFilters);
    // TODO: Implement CSV/Excel export here
  };

  return (
    <div className="inner-components">
      <div className="other-card-events">
        <h4>Events</h4>

        {/* Filter Buttons/Inputs */}
        <div className="btn-section">
          {filters.map((filter) => (
            <div key={filter.id} className="left-btns-wrapper">
              {/* Dropdown filter */}
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

              {/* Search input */}
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

        {/* Events table with filters */}
        <EventsTable filters={selectedFilters} />
      </div>
    </div>
  );
}

"use client";
import "../../src/components/index.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ProfileCard } from "./ProfileCard";

// Assuming ProfileCard is in the same file or imported. 
// Wait, ProfileCard is imported. I need to check if ProfileCard accepts props.
// I'll assume I need to update ProfileCard.tsx as well.
// For now, let's just pass the prop in Sidebar.tsx and I'll update ProfileCard.tsx in the next step.


export const SidebarData = [
  {
    id: 1,
    icon: "../assets/layout-dashboard-black.svg",
    iconactive: "../assets/layout-dashboard.svg",
    title: "Dashboard",
    link: "/dashboard",
  },
  {
    id: 2,
    icon: "../assets/book-check-black.svg",
    iconactive: "../assets/book-check.svg",
    title: "My Events",
    link: "/dashboard/events",
  },
  {
    id: 3,
    icon: "../assets/ticket-black.svg",
    iconactive: "../assets/ticket.svg",
    title: "Ticket Sales",
    link: "/dashboard/tickets",
  },
  {
    id: 4,
    icon: "../assets/layout-dashboard-black.svg",
    iconactive: "../assets/layout-dashboard.svg",
    title: "Bookings",
    link: "/dashboard/bookings",
  },
  {
    id: 5,
    icon: "../assets/message-square-text-black.svg",
    iconactive: "../assets/message-square-text.svg",
    title: "Messages",
    link: "/dashboard/messages",
  },
  {
    id: 6,
    icon: "../assets/credit-card-black.svg",
    iconactive: "../assets/credit-card.svg",
    title: "Payouts",
    link: "/dashboard/payouts",
  },
  {
    id: 7,
    icon: "../assets/megaphone-black.svg",
    iconactive: "../assets/megaphone.svg",
    title: "Promote",
    link: "/dashboard/promote",
  },
  {
    id: 8,
    icon: "../assets/users-round-black.svg",
    iconactive: "../assets/users-round.svg",
    title: "Team",
    link: "/dashboard/team",
  },
  {
    id: 9,
    icon: "../assets/settings-black.svg",
    iconactive: "../assets/settings.svg",
    title: "Settings",
    link: "/dashboard/settings",
  },
];

export const Sidebar = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <button 
        className="sidebar-toggle-mobile" 
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        ☰
      </button>
      <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
        <div className="sidebar-header">
          <NavLink to="/" className="sidebar-brand" style={{ textDecoration: 'none', color: 'inherit' }}>
             {collapsed ? <h2 style={{ margin: 0, color: 'var(--orangeThree)' }}>F</h2> : <h2 style={{ margin: 0, color: 'var(--orangeThree)' }}>Festalive</h2>}
          </NavLink>
           <button className="sidebar-toggle-desktop" onClick={toggleSidebar}>
            {collapsed ? "»" : "«"}
          </button>
        </div>
        <div className="sidebar-content">
          <ProfileCard collapsed={collapsed} />
          <div className="sidebar-content-container">
            <ul>
              {SidebarData.map((item) => (
                <li
                  key={item.id}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      isActive ? "sidebar-items activeItem" : "sidebar-items"
                    }
                  >
                    <div className="sidebar-item" title={collapsed ? item.title : ""}>
                      <img
                        src={
                          hoveredId === item.id || window.location.pathname === item.link
                            ? item.iconactive
                            : item.icon
                        }
                        alt={item.title}
                        width={20}
                        height={20}
                      />
                      {!collapsed && <span style={{ marginLeft: "10px" }}>{item.title}</span>}
                    </div>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

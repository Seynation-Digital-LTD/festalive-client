import "../globals.css";
import "../components/index.css";
import { NavLink } from "react-router-dom";
import { EventsTable } from "../components/EventsTable";

export const Buttondata = [
  {
    id: 1,
    icon: "../assets/layout-dashboard-black.svg",
    iconactive: "",
    title: "Status",
    link: "/",
  },
  {
    id: 2,
    icon: "",
    iconactive: "",
    title: "Date",
    link: "/",
  },
  {
    id: 3,
    icon: "",
    iconactive: "",
    title: "Location",
    link: "/",
  },
  {
    id: 1,
    icon: "",
    iconactive: "",
    title: "Search",
    link: "/",
  },
  {
    id: 1,
    icon: "",
    iconactive: "",
    title: "Export",
    link: "/",
  },
];

export default function Events() {
  return (
    <div className="inner-components">
      <div className="other-card-events">
        <h4>Events</h4>
        <div className="btn-section">
          {Buttondata.map((item) => (
            <>
              <div className="left-btns-wrapper">
                <div key={item.id} className="left-btns">
                  <span>{item.title}</span>
                  <img
                    style={{ color: "red"}}
                    src={item.icon}
                    alt="{item.title}"
                    width={20}
                    height={20}
                  />
                </div>
              </div>

              <div className="right-btns-wrapper"></div>
            </>
          ))}
        </div>

        <EventsTable />
      </div>
    </div>
  );
}

"use client";
import "../globals.css";
import "../home-display.css";
import { useState } from "react";

export const EventsDisplayData = [
  {
    id: 1,
    startingprice:'10,000',
    endingprice:'50,000',
    date:'2/3/2026',
    time:'10 AM',
    venue:"Mlimani City",
    title: "Afro Music Fest",
    profile: "../assets/profile.jpg",
    desc: "A celebration of African music and culture.",
    alt: "Afro Fest",
    img: "../assets/event1.jpg",
    organizer: "Seynation Events",
    ageRestriction: "18+",
    capacity: 5000,
    ticketTypes: [
      { name: "Regular", price: "10,000" },
      { name: "VIP", price: "30,000" },
      { name: "VVIP", price: "50,000" }
    ]
  },
  {
    id: 2,
    startingprice:'10,000',
    endingprice:'50,000',
    date:'2/3/2026',
    time:'10 AM',
    profile: "../assets/profile.jpg",
    venue:"Mlimani City",
    title: "Tech Innovators Meetup",
    desc: "Networking event for tech founders and developers.",
    alt: "Tech Event",
    img: "../assets/event2.jpg",
    organizer: "Tech Hub TZ",
    ageRestriction: "All Ages",
    capacity: 200,
    ticketTypes: [
      { name: "Early Bird", price: "10,000" },
      { name: "Standard", price: "20,000" },
      { name: "Late Owl", price: "30,000" }
    ]
  },
  {
    id: 3,
    startingprice:'10,000',
    endingprice:'50,000',
    date:'2/3/2026',
    time:'10 AM',
    venue:"Mlimani City",
    profile: "../assets/profile.jpg",
    title: "Street Art Expo",
    desc: "Experience raw creativity from emerging artists.",
    alt: "Art Expo",
    img: "../assets/event3.jpg",
    organizer: "Artistic Souls",
    ageRestriction: "All Ages",
    capacity: 1000,
    ticketTypes: [
      { name: "Entry", price: "10,000" },
      { name: "Workshop Access", price: "25,000" }
    ]
  },
  {
    id: 4,
    startingprice:'10,000',
    endingprice:'50,000',
    date:'2/3/2026',
    time:'10 AM',
    venue:"Mlimani City",
    profile: "../assets/profile.jpg",
    title: "Influencer Brunch",
    desc: "Connect with content creators and brand storytellers.",
    alt: "Creator Brunch",
    img: "../assets/event1.jpg",
    organizer: "Influencer Hub",
    ageRestriction: "21+",
    capacity: 100,
    ticketTypes: [
      { name: "Standard", price: "30,000" },
      { name: "VIP", price: "50,000" }
    ]
  },
  {
    id: 5,
    startingprice:'10,000',
    endingprice:'50,000',
    date:'2/3/2026',
    time:'10 AM',
    venue:"Mlimani City",
    title: "Afro Music Fest",
    profile: "../assets/profile.jpg",
    desc: "A celebration of African music and culture.",
    alt: "Afro Fest",
    img: "../assets/event1.jpg",
    organizer: "Seynation Events",
    ageRestriction: "18+",
    capacity: 5000,
    ticketTypes: [
      { name: "Regular", price: "10,000" },
      { name: "VIP", price: "30,000" },
      { name: "VVIP", price: "50,000" }
    ]
  },
  {
    id: 6,
    startingprice:'10,000',
    endingprice:'50,000',
    date:'2/3/2026',
    time:'10 AM',
    profile: "../assets/profile.jpg",
    venue:"Mlimani City",
    title: "Tech Innovators Meetup",
    desc: "Networking event for tech founders and developers.",
    alt: "Tech Event",
    img: "../assets/event2.jpg",
    organizer: "Tech Hub TZ",
    ageRestriction: "All Ages",
    capacity: 200,
    ticketTypes: [
      { name: "Early Bird", price: "10,000" },
      { name: "Standard", price: "20,000" }
    ]
  },
  {
    id: 7,
    startingprice:'10,000',
    endingprice:'50,000',
    date:'2/3/2026',
    time:'10 AM',
    venue:"Mlimani City",
    profile: "../assets/profile.jpg",
    title: "Street Art Expo",
    desc: "Experience raw creativity from emerging artists.",
    alt: "Art Expo",
    img: "../assets/event3.jpg",
    organizer: "Artistic Souls",
    ageRestriction: "All Ages",
    capacity: 1000,
    ticketTypes: [
      { name: "Entry", price: "10,000" }
    ]
  },
  {
    id: 8,
    startingprice:'10,000',
    endingprice:'50,000',
    date:'2/3/2026',
    time:'10 AM',
    venue:"Mlimani City",
    profile: "../assets/profile.jpg",
    title: "Influencer Brunch",
    desc: "Connect with content creators and brand storytellers.",
    alt: "Creator Brunch",
    img: "../assets/event1.jpg",
    organizer: "Influencer Hub",
    ageRestriction: "21+",
    capacity: 100,
    ticketTypes: [
      { name: "Standard", price: "30,000" },
      { name: "VIP", price: "50,000" }
    ]
  },
];

export const EventsDisplay = () => {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  return (
    <section className="main-display-showcase">
      <h2 className="showcase-heading">Featured Events</h2>
      <div className="showcase-grid">
        {EventsDisplayData.map((item) => (
          <div className="event-card" key={item.id}>
            <div className="event-img-wrapper">
              <img className="event-img" src={item.img} alt={item.alt} />
              <div className="event-overlay">
                <button className="button-left" onClick={() => setSelectedEvent(item)}>Buy Tickets</button>
              </div>
            </div>
            <div className="event-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="event-details">
                 <span>📅 {item.date}</span>
                 <span>📍 {item.venue}</span>
                 <span>💰 {item.startingprice} - {item.endingprice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <div className="event-modal-overlay" onClick={() => setSelectedEvent(null)}>
          <div className="event-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="event-modal-close-btn" onClick={() => setSelectedEvent(null)}>×</button>
            <div className="event-modal-header">
              <img className="event-modal-img" src={selectedEvent.img} alt={selectedEvent.alt} />
            </div>
            <div className="event-modal-body">
              <h2>{selectedEvent.title}</h2>
              
              <div className="event-modal-info-grid">
                <div className="event-modal-info-item">
                  <h6>Date & Time</h6>
                  <p>{selectedEvent.date} at {selectedEvent.time}</p>
                </div>
                <div className="event-modal-info-item">
                  <h6>Venue</h6>
                  <p>{selectedEvent.venue}</p>
                </div>
                <div className="event-modal-info-item">
                  <h6>Organizer</h6>
                  <p>{selectedEvent.organizer}</p>
                </div>
                <div className="event-modal-info-item">
                  <h6>Age Restriction</h6>
                  <p>{selectedEvent.ageRestriction}</p>
                </div>
              </div>

              <div className="event-modal-tickets">
                <h4>Ticket Packages</h4>
                <div className="ticket-types-list">
                  {selectedEvent.ticketTypes && selectedEvent.ticketTypes.map((ticket: any, index: number) => (
                    <div className="ticket-type-item" key={index}>
                      <span className="ticket-name">{ticket.name}</span>
                      <span className="ticket-price">Tzs. {ticket.price}</span>
                      <button className="ticket-select-btn">Select</button>
                    </div>
                  ))}
                </div>
              </div>

              <p className="event-modal-description">{selectedEvent.desc} Join us for an unforgettable experience! Secure your spot now.</p>
              <div className="event-modal-actions">
                <button className="button-left">Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

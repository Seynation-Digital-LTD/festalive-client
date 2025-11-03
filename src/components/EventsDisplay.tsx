"use client";
import "../globals.css";
import "../home-display.css";

export const EventsDisplayData = [
  {
    id: 1,
     startingprice:'10,000',
    endingprice:'50,000',
    date:'2/3/2026',
    time:'1O AM',
    venue:"Mlimani City",
    title: "Afro Music Fest",
    profile: "../assets/profile.jpg",
    desc: "A celebration of African music and culture.",
    alt: "Afro Fest",
    img: "../assets/event1.jpg",
  },
  {
    id: 2,
     startingprice:'10,000',
    endingprice:'50,000',
    date:'2/3/2026',
    time:'1O AM',
    profile: "../assets/profile.jpg",
    venue:"Mlimani City",
    title: "Tech Innovators Meetup",
    desc: "Networking event for tech founders and developers.",
    alt: "Tech Event",
    img: "../assets/event2.jpg",
  },
  {
    id: 3,
    startingprice:'10,000',
    endingprice:'50,000',
    date:'2/3/2026',
    time:'1O AM',
    venue:"Mlimani City",
    profile: "../assets/profile.jpg",
    title: "Street Art Expo",
    desc: "Experience raw creativity from emerging artists.",
    alt: "Art Expo",
    img: "../assets/event3.jpg",
  },
  {
    id: 4,
     startingprice:'10,000',
    endingprice:'50,000',
    date:'2/3/2026',
    time:'1O AM',
    venue:"Mlimani City",
    profile: "../assets/profile.jpg",
    title: "Influencer Brunch",
    desc: "Connect with content creators and brand storytellers.",
    alt: "Creator Brunch",
    img: "../assets/event1.jpg",
  },
  {
    id: 5,
     startingprice:'10,000',
    endingprice:'50,000',
    date:'2/3/2026',
    time:'1O AM',
    venue:"Mlimani City",
    title: "Afro Music Fest",
    profile: "../assets/profile.jpg",
    desc: "A celebration of African music and culture.",
    alt: "Afro Fest",
    img: "../assets/event1.jpg",
  },
  {
    id: 6,
     startingprice:'10,000',
    endingprice:'50,000',
    date:'2/3/2026',
    time:'1O AM',
    profile: "../assets/profile.jpg",
    venue:"Mlimani City",
    title: "Tech Innovators Meetup",
    desc: "Networking event for tech founders and developers.",
    alt: "Tech Event",
    img: "../assets/event2.jpg",
  },
  {
    id: 7,
    startingprice:'10,000',
    endingprice:'50,000',
    date:'2/3/2026',
    time:'1O AM',
    venue:"Mlimani City",
    profile: "../assets/profile.jpg",
    title: "Street Art Expo",
    desc: "Experience raw creativity from emerging artists.",
    alt: "Art Expo",
    img: "../assets/event3.jpg",
  },
  {
    id: 8,
     startingprice:'10,000',
    endingprice:'50,000',
    date:'2/3/2026',
    time:'1O AM',
    venue:"Mlimani City",
    profile: "../assets/profile.jpg",
    title: "Influencer Brunch",
    desc: "Connect with content creators and brand storytellers.",
    alt: "Creator Brunch",
    img: "../assets/event1.jpg",
  },
];

export const EventsDisplay = () => {
  return (
    <section className="main-display-showcase">
      <h2 className="showcase-heading">Featured Events</h2>
      <div className="showcase-grid">
        {EventsDisplayData.map((item) => (
          <div className="display-item" key={item.id}>
            <img className="display-img" src={item.img} alt={item.alt} />
            <div className="item-content">
            
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="price-date-venue">
                 <h6>Tzs. {item.startingprice} - {item.endingprice}</h6>
                 <h6>{item.venue}</h6>
                 <h6>{item.date}</h6>
                 <h6>{item.time}</h6>
              </div>
              {/* <h6>Tzs. {item.startingprice} - {item.endingprice}</h6> */}
              <button className="button-left">Buy Tickets</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

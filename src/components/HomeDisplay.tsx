"use client";
import "../globals.css";
import "../home-display.css";

export const HomeDisplayData = [
  {
    id: 1,
    img: "../assets/hello.jpg",
    alt: "Exciting Event Showcase",
  },
];

export const HomeDisplay = () => {
  return (
    <section className="display-main">
      <div className="left">
        <div className="left-contents">
          <h3>
            Easily Buy Event Tickets <br /> and Hire Creators.
          </h3>
          <p className="sub-text">
            Discover trending events and top creators all in one place.
          </p>
          <div className="left-content-buttons">
            <button className="button-left">Explore Events</button>
            <button className="button-right">Explore Creators</button>
          </div>
        </div>
      </div>

      {HomeDisplayData.map((item) => (
        <div className="right" key={item.id}>
          <img src={item.img} alt={item.alt} />
        </div>
      ))}
    </section>
  );
};

"use-client";
import "../globals.css";
import "../home-display.css";

export const HomeDiplay = () => {
  return (
    <>
      <div className="diplay-main">
        <div className="left">
          <div className="left-contents">
            <h3>Easily Buy Event Tickets <br></br> and Hire Creators.</h3>
            <div className="left-content-buttons">
              <button className="button-left">Get Started</button>
              <button>Get Started</button>
            </div>
          </div>
        </div>
        <div className="right">
            <image/>
        </div>
      </div>
    </>
  );
};

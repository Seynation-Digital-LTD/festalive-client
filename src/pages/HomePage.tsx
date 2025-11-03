import { Navbar } from "../components/Navbar";
import { HomeDisplay } from "../components/HomeDisplay";
import { EventsDisplay } from "../components/EventsDisplay";

export default function HomePage() {
  return (
    <section className="homepage-section">
      <Navbar />
      <HomeDisplay/>
      <EventsDisplay/>
    </section>
  );
}
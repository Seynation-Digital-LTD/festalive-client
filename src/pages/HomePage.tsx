import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { HomeDiplay } from "../components/HomeDisplay";

export default function HomePage() {
  return (
    <section className="homepage-section">
      <Navbar />
      <HomeDiplay/>
    </section>
  );
}

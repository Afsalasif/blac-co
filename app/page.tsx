import { div } from "framer-motion/client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Agents from "./components/Agents";
import Listings from "./components/Listings";
import Bgcomponent from "./components/Bgcomponent";
import Hero from "@/components/ui/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      {/* navbar */}
      <section id="navbar">
        <Navbar />
      </section>
      {/* landing */}
      <section id="#">
        {/* <Landing /> */}
        <Hero />
      </section>
      {/* about us */}
      <section id="aboutus">
        <AboutUs />
      </section>
      {/* services */}
      <section id="services">
        <Services />
      </section>
      {/* agents */}
      <section id="agents">
        <Agents />
      </section>
      {/* listing */}
      <section id="listing">
        {/* <Listings /> */}
      </section>
      {/* bgcomponent */}
      <section id="bgcomponent">
        <Bgcomponent />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

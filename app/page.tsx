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
import Visit from "./components/Visit";
import ReadMore from "./components/ReadMore";
import Visa from "./components/Visa";
import Benefits from "./components/Benefits";

export default function Home() {
  return (
    <div className="bg-black">
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
      
      {/* visa */}

      <section>
      <Visa />
      </section>
      <section>
      {/* <Visit /> */}
      <Benefits />
      </section>
      <section id="bgcomponent">
        <Bgcomponent />
      </section>
      {/* <section>
        <ReadMore />
      </section> */}
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

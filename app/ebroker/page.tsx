import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section className="relative h-[70vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('ebroker/hero.jpg')" }} // Replace with your image path
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-7xl uppercase font-raleway font-bold">
            e-broker
          </h1>
          <p className="mt-4 text-lg uppercase font-raleway">
            Discover e-broker, the ultimate real estate learning platform by
            Blac & Co
          </p>
        </div>

        {/* Pulsing Arrow */}
        {/* <div className="absolute bottom-10 flex flex-col items-center justify-center left-1/2 transform -translate-x-1/2">
      <p className="text-metallic-bronze  text-sm mt-2 text-center uppercase">Show More</p>
        <div className="animate-bounce">
          <svg
            className="w-10 h-10 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
       
      </div> */}
      </section>
      <section className="bg-black min-h-screen w-full">
        <div className="container  flex flex-col gap-y-6 mx-auto">
          <h1 className="text-5xl font-raleway font-extralight text-white hover:text-[#c08c5a] mb-10 uppercase   text-left">
            Blac & co Real Estate Membership program
          </h1>

          <p className="text-white ">
            Blac & Co Real Estate has launched an exclusive membership program
            designed to enable individuals around the globe to earn from Dubai's
            lucrative real estate market. With this unique opportunity, you can
            now engage in Dubai's real estate industry and start earning
            commissions, all from the comfort of your home country. Our
            membership program offers comprehensive training and support,
            allowing you to tap into the booming real estate market in Dubai,
            regardless of your location. Learn from the best in the business,
            and take advantage of a global opportunity in one of the most
            exciting real estate markets in the world.
          </p>
          <h1 className="text-5xl font-extralight font-raleway text-white hover:text-[#c08c5a] mb-10 mt-10 uppercase    text-left">
            About E-Broker
          </h1>

          <p className="text-white ">
            E Broker is an innovative real estate e-commerce platform that
            empowers individuals worldwide to sell Dubai real estate properties
            remotely and earn commissions. Unlike traditional listing portals, E
            Broker enables users to operate as independent real estate agents
            from anywhere in the world, handling transactions online while the
            company manages the on-ground logistics in Dubai. E Broker offers
            two main subscription types: a lifetime membership and monthly
            business portal subscriptions. Members gain access to both the
            E-Learning Real Estate University and the Business Portal, which
            provides qualified buyer and seller leads, communication tools, and
            comprehensive support for closing deals remotely.
          </p>
          <h1 className="text-5xl font-extralight font-raleway text-white hover:text-[#c08c5a] mb-10 mt-10 uppercase    text-left">
            key features of e-broker
          </h1>

          <p className="text-white ">
            Qualified buyer and seller leads are provided based on the agent's
            subscription level, along with integrated communication tools such
            as calls, WhatsApp, and email for seamless client engagement.
            On-site property viewings are arranged by E Broker agents in Dubai,
            while comprehensive sales support includes legal documentation and
            transaction management. E Broker is ideal for aspiring real estate
            agents, entrepreneurs, and professionals worldwide who want to
            leverage Dubai's thriving property market without being physically
            present. With the growing trend of remote work and Dubai's real
            estate market booming, E Broker presents a timely and lucrative
            opportunity for individuals seeking flexible work options. Join E
            Broker today and start building your real estate career remotely
            with full support and training.
          </p>
          <a
            href="https://www.e-broker.world"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent hover:scale-105 w-[140px] text-center font-raleway text-metallic-bronze transition-all border-[#b08d57] hover:border-[#8a6e40] border px-4 py-2 rounded mt-8 uppercase"
          >
            Sign up
          </a>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default page;

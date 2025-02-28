'use client'
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import dynamic from "next/dynamic";
import ContactForm from "../components/ContactForm";

const ContactUs = () => {
  const CustomMap = dynamic(() => import("../components/CustomMap"), { ssr: false });
  const [showPhone, setShowPhone] = useState(false);

  return (
    <main className="bg-black text-white min-h-screen flex flex-col justify-between">
      <section className="mb-10">
        <Navbar />
      </section>

      <section className="flex flex-col mt-10 items-center container mx-auto justify-center text-center py-20">
        <h2 className="text-6xl text-center  font-extralight font-raleway text-metallic-bronze uppercase mb-12">
          CONTACT US
        </h2>
        <p className=" text-xl font-raleway font-extralight mb-20">Whether you're looking to buy, sell, lease, or invest in Dubai's real estate market, Blac & Co
is here to help. Reach out to us today to schedule a consultation or learn more about how we
can assist you with your property needs.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full mb-20 max-w-4xl">
          {/* Email */}
          <div className="flex flex-col items-center">
            <Mail className="text-[#8a6e40] mb-2" size={40} />
            <h3 className="text-xl uppercase font-raleway font-light text-metallic-bronze">E-Mail</h3>
            <p className="text-gray-400 mt-1">Admin@blac-co.com</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center">
            <Phone className="text-[#8a6e40] mb-2" size={40} />
            <h3 className="text-xl uppercase font-raleway font-light text-metallic-bronze">Call us</h3>
           
            <p className="text-gray-400 mt-1">+971 4 3827 888</p>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center">
            <MapPin className="text-[#8a6e40] mb-2" size={40} />
            <h3 className="text-xl uppercase font-raleway font-light text-metallic-bronze">Mailing Address</h3>
            <p className="text-gray-400 mt-1 text-center">
              Office no:1610, Exchange tower, Business Bay, Dubai, UAE, PO Box
              340777
            </p>
          </div>
        </div>
        <CustomMap lat={25.18643698364403} lon={55.26057739417856} /> 
        <ContactForm />
      </section>

      <section>
        <Footer />
      </section>
    </main>
  );
};

export default ContactUs;

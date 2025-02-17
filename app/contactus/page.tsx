'use client'
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import CustomMap from "../components/CustomMap";
import ContactForm from "../components/ContactForm";

const ContactUs = () => {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <main className="bg-black text-white min-h-screen flex flex-col justify-between">
      <section className="mb-10">
        <Navbar />
      </section>

      <section className="flex flex-col mt-10 items-center container mx-auto justify-center text-center py-20">
        <h2 className="text-3xl font-extralight font-raleway text-metallic-bronze tracking-wide text-white mb-8">
          CONTACT US
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full mb-8 max-w-4xl">
          {/* Email */}
          <div className="flex flex-col items-center">
            <Mail className="text-[#8a6e40] mb-2" size={40} />
            <h3 className="text-lg font-medium">E-Mail</h3>
            <p className="text-gray-400 mt-1">info@xxcapital.ae</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center">
            <Phone className="text-[#8a6e40] mb-2" size={40} />
            <h3 className="text-lg font-medium">Call us</h3>
            {showPhone ? (
              <p className="text-gray-400 mt-1">+971 XXXX XXXX</p>
            ) : (
              <button
                className="px-6 py-2 border border-[#c08c5a] text-[#c08c5a] hover:bg-[#c08c5a] hover:text-black transition"
                onClick={() => setShowPhone(true)}
              >
                SHOW PHONE NUMBER
              </button>
            )}
          </div>

          {/* Address */}
          <div className="flex flex-col items-center">
            <MapPin className="text-[#8a6e40] mb-2" size={40} />
            <h3 className="text-lg font-medium">Mailing Address</h3>
            <p className="text-gray-400 mt-1 text-center">
              Office no:1610, Exchange tower, Business Bay, Dubai, UAE, PO Box
              340777
            </p>
          </div>
        </div>
        <CustomMap /> 
        <ContactForm />
      </section>

      <section>
        <Footer />
      </section>
    </main>
  );
};

export default ContactUs;

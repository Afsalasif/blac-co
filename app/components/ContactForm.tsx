import React from "react";

const ContactForm = () => {
  return (
    <div className="flex justify-center mt-10 items-center  bg-black">
      <div className="w-full max-w-4xl p-8 border border-[#c08c5a] bg-[#111] text-white rounded-lg">
        <h2 className="text-center text-2xl font-light">PROMPT CONSULTATION</h2>
        <p className="text-center text-sm text-gray-400 mt-2">
          Fill form below and our agent will contact you shortly
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-transparent border-b border-gray-600 focus:outline-none focus:border-[#c08c5a] text-white p-2"
          />
          <input
            type="text"
            placeholder="Your Phone"
            className="bg-transparent border-b border-gray-600 focus:outline-none focus:border-[#c08c5a] text-white p-2"
          />
          <input
            type="email"
            placeholder="Your E-Mail"
            className="bg-transparent border-b border-gray-600 focus:outline-none focus:border-[#c08c5a] text-white p-2"
          />
        </div>

        <div className="flex justify-between items-center mt-8">
          <p className="text-gray-400">
            Or contact us right now via{" "}
            <a href="https://wa.me/" className="text-[#c08c5a]">
              WhatsApp
            </a>
          </p>
          <button className="px-6 py-2 border border-[#c08c5a] text-[#c08c5a] hover:bg-[#c08c5a] hover:text-black transition">
            SEND
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

import React from "react";
import Image from "next/image"; // If using Next.js
import ContactForm from "./ContactForm";
import Visit from "./Visit";

const Bgcomponent = () => {
  return (
    <div
      className="relative h-screen flex flex-col items-center justify-center px-4"
      style={{
        backgroundImage: "url('img/ip3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "grayscale(90%)",
      }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b  from-black/90 via-[#282828]/90 to-black"></div>

      {/* Content Box */}
      <div className="relative flex flex-col md:flex-row items-center justify-between  w-full max-w-6xl lg:max-h-[222px] mx-auto p-6 md:p-8 border border-gray-500 rounded-lg bg-black/20 backdrop-blur-sm">
        {/* Left Section: Text Content */}
        <div className="text-white text-center md:text-left md:w-1/2">
          <h2 className="text-xl md:text-2xl font-semibold">
            List your Property
          </h2>
          <p className="text-sm md:text-base text-gray-300 mt-2">
            Fill in the form and our agent will contact you shortly.
          </p>
          <button className="mt-4 px-4 py-2 border border-[#b08d57] text-metallic-bronze rounded-md hover:bg-orange-500 hover:text-black transition">
            Enquire Now
          </button>
        </div>

        {/* Right Section: Image (Adjusts Responsively) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
          <Image
            src="/img/im.png" // Replace with the correct path
            alt="Skyline"
            width={300} // Adjust size for responsiveness
            height={150}
            className="opacity-90 absolute bottom-0 lg:right-0"
          />
        </div>
      </div>
   
      <div className="flex relative w-full max-w-6xl justify-center mt-10 items-center  bg-black">
        <div
          className="relative z-20 w-full  p-8 
  border-l-2 border-r-2 border-[#c08c5a] 
  bg-black/70 backdrop-blur-md text-gray-200 
  rounded-lg shadow-lg shadow-black/70"
          style={{
            borderTop: "2px solid transparent",
            borderBottom: "2px solid transparent",
            borderImageSource:
              "linear-gradient(to right, rgba(192, 140, 90, 1), rgba(192, 140, 90, 0) 50%, rgba(192, 140, 90, 1))",
            borderImageSlice: 1,
          }}
        >
          <h2 className="text-center text-metallic-bronze uppercase font-raleway font-extralight text-2xl ">
            Contact us
          </h2>
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
    </div>
  );
};

export default Bgcomponent;

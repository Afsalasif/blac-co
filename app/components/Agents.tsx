"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CustomDropdown from "../../components/ui/Cs";

const carouselData = [
  {
    name: "Zulfiqar Ahmad",
    role: "Chairman",
    image: "/img/sulfiker.jpeg",
  },
  {
    name: "Muhammad Qasim Zulfiqar ",
    role: "Founder & CEO",
    image: "/img/qasim.jpeg",
  },
  {
    name: "Alyaa Aziz",
    role: "Executive Assistant to CEO",
    image: "/img/alya.jpeg",
  },
  {
    name: "Beeya Malik",
    role: "Business development manager",
    image: "/img/beena.jpeg",
  },
];

const specialties = ["Real Estate", "Finance", "Legal", "Consultant"];
const languages = ["English", "Spanish", "Russian", "Arabic"];

const Agents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const filteredAgents = carouselData.filter((agent) => {
    return (
      (selectedSpecialty ? agent.role === selectedSpecialty : true) &&
      (selectedLanguage ? agent.role.includes(selectedLanguage) : true)
    );
  });

  const handleSpecialtySelect = (value: string) => setSelectedSpecialty(value);
  const handleLanguageSelect = (value: string) => setSelectedLanguage(value);

  const totalAgents = filteredAgents.length;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalAgents - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalAgents - 1 ? 0 : prev + 1));
  };

  return (
    <div className=" bg-black flex flex-col items-center min-h-screen justify-center px-4">
      <div
        className="w-full md:mt-44 bg-gradient-to-r from-black via-[#1A1A1A] to-black border-t-[1px] border-b-[1px] p-10"
        style={{
          borderImage:
            "linear-gradient(to right, transparent 5%, #4B5563 30%, #b08d57 50%, #4B5563 70%, transparent 95%) 1",
          maskImage:
            "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
        }}
      >
        {/* Responsive Layout */}
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="w-full md:w-[40%] mx-auto pr-10 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extralight uppercase font-raleway tracking-widest text-metallic-bronze">
              Meet Our Expert Team
            </h1>

            <p className="text-lg font-extralight font-raleway tracking-wide text-white mt-4">
              At Blac & Co Real Estate, our team of professionals is the
              backbone of our success. With a strong commitment to excellence
              and a passion for real estate, each member of our team brings
              invaluable expertise to the table. Our agents have a deep
              understanding of the Dubai real estate market and are dedicated to
              delivering results that exceed our clients' expectations. <br /> We pride
              ourselves on having a diverse, highly skilled, and multilingual
              team, with agents who specialize in different aspects of real
              estate, from residential and commercial properties to off-plan and
              secondary market investments. <br /> Each agent holds a minimum of 5
              years of experience in the Dubai real estate market, ensuring that
              you receive top-tier guidance, personalized service, and expert
              advice every step of the way. Our team speaks 30+ languages,
              making it easy for us to serve clients from all around the globe.
            </p>

            {/* Dropdowns */}
            {/* <div className="flex flex-col md:flex-row gap-4 mt-6">
              <CustomDropdown
                options={languages}
                placeholder="Select Language"
                onSelect={handleLanguageSelect}
              />
              <CustomDropdown
                options={specialties}
                placeholder="Select Specialty"
                onSelect={handleSpecialtySelect}
              />
            </div> */}

            <Button
              variant="outline"
              className="mt-6 w-full text-white border-gray-500"
            >
              SHOW ALL
            </Button>
          </div>

          {/* Right - Carousel */}
          <div className="w-full md:w-[50%] relative flex items-center justify-center mt-8 md:mt-0">
            <div className="relative w-full flex items-center justify-center overflow-hidden">
              <div className="relative w-[300px] md:w-[350px] h-[400px] md:h-[500px]">
                {carouselData.map((person, index) => (
                  <motion.div
                    key={index}
                    className={`absolute inset-0 w-full h-full rounded-lg overflow-hidden shadow-lg transition-all duration-500 ${
                      index === currentIndex
                        ? "z-20 scale-105"
                        : index === (currentIndex + 1) % totalAgents
                        ? "z-10 translate-x-[120px] scale-95 opacity-50"
                        : "z-0 -translate-x-[120px] scale-95 opacity-50"
                    }`}
                    animate={{ opacity: index === currentIndex ? 1 : 0.5 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 bg-black/80 w-full p-4 font-raleway font-extralight text-white">
                      <h3 className="text-lg font-semibold">{person.name}</h3>
                      <p className="text-sm">{person.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            {/* <button
              onClick={prevSlide}
              className="absolute left-[-30px] md:left-[-50px] bg-gray-800 p-2 rounded-full text-white"
            >
              <ChevronLeft size={24} />
            </button> */}

            <button
              onClick={nextSlide}
              className="absolute right-[-30px] z-20 md:right-[-50px] bg-gray-800 p-2 rounded-full text-white"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
      <section
      className="relative min-h-screen mt-10  flex flex-col items-center justify-center px-4"
      // style={{
      //   backgroundImage: "url('img/binagti.webp')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   // filter: "grayscale(90%)",
      // }}
    >
      <div
        className="w-full bg-gradient-to-b flex pt-5 justify-center items-center from-black via-black/90 to-black   border-t-[1px] border-b-[1px] "
        style={{
          borderImage:
            "linear-gradient(to right, transparent 5%, #4B5563 30%, #b08d57 50%, #4B5563 70%, transparent 95%) 1",
        }}
      >
        <div className="md:max-w-6xl flex flex-col gap-y-6  mx-auto">
          <h1 className="text-3xl md:text-6xl text-center  font-extralight font-raleway text-metallic-bronze uppercase mb-6">
          Visa & Residency in Dubai 
          </h1>
          <h2 className="text-2xl font-extralight font-raleway text-metallic-bronze mb-4">
          Understanding Dubai Residency & Benefits Through Real Estate
          </h2>
          <p className="text-lg md:text-xl font-raleway text-white font-extralight mb-6">
          Dubai, one of the world&apos;s most attractive destinations, offers a range of residency options for
investors, entrepreneurs, and individuals who seek to live, work, and invest in the UAE. At
Blac & Co Real Estate, we want to educate our clients about the various residency options
available, especially for those who wish to invest in Dubai&apos;s thriving real estate market.
          </p>
          <p className="text-lg md:text-xl text-white font-raleway font-extralight mb-6">
          Dubai offers several residency programs for those looking to take advantage of its growing
real estate market. Whether you&apos;re a property investor, entrepreneur, or professional, Dubai
has become an ideal location for individuals seeking long-term residency.
          </p>

          <h2 className="text-4xl font-extralight font-raleway text-metallic-bronze mb-4">
          Golden Visa  An Exclusive Opportunity
          </h2>
          <p className="text-lg md:text-xl text-white font-raleway font-extralight mb-6">
          The Dubai Golden Visa is a long-term residency visa introduced by the UAE government to
attract global investors, entrepreneurs, skilled professionals, and their families to reside in the
UAE for up to 10 years. The Golden Visa is particularly attractive to real estate investors
who wish to secure their residency by investing in Dubai's real estate market.
          </p>

          {/* <ul className="list-disc list-inside text-xl font-raleway font-extralight mb-6">
            <li>Sold properties worth 200 million AED in our first year.</li>
            <li>
              Achieved 450 million AED in property sales in the second year.
            </li>
            <li>Targeting 1 billion AED in sales for 2025.</li>
          </ul> */}

          {/* <p className="text-xl font-raleway font-extralight mb-10">
            Our team consists of 50 highly skilled real estate experts, each
            with a minimum of 5 years of experience in Dubai&apos;s real estate
            market. With over 100 years of combined experience, we are among the
            most knowledgeable in the industry.
          </p> */}

          
        </div>
      </div>
    </section>
    </div>
  );
};

export default Agents;

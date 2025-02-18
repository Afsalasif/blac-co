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
    <div className=" bg-black flex items-center justify-center px-4">
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
    </div>
  );
};

export default Agents;

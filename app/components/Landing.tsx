'use client'
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { src: "/img/2.jpg", phrase: "Invest in Luxury" },
    { src: "/img/city.jpg", phrase: "Your Dream Awaits" },
  ];
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const sliderVariants = {
    initial: { y: "100%" },
    animate: { y: "0%" },
    exit: { y: "-100%" },
    transition: { duration: 1, ease: "easeInOut" }
  };

  return (
   <div className="relative w-full bg-black h-screen overflow-hidden">
    {/* Combined Slide Animation */}
    <AnimatePresence mode="sync">
      {images.map(
        (image, index) =>
          currentImageIndex === index && (
            <motion.div
              key={index}
              className="absolute inset-0 flex z-10" // Ensure this stays on top
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              {/* Left Panel */}
              <div className="w-[30%] h-full text-white bg-black flex flex-col justify-center items-center text-metallic-bronze px-6 z-10">
                {/* Left panel content */}
              </div>
  
              {/* Right Panel */}
              <div className="w-[70%] h-full relative">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${image.src})` }}
                />
              </div>
            </motion.div>
          )
      )}
    </AnimatePresence>
  
    {/* Text Overlay with Delayed Crossfade */}
    <div className="absolute inset-0 flex justify-center items-center z-20 px-8">
      {images.map(
        (image, index) =>
          currentImageIndex === index && (
            <motion.h1
              key={index}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-raleway uppercase tracking-[0.25em] text-white text-center absolute"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }} // Moves up slightly before exiting
              transition={{
                duration: 1,
                ease: "easeInOut",
                opacity: { delay: 0.5 }, // Keeps the phrase visible longer
              }}
            >
              {image.phrase}
            </motion.h1>
          )
      )}
    </div>
  
    {/* Bottom Right Elements */}
    <div className="absolute bottom-16 right-8 uppercase font-thin font-raleway text-xl sm:text-2xl">
      invest in Dubai with{" "}
      <span className="text-metallic-bronze font-extralight font-raleway">
        blac & co
      </span>
    </div>
  
    <div className="absolute bottom-4 right-8">
      <Button
        variant="outline"
        className="hover:scale-105 font-raleway text-metallic-bronze transition-all border-[#b08d57] hover:border-[#8a6e40]"
      >
        Leave a Request
      </Button>
    </div>
  </div>
  );
};

export default LandingPage;

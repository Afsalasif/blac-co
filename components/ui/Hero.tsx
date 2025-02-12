"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "./button";

const Hero = () => {
  const properties = [
    {
      name: "ELLIOTT",
      price: "$3,100,000",
      size: "4,500 sq ft",
      image: "/img/city.jpg", // Replace with actual image path
    },
    {
      name: "PONDEROSA",
      price: "$3,200,000",
      size: "4,650 sq ft",
      image: "/ponderosa.jpg", // Replace with actual image path
    },
    {
      name: "FRANKE",
      price: "$3,300,000",
      size: "4,800 sq ft",
      image: "/img/city.jpg", // Replace with actual image path
    },
  ];

  const [isNextSectionVisible, setIsNextSectionVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { src: "/img/2.jpg", phrase: "Invest in Luxury" },
    { src: "/img/city.jpg", phrase: "Your Dream Awaits" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsNextSectionVisible(true);
      setIsImageVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  const interval = 3000;
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  useEffect(() => {
    const timer = setInterval(nextImage, interval); // Set interval from props

    return () => clearInterval(timer); // Clear interval on unmount
  }, [currentImageIndex, images, interval]); // Re-run effect if these change

  const sliderVariants = {
    initial: { y: "100%" },
    animate: { y: "0%" },
    exit: { y: "100%" },
    transition: { duration: 1, ease: "easeInOut" },
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  const buttonVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.7, delay: 0.5 } }, // Fade-in
  };

  const paragraphVariants = {
    initial: { x: -100, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.3 },
    }, // Slide-in from left
  };

  return (
    <div className="relative">
      <div className="h-screen bg-black relative flex justify-center items-center overflow-hidden">
        {/* Image container */}

        {/* Text content */}

        {/* Next section integrated within the same container */}

        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-black overflow-hidden"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }} // Added initial delay
        >
          <div className="relative w-full h-screen overflow-hidden">
            {/* Combined Slide Animation Container */}
            <AnimatePresence mode="sync">
              <motion.div
                key={currentImageIndex}
                className="absolute inset-0 flex z-10" // Ensure this stays on top
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "100%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                {/* Image Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8) 30%, transparent), url(${images[currentImageIndex].src})`,
                  }}
                />

                {/* Overlay for Centered Content */}
                <div className="absolute inset-0 flex items-center justify-start z-20">
                  {" "}
                  {/* Changed items-center to items-start and justify-center to justify-start*/}
                  {/* Content Container */}
                  <div className="max-w-[40%] ml-12 mt-12">
                    {" "}
                    {/* Limit width, align-left and add some margin on both sides */}
                    <h1 className="tracking-[0.2em] font-raleway font-thin text-xl uppercase text-white">
                      BLAC & CO
                    </h1>
                    {/* Text Overlay (Main Phrase) */}
                    <motion.h1
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-raleway font-light uppercase tracking-[0.1em] text-white mt-8"
                      variants={textVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      {images[currentImageIndex].phrase}
                    </motion.h1>
                    {/* Animated Paragraph */}
                    <motion.p
                      className="text-left mt-8 font-thin font-raleway text-md text-white leading-relaxed" /* changed text-center for text-left */
                      variants={paragraphVariants}
                      initial="initial"
                      animate="animate"
                    >
                      Right design and right ideas matter a lot in interior
                      design business. a style that makes a statement.
                    </motion.p>
                    {/* Animated Button */}
                    <motion.button
                      className="bg-transparent hover:scale-105 font-raleway text-metallic-bronze transition-all border-[#b08d57] hover:border-[#8a6e40] border px-4 py-2 rounded mt-8 uppercase font-thin text-sm"
                      variants={buttonVariants}
                      initial="initial"
                      animate="animate"
                    >
                      Discover Work
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Right Elements */}
            <div className="absolute bottom-16 right-8 uppercase font-thin font-raleway text-xl sm:text-2xl">
              invest in Dubai with
              <span className="text-metallic-bronze font-extralight font-raleway">
                blac & co
              </span>
            </div>

            {/* Remove duplicate button */}
            {/*<div className="absolute bottom-4 right-8">
        <button className="bg-transparent hover:scale-105 font-raleway text-metallic-bronze transition-all border-[#b08d57] hover:border-[#8a6e40] border px-4 py-2 rounded">
          Leave a Request
        </button>
      </div>*/}
          </div>
        </motion.div>
      </div>
    </div>
    // </div>
  );
};

export default Hero;

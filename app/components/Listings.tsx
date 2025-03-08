"use client"
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence
import featuredProjects from "../../data/featured"

const LuxuryPropertySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const autoplayInterval = 2000; // Reduced to 3 seconds for faster autoplay

  const router = useRouter();
  const currentProperties = featuredProjects;
  const currentProperty = currentProperties[currentIndex];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    let interval: any;
    
    if (autoplay) {
      interval = setInterval(() => {
        nextSlide();
      }, autoplayInterval);
    }
    
    // Clear interval on component unmount or when autoplay is disabled
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, currentIndex]);

  // Pause autoplay when user interacts with slider
  const handleManualNavigation = (callback: any) => {
    setAutoplay(false); // Pause autoplay
    callback(); // Execute the navigation function
    
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => {
      setAutoplay(true);
    }, 10000);
  };

  const nextSlide = () => {
    const nextIndex = currentIndex === currentProperties.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = currentIndex === 0 ? currentProperties.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };

  const handleDotClick = (index: number) => {
    if (index === currentIndex) return;
    setCurrentIndex(index);
  };

  const handleClick = () => {
    router.push(`project/${currentProperty.slug}`)
  };

  return (
    <div className="bg-black text-white px-4 md:px-8 py-16">
      <div className="container mx-auto">
        <div className="flex justify-center items-center mb-12">
          <h1 className="text-3xl md:text-5xl font-extralight font-raleway text-metallic-bronze mb-4 uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white">
            featured properties
          </h1>
        </div>

        {/* Property Slider */}
        <div className="relative  max-w-6xl mx-auto">
        <div
    className="relative h-64 sm:h-80 md:h-96 lg:h-screen lg:max-h-[800px] w-full overflow-hidden rounded-lg cursor-pointer z-10" // Added z-10 to make sure it's above other elements
    onClick={handleClick}
  >
            {/* Slider Container */}
            <AnimatePresence>
              <motion.div
                key={currentIndex} // Ensures new slide animates when index changes
                className="absolute inset-0 w-full h-full"
                initial={{ x: '100%' }} // The next slide will start from the right (off-screen)
                animate={{ x: 0 }} // Move to the center
                exit={{ x: '-100%' }} // The current slide will exit to the left (off-screen)
                transition={{ duration: 0.5 }} // Set transition duration for smooth sliding
              >
                {/* Current Slide */}
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${currentProperty.cover_image})` }}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70"></div>

          {/* Property Details Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-white z-10">
            <h2 className="text-xl md:text-3xl uppercase font-bold mb-1">{currentProperty.title}</h2>
            <div className="flex flex-wrap items-center gap-2 md:gap-4 text-sm md:text-base mb-2">
              <span className="font-light">{currentProperty.location}</span>
              <span className="w-1 h-1 bg-amber-400 rounded-full"></span>
              <span className="font-light">{currentProperty.type}</span>
            </div>

            <p className="text-lg md:text-2xl font-light">
              <span className="font-bold">{currentProperty.developer}</span>
            </p>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering the parent onClick
              handleManualNavigation(prevSlide);
            }} 
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 p-2 rounded-full transition-colors duration-300 focus:outline-none z-20"
            aria-label="Previous property"
          >
            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>

          <button 
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering the parent onClick
              handleManualNavigation(nextSlide);
            }} 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 p-2 rounded-full transition-colors duration-300 focus:outline-none z-20"
            aria-label="Next property"
          >
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center items-center mt-6 gap-2">
          {currentProperties.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                handleManualNavigation(() => handleDotClick(index));
              }}
              className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-amber-400 w-4" : "bg-gray-600"}`}
              aria-label={`Go to property ${index + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="absolute top-4 right-4 bg-black/50 px-3 py-1 rounded-full text-xs font-light z-20">
          {currentIndex + 1} / {currentProperties.length}
        </div>
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <a href='/offplan' className="px-8 py-3 border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition-colors duration-300 rounded-sm font-light">
          VIEW ALL PROPERTIES
        </a>
      </div>
    </div>
  );
};

export default LuxuryPropertySlider;

"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  // Total animation duration for all elements
  const TOTAL_DURATION = 2.4;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Zoom - Quicker animation */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ 
          duration: TOTAL_DURATION, 
          ease: "easeOut",
        }}
      >
        <Image
          src="/img/my.png"
          alt="Dubai Skyline Background"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
      </motion.div>

      {/* Side Buildings */}
      <motion.div
        className="absolute bottom-0 left-20 z-10"
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ 
          duration: 1.2, 
          delay: TOTAL_DURATION - 1.2,
          ease: "easeOut" 
        }}
      >
        <Image
          src="/left-building.png"
          alt="Left Tower"
          width={250}
          height={600}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-0 right-20 z-10"
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ 
          duration: 1.2, 
          delay: TOTAL_DURATION - 1.2,
          ease: "easeOut" 
        }}
      >
        <Image
          src="/right-building.png"
          alt="Right Tower"
          width={250}
          height={600}
        />
      </motion.div>

      {/* Main Building */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1.2, 
          delay: TOTAL_DURATION - 1.5,
          ease: "easeOut" 
        }}
      >
        <Image
          src="/burj-khalifa.png"
          alt="Burj Khalifa"
          width={500}
          height={900}
        />
      </motion.div>

      {/* Text Elements */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 text-center z-30 space-y-4">
        <motion.h1
          className="text-9xl font-raleway font-bold text-white mb-4 z-10"
          initial={{ opacity: 0, x: "-100vw" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 1.2, 
            delay: TOTAL_DURATION - 1.8,
            ease: "easeOut" 
          }}
        >
          Luxury Living
        </motion.h1>
        
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white mt-4 z-30"
          initial={{ opacity: 0, x: "100vw" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 1.2, 
            delay: TOTAL_DURATION - 1.2,
            ease: "easeOut" 
          }}
        >
          Dubai's Finest
        </motion.h1>
      </div>

      {/* CTA Button */}
      <motion.button
        className="absolute top-8 right-8 bg-bronze text-black px-8 py-3 rounded-lg font-bold z-40 shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: TOTAL_DURATION - 0.6,
          ease: "easeOut" 
        }}
      >
        Explore More
      </motion.button>
    </div>
  );
};

export default Hero;
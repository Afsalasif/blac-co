'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation';


const images = [
  '/office/o1.jpeg',
  '/office/o2.jpeg',
  '/office/o3.jpeg',
];

const Visit = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router =useRouter()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-black text-white py-16 px-6">
      <h2 className="text-2xl md:text-4xl text-metallic-bronze uppercase font-raleway mb-8">Visit our Office</h2>
      <div className="relative w-full max-w-4xl h-[450px] overflow-hidden"> {/* Increased height to 450px */}
        <AnimatePresence initial={false}>
          {images.map((image, index) => (
            <motion.div
              key={image}
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: index === currentIndex ? '0%' : '-100%', opacity: 1 }}
              exit={{ x: '-100%', opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-full"
            >
              <Image
                src={image}
                alt="Office view"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="(max-width: 768px) 100vw, 800px"  // Adjust sizes to larger value
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <button  onClick={() => router.push('/contactus')} className="mt-8 hover:scale-105 font-raleway text-metallic-bronze transition-all border-[#b08d57] hover:border-[#8a6e40]">
  <FaMapMarkerAlt /> View on Map
</button>
    </div>
  );
};

export default Visit;

"use client"
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const LuxuryPropertySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Penthouses");
  const [isMobile, setIsMobile] = useState(false);

  // Property data
  const properties: Record<string, { id: number; title: string; location: string; type: string; beds: number; baths: number; size: string; price: string; image: string; }[]> = {
   
    Penthouses: [
      {
        id: 1,
        title: "The Residence Burj Khalifa",
        location: "Burj Khalifa",
        type: "Penthouse",
        beds: 4,
        baths: 6,
        size: "8230 sq.ft",
        price: "AED 37,000,000",
        image: "https://i.imgur.com/MnN2nBU.png",
      },
      {
        id: 2,
        title: "The Fairmont Palm Residence",
        location: "Fairmont",
        type: "Penthouse",
        beds: 4,
        baths: 6,
        size: "4859 sq.ft",
        price: "AED 12,800,000",
        image: "https://source.unsplash.com/800x600/?luxury-penthouse-2",
      },
      {
        id: 3,
        title: "Al Bateen Residence",
        location: "The Walk",
        type: "Penthouse",
        beds: 5,
        baths: 6,
        size: "6100 sq.ft",
        price: "AED 23,500,000",
        image: "https://source.unsplash.com/800x600/?penthouse-view",
      },
    ],
    Apartments: [
      {
        id: 1,
        title: "The Burj Vista",
        location: "Downtown Dubai",
        type: "Apartment",
        beds: 3,
        baths: 4,
        size: "4200 sq.ft",
        price: "AED 15,000,000",
        image: "https://source.unsplash.com/800x600/?luxury-downtown",
      },
      {
        id: 2,
        title: "Oceanfront Luxury Apartment",
        location: "Palm Jumeirah",
        type: "Apartment",
        beds: 6,
        baths: 7,
        size: "10,000 sq.ft",
        price: "AED 60,000,000",
        image: "https://source.unsplash.com/800x600/?luxury-apartment",
      },
      {
        id: 3,
        title: "Ocean Heights",
        location: "Dubai Marina",
        type: "Apartment",
        beds: 4,
        baths: 5,
        size: "5000 sq.ft",
        price: "AED 22,000,000",
        image: "https://source.unsplash.com/800x600/?luxury-condo",
      },
    ],
    Townhouses: [
      {
        id: 1,
        title: "Palm Jumeirah Townhouse",
        location: "Palm Jumeirah",
        type: "Townhouse",
        beds: 3,
        baths: 4,
        size: "4500 sq.ft",
        price: "AED 25,000,000",
        image: "https://source.unsplash.com/800x600/?luxury-townhouse",
      },
      {
        id: 2,
        title: "The Meadows Townhouse",
        location: "Emirates Hills",
        type: "Townhouse",
        beds: 5,
        baths: 6,
        size: "5500 sq.ft",
        price: "AED 32,000,000",
        image: "https://source.unsplash.com/800x600/?luxury-townhouse-2",
      },
    ],
    Villas: [
      {
        id: 1,
        title: "Oceanfront Luxury Villa",
        location: "Palm Jumeirah",
        type: "Villa",
        beds: 6,
        baths: 7,
        size: "10,000 sq.ft",
        price: "AED 60,000,000",
        image: "https://source.unsplash.com/800x600/?luxury-villa",
      },
      {
        id: 2,
        title: "Desert Luxury Villa",
        location: "Dubai Desert",
        type: "Villa",
        beds: 5,
        baths: 6,
        size: "8000 sq.ft",
        price: "AED 45,000,000",
        image: "https://source.unsplash.com/800x600/?luxury-villa-2",
      },
    ],
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentProperties = properties[selectedCategory];
  const currentProperty = currentProperties[currentIndex];


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === currentProperties.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? currentProperties.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-black text-white px-4 md:px-8 py-16">
      <div className="container mx-auto">
        <div className="flex justify-center items-center mb-12">
          <h1 className="text-3xl md:text-5xl font-extralight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white">
            Luxury Properties
          </h1>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {Object.keys(properties).map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentIndex(0);
              }}
              className={`px-4 py-2 md:px-6 md:py-3 font-light transition-all duration-300 ease-in-out relative focus:outline-none ${
                selectedCategory === category
                  ? "text-white"
                  : "text-gray-400"
              }`}
            >
              <span>{category}</span>
              {selectedCategory === category && (
                <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></span>
              )}
            </button>
          ))}
        </div>

        {/* Property Slider */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-screen lg:max-h-[700px] w-full overflow-hidden rounded-lg">
            {/* Property Image */}
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-500"
              style={{ backgroundImage: `url(${currentProperty.image})` }}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70"></div>
            
            {/* Property Details Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-white z-10">
              <h2 className="text-xl md:text-3xl font-bold mb-1">{currentProperty.title}</h2>
              <div className="flex flex-wrap items-center gap-2 md:gap-4 text-sm md:text-base mb-2">
                <span className="font-light">{currentProperty.location}</span>
                <span className="w-1 h-1 bg-amber-400 rounded-full"></span>
                <span className="font-light">{currentProperty.type}</span>
              </div>
              
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div>
                  <p className="text-gray-400 text-xs">BEDS</p>
                  <p className="font-medium">{currentProperty.beds}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">BATHS</p>
                  <p className="font-medium">{currentProperty.baths}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">AREA</p>
                  <p className="font-medium">{currentProperty.size}</p>
                </div>
              </div>
              
              <p className="text-lg md:text-2xl font-light">
                <span className="font-bold">{currentProperty.price}</span>
              </p>
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide} 
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 p-2 rounded-full transition-colors duration-300 focus:outline-none z-20"
              aria-label="Previous property"
            >
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>
            
            <button 
              onClick={nextSlide} 
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 p-2 rounded-full transition-colors duration-300 focus:outline-none z-20"
              aria-label="Next property"
            >
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>
          </div>
          
          {/* Progress Indicator */}
          <div className="flex justify-center items-center mt-6 gap-2">
            {currentProperties.map((_, index:any) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-amber-400 w-4" : "bg-gray-600"
                }`}
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
          <button className="px-8 py-3 border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition-colors duration-300 rounded-sm font-light">
            VIEW ALL PROPERTIES
          </button>
        </div>
      </div>
    </div>
  );
};

export default LuxuryPropertySlider;
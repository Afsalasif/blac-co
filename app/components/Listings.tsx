"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Listings = () => {
  const penthouses = [
    {
      id: 1,
      title: "The Residence Burj Khalifa",
      location: "Burj Khalifa",
      type: "Penthouse",
      beds: 4,
      baths: 6,
      size: "8230 sq.ft",
      price: "AED 37,000,000",
      image: "https://source.unsplash.com/800x600/?luxury-apartment",
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
      image: "https://source.unsplash.com/800x600/?luxury-home",
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
      image: "https://source.unsplash.com/800x600/?luxury-living",
    },
  ];

  const apartments = [
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
      title: "Oceanfront Luxury Villa",
      location: "Palm Jumeirah",
      type: "Apartment",
      beds: 6,
      baths: 7,
      size: "10,000 sq.ft",
      price: "AED 60,000,000",
      image: "https://source.unsplash.com/800x600/?luxury-villa",
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
      image: "https://source.unsplash.com/800x600/?luxury-apartment",
    },
  ];

  const townhouses = [
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
  ];

  const villas = [
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
  ];

  const [itemsPerSlide, setItemsPerSlide] = useState(3); // Default to 3

  // Update number of visible listings dynamically based on screen width
  useEffect(() => {
    const updateItemsPerSlide = () => {
        if (window.innerWidth < 720) {
          setItemsPerSlide(1); // Mobile: 1 listing
        } else if (window.innerWidth < 1024) {
          setItemsPerSlide(2); // Tablet: 2 listings
        } else {
          setItemsPerSlide(3); // Desktop: 3 listings
        }
      };
  
    updateItemsPerSlide(); // Run once on mount
    window.addEventListener("resize", updateItemsPerSlide); // Listen for resize

    return () => window.removeEventListener("resize", updateItemsPerSlide); // Cleanup
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Penthouses");

  const listings =
    selectedCategory === "Penthouses"
      ? penthouses
      : selectedCategory === "Apartments"
      ? apartments
      : selectedCategory === "Townhouses"
      ? townhouses
      : villas;

//   const isMobile = window.innerWidth < 640; // sm breakpoint in Tailwind
//   const itemsPerSlide = isMobile ? 1 : 3;

  const nextSlide = () => {
    if (currentIndex + itemsPerSlide < listings.length) {
      setCurrentIndex((prevIndex) => prevIndex + itemsPerSlide);
    }
  };

  const prevSlide = () => {
    if (currentIndex - itemsPerSlide >= 0) {
      setCurrentIndex((prevIndex) => prevIndex - itemsPerSlide);
    }
  };

  return (
    <div className="bg-black  text-white px-8 pt-8">
      <div className="container mx-auto w-full  border-b-[1px] p-10"
       style={{
        borderImage:
          "linear-gradient(to right, transparent 5%, #4B5563 30%, #b08d57 50%, #4B5563 70%, transparent 95%) 1",
        maskImage:
          "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
      }}>
        <div className="flex justify-center items-center">
          <h1 className="text-5xl font-extralight font-raleway mb-8 text-transparent bg-clip-text mt-10 bg-gradient-to-r from-white via-gray-300 to-white">
            Luxury Properties
          </h1>
        </div>

        {/* Category Tabs */}
        <div className="flex md:gap-4 mx-auto items-center justify-center mb-8">
          {["Penthouses", "Apartments", "Townhouses", "Villas"].map(
            (category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 border-none font-extralight font-raleway rounded-full transition-all duration-300 ease-in-out relative ${
                  selectedCategory === category
                    ? "text-white font-semibold bg-clip-text text-transparent"
                    : "text-white"
                }`}
              >
                <span>{category}</span>
                {selectedCategory === category && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D1AF4A] to-transparent"></span>
                )}
              </button>
            )
          )}
        </div>

        {/* Carousel Section */}
        <div className="relative">
          <motion.div
            className="flex justify-between"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {listings.length === 0 ? (
              <div className="text-center text-white">
                No listings available in this category.
              </div>
            ) : (
              listings
                .slice(currentIndex, currentIndex + itemsPerSlide)
                .map((listing) => (
                  <motion.div
                    key={listing.id}
                    className="bg-gray-900 mx-auto rounded-xl min-w-[90%] sm:min-w-[48%] md:min-w-[30%] max-w-[350px] p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="relative">
                      <img
                        src={listing.image}
                        alt={listing.title}
                        className="rounded-xl w-full h-60 object-cover"
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-xl font-bold">{listing.title}</h3>
                      <p className="text-gray-400">{listing.location}</p>
                      <p className="text-sm">{listing.type}</p>
                      <p className="text-lg font-semibold mt-2">
                        {listing.price}
                      </p>
                    </div>
                  </motion.div>
                ))
            )}
          </motion.div>

          {/* Navigation */}
          <div className="mt-8 flex  justify-between">
            <button onClick={prevSlide} disabled={currentIndex === 0}>
              PREV
            </button>
          <button className="font-extralight font-raleway">
            Show All
          </button>
            <button onClick={nextSlide} disabled={currentIndex + itemsPerSlide >= listings.length}>
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listings;

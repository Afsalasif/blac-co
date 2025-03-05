"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import offplanProjects from "../../data/offplan";

const OffPlanPage = () => {
  return (
    <div className="relative w-full h-screen">
      <section>
        <Navbar />
      </section>

      {/* Background Section */}
      <section className="w-full h-[70%] relative">
        <Image 
          src="/img/mji.jpg" 
          alt="Background Image" 
          layout="fill" 
          objectFit="cover" 
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black"></div>
      </section>

      {/* Introduction Section */}
      <section className="bg-black text-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl text-center font-extralight mt-20 font-raleway text-metallic-bronze uppercase mb-6">
            Off-Plan Properties
          </h1>
          <p className="text-xl font-raleway font-extralight mb-6">
            Off-plan properties are those that are sold before construction is
            completed. These properties are often sold at lower prices compared
            to completed properties, offering buyers the opportunity to benefit
            from price appreciation once the development is finished. 
          </p>
          <p className="text-xl font-raleway font-extralight mb-6">
            At <span className="text-metallic-bronze">Blac & Co</span>, we
            offer exclusive access to off-plan properties from some of the most
            reputable developers in Dubai. Our expert team guides clients
            through the entire buying process, providing market insights,
            potential return on investment, and helping them secure the best
            deals on new developments.
          </p>
        </div>
      </section>

      {/* Properties Listing Section */}
      <section className="px-20 py-4 bg-black text-white">
        {/* Top Section: Breadcrumb + Filters */}
        <div className=" hidden md:flex justify-between items-center mb-6">
          <nav className="text-gray-400 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li>/</li>
              <li><a href="#" className="hover:text-white">Off-plan</a></li>
            </ol>
          </nav>

          {/* Filters */}
          <div className="flex  gap-3">
            {["Areas", "Projects", "Property Type", "Developer", "Real Estate Category"].map((filter) => (
              <select key={filter} className="bg-transparent border border-gray-600 text-white px-4 py-2 rounded-md w-40">
                <option>{filter}</option>
              </select>
            ))}
          </div>
        </div>

        {/* Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {offplanProjects.map((property) => (
            <div key={property.id} className="bg-black rounded-lg border-l-2 border-r-2 border-[#c08c5a] overflow-hidden shadow-lg"  style={{
              borderTop: "2px solid transparent",
              borderBottom: "2px solid transparent",
              borderImageSource:
                "linear-gradient(to right, rgba(192, 140, 90, 1), rgba(192, 140, 90, 0) 50%, rgba(192, 140, 90, 1))",
              borderImageSlice: 1,
            }}>
              <div className="relative w-full h-56">
                <Image
                  src={property.cover_image}
                  alt={property.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-light mb-2 uppercase  ">{property.title}</h3>
                <p className="text-sm mb-2 text-gray-400">Type: {property.type}</p>
                <p className="text-sm text-gray-400">Developer: {property.developer}</p>
                <Link href={`/project/${property.slug}`} className="text-metallic-bronze mt-2 inline-block">
                  EXPLORE
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default OffPlanPage;

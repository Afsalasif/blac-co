"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import offplanProjects from "../../data/offplan";
import CustomSelect from "../components/CustomSelect";

type OffplanProject = {
  id: number;
  type: string;
  title: string;
  slug: string;
  price_range: string;
  location: string;
  latitude: string;
  longitude: string;
  bedrooms: string;
  bathrooms: string;
  size_range: string;
  handover_date: string;
  developer: string;
  cover_image: string;
};

const OffPlanPage = () => {
  const [filters, setFilters] = useState({
    project: "Any Project",
    type: "Any Type",
    developer: "Any Developer",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const handleFilterChange = (name: keyof OffplanProject, value: string) => {
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    setCurrentPage(1); // Reset to first page when filters change
  };

  // Use useMemo to memoize filtered projects
  const filteredProjects = useMemo(() => {
    return offplanProjects.filter((property) => {
      return (
        (filters.project === "Any Project" || property.title === filters.project) &&
        (filters.type === "Any Type" || property.type === filters.type) &&
        (filters.developer === "Any Developer" || property.developer === filters.developer)
      );
    });
  }, [filters]);

  // Use useMemo to calculate pagination
  const paginationInfo = useMemo(() => {
    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

    return {
      paginatedProjects,
      totalPages,
    };
  }, [filteredProjects, currentPage, itemsPerPage]);

  const uniqueValues = (key: keyof OffplanProject) => {
    const values = Array.from(new Set(offplanProjects.map((item) => item[key])));
    return [`Any ${key.charAt(0).toUpperCase() + key.slice(1)}`, ...values.filter((value) => value !== undefined)] as string[];
  };

  // Pagination handlers
  const handleNextPage = () => {
    setCurrentPage((prevPage) => 
      prevPage < paginationInfo.totalPages ? prevPage + 1 : prevPage
    );
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage > 1 ? prevPage - 1 : prevPage);
  };

  return (
    <div className="relative w-full h-screen">
      <section>
        <Navbar />
      </section>

      <section className="w-full h-[70%] relative">
        <Image src="/img/mji.jpg" alt="Background Image" layout="fill" objectFit="cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black"></div>
      </section>
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
      <section className="px-20 py-4 bg-black text-white">
        <div className="hidden lg:flex justify-between items-center mb-6">
          <nav className="text-gray-400 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li>/</li>
              <li><a href="#" className="hover:text-white">Off-plan</a></li>
            </ol>
          </nav>

          <div className="flex gap-3">
            {["type", "developer"].map((filterKey) => (
              <CustomSelect
                key={filterKey}
                options={uniqueValues(filterKey as keyof OffplanProject).map((option) => ({
                  label: option,
                  value: option,
                }))}
                value={filters[filterKey as keyof typeof filters]}
                onChange={(value) => handleFilterChange(filterKey as keyof OffplanProject, value)}
                placeholder={`Select ${filterKey}`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {paginationInfo.paginatedProjects.map((property) => (
            <div
              key={property.id}
              className="bg-black rounded-lg border-l-2 border-r-2 border-[#c08c5a] overflow-hidden shadow-lg"
              style={{
                borderTop: "2px solid transparent",
                borderBottom: "2px solid transparent",
                borderImageSource:
                  "linear-gradient(to right, rgba(192, 140, 90, 1), rgba(192, 140, 90, 0) 50%, rgba(192, 140, 90, 1))",
                borderImageSlice: 1,
              }}
            >
              <div className="relative w-full h-56">
                <Image src={property.cover_image} alt={property.title} layout="fill" objectFit="cover" className="rounded-t-lg" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-light mb-2 uppercase">{property.title}</h3>
                <p className="text-sm mb-2 text-gray-400">Type: {property.type}</p>
                <p className="text-sm text-gray-400">Developer: {property.developer}</p>
                <Link href={`/project/${property.slug}`} className="text-metallic-bronze mt-2 inline-block">
                  EXPLORE
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button 
            onClick={handlePrevPage} 
            disabled={currentPage === 1}
            className="px-4 py-2 bg-metallic-bronze text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span className="text-white">
            Page {currentPage} of {paginationInfo.totalPages}
          </span>
          <button 
            onClick={handleNextPage} 
            disabled={currentPage === paginationInfo.totalPages}
            className="px-4 py-2 bg-metallic-bronze text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default OffPlanPage;
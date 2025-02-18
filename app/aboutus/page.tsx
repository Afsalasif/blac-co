"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Footer from "../components/Footer";

const agents = [
  "/office/o1.jpeg",
  "/office/o2.jpeg",
  "/office/o3.jpeg",
  "/office/o4.jpeg",
  "/office/o1.jpeg",
  "/office/o2.jpeg",
];

const page = () => {
  const [currentImages, setCurrentImages] = useState(agents);

  useEffect(() => {
    const interval = setInterval(() => {
      const shuffledAgents = [...agents].sort(() => Math.random() - 0.5);
      setCurrentImages(shuffledAgents);
    }, 3000); // Change images every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      <section className="bg-black text-white min-h-screen py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl text-center mt-28  font-extralight font-raleway text-metallic-bronze uppercase mb-6">
            About Us
          </h1>
          <h2 className="text-4xl font-extralight font-raleway text-metallic-bronze mb-4">
            Who We Are
          </h2>
          <p className="text-xl font-raleway font-extralight mb-6">
            Blac & Co Real Estate was established in 2023 with a singular goal:
            to become the leading real estate consultancy in Dubai by offering
            expert advice, innovative solutions, and a client-focused approach
            to real estate.
          </p>
          <p className="text-xl font-raleway font-extralight mb-6">
            Founded by Muhammad Qasim Zulfiqar, a distinguished real estate
            developer in Pakistan and CEO of ZAC Holdings PVT LTD, Blac & Co
            brings over two decades of international experience to Dubai&apos;s
            thriving real estate market.
          </p>

          <h2 className="text-4xl font-extralight font-raleway text-metallic-bronze mb-4">
            Our Achievements
          </h2>
          <ul className="list-disc list-inside text-xl font-raleway font-extralight mb-6">
            <li>Sold properties worth 200 million AED in our first year.</li>
            <li>
              Achieved 450 million AED in property sales in the second year.
            </li>
            <li>Targeting 1 billion AED in sales for 2025.</li>
          </ul>

          <p className="text-xl font-raleway font-extralight mb-10">
            Our team consists of 50 highly skilled real estate experts, each
            with a minimum of 5 years of experience in Dubai&apos;s real estate
            market. With over 100 years of combined experience, we are among the
            most knowledgeable in the industry.
          </p>

          <div className="flex justify-center w-full items-stretch ">
            {/* Combined Card */}
            <div
              className="relative z-20 w-full  p-8 
  border-l-2 border-r-2 border-[#c08c5a] 
  bg-black/70 backdrop-blur-md text-gray-200 
  rounded-lg shadow-lg shadow-black/70"
              style={{
                borderTop: "2px solid transparent",
                borderBottom: "2px solid transparent",
                borderImageSource:
                  "linear-gradient(to right, rgba(192, 140, 90, 1), rgba(192, 140, 90, 0) 50%, rgba(192, 140, 90, 1))",
                borderImageSlice: 1,
              }}
            >
              {/* Vision Section */}
              <h2 className="text-5xl uppercase text-metallic-bronze font-extralight font-raleway text-white mb-4 text-center">
                Our Vision
              </h2>
              <p className="text-white/90 text-xl font-extralight font-raleway text-center flex-grow">
                At Blac & Co, our vision is to become the market leader in the
                Dubai real estate industry within the first three years of
                operations. We focus on building long-lasting relationships,
                offering personalized solutions, and providing exceptional real
                estate services that stand out in the market.
              </p>

              {/* Mission Section */}
              <h2 className="text-5xl uppercase text-metallic-bronze  mt-10 font-extralight font-raleway text-white mb-4 text-center">
                Our Mission
              </h2>
              <p className="text-white/90 text-xl font-extralight font-raleway text-center flex-grow">
                Provide expert real estate consultancy to guide clients through
                their property journey. Specialize in buying, selling, leasing,
                mortgages, and holiday homes. Build a trusted reputation as a
                leading real estate brand in Dubai. Help clients make informed
                decisions and secure the best property deals.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="relative h-[600px] flex flex-col items-center justify-center px-4"
          style={{
            backgroundImage: "url('img/ip3.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(90%)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b  from-black/90 via-[#282828]/90 to-black"></div>
          <div className="relative flex flex-col md:flex-row items-center justify-between  w-full max-w-6xl lg:max-h-[222px] mx-auto p-6 md:p-8 border border-gray-500 rounded-lg bg-black/20 backdrop-blur-sm">
            {/* Left Section: Text Content */}
            <div className="text-white flex flex-col items-center justify-center">
              <h1 className="text-5xl font-raleway">10+ </h1>
              <p className="font-raleway mt-2">Languages</p>
            </div>
            <div className="text-white flex flex-col items-center justify-center">
              <h1 className="text-5xl font-raleway">50+</h1>
              <p className="font-raleway mt-2">Specialists</p>
            </div>
            <div className="text-white flex flex-col items-center justify-center">
              <h1 className="text-5xl font-raleway">2000+</h1>
              <p className="font-raleway mt-2">Offers in the Database</p>
            </div>
            {/* <div className="text-white flex flex-col items-center justify-center">
              <h1 className="text-5xl font-raleway">14000+</h1>
              <p className="font-raleway mt-2">Number of Deals</p>
            </div> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;

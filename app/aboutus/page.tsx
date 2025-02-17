"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";

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
      <section className="relative">
        <div className="w-full h-screen flex overflow-hidden relative">
          {/* Overlay inside the Hero Section */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-black/70 to-black" />

          {/* Agent Images */}
          {currentImages.map((image, index) => (
            <motion.div
              key={index}
              className="w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <img
                src={image}
                alt={`Agent ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </motion.div>
          ))}
        </div>

        {/* Big Title at the Bottom */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-6xl font-bold z-10">
          <h1>Your Dream Agents Await</h1>
        </div>
      </section>

      <section className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="uppercase text-gray-300 text-3xl font-semibold mb-12">
            Our Services
          </h1>
        </div>

        <div className="max-w-6xl mx-auto space">
          {/* Consulting */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <Image
                src="/SER/SE1.webp"
                alt="Consulting"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 p-6">
              <h2 className="text-6xl text-metallic-bronze font-extralight font-raleway mb-2">
                1
              </h2>
              <h3 className="text-2xl uppercase  font-extralight font-raleway mb-4">
                Consulting
              </h3>
              <ul className="list-disc list-inside text-gray-400">
                <li>
                  We will share our vast experience in Dubai's real estate
                  market and provide information on buying, selling, and renting
                  any type of property.
                </li>
                <li>
                  Suitable for investors, businesses, and those looking for a
                  home for themselves.
                </li>
              </ul>
            </div>
          </div>

          {/* Selecting and Viewing Property */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-6">
              <h2 className="text-6xl text-metallic-bronze font-extralight font-raleway mb-2">
                2
              </h2>
              <h3 className="text-2xl uppercase font-extralight font-raleway mb-4">
                Selecting and Viewing Property
              </h3>
              <ul className="list-disc list-inside text-gray-400">
                <li>
                  Searching and selecting properties based on specified needs.
                </li>
                <li>Virtual property tours via video communication.</li>
                <li>A diverse range of properties from major developers.</li>
              </ul>
            </div>
            <div className="md:w-1/2 ">
              <Image
                src="/SER/SE2.webp"
                alt="Selecting and Viewing Property"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <Image
                src="/SER/SE3.webp"
                alt="Consulting"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 p-6">
              <h2 className="text-6xl text-metallic-bronze font-extralight font-raleway mb-2">
                3
              </h2>
              <h3 className="text-2xl uppercase font-extralight font-raleway mb-4">
                DEAL SUPPORT
              </h3>
              <ul className="list-disc list-inside text-gray-400">
                <li>Preparation and notarization of all necessary documents</li>
                <li>Negotiating deals together</li>
                <li>Assistance with mortgage arrangements</li>
                <li>
                  Assistance with opening an account, fund transfers, and
                  currency exchange
                </li>
              </ul>
            </div>
          </div>

          {/* Selecting and Viewing Property */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-6">
              <h2 className="text-6xl text-metallic-bronze font-extralight font-raleway mb-2">
                4
              </h2>
              <h3 className="text-2xl uppercase font-extralight font-raleway mb-4">
                AFTER-SALES SERVICE
              </h3>
              <ul className="list-disc list-inside text-gray-400">
                <li>Assistance with property insurance.</li>
                <li>Assistance with activating utility services.</li>
              </ul>
            </div>
            <div className="md:w-1/2 ">
              <Image
                src="/SER/SE4.webp"
                alt="Selecting and Viewing Property"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <Image
                src="/SER/SE5.webp"
                alt="Consulting"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 p-6">
              <h2 className="text-6xl text-metallic-bronze font-extralight font-raleway mb-2">
                5
              </h2>
              <h3 className="text-2xl uppercase font-extralight font-raleway mb-4">
                Property and business management
              </h3>
              <ul className="list-disc list-inside text-gray-400">
                <li>Property and business management</li>
                <li>Short-Term Rent</li>
                <li>Long-Term Rent</li>
              </ul>
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
    </>
  );
};

export default page;

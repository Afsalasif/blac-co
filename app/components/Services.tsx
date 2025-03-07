"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Services = () => {
  const [active, setActive] = useState("buy");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const svgWrapperStyle = "relative inline-block transition-all duration-300";

  return (
    <div className=" bg-black flex items-center justify-center py-20 md:py-0">
      <div className="relative flex flex-col md:flex-row max-w-6xl mx-auto w-full border border-gray-600">
        {/* Mobile Image Section */}
        <div className="relative z-20 w-full md:w-1/2 order-1 md:order-none">
          <div className="md:absolute md:top-[-10%] md:left-[-5%] md:w-[110%] md:h-[120%] relative w-full max-h-[50vh] md:max-h-none aspect-square md:aspect-auto overflow-hidden">
            <Image
              src={
                active === "buy"
                  ? "/img/buy-sell_buy.webp"
                  : "/img/buy-sell_rent.webp"
              }
              alt="Real Estate"
              layout="fill"
              objectFit="cover"
              className="transition-all duration-500"
            />
          </div>
        </div>

        {/* Text Content Section */}
        <div className="relative z-10 w-full md:w-1/2 p-4 md:p-10 flex flex-col justify-center text-white bg-black border border-gray-600 order-2 md:order-none">
          {/* ... (keep the existing BUY/RENT sections exactly as they were) */}
          <div
            className="flex items-center gap-x-4 md:gap-x-8 cursor-pointer"
            onMouseEnter={() => setActive("buy")}
            
          >
            <a
            href="/offplan"
              className={`text-4xl md:text-6xl font-raleway font-extralight tracking-widest transition-all duration-300 ${
                active === "buy" ? "text-white" : "text-gray-600"
              }`}
            >
              BUY
            </a>
            <div
              className={`${svgWrapperStyle} ${
                isMobile ? "w-[40px]" : "w-[70px]"
              } ${active === "buy" && !isMobile ? "scale-150" : ""}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 24"
                width={isMobile ? 40 : active === "buy" ? 100 : 70}
                height="20"
                stroke="white"
                strokeWidth="2"
                fill="none"
                className="transition-all duration-300"
              >
                <path
                  d="M2 12h30l-7-7 1.5-1.5L38 12l-11.5 8.5L25 18l7-7H2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* <div
            className="flex items-center gap-x-4 md:gap-x-8 cursor-pointer mt-4"
            onMouseEnter={() => setActive("rent")}
          >
            <h1
              className={`text-4xl md:text-6xl font-extralight font-raleway  tracking-widest transition-all duration-300 ${
                active === "rent" ? "text-white" : "text-gray-600"
              }`}
            >
              RENT
            </h1>
            <div
              className={`${svgWrapperStyle} ${
                isMobile ? "w-[40px]" : "w-[70px]"
              } ${active === "buy" && !isMobile ? "scale-150" : ""}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 24"
                width={isMobile ? 40 : active === "rent" ? 100 : 70}
                height="20"
                stroke="white"
                strokeWidth="2"
                fill="none"
                className="transition-all duration-300"
              >
                <path
                  d="M2 12h30l-7-7 1.5-1.5L38 12l-11.5 8.5L25 18l7-7H2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div> */}

          <p className="text-sm font-extralight font-raleway md:text-lg text-gray-400 mt-4 md:mt-6">
            With a comprehensive portfolio of properties and countless offers,
            we cover all your real estate needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

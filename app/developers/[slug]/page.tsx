"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import developerData from "../../../data/developers";
import offplanProjects from "@/data/offplan";

const DeveloperDetails = () => {
  const params = useParams();

  const { slug } = params;

  const developer = developerData.find((dev) => dev.slug === slug);

  if (!developer) {
    return (
      <div className="text-center text-xl font-bold py-20">
        Developer not found
      </div>
    );
  }
  const [selectedImage, setSelectedImage] = useState("");

  const images = [
    "/dev/random1.jpg",
    "/dev/random2.jpg",
    "/dev/random3.jpg", // Add more images here
  ];

  // First useEffect: Select a random image on initial render
  useEffect(() => {
    const getRandomImage = () => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setSelectedImage(images[randomIndex]); // Set random image
    };

    getRandomImage(); // Set random image on first render
  }, []); // Empty dependency array ensures it runs only once on mount

  // Second useEffect: Log the selectedImage after it has been updated
  useEffect(() => {
    if (selectedImage) {
      console.log("Updated:", selectedImage); // Logs when selectedImage changes
    }
  }, [selectedImage]);
  const breakTextIntoSentences = (text: string) => {
    return text
      .split(/(?<=[.!?])\s+/) // Split by sentence-ending punctuation followed by space
      .map((sentence: any, index: any) => (
        <div key={index} className="mb-4">
          {" "}
          {/* Add margin-bottom for spacing */}
          {sentence}
        </div>
      ));
  };
  const developerOffplanProjects = offplanProjects.filter(
    (property) => property.developer_slug === developer.slug
  );
  const renderContent = (detail:any) => {
    switch (detail.type) {
      case "p":
        return <p className="text-xl font-raleway text-white leading-7 font-extralight mb-10"> {detail.title}</p>;
      case "ul":
        return (
          <>
            <h3>{detail.title}</h3>
            <ul className="list-disc pl-5" >
              {detail.content.map((item:any, index:any) => (
                <li className="text-lg text-gray-400 font-raleway" key={index}>{item}</li>
              ))}
            </ul>
          </>
        );
      case "image":
        return <img src={detail.src} alt={detail.alt} className="w-full h-auto" />;
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Hero Section with Background Image */}
      <div
        className="relative h-[80vh] bg-cover bg-center  flex items-end text-white"
        style={{ backgroundImage: `url(${developer.cover})` }}
      >
        {/* Overlay for Smooth Transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black"></div>

        {/* Wrapper for Alignment */}
        <div className="relative max-w-7xl mx-auto w-full  pb-10 z-10">
          <h1 className="text-4xl md:text-7xl uppercase text-metallic-bronze font-extralight font-raleway">
            {developer.name}
          </h1>
          <nav className="py-4 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>{" "}
            &gt;
            <Link href="/developers" className="hover:text-gray-400">
              {" "}
              Developers
            </Link>{" "}
            &gt;
            <span className="text-gray-400 mx-1">{developer.name}</span>
          </nav>
        </div>
      </div>

      {/* Developer Details Section */}
      <section className="p-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          {/* Row: Logo on Left, Founding Year & Office on Right */}
          <div className="flex justify-between items-center mb-6">
            {/* Developer Logo */}
            <img
              src={developer.img}
              alt={developer.name}
              className="h-20 w-auto contrast-200 brightness-200"
            />

            {/* Founding Year & Office Location */}
            <div className="text-right flex gap-8  flex-row">
              {developer.main.map((mains)=>(<div>
                <p className="text-sm font-light text-gray-400">{mains.title}</p>
                <p className="texl-xl font-extralight text-metallic-bronze">
                  {mains.description}
                </p>
              </div>))}

              
            </div>
          </div>

          {/* Developer Description */}
          <h2 className="text-4xl font-extralight font-raleway text-metallic-bronze mb-4">
            {developer.name}
          </h2>
          <p className="text-xl font-raleway leading-7 font-extralight mb-10">
            {breakTextIntoSentences(developer.description)}
          </p>
          <div className="mt-5">
        {developer.details.map((detail, index) => (
          <div key={index} className="my-5">
            {renderContent(detail)}
          </div>
        ))}
      </div>
        </div>
        {developerOffplanProjects.length > 0 && (
          <div className="max-w-7xl flex flex-col w-full mx-auto">
            <h2 className="text-4xl font-extralight mb-10 font-raleway text-metallic-bronze ">
              Latest Projects by {developer.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {developerOffplanProjects.map((property) => (
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
                    <Image
                      src={property.cover_image}
                      alt={property.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-light mb-2 uppercase">
                      {property.title}
                    </h3>
                    <p className="text-sm mb-2 text-gray-400">
                      Type: {property.type}
                    </p>
                    <p className="text-sm text-gray-400">
                      Developer: {property.developer}
                    </p>
                    <Link
                      href={`/project/${property.slug}`}
                      className="text-metallic-bronze mt-2 inline-block"
                    >
                      EXPLORE
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default DeveloperDetails;

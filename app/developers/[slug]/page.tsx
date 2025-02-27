'use client'
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import developerData from "../../../data/developers";
import { useEffect, useState } from "react";

const DeveloperDetails = () => {
  const params = useParams();

  const { slug } = params;

  const developer = developerData.find((dev) => dev.slug === slug);

  if (!developer) {
    return <div className="text-center text-xl font-bold py-20">Developer not found</div>;
  }
  const [selectedImage, setSelectedImage] = useState('');

  const images = [
    '/dev/random1.jpg',
    '/dev/random2.jpg',
    '/dev/random3.jpg', // Add more images here
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
      console.log("Updated:",selectedImage); // Logs when selectedImage changes
    }
  }, [selectedImage])
  const breakTextIntoSentences = (text:string) => {
    return text
      .split(/(?<=[.!?])\s+/)  // Split by sentence-ending punctuation followed by space
      .map((sentence:any, index:any) => (
        <div key={index} className="mb-4">  {/* Add margin-bottom for spacing */}
          {sentence}
        </div>
      ));
  };

  return (
    <div>
      {/* Hero Section with Background Image */}
      <div 
        className="relative h-[80vh] bg-cover bg-center  flex items-end text-white"
        style={{ backgroundImage: `url(${selectedImage})`  }}>
        
        {/* Overlay for Smooth Transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black"></div>

        {/* Wrapper for Alignment */}
        <div className="relative max-w-7xl mx-auto w-full  pb-10 z-10">
          <h1 className="text-4xl md:text-7xl uppercase text-metallic-bronze font-extralight font-raleway">{developer.name}</h1>
          <nav className="py-4 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-400">Home</Link> &gt; 
            <Link href="/developers" className="hover:text-gray-400"> Developers</Link> &gt; 
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
        <div><p className="text-sm font-light text-gray-400">Founded In </p>
        <p className="texl-xl font-extralight text-metallic-bronze">{developer.foundingYear}</p></div>
        
        <div><p className="text-sm font-light text-gray-400">Office </p>
        <p className="texl-xl font-extralight text-metallic-bronze">{developer.mainOffice}</p></div>
        
      </div>
    </div>

    {/* Developer Description */}
    <h2 className="text-4xl font-extralight font-raleway text-metallic-bronze mb-4">
      {developer.name}
    </h2>
    <p className="text-xl font-raleway leading-7 font-extralight mb-10">
    {breakTextIntoSentences(developer.description)}
    </p>
  </div>
</section>

    </div>
  );
};

export default DeveloperDetails;

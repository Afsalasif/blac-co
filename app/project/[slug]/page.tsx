"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import offplanProjects from "@/data/offplan";
import Link from "next/link";
import CustomMap from "@/app/components/CustomMap";

const Page = () => {
  const { slug } = useParams();
  const project = offplanProjects.find((project) => project.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? project?.other_images.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === project?.other_images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <main>
      <div
        className="relative h-[80vh] bg-cover bg-center  flex items-end text-white"
        style={{ backgroundImage: `url(${project.cover_image})` }}
      >
        {/* Overlay for Smooth Transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black"></div>

        {/* Wrapper for Alignment */}
        <div className="relative max-w-7xl mx-auto w-full  pb-10 z-10">
          <h1 className="text-4xl md:text-7xl uppercase text-metallic-bronze font-extralight font-raleway">
            {project.title}
          </h1>
          {/* <nav className="py-4 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-400">Home</Link> &gt; 
            <Link href="/developers" className="hover:text-gray-400"> Developers</Link> &gt; 
            <span className="text-gray-400 mx-1">{developer.name}</span>
          </nav> */}
        </div>
      </div>
      <section className="min-h-screen p-10 flex bg-black w-full">
        <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-x-6  mx-auto relative">
          <div className="max-w-4xl relative flex flex-col gap-y-5">
            {/* Main image display */}
            <div className="max-w-4xl relative h-[530px]">
              <div className="w-full h-4/5 relative">
                <img
                  src={project?.other_images[currentIndex]}
                  alt={`Slide ${currentIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Navigation arrows */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer">
                <button
                  onClick={goToPrevious}
                  className="text-white bg-black bg-opacity-50 p-4 rounded-full"
                  aria-label="Previous slide"
                >
                  ←
                </button>
              </div>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer">
                <button
                  onClick={goToNext}
                  className="text-white bg-black bg-opacity-50 p-4 rounded-full"
                  aria-label="Next slide"
                >
                  →
                </button>
              </div>

              {/* Thumbnail navigation */}
              <div className="w-full h-1/5 flex justify-center items-center bg-black">
                {project?.other_images.map((image, index) => (
                  <div
                    key={index}
                    className={`mx-1 cursor-pointer transition-all duration-300 ${
                      index === currentIndex
                        ? "border-2 border-white"
                        : "opacity-70"
                    }`}
                    onClick={() => goToSlide(index)}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="h-24 w-32 object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Progress bar */}
              <div className="absolute bottom-32 left-0 w-full bg-gray-800 h-1">
                <div
                  className="bg-white h-full transition-all duration-300"
                  style={{
                    width: `${
                      ((currentIndex + 1) / project?.other_images.length) * 100
                    }%`,
                  }}
                ></div>
              </div>
            </div>
            {/* image ends here */}
            {/* desciption starts here  */}
            {/* amenities */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-0  mt-5">
              {project.features.map((amenity, index) => (
                <div
                  key={index}
                  className=" border-l-2 border-r-2 border-[#c08c5a] "
                  style={{
                    borderTop: "2px solid transparent",
                    borderBottom: "2px solid transparent",
                    borderImageSource:
                      "linear-gradient(to right, rgba(192, 140, 90, 1), rgba(192, 140, 90, 0) 50%, rgba(192, 140, 90, 1))",
                    borderImageSlice: 1,
                  }}
                >
                  <div className="p-4 text-center">
                    <h3 className="text-lg text-white font-raleway font-extralight text-metallic-bronze">
                      {amenity}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            {/* main desciption */}
            <div
              className="w-full  border-l-2 border-r-2 px-6 py-10 border-[#c08c5a] "
              style={{
                borderTop: "2px solid transparent",
                borderBottom: "2px solid transparent",
                borderImageSource:
                  "linear-gradient(to right, rgba(192, 140, 90, 1), rgba(192, 140, 90, 0) 50%, rgba(192, 140, 90, 1))",
                borderImageSlice: 1,
              }}
            >
              <h1 className="text-2xl mb-10 text-white uppercase font-raleway font-extralight">
                Lifestyle at {project.title}
              </h1>
              <p className="text-lg font-raleway mb-20 text-gray-400">
                {project.description}
              </p>
              <h1 className="text-2xl mb-10 text-white uppercase font-raleway font-extralight">
                Building highlights
              </h1>
              <p className="text-lg font-raleway mb-10 text-gray-400">
                {project.title} sets the benchmark for luxurious living with its
                array of world-class amenities and services. They include:
              </p>
              <ul className="list-disc pl-5">
                {project.building_highlights.map((amenity, index) => (
                  <li key={index} className="text-lg text-gray-400">
                    {amenity}
                  </li>
                ))}
              </ul>
              <h1 className="text-2xl mt-20 mb-10 text-white uppercase font-raleway font-extralight">
                Attractions around
              </h1>
              <ul className="list-disc pl-5">
                {project.attractions_nearby.map((amenity, index) => (
                  <li key={index} className="text-lg text-gray-400">
                    {amenity}
                  </li>
                ))}
              </ul>
              <p className="text-lg font-raleway mt-10 text-gray-400">
                Contact our real estate specialists for more information about
                buying a property in {project.title}. Invest in {project.title}{" "}
                today and indulge in a world of elegant refinement!
              </p>
            </div>
            {/* payement */}
            <div
              className="flex flex-col gap-2 border-l-2  text-white w-full border-r-2 px-6 py-10 mb-10 border-[#c08c5a]"
              style={{
                borderTop: "2px solid transparent",
                borderBottom: "2px solid transparent",
                borderImageSource:
                  "linear-gradient(to right, rgba(192, 140, 90, 1), rgba(192, 140, 90, 0) 50%, rgba(192, 140, 90, 1))",
                borderImageSlice: 1,
              }}
            >
              <h1 className="text-4xl mx-auto text-metallic-bronze uppercase font-raleway font-extralight mb-10">
                {" "}
                payement plan
              </h1>
              <div className=" flex justify-between flex-row">
                <div className="flex flex-col justify-between items-center">
                  <h1 className="text-2xl font-raleway text-metallic-bronze uppercase">
                    {" "}
                    {project.payment_plan.on_booking.description}
                  </h1>
                  <h1 className="text-2xl text-gray-400 ">
                    {" "}
                    {project.payment_plan.on_booking.percentage}%
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-2xl font-raleway text-metallic-bronze uppercase">
                    {" "}
                    {project.payment_plan.during_construction.description}
                  </h1>
                  <h1 className="text-2xl text-gray-400 ">
                    {" "}
                    {project.payment_plan.during_construction.percentage}%
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-2xl font-raleway text-metallic-bronze uppercase">
                    {" "}
                    {project.payment_plan.on_handover.description}
                  </h1>
                  <h1 className="text-2xl text-gray-400 ">
                    {" "}
                    {project.payment_plan.on_handover.percentage}%
                  </h1>
                </div>
              </div>
            </div>
            <div className="border-l-2 border-r-2  border-[#c08c5a]"  style={{
                borderTop: "2px solid transparent",
                borderBottom: "2px solid transparent",
                borderImageSource:
                  "linear-gradient(to right, rgba(192, 140, 90, 1), rgba(192, 140, 90, 0) 50%, rgba(192, 140, 90, 1))",
                borderImageSlice: 1,
              }} >
              <CustomMap lat={project.latitude} lon={ project.longitude} />
            </div>
          </div>
          {/*  */}
          {/* leftcontent ends here */}
          {/*  */}
          {/* right secion */}
          <div className="max-w-3xl  h-fit md:sticky top-20 w-full  ">
            <div
              className="w-full border-l-2 border-r-2  mb-10 border-[#c08c5a] p-5 "
              style={{
                borderTop: "2px solid transparent",
                borderBottom: "2px solid transparent",
                borderImageSource:
                  "linear-gradient(to right, rgba(192, 140, 90, 1), rgba(192, 140, 90, 0) 50%, rgba(192, 140, 90, 1))",
                borderImageSlice: 1,
              }}
            >
              <h1 className="text-2xl uppercase text-gray-400">Quick info</h1>
              <div className="w-full h-[1px] mb-5 bg-gray-500"></div>
              <div className="flex gap-x-5  ">
                <p className="text-lg text-gray-400 mb-5">Project: </p>
                <p className="text-lg text-white mb-5"> {project.title}</p>
              </div>
              <div className="flex gap-x-5 ">
                <p className="text-lg text-gray-400 mb-5">Developer: </p>
                <Link
                  href={`/developers/${project.developer_slug}`}
                  className="text-lg text-white mb-5 cursor-pointer"
                >
                  {project.developer}
                </Link>
              </div>
              <div className="flex gap-x-5 ">
                <p className="text-lg text-gray-400 mb-5">Type: </p>
                <p className="text-lg text-white mb-5"> {project.type}</p>
              </div>
              {project.handover_date?
              <div className="flex gap-x-5 ">
                <p className="text-lg text-gray-400 mb-5">Handover date: </p>
                <p className="text-lg text-white mb-5">
                  {" "}
                  {project.handover_date}
                </p>
              </div>:<></>}
              <div className="flex gap-x-5 ">
                <p className="text-lg text-gray-400 mb-5">Starting Price:</p>
                <p className="text-lg text-white mb-5">
                  {" "}
                  {project.price_range}
                </p>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;

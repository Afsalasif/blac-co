import React from "react";
import developerData from "../../data/developers";

const Page = () => {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative h-screen w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/dev/dev1.jpg')" }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black"></div>

        {/* Title */}
        <div className="absolute bottom-20  left-1/2 transform -translate-x-1/2 text-white hover:text-[#c08c5a] text-4xl md:text-7xl uppercase font-extralight font-raleway">
          Developers
        </div>
      </div>

      {/* Developers Grid Section */}
      <section className="relative bg-black py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {developerData.map((developer, index) => (
              <a
                key={index}
                href={`/developers/${developer.slug}`} 
                className="flex cursor-pointer justify-center items-center bg-gray-900 rounded-lg h-64 border-l-2 border-r-2 border-[#c08c5a] bg-black/70"
                style={{
                  borderTop: "2px solid transparent",
                  borderBottom: "2px solid transparent",
                  borderImageSource:
                    "linear-gradient(to right, rgba(192, 140, 90, 1), rgba(192, 140, 90, 0) 50%, rgba(192, 140, 90, 1))",
                  borderImageSlice: 1,
                }}
              >
                <img
                  loading="lazy"
                  src={developer.img}
                  alt={developer.name}
                  className="w-full h-full contrast-150 brightness-200 object-cover"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;

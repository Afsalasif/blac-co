import React from "react";

const Visa = () => {
  return (
    <div
      className="relative min-h-screen  flex flex-col items-center justify-center px-4"
      style={{
        backgroundImage: "url('img/binagti.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        // filter: "grayscale(90%)",
      }}
    >
      <div
        className="w-full bg-gradient-to-b flex pt-5 justify-center items-center from-black via-black/90 to-black absolute h-full  border-t-[1px] border-b-[1px] "
        style={{
          borderImage:
            "linear-gradient(to right, transparent 5%, #4B5563 30%, #b08d57 50%, #4B5563 70%, transparent 95%) 1",
        }}
      >
        <div className="max-w-6xl flex flex-col gap-y-6  mx-auto">
          <h1 className="text-6xl text-center  font-extralight font-raleway text-metallic-bronze uppercase mb-6">
          Visa & Residency in Dubai 
          </h1>
          <h2 className="text-4xl font-extralight font-raleway text-metallic-bronze mb-4">
          Understanding Dubai Residency & Benefits Through Real Estate
          </h2>
          <p className="text-lg md:text-xl font-raleway text-white font-extralight mb-6">
          Dubai, one of the world&apos;s most attractive destinations, offers a range of residency options for
investors, entrepreneurs, and individuals who seek to live, work, and invest in the UAE. At
Blac & Co Real Estate, we want to educate our clients about the various residency options
available, especially for those who wish to invest in Dubai&apos;s thriving real estate market.
          </p>
          <p className="text-lg md:text-xl text-white font-raleway font-extralight mb-6">
          Dubai offers several residency programs for those looking to take advantage of its growing
real estate market. Whether you&apos;re a property investor, entrepreneur, or professional, Dubai
has become an ideal location for individuals seeking long-term residency.
          </p>

          <h2 className="text-4xl font-extralight font-raleway text-metallic-bronze mb-4">
          Golden Visa  An Exclusive Opportunity
          </h2>
          <p className="text-lg md:text-xl text-white font-raleway font-extralight mb-6">
          The Dubai Golden Visa is a long-term residency visa introduced by the UAE government to
attract global investors, entrepreneurs, skilled professionals, and their families to reside in the
UAE for up to 10 years. The Golden Visa is particularly attractive to real estate investors
who wish to secure their residency by investing in Dubai's real estate market.
          </p>

          {/* <ul className="list-disc list-inside text-xl font-raleway font-extralight mb-6">
            <li>Sold properties worth 200 million AED in our first year.</li>
            <li>
              Achieved 450 million AED in property sales in the second year.
            </li>
            <li>Targeting 1 billion AED in sales for 2025.</li>
          </ul> */}

          {/* <p className="text-xl font-raleway font-extralight mb-10">
            Our team consists of 50 highly skilled real estate experts, each
            with a minimum of 5 years of experience in Dubai&apos;s real estate
            market. With over 100 years of combined experience, we are among the
            most knowledgeable in the industry.
          </p> */}

          
        </div>
      </div>
    </div>
  );
};

export default Visa;

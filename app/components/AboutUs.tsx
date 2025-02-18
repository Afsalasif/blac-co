import { DivIcon } from "leaflet";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="bg-black  flex justify-center items-center text-white py-20 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl  mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            {/* Left Content */}
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl lg:text-6xl uppercase font-raleway font-extralight text-transparent bg-clip-text  text-metallic-bronze tracking-widest mb-8">
                about us
              </h2>

              <p className="text-xl md:text-xl mb-8 font-raleway tracking-wider text-left font-extralight leading-relaxed">
                Welcome to Blac & Co Real Estate, a premier real estate
                consultancy firm in Dubai. Founded in 2023 by Muhammad Qasim
                Zulfiqar, a renowned real estate developer in Pakistan, Blac & Co brings unparalleled
                professionalism, expertise, and trust to the Dubai real estate
                market
                <br />
                <br />
                Our mission is simple to offer world-class services that help
                individuals, investors, and businesses make the best decisions
                in the real estate market. Whether you&apos;re buying your dream
                home, selling your property, or seeking an ideal investment,
                Blac & Co is committed to making your real estate journey
                seamless and successful.
                <br />
                <br />
                {/* We have implemented all these in <span className='uppercase text-metallic-bronze font-light'>Blac & co</span>. */}
              </p>

              <button className="bg-transparent hover:bg-transparent text-metallic-bronze font-raleway font-light border-2 border-[#b08d57] px-8 py-4 rounded-lg transition-all duration-300 text-lg  hover:text-metallic-bronze hover:border-metallic-bronze">
                Enquire now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* moreabout us  */}
      <section className="relative">
        {/* <div className="w-full  flex overflow-hidden relative">
          {/* Overlay inside the Hero Section */}
        {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-black/70 to-black" /> */}

        {/* Agent Images */}

        {/* </div> */}

        {/* Big Title at the Bottom */}
        {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-6xl font-bold z-10">
          <h1 className="text-7xl uppercase font-raleway font-extralight">Your Dream </h1>
        </div> */}
      </section>

      <section className="bg-black text-white min-h-screen py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* <h1 className="text-6xl text-center  font-extralight font-raleway text-metallic-bronze uppercase mb-6">About Us</h1> */}
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

      {/* netx section service */}
      <section className="bg-black text-white py-16">
        <div
          className="w-full md:mt-44 bg-gradient-to-r from-black via-[#1A1A1A] to-black border-t-[1px] border-b-[1px] p-10"
          style={{
            borderImage:
              "linear-gradient(to right, transparent 5%, #4B5563 30%, #b08d57 50%, #4B5563 70%, transparent 95%) 1",
            maskImage:
              "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
          }}
        >
          <div className="max-w-6xl mt-28 mx-auto text-center">
            <h1 className="text-6xl text-center  font-extralight font-raleway text-metallic-bronze uppercase mb-12">
              Our Services
            </h1>
          </div>

          <div className="max-w-6xl mx-auto space">
            {/* Consulting */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
                <Image
                  src="/os/se3.webp"
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
                <h3 className="text-4xl font-extralight font-raleway text-metallic-bronze mb-4">
                  Buying & Selling
                </h3>
                <ul className="list-disc list-inside text-xl font-raleway font-extralight mb-6">
                  Whether you're purchasing your dream home or selling a
                  property, our expert team will ensure a smooth and successful
                  transaction. We offer strategic advice and personalized
                  services to help you make informed decisions and secure the
                  best deals in the Dubai real estate market.
                </ul>
              </div>
            </div>

            {/* Selecting and Viewing Property */}
            <div className="flex flex-col-reverse md:flex-row items-center">
              <div className="md:w-1/2 p-6">
                <h2 className="text-6xl text-metallic-bronze font-extralight font-raleway mb-2">
                  2
                </h2>
                <h3 className="text-4xl font-extralight font-raleway text-metallic-bronze mb-4">
                  Leasing
                </h3>
                <ul className="list-disc list-inside text-xl font-raleway font-extralight mb-6">
                  If you&apos;re looking for the perfect rental property, Blac &
                  Co offers comprehensive leasing services for both residential
                  and commercial properties. Our team works with you to find
                  spaces that suit your budget and needs while making the
                  leasing process seamless and stressfree.
                </ul>
              </div>
              <div className="md:w-1/2 ">
                <Image
                  src="/os/se4.webp"
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
                  src="/os/se1.webp"
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
                <h3 className="text-4xl font-extralight font-raleway text-metallic-bronze mb-4">
                  Mortgages
                </h3>
                <ul className="list-disc list-inside text-xl font-raleway font-extralight mb-6">
                  Blac & Co partners with leading financial institutions in
                  Dubai to offer clients the best mortgage solutions available
                  in the market. We assist buyers in navigating the mortgage
                  process and securing financing that suits their budget,
                  helping them make their property ownership dreams a reality.
                </ul>
              </div>
            </div>

            {/* Selecting and Viewing Property */}
            <div className="flex flex-col-reverse md:flex-row items-center">
              <div className="md:w-1/2 p-6">
                <h2 className="text-6xl text-metallic-bronze font-extralight font-raleway mb-2">
                  4
                </h2>
                <h3 className="text-4xl font-extralight font-raleway text-metallic-bronze mb-4">
                  Holiday Homes
                </h3>
                <ul className="list-disc list-inside text-xl font-raleway font-extralight mb-6">
                  Dubai is a global travel destination, and Blac & Co offers
                  exclusive holiday homes for shortterm stays. Whether you&apos;re
                  visiting for leisure or business, our fully furnished,
                  prime-location properties offer the perfect base for your stay
                  in Dubai.
                </ul>
              </div>
              <div className="md:w-1/2 ">
                <Image
                  src="/os/se2.webp"
                  alt="Selecting and Viewing Property"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* next */}
      <section
        className="bg-black text-white mt-28  overflow-hidden mb-20 px-6 md:px-12 lg:px-20  relative  flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('img/mji.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          // filter: "grayscale(50%)",
        }}
      >
        <div className="h-full absolute w-full bg-gradient-to-b from-black via-black to-black "></div>
        <div className="relative max-w-6xl p-3 mx-auto">
          <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-gradient"></div>

          {/* Bottom-right border */}
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-gradient"></div>
          <h1 className="text-6xl text-center  font-extralight  font-raleway text-metallic-bronze uppercase mb-6">
            off plan properties
          </h1>
          <p className="text-xl font-raleway font-extralight mb-6">
            Off-plan properties are those that are sold before construction is
            completed. These properties are often sold at lower prices compared
            to completed properties, offering buyers the opportunity to benefit
            from price appreciation once the development is finished. Off-plan
            investments can provide substantial returns, especially if the
            property is located in a highdemand area.
          </p>
          <p className="text-xl font-raleway font-extralight mb-6">
            At <span className="text-metallic-bronze"> Blac & Co</span>, we
            offer exclusive access to off-plan properties from some of the most
            reputable developers in Dubai. Our expert team guides clients
            through the entire buying process, providing market insights,
            potential return on investment, and helping them secure the best
            deals on new developments.
          </p>
          <h1 className="text-6xl text-center  font-extralight mt-20 font-raleway text-metallic-bronze uppercase mb-6">
            Secondary market properties
          </h1>
          <p className="text-xl font-raleway font-extralight mb-6">
            Secondary market properties are pre-owned properties that are ready
            for immediate occupancy or rental. These properties are typically
            sold at market value, offering buyers a chance to acquire completed
            homes or commercial spaces without waiting for construction. For
            investors, secondary market properties can provide more immediate
            returns and are often viewed as a more stable investment.
          </p>
          <p className="text-xl font-raleway font-extralight mb-6">
            <span className="text-metallic-bronze"> Blac & Co</span>specializes
            in both off-plan and secondary market properties, ensuring that our
            clients have access to a wide range of options based on their needs
            and investment goals
          </p>
        </div>
      </section>
      {/*  */}
    </>
  );
};

export default AboutUs;

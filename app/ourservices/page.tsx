import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const page = () => {
  return (
    // conside this as the about us section or page whatever
    <div>
        <Navbar />
      <section className="bg-black text-white py-16">
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
                Whether you're purchasing your dream home or selling a property,
                our expert team will ensure a smooth and successful transaction.
                We offer strategic advice and personalized services to help you
                make informed decisions and secure the best deals in the Dubai
                real estate market.
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
                spaces that suit your budget and needs while making the leasing
                process seamless and stressfree.
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
                Blac & Co partners with leading financial institutions in Dubai
                to offer clients the best mortgage solutions available in the
                market. We assist buyers in navigating the mortgage process and
                securing financing that suits their budget, helping them make
                their property ownership dreams a reality.
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
                exclusive holiday homes for shortterm stays. Whether you’re
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
                  <div className="text-white text-center md:text-left md:w-1/2">
                    <h2 className="text-xl md:text-2xl font-semibold">
                      Access our Sevices
                    </h2>
                    <p className="text-sm md:text-base text-gray-300 mt-2">
                      Fill in the form and our agent will contact you shortly.
                    </p>
                    <button className="mt-4 px-4 py-2 border border-[#b08d57] text-metallic-bronze rounded-md hover:bg-orange-500 hover:text-black transition">
                      Enquire Now
                    </button>
                  </div>
          
                  {/* Right Section: Image (Adjusts Responsively) */}
                  <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
                    <Image
                      src="/img/im.png" // Replace with the correct path
                      alt="Skyline"
                      width={300} // Adjust size for responsiveness
                      height={150}
                      className="opacity-90 absolute bottom-0 lg:right-0"
                    />
                  </div>
                </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;

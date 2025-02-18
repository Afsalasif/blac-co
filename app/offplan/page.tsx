import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const page = () => {
  return (
    <div className="relative w-full h-screen">
        <section>
            <Navbar />
        </section>
  {/* Background Section */}
  <section className="w-full h-[70%] bg-[url('/img/mji.jpg')] bg-cover bg-center relative">
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black"></div>

    {/* Content (Place any text or buttons inside this div) */} 
    {/* <div className="relative text-metallic-bronze z-10 flex items-end justify-center font-raleway font-extralight text-8xl h-full uppercase pb-10 ">
      off plan 
    </div> */}
  </section>
  <section className="bg-black text-white min-h-screen py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl text-center  font-extralight mt-20 font-raleway text-metallic-bronze uppercase mb-6">off plan properties</h1>
          <p className="text-xl font-raleway font-extralight mb-6">
          Off-plan properties are those that are sold before construction is completed. These
properties are often sold at lower prices compared to completed properties, offering buyers
the opportunity to benefit from price appreciation once the development is finished. Off-plan
investments can provide substantial returns, especially if the property is located in a highdemand area.
          </p>
          <p className="text-xl font-raleway font-extralight mb-6">
          At <span className='text-metallic-bronze'> Blac & Co</span>, we offer exclusive access to off-plan properties from some of the most
reputable developers in Dubai. Our expert team guides clients through the entire buying
process, providing market insights, potential return on investment, and helping them secure
the best deals on new developments.
          </p>
          <h1 className="text-6xl text-center  font-extralight mt-20 font-raleway text-metallic-bronze uppercase mb-6">Secondary market properties</h1>
          <p className="text-xl font-raleway font-extralight mb-6">
          Secondary market properties are pre-owned properties that are ready for immediate
occupancy or rental. These properties are typically sold at market value, offering buyers a
chance to acquire completed homes or commercial spaces without waiting for construction.
For investors, secondary market properties can provide more immediate returns and are often
viewed as a more stable investment.
          </p>
          <p className="text-xl font-raleway font-extralight mb-6">
          <span className='text-metallic-bronze'> Blac & Co</span>specializes in both off-plan and secondary market properties, ensuring that our
clients have access to a wide range of options based on their needs and investment goals
          </p>

        </div>
  </section>
  <section><Footer /></section>
</div>


   
  )
}

export default page

import React from 'react'

const AboutUs = () => {
  return (
    <div className='bg-black min-h-screen flex justify-center items-center text-white py-20 px-4 sm:px-8 md:px-16 lg:px-24'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col lg:flex-row gap-12 lg:gap-24'>
          {/* Left Content */}
          <div className='flex-1'>
            <h2 className='text-4xl md:text-5xl lg:text-6xl uppercase font-raleway font-extralight text-transparent bg-clip-text  text-metallic-bronze tracking-widest mb-8'>about us</h2>
            
            <p className='text-lg md:text-xl mb-8 font-raleway tracking-wider text-left font-extralight leading-relaxed'>
              We understand the fact that modern people strive for maximum comfort.
              <br /><br />
              A harmonious environment, communication with professionals, accurate and timely information, 
              commitment, reliable and convenient technological solutions that save the resources 
              that are important to them.
              <br /><br />
              We have implemented all these in <span className='uppercase text-metallic-bronze font-light'>Blac & co</span>.
            </p>

            <button className="bg-transparent hover:bg-transparent text-metallic-bronze font-raleway font-light border-2 border-[#b08d57] px-8 py-4 rounded-lg transition-all duration-300 text-lg  hover:text-metallic-bronze hover:border-metallic-bronze">
  Enquire now
</button>
          </div>

          {/* Right Stats */}
          {/* <div className='flex-1 flex flex-col justify-center space-y-12'>
            <div className='flex items-center gap-6'>
              <span className='text-5xl font-bold text-blue-500'>5000+</span>
              <span className='text-xl'>OFFERS IN THE DATABASE</span>
            </div>
            
            <div className='flex items-center gap-6'>
              <span className='text-5xl font-bold text-blue-500'>30+</span>
              <span className='text-xl'>LANGUAGES</span>
            </div>
            
            <div className='flex items-center gap-6'>
              <span className='text-5xl font-bold text-blue-500'>500+</span>
              <span className='text-xl'>SPECIALISTS</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default AboutUs
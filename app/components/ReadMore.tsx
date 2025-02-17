'use client'
import React, { useState } from 'react';

const ReadMore = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className='bg-black w-full'>
        <div className="bg-black  mb-5 text-white p-6 border border-gray-700 max-w-6xl mx-auto relative">
        <h2 className="text-3xl font-raleway font-semibold">
  BLAC-CO CAPITAL – A REAL ESTATE AGENCY IN DUBAI
</h2>
<p className="mt-2 text-lg">
  BLAC-CO CAPITAL is a professional real estate agency involved in the sale and rent of properties in Dubai, UAE. 
  We process our clients' requests promptly in a CRM system, so all your questions will be answered timely.
</p>

{expanded && (
  <p className="mt-2 text-lg mb-3">
    Our competent team members are always available and happy to consult with you on property selection at any time.
    Our team consists of experts from over 40 nationalities, speaking 10 languages, allowing us to communicate with clients, 
    understand their needs, and respond to any requests. With over 5200 real estate professionals on our team, we are passionate 
    about improving our professional skills.
  </p>
)}

      

      {/* Bottom border with button inside */}
      <div className="border-t border-gray-600 mt-4 flex justify-start">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-yellow-500 hover:underline py-2"
        >
          {expanded ? 'READ LESS' : 'READ MORE'}
        </button>
      </div>
    </div>
    </div >
    
  );
};

export default ReadMore;

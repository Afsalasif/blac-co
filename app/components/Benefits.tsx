import React from 'react';

const Benefits = () => {
  return (
    <div className="bg-black min-h-screen flex mt-10 px-4 w-full">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl md:max-w-6xl flex flex-col gap-y-6 mx-auto">
          <h2 className="text-3xl md:text-4xl font-extralight font-raleway text-metallic-bronze mb-4">
            Eligibility for Golden Visa through Real Estate Investment:
          </h2>
          <p className="text-lg md:text-xl font-raleway text-white font-extralight mb-6">
            One of the most popular ways to qualify for the Golden Visa is through real estate investment. 
            To apply for the Dubai Golden Visa through real estate, investors must meet the following criteria:
          </p>

          <ul className="list-disc list-inside text-lg md:text-xl font-raleway text-white font-extralight mb-6">
            <li>Investment Threshold: Investors must purchase property in Dubai worth at least AED 2 million.</li>
            <li>Types of Property: Both off-plan and ready-to-move-in properties qualify for the Golden Visa program.</li>
            <li>Ownership: The investor must own the property for at least three years before applying for the visa.</li>
            <li>Exemptions: Certain high-value projects or investments may allow an investor to apply for the Golden Visa without the 3-year ownership condition.</li>
          </ul>

          <h2 className="text-3xl md:text-4xl font-extralight font-raleway text-metallic-bronze mb-4">
            Key Benefits of the Golden Visa:
          </h2>

          <ul className="list-disc list-inside text-lg md:text-xl font-raleway text-white font-extralight mb-6">
            <li>Long-Term Residency: The visa allows holders to reside in Dubai for up to 10 years with the possibility of renewal.</li>
            <li>Business Opportunities: Golden Visa holders can operate and invest in businesses with fewer restrictions.</li>
            <li>Family Sponsorship: The visa covers the applicant's spouse, children, and sometimes parents.</li>
            <li>No Local Sponsor Required: Golden Visa holders do not require a local sponsor to operate businesses in the UAE.</li>
            <li>Priority Processing: The Golden Visa provides faster processing of residency applications.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Benefits;

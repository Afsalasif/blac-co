'use client'
import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const CareerPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contact: '',
    email: '',
    gender: '',
    maritalStatus: '',
    nationality: '',
    languages: '',
    currentLocation: '',
    designation: '',
    visaStatus: '',
    workExperience: '',
    dubaiWorkExperience: '',
    currentSalary: '',
    expectedSalary: '',
    joinDate: '',
    drivingLicense: '',
    passport: null,
    picture: null,
    cv: null
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e:any) => {
    const { name, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: files[0]
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <main>
        <Navbar  />
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto py-16 px-4" >
        <h1 className="text-4xl lg:text-6xl font-extralight font-raleway  mt-20 text-center mb-16">WORK WITH US</h1>
        
        <div className="max-w-4xl mx-auto mb-16">
          <p className="mb-6">
            Blac CO strives to build a team of talented professionals and is passionate about helping them do what they love
            throughout their career here. We are always on the lookout for enthusiastic and driven people, offering countless
            prospects and professional growth.
          </p>
          
          <p>
            Blac CO is always interested in motivated people on its team. Send your CV and we will contact you if we find a
            suitable position.
          </p>
        </div>
        
        {/* Form Section */}
        <div className="max-w-4xl mx-auto border-l-2 border-r-2 border-[#c08c5a]   p-8"
        style={{
            borderTop: "2px solid transparent",
            borderBottom: "2px solid transparent",
            borderImageSource:
              "linear-gradient(to right, rgba(192, 140, 90, 1), rgba(192, 140, 90, 0) 50%, rgba(192, 140, 90, 1))",
            borderImageSlice: 1,
          }}>
          <h2 className="text-3xl font-bold text-center mb-2">SEND RESUME</h2>
          <p className="text-center mb-8">Let Us Know About Your Experience With Us</p>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Personal Information */}
              <div className="space-y-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="w-full bg-transparent border-b border-[#c08c5a]  py-2 px-3 focus:outline-none focus:border-white"
                  onChange={handleChange}
                  required
                />
                
                <input
                  type="text"
                  name="contact"
                  placeholder="Contact"
                  className="w-full bg-transparent border-b border-[#c08c5a]  py-2 px-3 focus:outline-none focus:border-white"
                  onChange={handleChange}
                  required
                />
                
                <select
                  name="gender"
                  className="w-full bg-black border-b border-[#c08c5a]  py-2 px-3 focus:outline-none focus:border-white"
                  onChange={handleChange}
                  required
                >
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                
                <input
                  type="text"
                  name="nationality"
                  placeholder="Nationality"
                  className="w-full bg-transparent border-b border-[#c08c5a]  py-2 px-3 focus:outline-none focus:border-white"
                  onChange={handleChange}
                  required
                />
                
                <input
                  type="text"
                  name="currentLocation"
                  placeholder="Current Location"
                  className="w-full bg-transparent border-b border-[#c08c5a]  py-2 px-3 focus:outline-none focus:border-white"
                  onChange={handleChange}
                  required
                />
                
                <input
                  type="text"
                  name="visaStatus"
                  placeholder="Visa Status"
                  className="w-full bg-transparent border-b border-[#c08c5a]  py-2 px-3 focus:outline-none focus:border-white"
                  onChange={handleChange}
                  required
                />
                
                <input
                  type="text"
                  name="dubaiWorkExperience"
                  placeholder="Years of Work Experience in Dubai (if any)"
                  className="w-full bg-transparent border-b border-[#c08c5a]  py-2 px-3 focus:outline-none focus:border-white"
                  onChange={handleChange}
                />
                
                <input
                  type="text"
                  name="expectedSalary"
                  placeholder="Salary Expectation"
                  className="w-full bg-transparent border-b border-[#c08c5a]  py-2 px-3 focus:outline-none focus:border-white"
                  onChange={handleChange}
                  required
                />
                
                <select
                  name="drivingLicense"
                  className="w-full bg-black border-b border-[#c08c5a]  py-2 px-3 focus:outline-none focus:border-white"
                  onChange={handleChange}
                  required
                >
                  <option value="">Hold Driving License in Dubai?</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              
              {/* Professional Information */}
              <div className="space-y-4">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-full bg-transparent border-b border-[#c08c5a]  py-2 px-3 focus:outline-none focus:border-white"
                  onChange={handleChange}
                  required
                />
                
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full bg-transparent border-b border-[#c08c5a]  py-2 px-3 focus:outline-none focus:border-white"
                  onChange={handleChange}
                  required
                />
                
                <select
                  name="maritalStatus"
                  className="w-full bg-black border-b border-[#c08c5a]  py-2 px-3 focus:outline-none focus:border-white"
                  onChange={handleChange}
                  required
                >
                  <option value="">Marital Status</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="widowed">Widowed</option>
                </select>
                
                <input
                  type="text"
                  name="languages"
                  placeholder="Language/s"
                  className="w-full bg-transparent border-b border-[#c08c5a]  py-2 px-3 focus:outline-none focus:border-white"
                  onChange={handleChange}
                  required
                />
                
                <input
                  type="text"
                  name="designation"
                  placeholder="Current Designation"
                  className="w-full bg-transparent border-b border-[#c08c5a]  py-2 px-3 focus:outline-none focus:border-white"
                  onChange={handleChange}
                  required
                />
                
                <input
                  type="text"
                  name="workExperience"
                  placeholder="Years of Work Experience"
                  className="w-full bg-transparent border-b border-[#c08c5a]  py-2 px-3 focus:outline-none focus:border-white"
                  onChange={handleChange}
                  required
                />
                
                <input
                  type="text"
                  name="currentSalary"
                  placeholder="Current / Last Salary"
                  className="w-full bg-transparent border-b border-[#c08c5a]  py-2 px-3 focus:outline-none focus:border-white"
                  onChange={handleChange}
                  required
                />
                
                <input
                  type="text"
                  name="joinDate"
                  placeholder="When Can You Join"
                  className="w-full bg-transparent border-b border-[#c08c5a]  py-2 px-3 focus:outline-none focus:border-white"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            {/* File Uploads */}
            <div className="space-y-6 mb-8">
              <div className="border border-[#c08c5a]  p-4">
                <label className="block mb-2 text-gray-300">Passport Upload</label>
                <input
                  type="file"
                  name="passport"
                  className="w-full text-gray-300"
                  onChange={handleFileChange}
                  required
                />
              </div>
              
              <div className="border border-[#c08c5a]  p-4">
                <label className="block mb-2 text-gray-300">Picture Upload</label>
                <input
                  type="file"
                  name="picture"
                  accept="image/*"
                  className="w-full text-gray-300"
                  onChange={handleFileChange}
                  required
                />
              </div>
              
              <div className="border border-[#c08c5a]  p-4">
                <label className="block mb-2 text-gray-300">CV Upload</label>
                <input
                  type="file"
                  name="cv"
                  className="w-full text-gray-300"
                  onChange={handleFileChange}
                  required
                />
              </div>
            </div>
            
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="border border-gray-600 px-12 py-2 hover:bg-white hover:text-black transition duration-300"
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer />
    </main>
  );
};

export default CareerPage;
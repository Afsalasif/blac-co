import React from "react";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { MdOutlineCall } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 px-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Logo Section */}
        <div className="relative flex justify-center items-center h-24 w-full mb-4">
          <img
            src="img/logo1.png"
            alt="BLAC-CO Logo"
            className="h-20 w-auto object-contain"
          />
        </div>

        {/* Links & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-sm">
          {/* Left Section - Property Links */}
          <div className="flex flex-col gap-2">
            <a href="#" className="hover:text-[#c08c5a]">Apartments</a>
            <a href="#" className="hover:text-[#c08c5a]">Penthouses</a>
            <a href="#" className="hover:text-[#c08c5a]">Villas</a>
            <a href="#" className="hover:text-[#c08c5a]">Townhouses</a>
          </div>

          {/* Middle Section - Other Links */}
          <div className="flex flex-col gap-2">
            <a href="#" className="hover:text-[#c08c5a]">Off-Plan</a>
            <a href="#" className="hover:text-[#c08c5a]">Catalogs</a>
            <a href="#" className="hover:text-[#c08c5a]">Developers</a>
            <a href="#" className="hover:text-[#c08c5a]">BLAC & CO</a>
          </div>

          {/* Right Section - Contact Info */}
          <div className="text-right">
            <h3 className="text-lg font-semibold">CONTACTS</h3>
            <p>Dubai, UAE</p>
            <p>Office # 2108, Conrad Business Tower Dubai. </p>

            {/* Social Icons */}
            <div className="flex justify-center sm:justify-end gap-4 mt-3 text-[#c08c5a]">
              <HiMail className="cursor-pointer hover:text-white" size={18} />
              <FaFacebookF className="cursor-pointer hover:text-white" size={18} />
              <MdOutlineCall className="cursor-pointer hover:text-white" size={18} />
              <FaLinkedinIn className="cursor-pointer hover:text-white" size={18} />
              <FaWhatsapp className="cursor-pointer hover:text-white" size={18} />
              <FaYoutube className="cursor-pointer hover:text-white" size={18} />
            </div>

            {/* Call Us Button */}
            <button className="border border-[#c08c5a] text-[#c08c5a] py-2 px-6 mt-4 hover:bg-[#c08c5a] hover:text-black transition">
              CALL US
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between w-full text-xs text-gray-500 mt-8">
          <p className="text-center sm:text-left">Black & CO ©2025 All Rights Reserved</p>
          <div className="flex justify-center sm:justify-end gap-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-[#c08c5a]">Terms of Use</a>
            <a href="#" className="hover:text-[#c08c5a]">Privacy Policy</a>
            <a href="#" className="hover:text-[#c08c5a]">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

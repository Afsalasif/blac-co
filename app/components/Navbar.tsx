"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full  top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black bg-opacity-40 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto  px-6 py-4">
        <div className="flex w-full items-center justify-between">
          {/* Logo */}
          {/* Logo */}
         {/* Logo */}
<div className="relative flex items-center h-14">
  <a href="/">  <img
    src="img/logo1.png"
    alt="BLAC-CO Logo"
    className="h-24 w-auto object-contain scale-150 -mt-2"
  /></a>

</div>


          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex font-raleway font-extralight space-x-8">
              <NavItem href="#" text="Buy" />
              
              <NavItem href="#services" text="Rent" />
              <NavItem href="#agents" text="Sell" />
              <NavItem href="/aboutus" text="About Us" />
              <NavItem href="#property-list" text="Property List" />
              <NavItem href="#list-property" text="Your Property" />
              <NavItem href="#off-plan" text="Off Plan Blogs" />
              <NavItem href="/ebroker" text="E-Broker" />
              <NavItem href="/contactus" text="Contact Us" />
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-yellow-400 focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <></>
                // <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-screen w-1/2 bg-white bg-opacity-10 backdrop-blur-lg shadow-lg transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-end p-6">
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-yellow-400 text-3xl mb-4"
            >
              &times;
            </button>
            {/* Menu Items */}
            <ul className="flex flex-col font-raleway font-extralight space-y-4 text-right">
              <MobileNavItem href="#" text="Home" />
              <MobileNavItem href="#about" text="About Us" />
              <MobileNavItem href="#services" text="Services" />
              <MobileNavItem href="#agents" text="Agents" />
              <MobileNavItem href="#property-list" text="Property List" />
              <MobileNavItem href="#list-property" text="Your Property" />
              <MobileNavItem href="#off-plan" text="Off Plan Blogs" />
              <MobileNavItem href="#e-broker" text="E-Broker" />
              <MobileNavItem href="#contact" text="Contact Us" />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ href, text }: any) => (
  <li>
    <a
      href={href}
      className="text-transparent bg-clip-text text-metallic-bronze transition-colors duration-300 text-sm font-medium"
    >
      {text}
    </a>
  </li>
);

const MobileNavItem = ({ href, text }: any) => (
  <li>
    <a
      href={href}
      className="block px-4 py-2 text-transparent bg-clip-text text-metallic-bronze rounded-lg transition-all duration-300"
    >
      {text}
    </a>
  </li>
);

export default Navbar;

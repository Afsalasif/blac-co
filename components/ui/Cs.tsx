"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface CustomDropdownProps {
  options: string[];
  placeholder: string;
  onSelect: (value: string) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  placeholder,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const handleSelect = (option: string) => {
    setSelected(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-3 text-white bg-white/10 backdrop-blur-md border border-gray-500 rounded-md cursor-pointer focus:outline-none"
      >
        {selected || placeholder}
        <ChevronDown className="text-gray-400" />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute w-full mt-2 bg-white/20 backdrop-blur-lg border border-gray-500 rounded-md overflow-hidden shadow-lg"
          >
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleSelect(option)}
                className="px-4 py-2 text-white hover:bg-white/30 cursor-pointer"
              >
                {option}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomDropdown;



      // <div className="relative w-full h-full flex items-center justify-center text-white overflow-visible">
      //   {/* Background layer */}
      //   <motion.div
      //     className="absolute inset-0 bg-[url('/img/city.jpg')] bg-cover opacity-30 bg-center"
      //     initial={{ opacity: 0.4 }}
      //     animate={{ opacity: 0.0 }}
      //     transition={{ delay: 3, duration: 1.5 }} // Increased delay
      //   />
      //   <div className="absolute inset-0 bg-black opacity-80" />

      //   {/* Property Cards Container */}
      //   <motion.div 
      //     className="flex flex-wrap justify-center gap-6"
      //     initial={{ opacity: 1 }}
      //     animate={{ opacity: 1 }}
      //   >
      //     {properties.map((property, index) => (
      //       <motion.div
      //         key={index}
      //         className={`relative rounded-xl overflow-hidden shadow-lg bg-gray-900 bg-opacity-50 ${
      //           index === 2 ? "z-0" : "z-0"
      //         }`}
      //         initial={{ 
      //           width: "288px",
      //           height: "400px",
      //           opacity: 1 
      //         }}
      //         animate={index === 2 ? {
      //           width: "50vw",
      //           height: "100vh",
      //           x: "20%",
      //           y: "0%",
      //           transition: { delay: 3, duration: 2 } // Increased delay
      //         } : {
      //           opacity: 0,
      //           transition: { delay: 4, duration: 1 } // Increased delay
      //         }}
      //         layout
      //       >
      //         <Image
      //           src={property.image}
      //           alt={property.name}
      //           width={300}
      //           height={200}
      //           className="w-full h-full object-cover"
      //         />
      //       </motion.div>
      //     ))}
      //   </motion.div>

      //   {/* Semicircle Animation */}
      //   <motion.div
      //     className="absolute left-0 h-[120vh] z-10 aspect-square"
      //     initial={{ 
      //       x: "-100%",
      //       opacity: 0 
      //     }}
      //     animate={{ 
      //       x: "-5%",
      //       opacity: 1,
      //       transition: { 
      //         delay: 4, // Increased delay
      //         duration: 2, 
      //         ease: "easeOut" 
      //       } 
      //     }}
      //     style={{
      //       clipPath: "circle(50% at 50% 50%)",
      //       background: "linear-gradient(90deg, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.85) 100%)"
      //     }}
      //   >
      //     <motion.div
      //       className="h-full flex flex-col items-start justify-center pl-32 pr-20"
      //       initial={{ opacity: 0 }}
      //       animate={{ 
      //         opacity: 1,
      //         transition: { delay: 5, duration: 1 } // Increased delay
      //       }}
      //     >
      //       <h3 className="text-4xl font-bold mb-6">Premium Features</h3>
      //       <ul className="space-y-4 text-xl">
      //         <li>• Ocean Front View</li>
      //         <li>• Smart Home System</li>
      //         <li>• Private Infinity Pool</li>
      //         <li>• 24/7 Security</li>
      //       </ul>
      //       <button className="mt-8 px-8 py-3 bg-white text-black rounded-full text-lg font-bold hover:bg-opacity-80 transition-all">
      //         Explore Luxury
      //       </button>
      //     </motion.div>
      //   </motion.div>
      // </div>

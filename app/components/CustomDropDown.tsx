import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface CustomDropdownProps {
  options: any[];
  selectedValue: string;
  onSelect: (value: string) => void;
  placeholder: string;
  displayKey?: string;
  valueKey?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ 
  options = [], 
  selectedValue, 
  onSelect, 
  placeholder,
  displayKey = 'name',
  valueKey = 'slug'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Extract values from options
  const optionValues = options.map(option => ({
    display: option[displayKey] || '',
    value: option[valueKey] || ''
  })).filter(option => option.display);

  // Filter options based on search term
  const filteredOptions = optionValues.filter(option => 
    option.display.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div 
      ref={dropdownRef} 
      className="relative w-full max-w-xs"
    >
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex justify-between items-center 
          w-full 
          px-4 py-2 
          bg-transparent 
          border-2 
          border-[#c08c5a] 
          text-white 
          rounded-md 
          cursor-pointer 
          hover:border-opacity-75 
          transition-all 
          duration-300
        "
      >
        <span className={selectedValue ? 'text-white' : 'text-gray-400'}>
          {selectedValue 
            ? optionValues.find(opt => opt.value === selectedValue)?.display 
            || selectedValue 
            : placeholder}
        </span>
        <ChevronDown 
          className="text-[#c08c5a] ml-2" 
          size={20} 
        />
      </div>

      {isOpen && (
        <div 
          className="
            absolute 
            z-50 
            mt-1 
            w-full 
            bg-black 
            border-2 
            border-[#c08c5a] 
            rounded-md 
            shadow-lg 
            max-h-60 
            overflow-auto
          "
        >
          {/* Search Input */}
          <div className="p-2">
            <input 
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="
                w-full 
                px-2 
                py-1 
                bg-transparent 
                border 
                border-gray-600 
                text-white 
                rounded-md 
                focus:outline-none 
                focus:border-[#c08c5a]
              "
            />
          </div>

          {/* Options List */}
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <div
                key={option.value}
                onClick={() => {
                  onSelect(option.value);
                  setIsOpen(false);
                  setSearchTerm('');
                }}
                className="
                  px-4 
                  py-2 
                  text-white 
                  hover:bg-[#c08c5a] 
                  hover:bg-opacity-20 
                  cursor-pointer 
                  transition-colors 
                  duration-200
                "
              >
                {option.display}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-400 text-center">
              No options found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
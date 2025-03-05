import React, { useState, useRef, useEffect } from "react";
import * as Select from "@radix-ui/react-select";
import { ChevronDown, Search, X } from "lucide-react";

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ 
  options, 
  value, 
  onChange, 
  placeholder = "Select" 
}) => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Filtered options based on search
  const filteredOptions = React.useMemo(() => {
    if (!search) return options;
    
    const searchLower = search.toLowerCase();
    return options.filter(option => 
      option.label.toLowerCase().includes(searchLower) || 
      option.value.toLowerCase().includes(searchLower)
    );
  }, [options, search]);

  // Find selected option for display
  const selectedOption = options.find(opt => opt.value === value);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // Prevent default select behavior when searching
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Prevent default select behavior
    if (e.key === 'Enter' || e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
    }
  };

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <Select.Root 
      value={value} 
      onValueChange={(newValue) => {
        onChange(newValue);
        setSearch("");
      }}
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <Select.Trigger 
        className="relative w-48 bg-transparent border border-gray-600 text-white 
                   px-4 py-2 rounded-md flex justify-between items-center"
      >
        <Select.Value placeholder={placeholder}>
          {selectedOption?.label || value}
        </Select.Value>
        <Select.Icon>
          <ChevronDown size={16} />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content 
          position="popper"
          className="z-50 w-48 bg-black border border-gray-600 rounded-md 
                     shadow-lg text-white overflow-hidden"
        >
          {/* Search Input */}
          <div className="p-2">
            <div className="relative">
              <Search 
                size={16} 
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" 
              />
              <input 
                ref={searchInputRef}
                type="text"
                placeholder="Search..."
                value={search}
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown}
                className="w-full pl-8 pr-8 py-2 bg-gray-800 text-white 
                           rounded-md focus:outline-none focus:ring-2 focus:ring-metallic-bronze"
              />
              {search && (
                <button 
                  onClick={() => setSearch("")} 
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                >
                  <X size={16} className="text-gray-400 hover:text-white" />
                </button>
              )}
            </div>
          </div>

          <Select.Viewport className="max-h-60 overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <Select.Item
                  key={option.value}
                  value={option.value}
                  className="px-3 py-2 cursor-pointer 
                             hover:bg-gray-700 
                             data-[highlighted]:bg-gray-600 
                             data-[highlighted]:outline-none"
                >
                  <Select.ItemText>{option.label}</Select.ItemText>
                </Select.Item>
              ))
            ) : (
              <div className="p-2 text-center text-gray-400">
                No options found
              </div>
            )}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default CustomSelect;
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const CategoryNavButton: React.FC = () => {
  const [active, setActive] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    "Home",
    "Hot Deals",
    "Categories",
    "Laptops",
    "Smartphones",
    "Cameras",
    "Accessories",
  ];

  return (
    <div className="bg-white border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        
        <ul className="hidden md:flex space-x-4 lg:space-x-6 xl:space-x-8 text-sm font-medium overflow-x-auto py-1">
          {navItems.map((item) => (
            <li
              key={item}
              className={`relative py-3 cursor-pointer transition whitespace-nowrap ${
                active === item
                  ? "text-red-600"
                  : "text-gray-700 hover:text-red-600"
              }`}
              onClick={() => setActive(item)}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {item}
              
              {active === item && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-600"></span>
              )}
            
              {hoveredItem === item && active !== item && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-600 opacity-70"></span>
              )}
            </li>
          ))}
        </ul>

    
        <div className="md:hidden">
          
          <div className="flex items-center justify-between py-3">
            <button
              className="flex items-center space-x-2 text-gray-700 font-medium"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span>Browse Categories</span>
              <ChevronDown 
                size={16} 
                className={`transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`}
              />
            </button>
            
            <span className="text-red-600 font-medium text-sm">
              {active}
            </span>
          </div>

          
          {isMobileMenuOpen && (
            <div className="absolute left-0 right-0 bg-white border-t border-b border-gray-200 shadow-lg z-50 mt-1">
              <ul className="py-2">
                {navItems.map((item) => (
                  <li
                    key={item}
                    className={`px-4 py-3 cursor-pointer transition border-l-4 ${
                      active === item
                        ? "text-red-600 bg-red-50 border-red-600"
                        : "text-gray-700 hover:text-red-600 hover:bg-gray-50 border-transparent"
                    }`}
                    onClick={() => {
                      setActive(item);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

      
        <div className="hidden sm:flex md:hidden overflow-x-auto py-3 scrollbar-hide">
          <div className="flex space-x-6 min-w-max">
            {navItems.map((item) => (
              <button
                key={item}
                className={`relative px-3 py-2 cursor-pointer transition whitespace-nowrap text-sm font-medium rounded-lg ${
                  active === item
                    ? "text-red-600 bg-red-50"
                    : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                }`}
                onClick={() => setActive(item)}
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item}
                
                {active === item && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-[2px] bg-red-600 rounded-full"></span>
                )}
              
                {hoveredItem === item && active !== item && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-[2px] bg-red-600 opacity-70 rounded-full"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryNavButton;
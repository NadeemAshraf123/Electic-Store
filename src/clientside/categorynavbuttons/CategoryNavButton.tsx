import React, { useState } from "react";

const CategoryNavButton: React.FC = () => {
  const [active, setActive] = useState("Home");

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
      <div className="w-7xl mx-auto container mx-auto px-4">
        <ul className="flex space-x-8 text-sm font-medium">
          {navItems.map((item) => (
            <li
              key={item}
              className={`relative py-3 cursor-pointer transition ${
                active === item
                  ? "text-red-600"
                  : "text-gray-700 hover:text-red-600"
              }`}
              onClick={() => setActive(item)}
            >
              {item}
              {active === item && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-600"></span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryNavButton;

import React from "react";
import { Heart, ShoppingCart, Menu } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <div className="bg-black shadow border-b-4 border-red-500">
      <div className="container max-w-7xl mx-auto px-4 py-3">
        
        {/* Mobile Layout - 3 Rows */}
        <div className="md:hidden">
          {/* Row 1: Centered Logo */}
          <div className="flex justify-center mt-8 mb-8">
            <div className="text-4xl font-bold">
              <span className="text-white">Electro</span>
              <span className="text-red-600">.</span>
            </div>
          </div>

          {/* Row 2: Search Bar */}
          <div className="flex justify-center mb-3">
            <select className="px-2 py-1 text-sm text-gray-600 border border-gray-300 border-r-0 rounded-l-full bg-white outline-none w-32">
              <option>All Categories</option>
              <option>Laptops</option>
              <option>Smartphones</option>
              <option>Cameras</option>
              <option>Accessories</option>
            </select>
            
            <input
              type="text"
              placeholder="Search"
              className=" py-2 bg-white outline-none w-[60px] text-sm border border-gray-300 border-r-0 border-l-0"
            />
            
            <button className="bg-red-600 text-white px-4 rounded-r-full text-sm font-bold hover:bg-red-700 transition border border-red-600">
              Search
            </button>
          </div>

          {/* Row 3: Icons with Labels */}
          <div className="flex justify-end gap-4 mt-10 text-white">
            {/* Wishlist */}
            <div className="flex flex-col items-center cursor-pointer hover:text-red-600 transition">
              <div className="relative">
                <Heart size={20} />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  2
                </span>
              </div>
              <span className="text-xs mt-1">Your Wishlist</span>
            </div>

            {/* Cart */}
            <div className="flex flex-col mb-6 items-center cursor-pointer hover:text-red-600 transition">
              <div className="relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </div>
              <span className="text-xs mt-1">Your Cart</span>
            </div>

            {/* Menu/Hamburger */}
            <div className="flex flex-col items-center cursor-pointer hover:text-red-600 transition">
              <Menu size={20} />
              <span className="text-xs mt-1">Menu</span>
            </div>
          </div>
        </div>

        {/* Desktop Layout (Hidden on mobile) */}
        <div className="hidden md:flex justify-between items-center">
          <div className="text-4xl xl:text-5xl font-bold">
            <span className="text-white">Electro</span>
            <span className="text-red-600">.</span>
          </div>

          <div className="flex w-1/2 xl:w-2/5">
            <div className="flex border border-gray-300 rounded-l-full overflow-hidden flex-1">
              <select className="px-3 py-2 text-sm text-gray-600 border-r border-gray-300 bg-white outline-none">
                <option>All Categories</option>
                <option>Laptops</option>
                <option>Smartphones</option>
                <option>Cameras</option>
                <option>Accessories</option>
              </select>
              <input
                type="text"
                placeholder="Search here"
                className="flex-1 px-3 py-2 bg-white outline-none text-sm"
              />
            </div>
            <button className="bg-red-600 text-white px-6 rounded-r-full text-sm font-extrabold hover:bg-red-700 transition">
              Search
            </button>
          </div>

          <div className="flex space-x-6 text-white text-sm">
            <div className="cursor-pointer hover:text-red-600 transition text-center">
              <span className="relative inline-block">
                <Heart size={22} />
                <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1 translate-x-1/2 -translate-y-1/2">
                  2
                </span>
              </span>
              <p className="text-xs mt-1">Your Wishlist</p>
            </div>

            <div className="cursor-pointer hover:text-red-600 transition text-center">
              <span className="relative inline-block">
                <ShoppingCart size={22} />
                <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1 translate-x-1/2 -translate-y-1/2">
                  3
                </span>
              </span>
              <p className="text-xs mt-1">Your Cart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
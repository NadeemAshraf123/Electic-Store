import React from "react";
import { Heart, ShoppingCart, Search } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <div className="bg-black  shadow border-b-4 border-red-500">
      <div className="container max-w-7xl mx-auto px-3 py-3 sm:py-4">
        
        <div className="lg:hidden">
        
          <div className="flex justify-between items-center mb-3">
            <div className="text-3xl sm:text-4xl font-bold z-10">
              <span className="text-white">Electro</span>
              <span className="text-red-600">.</span>
            </div>

            <div className="flex space-x-4 z-10">
              <div className="cursor-pointer hover:text-red-600 transition text-center">
                <span className="relative inline-block">
                  <Heart size={20} className="text-white" />
                  <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1 translate-x-1/2 -translate-y-1/2 min-w-[16px] text-center">
                    2
                  </span>
                </span>
                <p className="text-white text-xs mt-1">Wishlist</p>
              </div>

              <div className="cursor-pointer hover:text-red-600 transition text-center">
                <span className="relative inline-block">
                  <ShoppingCart size={20} className="text-white" />
                  <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1 translate-x-1/2 -translate-y-1/2 min-w-[16px] text-center">
                    2
                  </span>
                </span>
                <p className="text-white text-xs mt-1">Cart</p>
              </div>
            </div>
          </div>

          <div className="flex w-full relative z-0">
            <div className="flex border border-gray-300 rounded-l-full overflow-hidden flex-1">
              <select className="px-2 py-2 text-xs sm:text-sm text-gray-600 border-r border-gray-300 bg-white outline-none">
                <option>All</option>
                <option>Laptops</option>
                <option>Phones</option>
                <option>Cameras</option>
                <option>Accessories</option>
              </select>
              <input
                type="text"
                placeholder="Search here"
                className="flex-1 px-3 py-2 bg-white outline-none text-xs sm:text-sm"
              />
            </div>
            <button className="bg-red-600 text-white px-4 sm:px-6 rounded-r-full text-xs sm:text-sm font-extrabold hover:bg-red-700 transition">
              <Search size={16} className="sm:hidden" />
              <span className="hidden sm:inline">Search</span>
            </button>
          </div>
        </div>

        <div className="hidden lg:flex justify-between items-center">
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
                  2
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
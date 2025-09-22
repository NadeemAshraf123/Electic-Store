import React from "react";
import { Heart, ShoppingCart } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <div className="bg-black shadow border-b-4 border-red-500">
      <div className="w-7xl mx-auto container mx-auto flex justify-between items-center px-4 py-4 ">
        
        <div className="text-5xl font-bold">
          <span className="text-white">Electro</span>
          <span className="text-red-600">.</span>
        </div>

      

        <div className="flex w-1/2">
  <div className="flex border border-gray-300 rounded-l-full overflow-hidden flex-1">
    <select className="px-3 py-2 text-sm text-gray-600 border-r border-r border-gray-300 bg-white outline-none">
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
  );
};

export default Navbar;

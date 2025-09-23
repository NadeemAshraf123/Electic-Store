import React from "react";
import { Mail, Phone, MapPin, DollarSign, User } from "lucide-react";

const Topbar: React.FC = () => {
  return (
    <div className="bg-[#212529] text-white text-sm">
      
      <div className="lg:hidden flex flex-col space-y-2 px-4 py-3">
      
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-1 min-w-0 flex-1">
            <Phone size={14} className="text-red-600 flex-shrink-0" />
            <span className="hover:text-red-600 cursor-pointer truncate text-xs">+025 95 85 84</span>
          </div>
          <div className="flex items-center space-x-1 min-w-0 flex-1 justify-center">
            <Mail size={14} className="text-red-600 flex-shrink-0" />
            <span className="hover:text-red-600 cursor-pointer truncate text-xs">email@email.com</span>
          </div>
        </div>
        
      
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-1 min-w-0 flex-1">
            <MapPin size={14} className="text-red-600 flex-shrink-0" />
            <span className="hover:text-red-600 cursor-pointer truncate text-xs">1734 Stonecoal Road</span>
          </div>
          <div className="flex items-center space-x-3 ml-2">
            <div className="flex items-center space-x-1 cursor-pointer hover:text-red-500 transition">
              <DollarSign size={14} className="text-red-600" />
              <span className="text-xs">USD</span>
            </div>
            <div className="flex items-center space-x-1 cursor-pointer hover:text-red-500 transition">
              <User size={14} className="text-red-600" />
              <span className="text-xs">Account</span>
            </div>
          </div>
        </div>
      </div>

    
      <div className="hidden lg:block">
        <div className="container mx-auto flex justify-between items-center px-4 py-2 max-w-7xl">
          <div className="flex space-x-6">
            <div className="flex items-center space-x-1">
              <Phone size={14} className="text-red-600" />
              <span className="hover:text-red-600 cursor-pointer">+025 95 85 84</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={14} className="text-red-600" />
              <span className="hover:text-red-600 cursor-pointer">email@email.com</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin size={14} className="text-red-600" />
              <span className="hover:text-red-600 cursor-pointer">1734 Stonecoal Road</span>
            </div>
          </div>

          <div className="flex space-x-6">
            <div className="flex items-center space-x-1 cursor-pointer hover:text-red-500 transition">
              <DollarSign size={14} className="text-red-600" />
              <span>USD</span>
            </div>
            <div className="flex items-center space-x-1 cursor-pointer hover:text-red-500 transition">
              <User size={14} className="text-red-600" />
              <span>My Account</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
import React from 'react';
import { Mail, Phone, MapPin } from "lucide-react";


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 border-t-4 border-[#c8253a] mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
      
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">About Us</h3>
            <p className="text-gray-400 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
            </p>
            <div className="text-gray-400 text-sm space-y-1">
        
           <span className='flex flex-row gap-2'> 
            <MapPin size={14}  className="text-red-600 mt-1"/>
                9724 Siemensal Road
                  </span>
             
                <span className='flex flex-row gap-2'>
            <Phone size={14}  className="text-red-600 mt-1"/>
                +021-95-81-84
                 </span>

              <span className='flex flex-row gap-2'>
            <Mail size={14}  className="text-red-600 mt-1"/>
                email@gmail.com</span>
            </div>
          </div>

        
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">Categories</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li className="hover:text-red-500 cursor-pointer transition-colors">Hot deals</li>
              <li className="hover:text-red-500 cursor-pointer transition-colors">Laptops</li>
              <li className="hover:text-red-500 cursor-pointer transition-colors">Smartphones</li>
              <li className="hover:text-red-500 cursor-pointer transition-colors">Cameras</li>
              <li className="hover:text-red-500 cursor-pointer transition-colors">Accessories</li>
            </ul>
          </div>

    
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">Information</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li className="hover:text-red-500 cursor-pointer transition-colors">Contact Us</li>
              <li className="hover:text-red-500 cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-red-500 cursor-pointer transition-colors">Orders and Returns</li>
              <li className="hover:text-red-500 cursor-pointer transition-colors">Terms & Conditions</li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">Service</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li className="hover:text-red-500 cursor-pointer transition-colors">My Account</li>
              <li className="hover:text-red-500 cursor-pointer transition-colors">View Cart</li>
              <li className="hover:text-red-500 cursor-pointer transition-colors">Walnist</li>
              <li className="hover:text-red-500 cursor-pointer transition-colors">Trade by Order</li>
              <li className="hover:text-red-500 cursor-pointer transition-colors">Help</li>
            </ul>
          </div>
        </div>
        
      
        <div className="border-t border-gray-700 mt-8 pt-8">
          <p className="text-gray-400 hover:text-white cursor-pointer text-sm text-center">
            © 2024 Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
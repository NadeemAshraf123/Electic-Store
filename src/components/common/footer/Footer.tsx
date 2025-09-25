import React from 'react';
import { Mail, Phone, MapPin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCcVisa,
  faCcMastercard,
  faCcAmex,
  faCcDiscover,
  faCcPaypal,
} from "@fortawesome/free-brands-svg-icons";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";



const Footer: React.FC = () => {
  return (
    <>
    <footer >
      <div className="bg-gray-900 text-white py-8 px-4 border-t-4 border-[#c8253a] mt-20">    
          <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
      
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
      </div>
      </div>
    </footer>

  <div className=" py-6"
   style={{ backgroundColor: 'black' }}
  >
    <div className="flex justify-center gap-6 text-gray-400 py-10 text-3xl">
      <FontAwesomeIcon icon={faCcVisa} className="hover:text-blue-600 transition-colors cursor-pointer" />
      <FontAwesomeIcon icon={faCcMastercard} className="hover:text-red-600 transition-colors cursor-pointer" />
      <FontAwesomeIcon icon={faCcAmex} className="hover:text-blue-400 transition-colors cursor-pointer" />
      <FontAwesomeIcon icon={faCcDiscover} className="hover:text-orange-600 transition-colors cursor-pointer" />
      <FontAwesomeIcon icon={faCcPaypal} className="hover:text-blue-500 transition-colors cursor-pointer" />
    </div>
  </div>
  
  
</>

  );
};

export default Footer;
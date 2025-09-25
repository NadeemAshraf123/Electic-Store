import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const Newsletter: React.FC = () => {
  return (
    <div className="py-12 px-4 mt-20 ">
      <div className="max-w-4xl mx-auto text-center relative">
    
        <div className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 opacity-20 pointer-events-none z-0">
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ fontSize: "180px", color: "lightgray" }}
          />
        </div>
        <h2 className="flex flex-col md:flex-row md:justify-center text-3xl md:gap-5 font-light text-[#484848] mb-6 tracking-wide z-10">
          Sign Up for the{" "}
          <span className="font-semibold mt-1 md:mt-0 text-[#333333">NEWSLETTER</span>
        </h2>

        <div className="relative z-10 flex flex-row sm:flex-row justify-center items-center max-w-full mx-auto mb-8 sm:max-w-2xl lg:mt-10">
          
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full bg-white sm:flex-1 px-4 py-2  md:py-3 md:px-4 border border-gray-300 rounded-l-full rounded-r-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:border-3 focus:border-blue-600 text-sm"
          />

          <button className="w-full sm:w-auto bg-red-600 text-white px-4 py-2 md:px-8 md:py-3 rounded-r-full hover:bg-gray-900 transition-colors duration-200 text-sm font-medium whitespace-nowrap">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ fontSize: "16px", marginRight: "3px" }}
            />
            SUBSCRIBE
          </button>
        </div>

        <div className="relative z-10 mt-5 flex justify-center items-center space-x-4">
          <div className="w-14 h-14 bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="text-gray-600 text-xl"
            />
          </div>

          <div className="w-14 h-14 bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-500 transition-colors">
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-gray-600 text-xl"
            />
          </div>

          <div className="w-14 h-14 bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-gray-600 text-xl"
            />
          </div>

          <div className="w-14 h-14 bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
            <FontAwesomeIcon
              icon={faPinterest}
              className="text-gray-600 text-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

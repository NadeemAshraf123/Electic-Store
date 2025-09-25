import React from "react";

import laptopP3 from "../../assets/images/laptopP3.png";
import headphoneP from "../../assets/images/headphoneP.png";
import cameraP from "../../assets/images/cameraP.png";

const banners = [
  {
    title: "Laptop Collection",
    subtitle: "SHOP NOW",
    image: laptopP3,
  },
  {
    title: "Accessories Collection",
    subtitle: "SHOP NOW",
    image: headphoneP,
  },
  {
    title: "Cameras Collection",
    subtitle: "SHOP NOW",
    image: cameraP,
  },
];

const Banner: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-10 md:mt-5 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-7 md:gap-10 gap-6">
        {banners.map((banner, index) => (
          <div
            key={index}
            className="relative group h-64 overflow-hidden rounded-md cursor-pointer "
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover  bg-[#e4e7ed] transform transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0"
            style={{ background: 'linear-gradient(130deg, #ff0000c2 0%, 55%, transparent 0%)'}}
            />

            <div className="absolute top-6 left-6 text-left">
              <h3 className="text-white font-bold text-lg">{banner.title}</h3>
              <button className="mt-3 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded">
                {banner.subtitle}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;

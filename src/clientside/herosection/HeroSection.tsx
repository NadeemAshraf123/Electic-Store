import React from "react";

import headphone1 from "../../assets/images/headphone/headphone1.jpeg";
import camera3 from "../../assets/images/camera/camera3.jpeg";
import laptop2 from "../../assets/images/laptop/laptop2.jpeg";
const banners = [
  {
    title: "Laptop Collection",
    subtitle: "SHOP NOW",
    image: laptop2,
  },
  {
    title: "Accessories Collection",
    subtitle: "SHOP NOW",
    image: headphone1,
  },
  {
    title: "Cameras Collection",
    subtitle: "SHOP NOW",
    image: camera3,
  },
];

const Banner: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-20 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

            <div className="absolute inset-0 clip-diagonal" />

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

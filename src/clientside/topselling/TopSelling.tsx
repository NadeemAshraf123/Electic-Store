import React, { useRef } from "react";
import {
  FaHeart,
  FaEye,
  FaExchangeAlt,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper as SwiperCore } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import mobileP from "../../assets/images/mobileP.png";
import laptopP3 from "../../assets/images/laptopP3.png";
import cameraP from "../../assets/images/cameraP.png";
import laptopP from "../../assets/images/laptopP.png";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  badge?: string;
  image: string;
  rating: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Product Name Goes Here",
    category: "Laptops",
    price: 980,
    oldPrice: 1050,
    badge: "-30%",
    image: mobileP,
    rating: 4,
  },
  {
    id: 2,
    name: "Product Name Goes Here",
    category: "Accessories",
    price: 980,
    badge: "NEW",
    image: laptopP3,
    rating: 5,
  },
  {
    id: 3,
    name: "Product Name Goes Here",
    category: "Laptops",
    price: 980,
    oldPrice: 1050,
    badge: "-30%",
    image: cameraP,
    rating: 4,
  },
  {
    id: 4,
    name: "Product Name Goes Here",
    category: "Cameras",
    price: 980,
    image: laptopP,
    rating: 3,
  },
  {
    id: 5,
    name: "Product Name Goes Here",
    category: "Smartphones",
    price: 750,
    oldPrice: 899,
    badge: "-20%",
    image: mobileP,
    rating: 4,
  },
  {
    id: 6,
    name: "Product Name Goes Here",
    category: "Accessories",
    price: 120,
    badge: "NEW",
    image: laptopP3,
    rating: 5,
  },
];

const TopSelling: React.FC = () => {
  const swiperRef = useRef<SwiperCore>();

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <section className="py-12 bg-white max-w-7xl mt-10 mx-auto relative px-4">
      <div className="flex flex-col lg:flex-row items-start md:flex-row justify-between md:mb-4 mb-8">
        <h2 className="text-2xl font-bold mb-4 lg:mb-0">TOP SELLING</h2>
        <div className="flex flex-wrap justify-left font-bold gap-3 lg:gap-6 text-[#8C99AE]">
          {["Laptops", "Smartphones", "Cameras", "Accessories"].map(
            (label, index) => (
              <button
                key={index}
                className="relative hover:text-red-600 hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-red-600 cursor-pointer whitespace-nowrap"
              >
                {label}
              </button>
            )
          )}
        </div>
      </div>

      <div className="relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          slidesPerGroup={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 70,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 32,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="group ">
                <div
                  className="product-card hover:cursor-pointer hover:border-red-500 w-[330px] md:w-[330px] lg:w-[100%] border-1 border-gray-300 
                             overflow-hidden transition-all duration-300 bg-white relative flex flex-col h-[490px] md:h-[490px] mx-auto"
                >
                  {product.badge && (
                    <span
                      className={`absolute top-3 left-3 px-4 py-1 text-sm z-10 ${
                        product.badge === "NEW" ? "bg-red-600  text-white" : "border border-red-500 text-red-500"
                      }`}
                    >
                      {product.badge}
                    </span>
                  )}

                  <div className="p-4 pb-0 mb-8 flex justify-center items-center bg-gray-50 min-h-[200px]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-50 object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-4 flex flex-col flex-grow">
                    <p className="text-xs text-center text-gray-500 uppercase tracking-wide">
                      {product.category}
                    </p>
                    <h3 className="font-bold text-center text-gray-800 text-xl line-clamp-2 min-h-[20px]">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-red-600 font-bold text-xl mt-1">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.oldPrice && (
                        <span className="text-gray-400 line-through text-sm">
                          ${product.oldPrice.toFixed(2)}
                        </span>
                      )}
                    </div>

                    <div className="relative flex items-center justify-center mt-4 py-2">
                      <hr className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 w-full border-gray-200" />
                      <div className="relative z-10 bg-white px-3 flex space-x-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <FaStar
                            key={i}
                            className={`h-4 w-4 ${
                              i < product.rating
                                ? "text-red-500"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex-grow"></div>

                    <div className="flex justify-center gap-6 w-full text-gray-500 py-4">
                      <button className="p-1 hover:text-red-600 transition-colors duration-200">
                        <FaHeart className="h-4 w-4" />
                      </button>
                      <button className="hover:text-red-600 transition-colors duration-200">
                        <FaExchangeAlt className="h-4 w-4" />
                      </button>
                      <button className="hover:text-red-600 transition-colors duration-200">
                        <FaEye className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="py-2 bg-[black] text-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <button className=" bg-red-500 hover:cursor-pointer rounded-full py-1.5 px-4.5 text-white  text-sm font-semibold transition-colors duration-300 shadow-lg">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-end">
          <div className="flex space-x-2">
            <button
              onClick={handlePrev}
              className="bg-transparent text-gray-400 border p-3 rounded-full hover:bg-red-700 transition-all duration-200 shadow-md flex items-center justify-center"
            >
              <FaChevronLeft className="h-2 w-2 md:h-3 md:w-3" />
            </button>
            <button
              onClick={handleNext}
              className="bg-transparent text-gray-400 border p-3 rounded-full hover:bg-red-700 transition-all duration-200 shadow-md flex items-center justify-center"
            >
              <FaChevronRight className="h-2 w-2 md:h-3 md:w-3" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSelling;

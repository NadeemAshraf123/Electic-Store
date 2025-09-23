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
import { Swiper as SwiperCore } from 'swiper';
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
    <section className="py-12 bg-white max-w-7xl mt-20 mx-auto relative px-4">
      
      <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
        <h2 className="text-2xl font-bold mb-4 lg:mb-0">Top Selling</h2>
        <div className="flex flex-wrap justify-center gap-4 lg:gap-6 text-gray-600 font-medium">
          <button className="relative text-red-600 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-red-600 whitespace-nowrap">
            Laptops
          </button>
          <button className="hover:text-red-600 whitespace-nowrap">Smartphones</button>
          <button className="hover:text-red-600 whitespace-nowrap">Cameras</button>
          <button className="hover:text-red-600 whitespace-nowrap">Accessories</button>
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
              slidesPerView: 3,
              spaceBetween: 24,
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
              <div className="product-card w-full border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-white relative flex flex-col h-full mx-auto max-w-[300px]">
                {product.badge && (
                  <span
                    className={`absolute top-3 left-3 px-2 py-1 text-xs font-bold text-white rounded z-10 ${
                      product.badge === "NEW" ? "bg-green-600" : "bg-red-600"
                    }`}
                  >
                    {product.badge}
                  </span>
                )}

                <div className="p-4 pb-0 flex justify-center items-center bg-gray-50 min-h-[200px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <p className="text-xs text-center text-gray-500 uppercase tracking-wide mb-1">
                    {product.category}
                  </p>
                  <h3 className="font-semibold text-center text-gray-800 text-sm mb-3 line-clamp-2 min-h-[40px]">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <span className="text-red-600  font-bold text-lg">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.oldPrice && (
                      <span className="text-gray-400 line-through text-sm">
                        ${product.oldPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-center mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar
                        key={i}
                        className={`h-3 w-3 ${
                          i < product.rating ? "text-red-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
                  </div>
                  <div className="flex-grow"></div>
                  <hr className="my-4 w-full border-gray-200" />
                  <div className="flex justify-around w-full text-gray-500 py-2">
                    <button className="p-2 hover:text-red-600 transition-colors duration-200">
                      <FaHeart className="h-4 w-4" />
                    </button>
                    <button className="p-2 hover:text-red-600 transition-colors duration-200">
                      <FaExchangeAlt className="h-4 w-4" />
                    </button>
                    <button className="p-2 hover:text-red-600 transition-colors duration-200">
                      <FaEye className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

    
        <div className="flex justify-end mt-4">
          <div className="flex space-x-2">
            <button
              onClick={handlePrev}
              className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-all duration-200 shadow-md flex items-center justify-center"
            >
              <FaChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={handleNext}
              className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-all duration-200 shadow-md flex items-center justify-center"
            >
              <FaChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSelling;
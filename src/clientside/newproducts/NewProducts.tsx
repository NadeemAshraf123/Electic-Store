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

import laptopP from "../../assets/images/laptopP.png";
import headphoneP from "../../assets/images/headphoneP.png";
import laptopP1 from "../../assets/images/laptopP1.png";
import tabletP from "../../assets/images/tabletP.png";

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
    category: "CAMERAS",
    price: 980,
    oldPrice: 1400,
    badge: "-30%",
    image: laptopP,
    rating: 5,
  },
  {
    id: 2,
    name: "Product Name Goes Here",
    category: "LAPTOPS",
    price: 980,
    image: headphoneP,
    rating: 5,
  },
  {
    id: 3,
    name: "Product Name Goes Here",
    category: "SMARTPHONES",
    price: 980,
    oldPrice: 1200,
    badge: "-18%",
    image: laptopP1,
    rating: 4,
  },
  {
    id: 4,
    name: "Product Name Goes Here",
    category: "ACCESSORIES",
    price: 980,
    badge: "NEW",
    image: tabletP,
    rating: 5,
  },
  {
    id: 5,
    name: "Product Name Goes Here",
    category: "CAMERAS",
    price: 980,
    oldPrice: 1400,
    badge: "-30%",
    image: laptopP,
    rating: 5,
  },
  {
    id: 6,
    name: "Product Name Goes Here",
    category: "LAPTOPS",
    price: 980,
    image: headphoneP,
    rating: 5,
  },
  {
    id: 7,
    name: "Product Name Goes Here",
    category: "CAMERAS",
    price: 980,
    oldPrice: 1400,
    badge: "-30%",
    image: laptopP,
    rating: 5,
  },
  {
    id: 8,
    name: "Product Name Goes Here",
    category: "LAPTOPS",
    price: 980,
    image: headphoneP,
    rating: 5,
  },
  {
    id: 9,
    name: "Product Name Goes Here",
    category: "SMARTPHONES",
    price: 980,
    oldPrice: 1200,
    badge: "-18%",
    image: laptopP1,
    rating: 4,
  },
  {
    id: 10,
    name: "Product Name Goes Here",
    category: "ACCESSORIES",
    price: 980,
    badge: "NEW",
    image: tabletP,
    rating: 5,
  },
  {
    id: 11,
    name: "Product Name Goes Here",
    category: "CAMERAS",
    price: 980,
    oldPrice: 1400,
    badge: "-30%",
    image: laptopP,
    rating: 5,
  },
  {
    id: 12,
    name: "Product Name Goes Here",
    category: "LAPTOPS",
    price: 980,
    image: headphoneP,
    rating: 5,
  },
  {
    id: 13,
    name: "Product Name Goes Here",
    category: "CAMERAS",
    price: 980,
    oldPrice: 1400,
    badge: "-30%",
    image: laptopP,
    rating: 5,
  },
  {
    id: 14,
    name: "Product Name Goes Here",
    category: "LAPTOPS",
    price: 980,
    image: headphoneP,
    rating: 5,
  },
  {
    id: 15,
    name: "Product Name Goes Here",
    category: "SMARTPHONES",
    price: 980,
    oldPrice: 1200,
    badge: "-18%",
    image: laptopP1,
    rating: 4,
  },
  {
    id: 16,
    name: "Product Name Goes Here",
    category: "ACCESSORIES",
    price: 980,
    badge: "NEW",
    image: tabletP,
    rating: 5,
  },
  {
    id: 17,
    name: "Product Name Goes Here",
    category: "CAMERAS",
    price: 980,
    oldPrice: 1400,
    badge: "-30%",
    image: laptopP,
    rating: 5,
  },
  {
    id: 18,
    name: "Product Name Goes Here",
    category: "LAPTOPS",
    price: 980,
    image: headphoneP,
    rating: 5,
  },
];

const NewProducts: React.FC = () => {
  const swiperRef = useRef<SwiperCore>();

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <section className="py-12 bg-white max-w-7xl mt-10 mx-auto relative px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
        <h2 className="text-2xl font-bold mb-4 lg:mb-0">NEW PRODUCTS</h2>
        <div className="flex flex-wrap justify-center gap-4 lg:gap-6 text-gray-600 font-medium">
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
              <div className="group">
                <div
                  className="product-card hover:cursor-pointer hover:border-red-500 w-full border-1 border-gray-300 
                            rounded-lg overflow-hidden transition-all duration-300 bg-white relative flex flex-col h-[480px] mx-auto"
                >
                  {product.badge && (
                    <span
                      className={`absolute top-3 left-3 px-2 py-1 text-xs font-bold text-white rounded z-10 ${
                        product.badge === "NEW" ? "bg-green-600" : "bg-red-600"
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
                    <h3 className="font-semibold text-center text-gray-800 text-sm line-clamp-2 min-h-[20px] mt-1">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-center space-x-2 mt-2">
                      <span className="text-red-600 font-bold text-lg">
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
                            className={`h-3 w-3 ${
                              i < product.rating
                                ? "text-red-500"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex-grow"></div>

                    <div className="flex justify-center gap-6 w-full text-gray-500 py-1">
                      <button className="p-1 hover:text-red-600 transition-colors duration-200">
                        <FaHeart className="h-3 w-3" />
                      </button>
                      <button className="p-1 hover:text-red-600 transition-colors duration-200">
                        <FaExchangeAlt className="h-3 w-3" />
                      </button>
                      <button className="p-1 hover:text-red-600 transition-colors duration-200">
                        <FaEye className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="py-3 bg-[black] text-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <button className="bg-red-500 hover:cursor-pointer rounded-full py-3 px-6 text-white text-sm font-semibold transition-colors duration-300 shadow-lg">
                    ADD TO CART
                  </button>
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

export default NewProducts;

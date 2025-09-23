import React, { useRef, useState } from "react";
import {
  FaHeart,
  FaEye,
  FaExchangeAlt,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaShoppingCart,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper as SwiperCore } from 'swiper';
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
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const handleMouseEnter = (productId: number) => {
    setHoveredProduct(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  const handleAddToCart = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Added to cart:", product.name);
    // Add your add to cart logic here
  };

  return (
    <section className="py-12 bg-white max-w-7xl mt-20 mx-auto relative px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
        <h2 className="text-2xl font-bold mb-4 lg:mb-0">NEW PRODUCTS</h2>
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
              <div 
                className={`product-card group w-full border-2 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 bg-white relative flex flex-col h-full mx-auto max-w-[300px] ${
                  hoveredProduct === product.id ? 'border-red-600' : 'border-gray-200'
                }`}
                onMouseEnter={() => handleMouseEnter(product.id)}
                onMouseLeave={handleMouseLeave}
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

                <div className="p-4 pb-0 flex justify-center items-center bg-gray-50 min-h-[200px] group-hover:bg-gray-100 transition-colors duration-300">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                    {product.category}
                  </p>
                  <h3 className="font-semibold text-gray-800 text-sm mb-3 line-clamp-2 min-h-[40px] group-hover:text-red-600 transition-colors duration-200">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-red-600 font-bold text-lg">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.oldPrice && (
                      <span className="text-gray-400 line-through text-sm">
                        ${product.oldPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar
                        key={i}
                        className={`h-3 w-3 ${
                          i < product.rating ? "text-yellow-400" : "text-gray-300"
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

                <div className={`absolute bottom-0 left-0 right-0 bg-black text-white p-3 transition-all duration-300 z-20 ${
                  hoveredProduct === product.id 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-full opacity-0'
                }`}>
                  <button 
                    onClick={(e) => handleAddToCart(product, e)}
                    className="w-full flex items-center justify-center gap-2 font-semibold py-2 hover:bg-gray-800 transition-colors duration-200 rounded"
                  >
                    <FaShoppingCart className="h-4 w-4" />
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
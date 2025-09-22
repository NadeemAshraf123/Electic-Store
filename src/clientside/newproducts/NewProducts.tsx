import React, { useRef } from "react";
import { FaHeart, FaEye, FaExchangeAlt, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import laptop2 from "../../assets/images/laptop/laptop2.jpeg";
import headphone1 from "../../assets/images/headphone/headphone1.jpeg";
import camera3 from "../../assets/images/camera/camera3.jpeg";
import laptop3 from "../../assets/images/laptop/laptop3.png";

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
    image: camera3,
    rating: 5,
  },
  {
    id: 2,
    name: "Product Name Goes Here",
    category: "LAPTOPS",
    price: 980,
    image: laptop2,
    rating: 5,
  },
  {
    id: 3,
    name: "Product Name Goes Here",
    category: "SMARTPHONES",
    price: 980,
    oldPrice: 1200,
    badge: "-18%",
    image: laptop3,
    rating: 6,
  },
  {
    id: 4,
    name: "Product Name Goes Here",
    category: "ACCESSORIES",
    price: 980,
    badge: "NEW",
    image: headphone1,
    rating: 5,
  },
  {
    id: 5,
    name: "Product Name Goes Here",
    category: "CAMERAS",
    price: 980,
    oldPrice: 1400,
    badge: "-30%",
    image: camera3,
    rating: 5,
  },
  {
    id: 6,
    name: "Product Name Goes Here",
    category: "LAPTOPS",
    price: 980,
    image: laptop2,
    rating: 5,
  },
];

const NewProducts: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('.product-card') as HTMLElement;
      if (!card) return;
      
      const cardWidth = card.offsetWidth;
      const gap = 24; // matches space-x-6 (1.5rem = 24px)
      const scrollAmount = cardWidth + gap;
      
      const currentScroll = sliderRef.current.scrollLeft;
      const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
      
      let targetScroll;
      
      if (direction === "left") {
        targetScroll = Math.max(0, currentScroll - scrollAmount);
      } else {
        targetScroll = Math.min(maxScroll, currentScroll + scrollAmount);
      }
      
      // Use scrollTo instead of scrollBy for precise control
      sliderRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 bg-white w-7xl mt-20 mx-auto relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 px-4">
        <h2 className="text-2xl font-bold">NEW PRODUCTS</h2>
        <div className="flex space-x-6 text-gray-600 font-medium">
          <button className="relative text-red-600 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-red-600">
            Laptops
          </button>
          <button className="hover:text-red-600">Smartphones</button>
          <button className="hover:text-red-600">Cameras</button>
          <button className="hover:text-red-600">Accessories</button>
        </div>
      </div>

      {/* Slider Container */}
      <div className="relative px-4">
        <div
          ref={sliderRef}
          className="flex overflow-x-auto space-x-6 scrollbar-hide scroll-smooth snap-x snap-mandatory pb-4"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            scrollPadding: '0 16px' // Add padding for better snapping
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card min-w-[280px] max-w-[280px] snap-start border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-white relative flex flex-col flex-shrink-0"
            >
              {/* Badge */}
              {product.badge && (
                <span
                  className={`absolute top-3 left-3 px-2 py-1 text-xs font-bold text-white rounded z-10 ${
                    product.badge === "NEW" ? "bg-green-600" : "bg-red-600"
                  }`}
                >
                  {product.badge}
                </span>
              )}

              {/* Image Container */}
              <div className="p-4 pb-0 flex justify-center items-center bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Content Container */}
              <div className="p-4 flex flex-col flex-grow">
                {/* Category */}
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                  {product.category}
                </p>
                
                {/* Product Name */}
                <h3 className="font-semibold text-gray-800 text-sm mb-3 line-clamp-2">
                  {product.name}
                </h3>

                {/* Price */}
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

                {/* Rating */}
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

                {/* Spacer to push HR to bottom */}
                <div className="flex-grow"></div>

                {/* HR Line with margin */}
                <hr className="my-4 w-full border-gray-200" />

                {/* Action Buttons */}
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
          ))}
        </div>

        {/* Navigation Arrows - Bottom Right */}
        <div className="flex justify-end space-x-2 mt-4 pr-4">
          <button
            onClick={() => scrollSlider("left")}
            className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-all duration-200 shadow-md flex items-center justify-center"
            aria-label="Scroll left"
          >
            <FaChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => scrollSlider("right")}
            className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-all duration-200 shadow-md flex items-center justify-center"
            aria-label="Scroll right"
          >
            <FaChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewProducts;
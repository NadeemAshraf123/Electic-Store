import React from "react";
import { FaHeart, FaEye, FaExchangeAlt, FaStar } from "react-icons/fa";
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
    category: "Laptops",
    price: 980,
    oldPrice: 1050,
    badge: "-30%",
    image: laptop2,
    rating: 4,
  },
  {
    id: 2,
    name: "Product Name Goes Here",
    category: "Accessories",
    price: 980,
    badge: "NEW",
    image: headphone1,
    rating: 5,
  },
  {
    id: 3,
    name: "Product Name Goes Here",
    category: "Laptops",
    price: 980,
    oldPrice: 1050,
    badge: "-30%",
    image: camera3,
    rating: 4,
  },
  {
    id: 4,
    name: "Product Name Goes Here",
    category: "Cameras",
    price: 980,
    image: laptop3,
    rating: 3,
  },
];

const TopSelling: React.FC = () => {
  return (
    <section className="py-12 bg-white w-7xl mt-20 mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Top Selling</h2>
        <div className="flex space-x-6 text-gray-600 font-medium">
          <button className="relative text-red-600 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-red-600">
            Laptops
          </button>
          <button className="hover:text-red-600">Smartphones</button>
          <button className="hover:text-red-600">Cameras</button>
          <button className="hover:text-red-600">Accessories</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-white"
          >
            {product.badge && (
              <span
                className={`absolute top-2 right-2 px-2 py-1 text-xs font-bold text-white rounded ${
                  product.badge === "NEW" ? "bg-green-600" : "bg-red-600"
                }`}
              >
                {product.badge}
              </span>
            )}

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />

            <div className="p-4 flex flex-col items-center text-center">
              <p className="text-xs text-gray-500">{product.category}</p>
              <h3 className="font-semibold text-gray-800 text-sm mb-2">
                {product.name}
              </h3>

              <div className="flex items-center justify-center space-x-2 mb-2">
                <span className="text-red-600 font-bold">
                  ${product.price.toFixed(2)}
                </span>
                {product.oldPrice && (
                  <span className="text-gray-400 line-through text-sm">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-center mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={`h-4 w-4 ${
                      i < product.rating ? "text-red-500" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <hr className="my-3 w-full" />

              <div className="flex justify-around w-full text-gray-500">
                <button className="hover:text-red-600">
                  <FaHeart />
                </button>
                <button className="hover:text-red-600">
                  <FaExchangeAlt />
                </button>
                <button className="hover:text-red-600">
                  <FaEye />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopSelling;

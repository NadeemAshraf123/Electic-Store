import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import laptop2 from "../../assets/images/laptop/laptop2.jpeg";
import laptop3 from "../../assets/images/laptop/laptop3.png";

import headphone1 from "../../assets/images/headphone/headphone1.jpeg";
import headphone3 from "../../assets/images/headphone/headphone3.png";

import camera3 from "../../assets/images/camera/camera3.jpeg";
import mobile from "../../assets/images/mobile/mobile.jpeg";
import mobile1 from "../../assets/images/mobile/mobile1.png";




interface Product {
  id: number;
  image: string;
  category: string;
  name: string;
  currentPrice: number;
  originalPrice: number;
}

const TopSelling: React.FC = () => {
  
  const products: Product[] = [
    {
      id: 1,
      image: laptop2,
      category: "CATEGORY",
      name: "PRODUCT NAME GOES HERE",
      currentPrice: 980.00,
      originalPrice: 990.00
    },
    {
      id: 2,
      image: headphone1,
      category: "CATEGORY", 
      name: "PRODUCT NAME GOES HERE",
      currentPrice: 980.00,
      originalPrice: 990.00
    },
    {
      id: 3,
      image: camera3,
      category: "CATEGORY",
      name: "PRODUCT NAME GOES HERE", 
      currentPrice: 980.00,
      originalPrice: 990.00
    },

    {
      id: 4,
      image: laptop3,
      category: "CATEGORY",
      name: "PRODUCT NAME GOES HERE",
      currentPrice: 980.00,
      originalPrice: 990.00
    },
    {
      id: 5,
      image: headphone3, 
      category: "CATEGORY",
      name: "PRODUCT NAME GOES HERE",
      currentPrice: 980.00,
      originalPrice: 990.00
    },
    {
      id: 6,
      image: laptop3,
      category: "CATEGORY",
      name: "PRODUCT NAME GOES HERE",
      currentPrice: 980.00,
      originalPrice: 990.00
    },

    {
      id: 7,
      image: mobile1,
      category: "CATEGORY", 
      name: "PRODUCT NAME GOES HERE",
      currentPrice: 980.00,
      originalPrice: 990.00
    },
    {
      id: 8,
      image: headphone1,
      category: "CATEGORY",
      name: "PRODUCT NAME GOES HERE", 
      currentPrice: 980.00,
      originalPrice: 990.00
    },
    {
      id: 9,
      image: mobile,
      category: "CATEGORY",
      name: "PRODUCT NAME GOES HERE",
      currentPrice: 980.00,
      originalPrice: 990.00
    }
  ];

  
  const columns = [
    products.slice(0, 3),
    products.slice(3, 6), 
    products.slice(6, 9)
  ];

  const ProductItem: React.FC<{ product: Product }> = ({ product }) => (

    
    <div className="flex items-center gap-2 mb-6 last:mb-0">
      <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="text-xs text-gray-400 font-medium mb-1 tracking-wider">
          {product.category}
        </div>
        <div className="text-sm font-semibold text-gray-800 mb-2 leading-tight">
          {product.name}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-red-500 font-bold text-sm">
            ${product.currentPrice.toFixed(2)}
          </span>
          <span className="text-gray-400 text-xs line-through">
            ${product.originalPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );

  const ColumnSection: React.FC<{ products: Product[] }> = ({ products }) => (

    <div className="bg-red-500 rounded-lg p-6  border border-gray-100">
    
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-800 tracking-wide">
          TOP SELLING
        </h2>
        <div className="flex gap-2">
          <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ChevronLeft className="w-4 h-4 text-gray-400" />
          </button>
          <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>

    
      <div>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );

  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {columns.map((columnProducts, index) => (
          <ColumnSection key={index} products={columnProducts} />
        ))}
      </div>
    </div>
  );
};

export default TopSelling;
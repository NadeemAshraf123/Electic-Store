import React from "react";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price }) => {
  return (
    <div className=" w-7xl mx-auto border rounded-md shadow-sm p-4 hover:shadow-lg transition">
    
      <div className="w-full h-48 flex items-center justify-center overflow-hidden mb-4">
        <img
          src={image}
          alt={name}
          className="object-contain max-h-44 transition-transform duration-300 hover:scale-105"
        />
      </div>

      
      <h3 className="text-sm font-medium text-gray-800 truncate">{name}</h3>
      <p className="text-red-600 font-semibold mt-2">{price}</p>

      <button className="mt-3 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded text-sm font-medium transition">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

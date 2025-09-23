import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

import laptopP from "../../assets/images/laptopP.png";
import headphoneP from "../../assets/images/headphoneP.png";
import laptopP1 from "../../assets/images/laptopP1.png";
import mobileP from "../../assets/images/mobileP.png";
import latopP3 from "../../assets/images/laptopP3.png";
import camera from "../../assets/images/camera.png";
import tabletP from "../../assets/images/tabletP.png";
import headphone from "../../assets/images/headphone.png";
import laptopP2 from "../../assets/images/laptopP2.png";

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
    { id: 1, image: laptopP, category: "CATEGORY", name: "PRODUCT NAME GOES HERE", currentPrice: 980.0, originalPrice: 990.0 },
    { id: 2, image: headphoneP, category: "CATEGORY", name: "PRODUCT NAME GOES HERE", currentPrice: 980.0, originalPrice: 990.0 },
    { id: 3, image: laptopP1, category: "CATEGORY", name: "PRODUCT NAME GOES HERE", currentPrice: 980.0, originalPrice: 990.0 },
    { id: 4, image: mobileP, category: "CATEGORY", name: "PRODUCT NAME GOES HERE", currentPrice: 980.0, originalPrice: 990.0 },
    { id: 5, image: latopP3, category: "CATEGORY", name: "PRODUCT NAME GOES HERE", currentPrice: 980.0, originalPrice: 990.0 },
    { id: 6, image: tabletP, category: "CATEGORY", name: "PRODUCT NAME GOES HERE", currentPrice: 980.0, originalPrice: 990.0 },
    { id: 7, image: headphone, category: "CATEGORY", name: "PRODUCT NAME GOES HERE", currentPrice: 980.0, originalPrice: 990.0 },
    { id: 8, image: camera, category: "CATEGORY", name: "PRODUCT NAME GOES HERE", currentPrice: 980.0, originalPrice: 990.0 },
    { id: 9, image: laptopP2, category: "CATEGORY", name: "PRODUCT NAME GOES HERE", currentPrice: 980.0, originalPrice: 990.0 }
  ];

 
  const poolMax = 6;
  const desiredPoolForGivenProducts = Math.min(products.length, poolMax);
  
  const poolLength = desiredPoolForGivenProducts <= 3 ? 4 : desiredPoolForGivenProducts;


  const startIndices = [0, 3, 6];

  const buildColumn = (startIndex: number) => {
   
    return Array.from({ length: poolLength }, (_, i) => products[(startIndex + i) % products.length]);
  };

  const columns: Product[][] = startIndices.map((start) => buildColumn(start));

  const ProductItem: React.FC<{ product: Product }> = ({ product }) => (
    <div className="flex  items-center gap-2 h-24">
      <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="text-xs text-gray-400 font-medium mb-1 tracking-wider">
          {product.category}
        </div>
        <div className="text-sm font-semibold text-gray-800 mb-2 leading-tight">
          {product.name}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-red-500 font-bold text-sm">${product.currentPrice.toFixed(2)}</span>
          <span className="text-gray-400 text-xs line-through">${product.originalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );

  const ColumnSection: React.FC<{ products: Product[] }> = ({ products }) => {
    const swiperRef = useRef<any>(null);

    return (
      <div className="bg-white rounded-lg p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-gray-800 tracking-wide">TOP SELLING</h2>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-gray-400" />
            </button>
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          direction="horizontal"
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={12}
          loop={products.length > 3}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="h-80"
        >
          {products.map((p, idx) => (
            <SwiperSlide key={`${p.id}-${idx}`}>
              <ProductItem product={p} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {columns.map((col, idx) => (
          <ColumnSection key={idx} products={col} />
        ))}
      </div>
    </div>
  );
};

export default TopSelling;

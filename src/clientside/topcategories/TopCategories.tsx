import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
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
    { id: 9, image: laptopP2, category: "CATEGORY", name: "PRODUCT NAME GOES HERE", currentPrice: 980.0, originalPrice: 990.0 },

    { id: 10, image: tabletP, category: "CATEGORY", name: "PRODUCT NAME GOES HERE", currentPrice: 980.0, originalPrice: 990.0 },
    { id: 11, image: headphone, category: "CATEGORY", name: "PRODUCT NAME GOES HERE", currentPrice: 980.0, originalPrice: 990.0 },
    { id: 12, image: camera, category: "CATEGORY", name: "PRODUCT NAME GOES HERE", currentPrice: 980.0, originalPrice: 990.0 },
    { id: 13, image: laptopP2, category: "CATEGORY", name: "PRODUCT NAME GOES HERE", currentPrice: 980.0, originalPrice: 990.0 },

    { id: 14, image: tabletP, category: "CATEGORY", name: "PRODUCT NAME GOES HERE", currentPrice: 980.0, originalPrice: 990.0 },
    { id: 15, image: headphone, category: "CATEGORY", name: "PRODUCT NAME GOES HERE", currentPrice: 980.0, originalPrice: 990.0 },
    { id: 16, image: camera, category: "CATEGORY", name: "PRODUCT NAME GOES HERE", currentPrice: 980.0, originalPrice: 990.0 },
    { id: 17, image: laptopP2, category: "CATEGORY", name: "PRODUCT NAME GOES HERE", currentPrice: 980.0, originalPrice: 990.0 },
    { id: 6, image: tabletP, category: "CATEGORY", name: "PRODUCT NAME GOES HERE", currentPrice: 980.0, originalPrice: 990.0 },

  ];

  const chunkProducts = (startIndex: number, chunkSize: number): Product[][] => {
    const chunked: Product[][] = [];
    for (let i = startIndex; i < products.length; i += chunkSize) {
      chunked.push(products.slice(i, i + chunkSize));
    }
    return chunked;
  };

  const columnChunks = [0, 3, 6].map((start) => chunkProducts(start, 3));

  const ProductItem: React.FC<{ product: Product }> = ({ product }) => (

    <div className="flex items-center gap-2 h-24">
      <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden flex-shrink-0">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="text-xs text-gray-400 font-medium mb-1 tracking-wider">{product.category}</div>
        <div className="text-sm font-semibold text-gray-800 mb-2 leading-tight">{product.name}</div>
        <div className="flex items-center gap-2">
          <span className="text-red-500 font-bold text-sm">${product.currentPrice.toFixed(2)}</span>
          <span className="text-gray-400 text-xs line-through">${product.originalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );

  const ColumnSection: React.FC<{ productGroups: Product[][]; autoplayDelay?: number }> = ({ productGroups, autoplayDelay = 3000 }) => {
    const swiperRef = useRef<any>(null);

    return (
      <div className="  bg-white rounded-lg p-6 border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-gray-800 tracking-wide">TOP SELLING</h2>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-8 h-8  bg-red-500 rounded-full border border-gray-200 flex items-center justify-center hover:bg-red-700 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              className="w-8 h-8 rounded-full  bg-red-500 border border-gray-200 flex items-center justify-center hover:bg-red-700 transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          slidesPerGroup={1}
          spaceBetween={12}
          loop={productGroups.length > 1}
          autoplay={{
            delay: autoplayDelay,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="h-[300px]"
        >
          {productGroups.map((group, idx) => (
            <SwiperSlide key={idx}>
              <div className="space-y-4">
                {group.map((product) => (
                  <ProductItem key={product.id} product={product} />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };

  return (
    <div className=" w-full mx-auto max-w-7xl container px-4 py-8">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {columnChunks.map((group, idx) => (
          <ColumnSection 
          key={idx} 
          productGroups={group}
          autoplayDelay={idx === 0 ? 2000 : idx === 1 ? 4000 : 3000} 
          />
        ))}
      </div>
    </div>
  );
};

export default TopSelling;

'use client'

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/images/slide1.jpg",
    text: "Be the champion for Singapore's ITS and mobility community, towards transportation that enhances quality of life",
  },
  {
    image: "/images/slide2.jpg",
    text: "Be the champion for Singapore's ITS and mobility community, towards transportation that enhances quality of life",
  },
];

const MainSlider = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [isSwiperReady, setIsSwiperReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsSwiperReady(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative site-slider w-full group overflow-hidden">
      {isSwiperReady && (
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          loop
          
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          speed={800}
          onInit={(swiper) => {
            //@ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            //@ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
            swiper.pagination.init();
            swiper.pagination.update();
          }}
          className="h-[550px]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[550px] overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10"></div>
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover animate-zoom"
                />
               <div className="absolute z-20 top-1/2 left-[10%] transform -translate-y-1/2 text-left px-4">
  <div className="inline-block border-4 border-white p-6 max-w-2xl">
    <p className="text-white text-lg font-semibold leading-relaxed">
      {slide.text}
    </p>
  </div>
  <div className="mt-6">
    <a
      href="#"
      className="inline-block bg-[#ff0000] border border-[#ff0000] text-white text-sm font-semibold uppercase px-5 py-2.5 rounded-[4px] shadow-sm hover:bg-[#cc0000] hover:border-[#cc0000] transition-all tracking-wide"
    >
      ABOUT US
    </a>
  </div>
</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Prev Button */}
      <button
        ref={prevRef}
        className="absolute top-1/2 left-[-50px] transform -translate-y-1/2 z-30 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:left-4 transition-all duration-500"
      >
        <ChevronLeft className="w-10 h-10" />
      </button>

      {/* Next Button */}
      <button
        ref={nextRef}
        className="absolute top-1/2 right-[-50px] transform -translate-y-1/2 z-30 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:right-4 transition-all duration-500"
      >
        <ChevronRight className="w-10 h-10" />
      </button>

      {/* Pagination */}
    

      {/* Tailwind CSS Keyframes for Zoom Effect */}
      <style jsx>{`
        @keyframes zoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.3);
          }
        }
        .animate-zoom {
          animation: zoom 2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default MainSlider;

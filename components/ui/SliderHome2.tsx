"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import "./Slider1.css";

export const sliderData = [
    {
      id: 1,
      image: "/images/image-slider1.png",
      title: "Blog title",
      date: "Sunday, July 23, 2025",
      buttonText: "Read More",
    },
    {
      id: 2,
      image: "/images/image-slider1.png",
      title: "Blog title",
      date: "Sunday, July 23, 2025",
      buttonText: "Read More",
    },
    {
      id: 3,
      image: "/images/image-slider1.png",
      title: "Blog title",
      date: "Sunday, July 23, 2025",
      buttonText: "Read More",
    },
    {
      id: 4,
      image: "/images/image-slider1.png",
      title: "Blog title",
      date: "Sunday, July 23, 2025",
      buttonText: "Read More",
    },
    {
      id: 5,
      image: "/images/image-slider1.png",
      title: "Blog title",
      date: "Sunday, July 23, 2025",
      buttonText: "Read More",
    },
    {
        id: 6,
        image: "/images/image-slider1.png",
        title: "Blog title",
        date: "Sunday, July 23, 2025",
        buttonText: "Read More",
      },
  ];
  

export default function Slider() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);


  return (
    <div className="container mx-auto text-black">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={2}
        grabCursor={true}
        loop={true}
       
        pagination={{ clickable: true, el: ".custom-pagination1" }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        className="pb-14"
        onSwiper={(swiper) => {
            setSwiperInstance(swiper);
          }}
      >
        {sliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="py-6">
            <div className="relative w-[100%] h-[400px] mx-auto overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
             {/* Nút Read More */}
             <button className="bg-yellow-400 text-black font-semibold px-4 py-1 rounded-full mt-4">
                {item.buttonText}
              </button>

              {/* Tiêu đề + Ngày */}
              <h3 className="text-white text-2xl font-bold mt-2">
                {item.title}
              </h3>
              <p className="text-white text-sm mt-1">{item.date}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Pagination + Navigation */}
      <div className="flex items-center justify-center space-x-4 mt-6">
        {/* Nút Prev */}
        <button ref={prevRef} className="p-2  hover:bg-gray-200 transition">
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        {/* Pagination */}
        <div className={`custom-pagination1 flex space-x-2`}></div>

        {/* Nút Next */}
        <button ref={nextRef} className="p-2 hover:bg-gray-200 transition">
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
}

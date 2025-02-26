"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import "./Slider.css";

const sliderData = [
  {
    id: 1,
    image: "/images/image-slider1.png",
    title: "ITSS x LTA Hackathon 2025: Making Our Roads Safer",
    date: "Sunday, July 23, 2025",
  },
  {
    id: 2,
    image: "/images/image-slider1.png",
    title: "ITSS x LTA Hackathon 2025: Making Our Roads Safer",
    date: "Sunday, July 23, 2025",
  },
  {
    id: 3,
    image: "/images/image-slider1.png",
    title: "ITSS x LTA Hackathon 2025: Making Our Roads Safer",
    date: "Sunday, July 23, 2025",
  },
  {
    id: 4,
    image: "/images/image-slider1.png",
    title: "ITSS x LTA Hackathon 2025: Making Our Roads Safer",
    date: "Sunday, July 23, 2025",
  },
  {
    id: 5,
    image: "/images/image-slider1.png",
    title: "ITSS x LTA Hackathon 2025: Making Our Roads Safer",
    date: "Sunday, July 23, 2025",
  },
];

export default function Slider() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="container mx-auto text-black">
      <div className="flex justify-end px-6 mb-10">
        <button className="bg-white border border-[#6355D8] hover:bg-purple-200 rounded-lg px-8 py-3 mt-6">
          <span className="text-[#6355D8] text-lg font-normal">View all</span>
        </button>
      </div>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        className="pb-14"
        onInit={(swiper) => {
          // Gán navigation sau khi Swiper đã init (để tránh lỗi undefined)
          //@ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          //@ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
          swiper.pagination.init();
          swiper.pagination.update();
        }}
      >
        {sliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="p-6 rounded-lg shadow-lg">
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="rounded-lg"
              />
              <div className="mt-4">
                <h3 className="text-black text-2xl font-bold mt-2">
                  {item.title}
                </h3>
                <p className="text-black text-xs font-normal mt-1">
                  {item.date}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Pagination + Navigation */}
      <div className="flex items-center justify-center space-x-4 mt-6">
        {/* Nút Prev */}
        <button ref={prevRef} className="p-2  hover:bg-gray-200 transition">
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        {/* Pagination */}
        <div className={`custom-pagination flex space-x-2`}></div>

        {/* Nút Next */}
        <button ref={nextRef} className="p-2 hover:bg-gray-200 transition">
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </div>
  );
}

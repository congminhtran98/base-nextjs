"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
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
  const [isSwiperReady, setIsSwiperReady] = useState(false);

  useEffect(() => {
    // Chờ 200ms để đảm bảo navigation được gán đúng
    const timeout = setTimeout(() => setIsSwiperReady(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      className="container mx-auto text-black"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {isSwiperReady && (
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
        >
          {sliderData.map((item) => (
            <SwiperSlide key={item.id}>
              <motion.div
                className="py-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="relative w-[100%] h-[400px] mx-auto overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>

                {/* Nút Read More */}
                <motion.button
                  className="bg-yellow-400 text-black font-semibold px-4 py-1 rounded-full mt-4 shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.buttonText}
                </motion.button>

                {/* Tiêu đề + Ngày */}
                <h3 className="text-white text-2xl font-bold mt-2">
                  {item.title}
                </h3>
                <p className="text-white text-sm mt-1">{item.date}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Custom Pagination + Navigation */}
      <div className="flex items-center justify-center space-x-4 mt-6">
        {/* Nút Prev */}
        <motion.button
          ref={prevRef}
          className="p-2 hover:bg-gray-200 transition rounded-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </motion.button>

        {/* Pagination */}
        <div className={`custom-pagination1 flex space-x-2`}></div>

        {/* Nút Next */}
        <motion.button
          ref={nextRef}
          className="p-2 hover:bg-gray-200 transition rounded-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </motion.button>
      </div>
    </motion.div>
  );
}

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  const [isSwiperReady, setIsSwiperReady] = useState(false);

  useEffect(() => {
    // Chờ 200ms trước khi hiển thị Swiper để đảm bảo navigation refs đã được gán
    const timeout = setTimeout(() => setIsSwiperReady(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      className="container mx-auto text-black md:mt-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Nút View All */}
      <div className="flex justify-end px-6 mb-10">
        <motion.button
          className="bg-white border border-[#6355D8] hover:bg-purple-200 rounded-lg px-8 py-3 mt-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-[#6355D8] text-lg font-normal">View all</span>
        </motion.button>
      </div>

      {/* Swiper */}
      {isSwiperReady && (
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
            // Gán navigation sau khi Swiper đã init
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
                className="p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
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
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </motion.button>

        {/* Pagination */}
        <div className={`custom-pagination flex space-x-2`}></div>

        {/* Nút Next */}
        <motion.button
          ref={nextRef}
          className="p-2 hover:bg-gray-200 transition rounded-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </motion.button>
      </div>
    </motion.div>
  );
}

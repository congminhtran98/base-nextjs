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

export default function CouncillorsSlider() {
  const councillorsData = [
    {
      id: 1,
      image: "/images/councillor1.jpg",
      name: "Full name",
      title: "Professional title",
      bgColor: "bg-[#FFEEF0]",
    },
    {
      id: 2,
      image: "/images/councillor2.jpg",
      name: "Full name",
      title: "Professional title",
      bgColor: "bg-[#D9F6E3]",
    },
    {
      id: 3,
      image: "/images/councillor3.jpg",
      name: "Full name",
      title: "Professional title",
      bgColor: "bg-[#FDF5E6]",
    },
    {
      id: 4,
      image: "/images/councillor4.jpg",
      name: "Full name",
      title: "Professional title",
      bgColor: "bg-[#E5E4F7]",
    },
    {
      id: 5,
      image: "/images/councillor5.jpg",
      name: "Full name",
      title: "Professional title",
      bgColor: "bg-[#F5E6FA]",
    },
  ];

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [isSwiperReady, setIsSwiperReady] = useState(false);

  useEffect(() => {
    // Đợi 200ms trước khi hiển thị Swiper để tránh lỗi navigation
    const timeout = setTimeout(() => setIsSwiperReady(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.section
      className="w-full bg-gradient-to-b from-[#1E6A9F] to-[#26235C] text-white py-16 px-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-8">Our Councillors</h2>

        {/* Swiper Slider */}
        {isSwiperReady && (
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={4}
            centeredSlides={true}
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
            {councillorsData.map((person) => (
              <SwiperSlide key={person.id}>
                <motion.div
                  className={`rounded-xl p-4 ${person.bgColor} shadow-lg hover:shadow-xl transition duration-300`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {/* Image */}
                  <div className="relative w-full h-64">
                    <Image
                      src={person.image}
                      alt={person.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-xl"
                    />
                  </div>

                  {/* Info */}
                  <div className="bg-white text-black text-center p-4 rounded-[35px] -mt-10 mx-4 shadow-md">
                    <h3 className="font-semibold">{person.name}</h3>
                    <p className="text-gray-500 text-sm">{person.title}</p>
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
      </div>
    </motion.section>
  );
}

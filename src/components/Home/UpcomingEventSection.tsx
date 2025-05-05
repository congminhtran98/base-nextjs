"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const events = [
  {
    img: "/images/event1.jpg",
    title: "Technology Fair 2024",
    date: "March 15-17, 2024",
  },
  {
    img: "/images/event2.jpg",
    title: "Electronics Exhibition",
    date: "April 20-22, 2024",
  },
  {
    img: "/images/event3.jpg",
    title: "AI Technology Workshop",
    date: "May 10, 2024",
  },
  {
    img: "/images/event1.jpg",
    title: "IoT Exhibition 2024",
    date: "June 5-7, 2024",
  },
  {
    img: "/images/event2.jpg",
    title: "Blockchain Conference",
    date: "July 15, 2024",
  },
  {
    img: "/images/event3.jpg",
    title: "Green Technology Exhibition",
    date: "August 10-12, 2024",
  },
];

const UpcomingEventsSection = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [isSwiperReady, setIsSwiperReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsSwiperReady(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      className="relative z-[17] py-20 -mt-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg1.svg')" }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 relative">
        <h3 className="text-2xl font-bold text-white mb-8 ml-4 uppercase">
          UPCOMING EVENTS
        </h3>

        <div className="relative">
          {isSwiperReady && (
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={3}
              loop
              pagination={{ clickable: true, el: ".custom-pagination" }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className="pb-16"
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
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {events.map((event, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    className="event-item border border-gray-300 rounded overflow-hidden shadow-md"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <img
                      src={event.img}
                      alt={event.title}
                      className="w-full h-[250px] object-cover"
                    />
                    <div className="event-caption bg-black/70 text-white p-4 text-center">
                      <h4 className="font-semibold mb-1">{event.title}</h4>
                      <p className="text-sm">{event.date}</p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {/* Prev Button */}
          <motion.button
            ref={prevRef}
            className=" absolute top-1/2 -translate-y-1/2 -left-4 z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-[80px] h-10 text-gray-400 hover:text-gray-600 transition" />
          </motion.button>

          {/* Next Button */}
          <motion.button
            ref={nextRef}
            className="absolute top-1/2 -translate-y-1/2 -right-4 z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-[80px] h-10 text-gray-400 hover:text-gray-600 transition" />
          </motion.button>

          {/* Custom Pagination */}
          <div className="custom-pagination flex justify-center mt-6 space-x-2"></div>
        </div>

        {/* View All Button */}
        <div className="text-right mt-8">
          <a
            href="#"
            className="inline-block bg-[#ff0000] border border-[#ff0000] text-white text-sm font-semibold uppercase px-5 py-2.5 rounded-[4px] shadow-sm hover:bg-[#cc0000] hover:border-[#cc0000] transition-all tracking-wide"
          >
            VIEW ALL
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default UpcomingEventsSection;

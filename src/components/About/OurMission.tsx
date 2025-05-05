"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const timelineEvents = [
  {
    id: 1,
    description:
      "To promote innovation and development of Intelligent Transport Systems and mobility solutions in Singapore.",
    position: "right",
  },
  {
    id: 2,
    description:
      "To build awareness and facilitate thought leadership, locally and globally.",
    position: "left",
  },
  {
    id: 3,
    description:
      "To unite a motivated community of stakeholders, working together towards safe, inclusive and sustainable transportation that enhances quality of life.",
    position: "right",
  },
];

export default function CustomTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: true }); // Chỉ chạy 1 lần

  return (
    <section className="w-full bg-white py-16 px-6 relative overflow-hidden">
      <motion.div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-10">Our Mission</h2>

        <div className="relative">
          {/* Dòng kẻ dọc nét đứt */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] border-l-2 border-gray-300 border-dashed"></div>

          {/* Danh sách sự kiện */}
          {timelineEvents.map((event, index) => (
            <motion.div
              ref={ref}
              key={event.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className={`relative flex ${
                event.position === "left"
                  ? "justify-end pr-8 text-right"
                  : "justify-start pl-8"
              } items-center pb-10`}
            >
              {/* Điểm trên timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-10 h-10 bg-[#CFCBF3] border-2 border-gray-300 rounded-full flex items-center justify-center">
                <div className="rounded-full w-[18px] h-[18px] bg-[#867CE1] flex justify-center items-center"></div>
              </div>

              {/* Mũi tên chỉ hướng */}
              {index < timelineEvents.length && (
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0">
                  <div className="w-3 h-3 border-l-2 border-b-2 border-gray-400 -rotate-45"></div>
                </div>
              )}

              {/* Nội dung */}
              <div className="px-4 rounded-lg max-w-md -mt-3">
                <h3 className="text-[40px] font-bold text-left text-[#867CE1]">
                  {index + 1}
                </h3>
                <p className="text-[#323743] text-xl font-normal mt-2 text-left">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Hình ảnh góc trên phải */}
      <Image
        src="/images/border2.png" // Đường dẫn ảnh
        alt="Top Right Decoration"
        width={200}
        height={200}
        className="absolute top-0 right-0 w-[220px] h-[584px]"
      />

      {/* Hình ảnh góc dưới trái */}
      <Image
        src="/images/border1.png" // Đường dẫn ảnh
        alt="Bottom Left Decoration"
        width={200}
        height={200}
        className="absolute bottom-0 left-0 w-[220px] h-[389px]"
      />
    </section>
  );
}

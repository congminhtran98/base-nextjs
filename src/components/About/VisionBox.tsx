"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function VisionBox() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: true }); // Chỉ chạy 1 lần
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex flex-col lg:flex-row justify-between max-w-5xl mx-auto bg-gradient-to-r from-[#26235C] to-[#1E6A9F] text-white rounded-[20px] p-[64px] shadow-lg mt-[50px] h-[241px]"
    >
      <h3 className="text-xl font-bold mb-2 flex-1">Vision</h3>
      <p className="text-white text-lg text-left flex-1">
        Be the champion for Singapore’s ITS and mobility community, towards
        transportation that enhances quality of life.
      </p>
    </motion.div>
  );
}

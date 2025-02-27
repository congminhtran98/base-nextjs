"use client";

import { motion } from "framer-motion";

export default function VisionBox() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
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

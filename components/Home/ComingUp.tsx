"use client";

import Slider from "../ui/SliderHome1";
import Image from "next/image";
import { Headphones, FileText } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ComingUp() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: true }); // Chỉ chạy 1 lần

  return (
    <div className="w-full mx-auto bg-gradient-to-b from-[#1E6A9F] to-[#FFFFFF] text-black pt-[96px]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:pb-[200px]"
      >
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-1/2 text-white space-y-4"
        >
          <h2 className="text-4xl font-bold">Coming up</h2>
          <p className="text-xl font-semibold">
            ITSS x LTA Hackathon 2025: Making Our Roads Safer
          </p>
          <p className="text-gray-200">February 7 - April 17</p>

          {/* Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex space-x-4 mt-4"
          >
            <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-3 py-2 rounded-md">
              <Headphones className="w-5 h-5 text-white" />
            </div>
            <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-3 py-2 rounded-md">
              <FileText className="w-5 h-5 text-white" />
            </div>
          </motion.div>

          {/* Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white border border-[#6355D8] hover:bg-purple-200 rounded-lg px-8 py-3 mt-6"
          >
            <span className="text-[#6355D8] text-lg font-normal">
              View More
            </span>
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="lg:w-1/2 mt-10 lg:mt-0 flex justify-end"
        >
          <Image
            src="/images/ComingUp.png"
            alt="Hackathon Event"
            width={584}
            height={386}
            className="rounded-lg shadow-lg w-[584px] max-h-[386px] lg:translate-y-[200px]"
          />
        </motion.div>
      </motion.div>
      <Slider />
      <div className="max-w-5xl mx-auto border border-black my-10 flex justify-center lg:px-[100px]"></div>
    </div>
  );
}

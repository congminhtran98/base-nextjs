"use client";

import Image from "next/image";
import Slider from "../ui/SliderHome2";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LatestNews() {
  return (
    <div className="w-full mx-auto bg-gradient-to-r from-[#1E6A9F] to-[#26245D] text-white pt-[96px]">
      <div className="container mx-auto flex flex-col items-center justify-between px-6">
        <div className="container mx-auto flex justify-between items-center mb-10">
          {/* Left Text */}
          <div className="max-w-lg">
            <h2 className="text-4xl font-bold">Latest news</h2>
            <p className="text-gray-300 mt-2">
              In minim mollit exercitation deserunt proident officia sint
              excepteur aute eiusmod. Aute ullamc
            </p>
          </div>

          {/* View All Button */}
          <button className="bg-white border border-[#6355D8] hover:bg-purple-200 rounded-lg px-8 py-3 mt-6 flex items-end">
          <span className="text-[#6355D8] text-lg font-normal">View all</span>
        </button>
        </div>
        <Slider />

        <div className="max-w-5xl w-full mx-auto border border-white my-5 flex justify-center lg:px-[100px]"></div>
      </div>
    </div>
  );
}

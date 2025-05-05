"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Link, Wifi, Share2, Send  } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="relative w-full h-[534px] flex items-center bg-gradient-to-r from-[#26235C] to-[#1E6A9F] text-white px-6">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-lg"
        >
          <h2 className="text-4xl font-bold">About us</h2>
          <div className="w-16 h-1 bg-white mt-2 mb-4"></div>
          <p className="text-white text-xl font-normal">
            Intelligent Transportation Society (ITS) Singapore was formed in
            August 26, 2001. The aim of this society is to bring together the
            professional interests of those in public and private organizations,
            practitioners, academics and researchers related to ITS, and create
            opportunities for networking and interaction.
          </p>
        </motion.div>

        {/* Right Image Container */}
        <div className="relative w-full flex justify-center lg:justify-end">
          {/* Background Image */}
          <div className="relative w-full h-[130px] sm:h-[200px] lg:w-[500px] lg:h-[300px] mt-10 lg:translate-y-[90px]" >
            <Image
              src="/images/about-background.jpg"
              alt="Connected Network"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Floating Popup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="absolute left-0 top-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl rounded-xl p-4 w-48 text-center"
          >
            <h3 className="text-lg font-semibold text-[#6355D8]">Community</h3>
            <div className="mt-2 space-y-2">
              <div className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg text-sm">
                <Wifi className="w-4 h-4 text-[#6355D8]" />
                <span className="text-[#6355D8]">Connection</span>
              </div>
              <div className="flex items-center space-x-2 bg-pink-100 px-3 py-2 rounded-lg text-sm">
                <Share2 className="w-4 h-4 text-pink-500" />
                <span className="text-[#E16DDE]">Share</span>
              </div>
              <div className="flex items-center space-x-2 bg-yellow-100 px-3 py-2 rounded-lg text-sm">
                <Send className="w-4 h-4 text-yellow-500" />
                <span className="text-[#98690C]">Send</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

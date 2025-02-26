"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Membership() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#FFFFFF] to-[#1E6A9F] text-black py-16 overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-1/2"
        >
          <h2 className="text-[64px] font-bold">Membership</h2>
          <p className="text-[#6F7787] font-normal text-lg lg:mt-[104px]">
            In qui aliquip enim sunt amet et eu sunt excepteur reprehenderit anim officia esse adipiscing.
          </p>

          {/* Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center space-x-2 bg-purple-100 hover:bg-purple-200 text-[#6355D8] px-6 py-3 rounded-lg font-medium shadow-md mt-4 lg:mt-[96px]"
          >
            <span>See all</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Right Content - Logos */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="lg:w-1/2 flex flex-wrap items-center justify-center lg:justify-end space-x-6 space-y-4 mt-10 lg:mt-0"
        >
            <div>

          <Image src="/images/aws.png" alt="AWS" width={192} height={115} />
          <Image src="/images/Aimsun.png" alt="Aimsun" width={186} height={186} />
            </div>
            <div>

          <Image src="/images/Curium.png" alt="Curium" width={156} height={156} />
          <Image src="/images/att.png" alt="ATT" width={160} height={160} />
            </div>
        </motion.div>
      </div>

      {/* Góc cắt phía dưới bên phải */}
      <div className="absolute bottom-0 right-0 w-[200px] h-[120px] bg-white clip-path-triangle"></div>
    </section>
  );
}

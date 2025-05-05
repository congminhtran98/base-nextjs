"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="w-full h-[534px] flex items-center justify-center bg-gradient-to-r from-[#26235C] to-[#1E6A9F] text-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="text-center max-w-2xl"
      >
        {/* Nội dung chính */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl font-medium"
        >
          Be the champion for Singapore's ITS and mobility community, towards
          transportation that enhances quality of life
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          className="mt-6"
        >
          <Link
            href="/about"
            className="bg-[#7B5EFF] px-6 py-3 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            About us
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

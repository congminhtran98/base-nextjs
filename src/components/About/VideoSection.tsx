"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full flex justify-center py-16">
      <div className="relative w-[960px] h-[536px] rounded-lg overflow-hidden shadow-lg">
        {/* Nếu bấm vào thì hiển thị video, nếu không thì hiển thị ảnh */}
        {!isPlaying ? (
          <>
            <Image
              src="/images/video-thumbnail.jpg" // Ảnh đại diện video
              alt="Video Thumbnail"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />

            {/* Nút phát video */}
            <motion.button
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition-all duration-300 hover:bg-opacity-60"
              onClick={() => setIsPlaying(true)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-[#6355D8] text-white px-5 py-3 rounded-[26px] flex items-center gap-2 space-x-2 text-lg font-normal shadow-lg hover:bg-purple-700">
                Watch the video
                <Play className="w-6 h-6" />
              </span>
            </motion.button>
          </>
        ) : (
          // Nhúng iframe video
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" // Thay link video thực tế
            title="Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";

interface BannerProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
}

export default function Banner({ backgroundImage, title, subtitle }: BannerProps) {
  return (
    <div className="w-full h-[385px] mx-auto relative rounded-[20px] overflow-hidden shadow-lg mb-10">
      {/* Hình nền */}
      <Image
        src={backgroundImage}
        alt="Banner Background"
        layout="fill"
        objectFit="cover"
        className="rounded-[20px]"
        priority
      />

      {/* Nội dung */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white bg-black bg-opacity-10">
        <h2 className="text-2xl lg:text-[48px] font-bold">{title}</h2>
        <p className="text-base lg:text-[35px] font-normal mt-2 text-center">{subtitle}</p>
      </div>
    </div>
  );
}

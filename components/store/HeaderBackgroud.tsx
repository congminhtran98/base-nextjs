"use client";
import Image from "next/image";

type HeaderProps = {
  backgroundImage: string;
  title: string;
  tagline: string;
};

export default function HeaderBackgroud({ backgroundImage, title, tagline }: HeaderProps) {
  return (
    <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 mt-[90px] p-3">
      <div className="absolute inset-0 rounded-[20px]">
        <Image
          src={backgroundImage}
          layout="fill"
          objectFit="cover"
          className="filter blur-md"
          alt="Background image"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black uppercase">
          {title}
        </h1>
        <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl text-black uppercase">
          {tagline}
        </p>
      </div>
    </div>
  );
}
"use client";

import { useEffect, useState } from "react";

const useTypewriter = (text: string, speed: number = 20) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [slashChar, setSlashChar] = useState("/");

  useEffect(() => {
    if (!text) return; // Xử lý trường hợp text rỗng

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1)); // Lấy chuỗi từ đầu đến currentIndex
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTypingDone(true);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  useEffect(() => {
    if (!isTypingDone) return;

    let currentIndex = 0;
    const slashChars = ["/", "-", "\\"];
    const interval = setInterval(() => {
      setSlashChar(slashChars[currentIndex]);
      currentIndex = (currentIndex + 1) % slashChars.length;
    }, 250);

    return () => clearInterval(interval);
  }, [isTypingDone]);

  return { displayedText, isTypingDone, slashChar };
};

const HomeSlider = () => {
  const typewriterText = `Be the champion\nfor Singapore's ITS and mobility community, towards transportation\nthat enhances quality of life.`;

  const { displayedText, isTypingDone, slashChar } = useTypewriter(
    typewriterText,
    20
  );

  const visibleText = displayedText;
  const lastChar = visibleText.slice(-1);
  const textWithoutLastChar = visibleText.slice(0, -1);

  return (
    <div className="relative z-10 max-h-[550px] overflow-hidden">
      <div className="relative max-h-[550px] overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <video
          autoPlay
          muted
          loop
          id="slider-video"
          className="w-full h-auto object-cover block max-h-[550px]"
        >
          <source src="/images/slide.mp4" type="video/mp4" />
          <img
            src="/images/slide1.jpg"
            alt="Slider Fallback"
            className="w-full h-auto object-cover block max-h-[550px]"
          />
        </video>
        <div className="absolute z-20 w-full top-[20%] text-left pl-[10%]">
          <div className="w-[60%] max-w-[850px] m-0 border-4 border-white p-6 text-left">
            <p className="m-0 text-[20px] leading-relaxed text-white font-semibold whitespace-pre-line font-mono text-shadow-md inline-block">
              <span>{textWithoutLastChar}</span>
              <span>{lastChar}</span>
              {displayedText.length >= 1 && !isTypingDone && (
                <span className="inline spinning-slash">{slashChar}</span>
              )}
              {isTypingDone && (
                <span className="inline ml-1">
                  .<span className="spinning-slash">{slashChar}</span>
                </span>
              )}
            </p>
          </div>
          <a
            href="#"
            className="mt-8 ml-6 inline-block bg-red-600 border-2 border-red-600 text-white font-semibold uppercase text-[16px] px-6 py-3 rounded-md shadow-md hover:bg-red-700 hover:border-red-700 transition-all"
          >
            ABOUT US
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;

"use client";

import Image from "next/image";
import React, { useState } from "react";

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  description: string;
  category: string;
}

interface GallerySectionProps {
  items: GalleryItem[];
  categories: string[];
}

const GallerySection: React.FC<GallerySectionProps> = ({
  items,
  categories,
}) => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Lấy danh sách category duy nhất từ dữ liệu
  const groupedItems = items.reduce(
    (acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    },
    {} as Record<string, GalleryItem[]>
  );

  const filteredCategories =
    activeCategory === "All" ? Object.keys(groupedItems) : [activeCategory];

  return (
    <section className="gallery-intro relative bg-[#f9f9f9] py-20 mt-[-20px]">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="section-title text-center mb-10">
          <h2 className="text-[36px] font-bold text-[#333] mb-4">
            Our Photo Gallery
          </h2>
          <p className="text-[#666] max-w-[700px] mx-auto">
            Browse through our collection of photos from various events,
            conferences, and activities organized by ITS Singapore. These images
            showcase our commitment to advancing intelligent transportation
            systems and bringing together professionals in the industry.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="gallery-filter text-center mb-10">
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`bg-[#f8f9fa] text-[#333] border border-[#ddd] rounded-full px-5 py-2 font-semibold text-sm mx-2 mb-2 transition-all duration-300 ${
                activeCategory === cat
                  ? "!bg-[#aa0000] text-white !border-[#aa0000]"
                  : ""
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery by Group */}
        {filteredCategories.map((cat) => (
          <div key={cat} className="mb-12">
            <h3 className="text-[20px] font-semibold text-[#333] mb-4 border-b-2 border-[#aa0000] inline-block px-1">
              {cat === "Conferences"
                ? "Conference Highlights"
                : cat === "Workshops"
                  ? "Workshop & Training"
                  : cat}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {groupedItems[cat]?.map((item) => (
                <div
                  key={item.id}
                  className="gallery-item relative overflow-hidden rounded-lg shadow-md"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={250}
                    className="w-full h-[250px] object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="overlay absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="overlay-content text-white text-center">
                      <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                      <p className="text-sm mb-3">{item.description}</p>
                      <a
                        href="#"
                        className="view-btn bg-[#aa0000] text-white py-2 px-4 rounded-full text-sm font-semibold"
                      >
                        View More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;

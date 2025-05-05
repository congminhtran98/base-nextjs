'use client';

import Image from "next/image";
import { useState } from "react";

export type GalleryItem = {
  src: string;
  title: string;
  description: string;
  category: string;
};

export type GallerySectionProps = {
  title: string;
  subtitle: string;
  groupedItems: Record<string, GalleryItem[]>; // key = category title
};

export default function GallerySection({ title, subtitle, groupedItems }: GallerySectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const allCategories = Object.keys(groupedItems);
  const displayedGroups = activeFilter === 'All' ? groupedItems : {
    [activeFilter]: groupedItems[activeFilter] || []
  };

  return (
    <section className="gallery-intro bg-[#f9f9f9] py-20 relative mt-[-20px]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 relative inline-block">
            {title}
            <span className="block w-20 h-[3px] bg-red-700 mt-2 mx-auto" />
          </h2>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-base leading-relaxed">{subtitle}</p>
        </div>

        {/* Filter buttons */}
        <div className="text-center mb-10">
          <div className="inline-flex flex-wrap justify-center gap-2 bg-white py-2 px-6 rounded-full shadow">
            {['All', ...allCategories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-sm font-semibold rounded-full border transition-all duration-200 ${
                  activeFilter === cat ? 'bg-red-700 text-white border-red-700' : 'text-gray-700 border-gray-300 hover:bg-red-700 hover:text-white hover:border-red-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {Object.entries(displayedGroups).map(([groupTitle, items]) => (
          <div key={groupTitle} className="mb-16">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 relative inline-block">
              {groupTitle}
              <span className="absolute bottom-[-4px] left-0 w-16 h-[3px] bg-red-700" />
            </h3>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {items.map((item, index) => (
                <div key={index} className="relative rounded-lg overflow-hidden shadow group">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={500}
                    height={300}
                    className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <div className="text-white text-center px-4">
                      <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                      <p className="text-sm mb-4">{item.description}</p>
                      <span className="inline-block bg-red-700 px-4 py-1 rounded-full text-sm font-semibold">View Larger</span>
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
}

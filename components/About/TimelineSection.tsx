import React from "react";
import Image from "next/image";

interface TimelineItem {
  year: string;
  title: string;
  iconClass: string;
  description: string;
  imageSrc: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-[#39c8e2] text-[50px] mb-4">
            <i className="fa fa-history"></i>
          </div>
          <h2 className="text-3xl font-medium">Our Journey</h2>
        </div>
        <div className="space-y-16">
          {items.map((item, idx) => (
            <div key={idx} className="relative pl-16">
              <div className="absolute left-0 top-1 w-12 h-12 bg-[#39c8e2] text-white flex items-center justify-center rounded-full font-medium text-sm">
                {item.year}
              </div>
              <div className="absolute left-6 top-12 bottom-0 w-px bg-[#39c8e2]"></div>
              <div className="grid md:grid-cols-12 gap-8 items-start mt-4">
                <div className={`md:col-span-8 ${idx % 2 === 1 ? 'order-2 md:order-1' : ''} pt-4`}>
                  <h4 className="text-[#39c8e2] text-base font-medium flex items-center mb-2">
                    <i className={`fa ${item.iconClass} mr-2`}></i> {item.title}
                  </h4>
                  <p className="text-[#777777] leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
                <div className={`md:col-span-4 ${idx % 2 === 1 ? 'order-1 md:order-2' : ''}`}>
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    width={400}
                    height={250}
                    className="rounded shadow-md w-full object-cover max-h-[250px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;

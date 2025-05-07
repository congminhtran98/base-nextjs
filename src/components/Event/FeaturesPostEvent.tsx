import React from "react";
import Image from "next/image";
import Link from "next/link";

interface EventInfo {
  date: {
    day: string;
    month: string;
    year: string;
  };
  time?: string;
  location?: string;
  attendees?: string;
  title: string;
  excerpt: string;
  category?: string;
  price?: string;
  priceLabel?: string;
  link?: string;
  image: string;
  isFeatured?: boolean;
}

interface UpcomingEventsProps {
  featuredEvent: EventInfo;
  sideEvents: EventInfo[];
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({
  featuredEvent,
  sideEvents,
}) => {
  return (
    <div className="featured-event bg-[#f8f9fa] py-20 mb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col flex-1 min-h-[560px]">
            <div className="featured-event-card bg-white rounded-[15px] overflow-hidden shadow-2xl flex flex-col h-full">
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src={featuredEvent.image}
                  alt={featuredEvent.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                {featuredEvent.category && (
                  <div className="event-category absolute top-4 right-4 bg-[#ff5252] text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    {featuredEvent.category}
                  </div>
                )}
              </div>
              <div className="p-8 flex flex-col h-full">
                <p className="text-[#666] text-base leading-relaxed mb-6 flex-grow max-h-[180px] overflow-hidden">
                  <i className="fa fa-calendar mr-1"></i> {featuredEvent.date.month}/{featuredEvent.date.day}/{featuredEvent.date.year}
                </p>
                <h3 className="text-[28px] font-bold text-[#333] mb-4 leading-snug">
                  {featuredEvent.title}
                </h3>
                {/* <p className="text-[#666] text-base leading-relaxed mb-6 flex-grow max-h-[180px] overflow-hidden">
                  {featuredEvent.excerpt}
                </p> */}
                <div className="flex justify-between items-center mt-auto border-t pt-4">
                  {/* <div className="text-left">
                    <div className="text-[#777] text-sm">
                      {featuredEvent.priceLabel}
                    </div>
                    <div className="text-2xl font-bold text-[#333]">
                      {featuredEvent.price}
                    </div>
                  </div> */}
                  <Link
                    href={featuredEvent.link || "#"}
                    className="group relative text-[#ff0000] font-semibold flex items-center hover:text- transition-all duration-300"
                  >
                    <span className="relative">
                      Read More
                      <span className="absolute left-0 bottom-0 h-[2px] w-full bg-current opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </span>
                    <i className="fa fa-arrow-right ml-1 transition-[margin] duration-300 group-hover:ml-[10px]"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 w-fit">
            {sideEvents.map((event, idx) => (
              <div
                key={idx}
                className="featured-event-card bg-white rounded-[15px] overflow-hidden shadow-md flex flex-col min-h-[250px] w-[320px]"
              >
                <div className="relative h-[150px] overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <p className="text-[#666] text-base leading-relaxed mb-6 flex-grow max-h-[180px] overflow-hidden">
                    <i className="fa fa-calendar mr-1"></i> {event.date.month}/{event.date.day}/{event.date.year}
                  </p>
                  <h3 className="text-lg font-semibold text-[#333] mb-2 leading-snug">
                    {event.title}
                  </h3>
                  <h3 className="text-lg font-semibold text-[#333] mb-2 leading-snug">
                    {event.title}
                  </h3>
                  <Link
                    href={event.link || "#"}
                    className="group relative text-[#ff0000] font-semibold flex items-center hover:text- transition-all duration-300"
                  >
                    <span className="relative">
                      Read More
                      <span className="absolute left-0 bottom-0 h-[2px] w-full bg-current opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </span>
                    <i className="fa fa-arrow-right ml-1 transition-[margin] duration-300 group-hover:ml-[10px]"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;

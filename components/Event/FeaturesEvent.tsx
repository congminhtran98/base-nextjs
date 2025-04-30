import React from "react";
import Image from "next/image";

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

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ featuredEvent, sideEvents }) => {
  return (
    <div className="featured-event bg-[#f8f9fa] py-20 mb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col flex-1 min-h-[560px]">
            <div className="featured-event-card bg-white rounded-[15px] overflow-hidden shadow-2xl flex flex-col h-full">
              <div className="relative h-[400px] overflow-hidden">
                <Image src={featuredEvent.image} alt={featuredEvent.title} fill className="object-cover transition-transform duration-500 hover:scale-110" />
                <div className="event-date-badge absolute top-4 left-4 bg-white w-[60px] h-[70px] rounded shadow-md text-center z-10">
                  <span className="block bg-[#39c8e2] text-white text-xs font-bold uppercase py-1 rounded-t">{featuredEvent.date.month}</span>
                  <span className="block text-xl font-bold py-1">{featuredEvent.date.day}</span>
                  <span className="block text-xs text-gray-500 -mt-1">{featuredEvent.date.year}</span>
                </div>
                {featuredEvent.category && (
                  <div className="event-category absolute top-4 right-4 bg-[#ff5252] text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    {featuredEvent.category}
                  </div>
                )}
              </div>
              <div className="p-8 flex flex-col h-full">
                <div className="flex flex-wrap text-sm text-gray-500 gap-4 mb-4">
                  {featuredEvent.time && <div className="flex items-center gap-2"><i className="fa fa-clock-o text-[#39c8e2]"></i>{featuredEvent.time}</div>}
                  {featuredEvent.location && <div className="flex items-center gap-2"><i className="fa fa-map-marker text-[#39c8e2]"></i>{featuredEvent.location}</div>}
                  {featuredEvent.attendees && <div className="flex items-center gap-2"><i className="fa fa-user text-[#39c8e2]"></i>{featuredEvent.attendees}</div>}
                </div>
                <h3 className="text-[28px] font-bold text-[#333] mb-4 leading-snug">{featuredEvent.title}</h3>
                <p className="text-[#666] text-base leading-relaxed mb-6 flex-grow max-h-[180px] overflow-hidden">{featuredEvent.excerpt}</p>
                <div className="flex justify-between items-center mb-6">
                  {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, index) => (
                    <div key={label} className="text-center w-[70px]">
                      <div className="text-[28px] font-bold text-[#39c8e2] leading-none mb-1">45</div>
                      <div className="text-[12px] text-[#777] uppercase">{label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-auto border-t pt-4">
                  <div className="text-left">
                    <div className="text-[#777] text-sm">{featuredEvent.priceLabel}</div>
                    <div className="text-2xl font-bold text-[#333]">{featuredEvent.price}</div>
                  </div>
                  <a href={featuredEvent.link} className="register-btn bg-[#39c8e2] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#2ba8c0] transition-transform transform hover:-translate-y-1 shadow-md">
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 w-fit">
            {sideEvents.map((event, idx) => (
              <div key={idx} className="featured-event-card bg-white rounded-[15px] overflow-hidden shadow-md flex flex-col min-h-[250px] w-[320px]">
                <div className="relative h-[150px] overflow-hidden">
                  <Image src={event.image} alt={event.title} fill className="object-cover transition-transform duration-500 hover:scale-110" />
                  <div className="event-date-badge absolute top-4 left-4 bg-white w-[50px] h-[60px] rounded shadow-md text-center z-10">
                    <span className="block bg-[#39c8e2] text-white text-[10px] font-bold uppercase py-1 rounded-t">{event.date.month}</span>
                    <span className="block text-[20px] font-bold py-1">{event.date.day}</span>
                    <span className="block text-[10px] text-gray-500 -mt-1">{event.date.year}</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-[#333] mb-2 leading-snug">{event.title}</h3>
                  {event.location && (
                    <div className="text-sm text-[#777] flex items-center gap-2 mb-2">
                      <i className="fa fa-map-marker text-[#39c8e2]"></i> {event.location}
                    </div>
                  )}
                  <a href={event.link} className="event-link text-[#39c8e2] font-semibold text-sm mt-auto flex items-center hover:translate-x-1 transition-all">
                    Learn More <i className="fa fa-arrow-right ml-1"></i>
                  </a>
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

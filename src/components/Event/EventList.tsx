import React from "react";
import Image from "next/image";

export interface EventData {
  title: string;
  excerpt: string;
  date: { day: string; month: string; year: string };
  time?: string;
  location: string;
  category?: string;
  status?: "open" | "limited" | "full";
  image: string;
  link: string;
}

interface EventListProps {
  events: EventData[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {events.map((event, idx) => (
        <div
          key={idx}
          className="event-card bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
        >
          <div className="event-image relative h-[220px]">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="event-date-badge absolute top-4 left-4 w-[60px] h-[70px] rounded bg-white text-center shadow-md z-10">
              <span className="block bg-[#39c8e2] text-white text-xs font-bold uppercase py-1 rounded-t">
                {event.date.month}
              </span>
              <span className="block text-xl font-bold py-1">
                {event.date.day}
              </span>
              <span className="block text-xs text-gray-500 -mt-1">
                {event.date.year}
              </span>
            </div>
            <div className="event-category absolute top-4 right-4 bg-[#39c8e2] text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
              {event.category}
            </div>
          </div>
          <div className="event-content p-6 flex flex-col flex-grow">
            <h3 className="event-title text-xl font-semibold text-[#333] mb-3 leading-snug">
              {event.title}
            </h3>
            <div className="event-meta text-sm text-[#777] flex flex-wrap gap-4 mb-3">
              <div className="flex items-center gap-1">
                <i className="fa fa-clock-o text-[#39c8e2]" /> {event.time}
              </div>
              <div className="flex items-center gap-1">
                <i className="fa fa-map-marker text-[#39c8e2]" />{" "}
                {event.location}
              </div>
            </div>
            <p className="event-excerpt text-sm text-[#666] mb-4 flex-grow">
              {event.excerpt}
            </p>
            <div className="event-footer flex justify-between items-center pt-3 border-t">
              <span
                className={`event-status text-xs font-semibold px-3 py-1 rounded-full ${
                  event.status === "open"
                    ? "bg-[#e6f9f4] text-[#0cb894]"
                    : event.status === "limited"
                      ? "bg-[#fff4e6] text-[#ff9800]"
                      : "bg-[#ffe6e6] text-[#ff5252]"
                }`}
              >
                {event.status === "open"
                  ? "Registration Open"
                  : event.status === "limited"
                    ? "Limited Seats"
                    : "Fully Booked"}
              </span>
              <a
                href={event.link}
                className="event-link text-[#39c8e2] font-semibold text-sm flex items-center hover:translate-x-1 transition-all"
              >
                Details <i className="fa fa-arrow-right ml-1"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;

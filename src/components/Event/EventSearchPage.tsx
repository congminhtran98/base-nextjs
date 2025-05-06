"use client";

import React, { useState } from "react";
import EventList, { EventData } from "./EventList";

interface FilterGroup {
  label: string;
  options: string[];
}

interface EventSearchPageProps {
  filterGroups: FilterGroup[];
  events: EventData[];
}

const EVENTS_PER_PAGE = 6;

const EventSearchPage: React.FC<EventSearchPageProps> = ({
  filterGroups,
  events,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(events.length / EVENTS_PER_PAGE);
  const startIdx = (currentPage - 1) * EVENTS_PER_PAGE;
  const currentEvents = events.slice(startIdx, startIdx + EVENTS_PER_PAGE);

  const handlePageClick = (n: number) => setCurrentPage(n);
  const handlePrev = () => setCurrentPage((p) => Math.max(1, p - 1));
  const handleNext = () => setCurrentPage((p) => Math.min(totalPages, p + 1));

  return (
    <div className="container mx-auto px-4 mt-10">
      {/* Title */}
      <h3 className="text-[36px] font-semibold text-[#333] mb-10 relative w-fit">
        Browse Our Events
        <span className="block w-20 h-[3px] bg-[#39c8e2] mt-4" />
      </h3>

      {/* Search + Filters */}
      <div className="search-container bg-[#f8f9fa] p-6 rounded-xl shadow mb-10">
        <form className="flex flex-col gap-4">
          {/* Search input */}
          <div className="flex max-w-2xl mx-auto w-full">
            <input
              type="text"
              placeholder="Search events by keyword, location, or speaker..."
              className="flex-grow h-[50px] rounded-l-full px-6 border border-gray-300 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#aa0000] hover:bg-[#c80000] text-white px-6 h-[50px] rounded-r-full font-semibold"
            >
              <i className="fa fa-search mr-1" /> Search
            </button>
          </div>

          {/* Filter groups */}
          {filterGroups.map((group, idx) => (
            <div
              key={idx}
              className="flex flex-wrap items-center gap-3 max-w-4xl mx-auto"
            >
              <span className="text-sm text-[#333] w-[60px]">
                {group.label}:
              </span>
              {group.options.map((option, i) => (
                <button
                  key={i}
                  className={`px-4 py-1 rounded-full border text-sm font-medium ${
                    option === "All Events" || option === "All Years"
                      ? "bg-[#aa0000] text-white border-[#aa0000]"
                      : "bg-white text-[#333] border-[#ddd] hover:bg-[#aa0000] hover:text-white"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          ))}
        </form>
      </div>

      {/* Event List */}
      <EventList events={currentEvents} />

      {/* Pagination */}
      <div className="flex justify-center mt-12 gap-2 flex-wrap">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handlePrev();
          }}
          className="pagination-btn px-4 py-2 bg-[#f1f1f1] rounded-full font-semibold text-[#666] hover:bg-[#39c8e2] hover:text-white"
        >
          <i className="fa fa-angle-left mr-1" /> Prev
        </a>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
          <a
            key={n}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePageClick(n);
            }}
            className={`pagination-btn w-[40px] h-[40px] flex items-center justify-center rounded-full font-semibold ${
              n === currentPage
                ? "bg-[#39c8e2] text-white"
                : "bg-[#f1f1f1] text-[#666] hover:bg-[#39c8e2] hover:text-white"
            }`}
          >
            {n}
          </a>
        ))}

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNext();
          }}
          className="pagination-btn px-4 py-2 bg-[#f1f1f1] rounded-full font-semibold text-[#666] hover:bg-[#39c8e2] hover:text-white"
        >
          Next <i className="fa fa-angle-right ml-1" />
        </a>
      </div>
    </div>
  );
};

export default EventSearchPage;

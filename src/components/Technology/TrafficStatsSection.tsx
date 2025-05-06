"use client";

import React from "react";

interface StatItem {
  icon: string;
  number: string;
  title: string;
  description: string;
}

const stats: StatItem[] = [
  {
    icon: "fa-clock-o",
    number: "30%",
    title: "Reduced Travel Time",
    description:
      "Average reduction in travel time during peak hours after implementation of smart traffic systems",
  },
  {
    icon: "fa-car",
    number: "25%",
    title: "Less Congestion",
    description:
      "Reduction in traffic congestion at major intersections and arterial roads",
  },
  {
    icon: "fa-leaf",
    number: "20%",
    title: "Lower Emissions",
    description:
      "Decrease in carbon emissions from vehicles due to improved traffic flow",
  },
  {
    icon: "fa-ambulance",
    number: "35%",
    title: "Faster Emergency Response",
    description:
      "Improvement in emergency vehicle response times with smart traffic prioritization",
  },
];

const TrafficStatsSection: React.FC = () => {
  return (
    <section className="stats-section bg-white py-20 mt-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#333] relative inline-block">
            Traffic Management Impact
            <span className="block w-20 h-[3px] bg-[#39c8e2] mt-4 mx-auto" />
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Key statistics showing the impact of intelligent traffic management
            systems in Singapore
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card bg-[#f8f9fa] rounded-lg p-8 text-center shadow-md hover:-translate-y-2 transition-all"
            >
              <div className="text-4xl text-[#39c8e2] mb-4">
                <i className={`fa ${stat.icon}`}></i>
              </div>
              <div className="text-3xl font-bold text-[#333] mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-[#666] mb-4">
                {stat.title}
              </div>
              <p className="text-sm text-[#777] leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrafficStatsSection;

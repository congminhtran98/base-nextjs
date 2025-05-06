"use client";

import React from "react";

interface TechItem {
  name: string;
  icon: string;
  description: string;
  range: string;
  latency: string;
  applications: string;
}

const techData: TechItem[] = [
  {
    name: "DSRC",
    icon: "fa-wifi",
    description: "Dedicated Short-Range Communications",
    range: "~300 meters",
    latency: "Very Low (< 50ms)",
    applications: "Safety applications, V2V warnings",
  },
  {
    name: "C-V2X",
    icon: "fa-signal",
    description: "Cellular Vehicle-to-Everything",
    range: "~600 meters",
    latency: "Low (50-100ms)",
    applications: "V2V, V2I, V2P communications",
  },
  {
    name: "5G",
    icon: "fa-mobile",
    description: "Fifth Generation Cellular Network",
    range: "Urban: ~1km, Rural: ~10km",
    latency: "Ultra-Low (1-10ms)",
    applications: "Remote driving, HD mapping, infotainment",
  },
  {
    name: "Bluetooth",
    icon: "fa-bluetooth",
    description: "Short-range wireless technology",
    range: "~10 meters",
    latency: "Medium (100-200ms)",
    applications: "In-vehicle connectivity, smartphone integration",
  },
  {
    name: "GPS/GNSS",
    icon: "fa-globe",
    description: "Global Navigation Satellite System",
    range: "Global coverage",
    latency: "High (>200ms)",
    applications: "Positioning, navigation, tracking",
  },
];

const TechComparisonTable: React.FC = () => {
  return (
    <section className="tech-comparison bg-white py-16 mt-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#333] relative inline-block">
            Connected Vehicle Technologies
            <span className="block w-20 h-[3px] bg-[#39c8e2] mt-4 mx-auto" />
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Comparison of key technologies enabling vehicle connectivity and
            communication
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-[#39c8e2] text-white text-left">
                <th className="p-4 font-semibold">Technology</th>
                <th className="p-4 font-semibold">Description</th>
                <th className="p-4 font-semibold">Range</th>
                <th className="p-4 font-semibold">Latency</th>
                <th className="p-4 font-semibold">Key Applications</th>
              </tr>
            </thead>
            <tbody>
              {techData.map((tech, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-[#f8f9fa]" : "bg-white"}
                >
                  <td className="p-4 font-semibold text-[#333] flex items-center gap-2">
                    <i className={`fa ${tech.icon} text-[#39c8e2] w-5 h-5`}></i>
                    {tech.name}
                  </td>
                  <td className="p-4 text-gray-700">{tech.description}</td>
                  <td className="p-4 text-gray-700">{tech.range}</td>
                  <td className="p-4 text-gray-700">{tech.latency}</td>
                  <td className="p-4 text-gray-700">{tech.applications}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TechComparisonTable;

"use client";

import React, { useState } from "react";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  position: string;
  imageSrc: string;
  social?: {
    linkedin?: string;
    email?: string;
  };
}

const generateMockMembers = (count: number, baseName: string): TeamMember[] =>
  Array.from({ length: count }, (_, i) => ({
    name: `${baseName} Member ${i + 1}`,
    role: `${baseName} Role ${i + 1}`,
    position: `${baseName} Position ${i + 1}`,
    imageSrc: `/images/p${(i % 7) + 1}.jpg`,
    social: {
      linkedin: "#",
      email: "#",
    },
  }));

const mockData: { [key: string]: TeamMember[] } = {
  councillors: generateMockMembers(8, "Councillor"),
  advisors: generateMockMembers(8, "Advisor"),
  committee: generateMockMembers(8, "Committee"),
  presidents: generateMockMembers(8, "President"),
};

const tabList = [
  { key: "councillors", label: "Councillors", icon: "fa-star" },
  { key: "advisors", label: "Advisors", icon: "fa-lightbulb-o" },
  { key: "committee", label: "Committee Lead", icon: "fa-tasks" },
  { key: "presidents", label: "Past Presidents", icon: "fa-history" },
];

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState("councillors");

  return (
    <div className="bg-[#f8f9fa] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <i className="fa fa-users text-[50px] text-[#39c8e2] mb-4 block"></i>
          <h2 className="text-3xl font-medium inline-block relative">
            Our Team
            <span className="absolute bottom-[-10px] left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#39c8e2] to-transparent"></span>
          </h2>
        </div>

        <div className="flex justify-center space-x-2 flex-wrap mb-12">
          {tabList.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2 rounded-full font-medium transition-all flex items-center space-x-2 border ${
                activeTab === tab.key
                  ? "bg-[#39c8e2] text-white"
                  : "bg-white text-gray-800 border-gray-200 hover:bg-[#39c8e2] hover:text-white"
              }`}
            >
              <i className={`fa ${tab.icon}`}></i>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {mockData[activeTab]?.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:-translate-y-2 transition-all"
            >
              <div className="relative w-full h-52 overflow-hidden">
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#39c8e2cc] to-transparent opacity-0 hover:opacity-30 transition-all"></div>
              </div>
              <div className="relative text-center px-4 py-6">
                <div className="absolute top-[-10px] right-1/2 translate-x-1/2 text-xs bg-[#39c8e2] text-white px-3 py-1 rounded-full">
                  {member.role}
                </div>
                <h4 className="mt-6 mb-1 text-base text-gray-800 font-medium">
                  {member.name}
                </h4>
                <p className="text-[#777777] text-xs min-h-[36px]">
                  {member.position}
                </p>
                <div className="flex justify-center mt-2 space-x-2">
                  {member.social?.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="fa fa-linkedin w-6 h-6 leading-6 text-center text-[#39c8e2] bg-[#f8f9fa] rounded-full"
                    ></a>
                  )}
                  {member.social?.email && (
                    <a
                      href={member.social.email}
                      className="fa fa-envelope w-6 h-6 leading-6 text-center text-[#39c8e2] bg-[#f8f9fa] rounded-full"
                    ></a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button className="inline-block bg-[#ff0000] text-[#09062f] px-8 py-3 text-sm font-semibold rounded-md uppercase tracking-wider transition-all hover:shadow-lg">
            <i className="fa fa-plus-circle mr-2 text-white" />
            <span className="text-white">View More Past Presidents</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;

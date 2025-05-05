"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Download, LogOut } from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("resources");

  const menuItems = [
    { name: "Overview", key: "overview" },
    { name: "Membership", key: "membership" },
    { name: "Activity", key: "activity" },
    { name: "Resources", key: "resources" },
  ];

  const resources = [
    { title: "Download ITS Singapore Whitepaper" },
    { title: "Access Member-only Webinar Recordings" },
    { title: "View Upcoming Event Calendar" },
  ];

  return (
    <div className="bg-gray-100 p-6 w-full">
      {/* Header */}
      <div className="bg-white shadow-md rounded-lg p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Membership Dashboard</h1>
        <button className="bg-gray-200 px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-gray-300 transition">
          <LogOut className="w-5 h-5" />
          <span>Sign Out</span>
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row mt-6 gap-6">
        {/* Left Sidebar */}
        <div className="w-full lg:w-1/4 bg-white p-6 rounded-lg shadow-md">
          {/* Member Profile */}
          <div className="text-center">
            <Image
              src="/images/profile.png"
              alt="Profile"
              width={80}
              height={80}
              className="mx-auto rounded-full border-4 border-gray-300"
            />
            <h2 className="text-lg font-semibold mt-3">John Doe</h2>
            <p className="text-gray-500">@johndoe</p>
            <p className="text-green-600 font-medium mt-1">Active</p>
            <p className="text-sm text-gray-500 mt-2">
              Member since: Jan 1, 2023 <br />
              Expiration: Dec 31, 2023
            </p>
            <button className="bg-black text-white px-4 py-2 mt-4 rounded-md w-full hover:bg-gray-800 transition">
              Edit Profile
            </button>
          </div>

          {/* Quick Actions */}
          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-3">Quick Actions</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="px-3 py-2 hover:bg-gray-200 rounded-md cursor-pointer">
                View Profile
              </li>
              <li className="px-3 py-2 hover:bg-gray-200 rounded-md cursor-pointer">
                Account Settings
              </li>
              <li className="px-3 py-2 hover:bg-gray-200 rounded-md cursor-pointer">
                Notifications
              </li>
              <li className="px-3 py-2 hover:bg-gray-200 rounded-md cursor-pointer">
                Privacy Settings
              </li>
              <li className="px-3 py-2 hover:bg-gray-200 rounded-md cursor-pointer">
                Get Support
              </li>
            </ul>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-3/4 bg-white p-6 rounded-lg shadow-md">
          {/* Navigation Tabs */}
          <div className="flex border-b">
            {menuItems.map((item) => (
              <button
                key={item.key}
                className={`px-4 py-2 font-medium ${
                  activeTab === item.key
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500"
                } hover:text-blue-600 transition`}
                onClick={() => setActiveTab(item.key)}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Content - Resources */}
          {activeTab === "resources" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6"
            >
              <h2 className="text-xl font-semibold">Member Resources</h2>
              <p className="text-gray-500 mb-4">
                Exclusive content and benefits for members
              </p>

              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between bg-gray-100 px-4 py-3 rounded-md hover:bg-gray-200 transition cursor-pointer"
                  >
                    <span>{resource.title}</span>
                    <Download className="w-5 h-5 text-gray-600" />
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-gray-500">
                Need help? Contact our support team for assistance.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

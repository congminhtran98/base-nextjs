"use client";
import AboutHeroIntro from "@/components/About/AboutUsHeroIntro";
import CallToActionSection from "@/components/CallToActionSection";
import UpcomingEvents from "@/components/Event/FeaturesEvent";
import FeaturedPostSection from "@/components/FeaturesPostSection";
// import EventSearchPage from "@/components/Event/EventSearchPage";

import { mockEvents } from "@/data/eventData"; // Assuming EventData is a type

import { getUpcomingEvents } from "@/core/services/eventService";
import { use, useEffect, useState } from "react";
import { getAllPostsData, getPostByIdDetail } from "@/core/actions/postActions";
import {
  fetchUpcomingEventData,
  getAllEventData,
} from "@/core/actions/eventActions";
import { EventData, EventDataAll } from "@/core/types/event";

interface PostInfo {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  image: string;
  author?: {
    name: string;
    role?: string;
    avatar?: string;
  };
  link: string;
}

const featuredEvent = {
  date: { day: "15", month: "Sep", year: "2025" },
  time: "09:00 AM - 05:00 PM",
  location: "Marina Bay Sands, Singapore",
  attendees: "500+ Attendees",
  title: "ITS Annual Conference 2025: Future of Mobility",
  excerpt:
    "Join us for the premier event in intelligent transportation systems. The ITS Annual Conference brings together industry leaders, policymakers, researchers, and practitioners to discuss the latest trends, innovations, and challenges in smart mobility. This year's theme focuses on the future of mobility, exploring autonomous vehicles, connected infrastructure, and sustainable transportation solutions. Don't miss this opportunity to network with experts and gain insights into the future of transportation.",
  category: "Featured",
  price: "$299",
  priceLabel: "Starting from",
  link: "/events/its-annual-conference-2025",
  image: "/images/p1.jpg",
  isFeatured: true,
};

const sideEvents = [
  {
    date: { day: "25", month: "Aug", year: "2025" },
    title: "Smart Mobility Workshop Series",
    location: "NUS, Singapore",
    link: "/events/smart-mobility-workshop",
    image: "/images/p2.jpg",
    excerpt:
      "A workshop series focusing on smart mobility solutions and innovations.",
  },
  {
    date: { day: "10", month: "Oct", year: "2025" },
    title: "Traffic Technology Expo 2025",
    location: "Suntec City, Singapore",
    link: "/events/traffic-tech-expo",
    image: "/images/p3.jpg",
    excerpt:
      "An expo showcasing the latest advancements in traffic technology.",
  },
];

const mockFilters = [
  "All Events",
  "Conference",
  "Workshop",
  "Seminar",
  "Networking",
  "Webinar",
];
export default function SmartMobility() {
  // const [eventData, setEventData] = useState<EventData[]>([]);
  const [loading, setLoading] = useState(true);
  // const [allEvents, setAllEvents] = useState<EventDataAll[]>([]);

  const [allPosts, setAllPosts] = useState<PostInfo[]>([]); // All posts data

  // useEffect(() => {
  //   fetchUpcomingEventData()
  //     .then((data) => {
  //       setEventData(data); // giữ raw data để dùng dưới
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.error("Failed to fetch events", err);
  //     })
  //     .finally(() => setLoading(false));
  // }, []);

  useEffect(() => {
    getAllPostsData()
      .then((data) => {
        const mapped = data.map((e: any, i: number) => ({
          id: e.id,
          title: e.title,
          summary: e.content,
          content: e.content,
          date: e.createdAt,
          image: `/images/p${(i % 5) + 1}.jpg`, // fake image
          link: `/industry/${e.id}`,
          author: {
            name: e.author?.fullName || "Unknown",
            role: e.author?.role || "Contributor",
            avatar: `/images/avatar${(i % 3) + 1}.jpg`, // fake avatar
          },
        }));
        setAllPosts(mapped);
      })
      .catch((err) => {
        console.error("Failed to fetch all posts", err);
      });
  }, []);

  const featuredEvent = allPosts[0]
    ? {
        date: `${parseDate(allPosts[0].date).day} ${parseDate(allPosts[0].date).month} ${parseDate(allPosts[0].date).year}`,
        time: "09:00 AM - 05:00 PM", // giả định
        location: "Singapore", // fake
        attendees: "300+ Attendees", // fake
        title: allPosts[0].title,
        excerpt: allPosts[0].summary,
        category: "Featured",
        price: "$299", // giả định có giá
        priceLabel: "Starting from",
        link: allPosts[0].link,
        image: allPosts[0].image,
        isFeatured: true,
        id: allPosts[0].id,
        content: allPosts[0].content,
        summary: allPosts[0].summary, // Add the missing summary property
      }
    : null;

  const sideEvents = allPosts.slice(1, 3).map((e, i) => ({
    id: e.id,
    content: e.content,
    summary: e.summary,
    date: `${parseDate(e.date).day} ${parseDate(e.date).month} ${parseDate(e.date).year}`,
    title: e.title,
    location: "Singapore", // fake location
    link: e.link,
    image: e.image,
    excerpt: e.summary,
  }));

  return (
    <div className="mt-[84px]">
      <AboutHeroIntro
        heading="Smart Mobility"
        subheading="Latest News and Innovations in Smart Transportation Solutions"
        icon={<i className="fa fa-car" />}
        title="Smart Mobility Solutions"
        description="Smart mobility leverages technology and innovation to create more efficient, sustainable, and user-friendly transportation systems that enhance urban living and reduce environmental impact."
      />
      {/* {featuredEvent && (
        <UpcomingEvents featuredEvent={featuredEvent} sideEvents={sideEvents} />
      )} */}
      {featuredEvent && (
        <FeaturedPostSection
          featuredPost={featuredEvent}
          sidePosts={sideEvents}
        />
      )}
      <CallToActionSection
        type="form"
        title="Stay Updated on Smart Mobility"
        description="Subscribe to our newsletter to receive the latest news, research findings, and event announcements related to smart mobility and intelligent transportation systems."
        buttonText="Subscribe"
      />
      {/* Add more content here */}
      {/* <TechComparisonTable />
      <TrafficStatsSection /> */}
    </div>
  );
}
// Parse từ ISO date sang { day, month, year }
function parseDate(dateStr: string) {
  const date = new Date(dateStr);
  return {
    day: String(date.getDate()).padStart(2, "0"),
    month: date.toLocaleString("en-US", { month: "short" }),
    year: String(date.getFullYear()),
  };
}

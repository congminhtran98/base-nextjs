"use client";

import AboutHeroIntro from "@/components/About/AboutUsHeroIntro";
import UpcomingEvents from "@/components/Event/FeaturesEvent";
import EventSearchPage from "@/components/Event/EventSearchPage";

import CallToActionSection from "@/components/CallToActionSection";

import { mockEvents } from "@/data/eventData"; // Assuming EventData is a type

import {
  fetchUpcomingEventData,
  getAllEventData,
} from "@/core/actions/eventActions";
import { EventData, EventDataAll } from "@/core/types/event";
import { useEffect, useState } from "react";

// const featuredEvent = {
//   date: { day: "15", month: "Sep", year: "2025" },
//   time: "09:00 AM - 05:00 PM",
//   location: "Marina Bay Sands, Singapore",
//   attendees: "500+ Attendees",
//   title: "ITS Annual Conference 2025: Future of Mobility",
//   excerpt:
//     "Join us for the premier event in intelligent transportation systems. The ITS Annual Conference brings together industry leaders, policymakers, researchers, and practitioners to discuss the latest trends, innovations, and challenges in smart mobility. This year's theme focuses on the future of mobility, exploring autonomous vehicles, connected infrastructure, and sustainable transportation solutions. Don't miss this opportunity to network with experts and gain insights into the future of transportation.",
//   category: "Featured",
//   price: "$299",
//   priceLabel: "Starting from",
//   link: "/events/its-annual-conference-2025",
//   image: "/images/p1.jpg",
//   isFeatured: true,
// };

// const sideEvents = [
//   {
//     date: { day: "25", month: "Aug", year: "2025" },
//     title: "Smart Mobility Workshop Series",
//     location: "NUS, Singapore",
//     link: "/events/smart-mobility-workshop",
//     image: "/images/p2.jpg",
//     excerpt:
//       "A workshop series focusing on smart mobility solutions and innovations.",
//   },
//   {
//     date: { day: "10", month: "Oct", year: "2025" },
//     title: "Traffic Technology Expo 2025",
//     location: "Suntec City, Singapore",
//     link: "/events/traffic-tech-expo",
//     image: "/images/p3.jpg",
//     excerpt:
//       "An expo showcasing the latest advancements in traffic technology.",
//   },
// ];

const mockFilters = [
  "All Events",
  "Conference",
  "Workshop",
  "Seminar",
  "Networking",
  "Webinar",
];

export default function UpcomingEventsPage() {
  const [eventData, setEventData] = useState<EventData[]>([]);
  const [loading, setLoading] = useState(true);
  const [allEvents, setAllEvents] = useState<EventDataAll[]>([]);

  useEffect(() => {
    fetchUpcomingEventData()
      .then((data) => {
        setEventData(data); // giữ raw data để dùng dưới
        console.log(data);
      })
      .catch((err) => {
        console.error("Failed to fetch events", err);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    getAllEventData()
      .then((data) => {
        console.log("All events data:", data);
        // ❌ Chưa setAllEvents
        const mapped = data.map(
          (
            e: {
              title: any;
              description: any;
              eventDate: string;
              location: any;
              id: any;
            },
            i: number
          ) => ({
            title: e.title,
            excerpt: e.description,
            date: parseDate(e.eventDate),
            location: e.location,
            link: `/events/${e.id}`,
            image: `/images/p${(i % 5) + 1}.jpg`,
            category: "Conference",
            status: (["open", "limited", "full"] as const)[i % 3], // fake status
            time: "09:00 - 17:00",
          })
        );

        setAllEvents(mapped); // ✅ cần thêm dòng này
      })
      .catch((err) => {
        console.error("Failed to fetch all events", err);
      });
  }, []);

  const featuredEvent = eventData[0]
    ? {
        date: parseDate(eventData[0].eventDate),
        time: "09:00 AM - 05:00 PM",
        location: eventData[0].location,
        attendees: `${eventData[0].capacity}+ Attendees`,
        title: eventData[0].title,
        excerpt: eventData[0].description,
        category: "Featured",
        price: "$299",
        priceLabel: "Starting from",
        link: `/events/${eventData[0].id}`,
        image: "/images/p1.jpg", // hardcoded tạm
        isFeatured: true,
      }
    : null;

  const sideEvents = eventData.slice(1, 3).map((e, i) => ({
    date: parseDate(e.eventDate),
    title: e.title,
    location: e.location,
    link: `/events/${e.id}`,
    image: `/images/p${i + 2}.jpg`, // dùng tạm ảnh local
    excerpt: e.description,
  }));

  return (
    <div className="mt-[84px]">
      <AboutHeroIntro
        heading="Past Events"
        subheading="Archive of our previous conferences, workshops, seminars, and networking events"
        icon={<i className="fa fa-calendar" />}
        title="Our Event History"
        description="Explore our archive of past events that have brought together industry leaders, academics, and professionals in the field of intelligent transportation. These events have fostered innovation, collaboration, and knowledge sharing in the transportation technology sector."
      />
      {featuredEvent && (
        <UpcomingEvents featuredEvent={featuredEvent} sideEvents={sideEvents} />
      )}
      <EventSearchPage
        filterGroups={[
          {
            label: "Year",
            options: ["All Years", "2023", "2022", "2021", "2020", "Archive"],
          },
          {
            label: "Type",
            options: [
              "All Events",
              "Conferences",
              "Workshops",
              "Seminars",
              "Networking",
              "Webinars",
            ],
          },
        ]}
        events={allEvents}
      />
      ;
      <CallToActionSection
        type="form"
        title="Stay Updated on Events"
        description="Subscribe to our newsletter to receive notifications about upcoming events, early bird registrations, and exclusive content."
        buttonText="Subscribe"
      />
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

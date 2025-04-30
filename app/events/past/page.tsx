import AboutHeroIntro from "@/components/About/AboutUsHeroIntro";
import UpcomingEvents from "@/components/Event/FeaturesEvent";
import EventSearchPage from "@/components/Event/EventSearchPage";

import CallToActionSection from "@/components/CallToActionSection";

import { mockEvents } from "@/data/eventData"; // Assuming EventData is a type

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

export default function UpcomingEventsPage() {
  return (
    <div className="mt-[84px]">
      <AboutHeroIntro
        heading="Past Events"
        subheading="Archive of our previous conferences, workshops, seminars, and networking events"
        icon={<i className="fa fa-calendar" />}
        title="Our Event History"
        description="Explore our archive of past events that have brought together industry leaders, academics, and professionals in the field of intelligent transportation. These events have fostered innovation, collaboration, and knowledge sharing in the transportation technology sector."
      />
      <UpcomingEvents featuredEvent={featuredEvent} sideEvents={sideEvents} />
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
        events={mockEvents}
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

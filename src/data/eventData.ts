export interface EventData {
  date: {
    day: string;
    month: string;
    year: string;
  };
  time: string;
  location: string;
  title: string;
  excerpt: string;
  category: string;
  status: "open" | "limited" | "full";
  image: string;
  link: string;
}

export const mockEvents: EventData[] = [
  {
    date: { day: "18", month: "Aug", year: "2023" },
    time: "10:00 AM - 04:00 PM",
    location: "Raffles City Convention Centre",
    title: "Connected Vehicles Symposium",
    excerpt:
      "A symposium on connected vehicle technologies, V2X communication, and smart mobility solutions.",
    category: "Symposium",
    status: "open",
    image: "/images/p4.jpg",
    link: "#",
  },
  {
    date: { day: "25", month: "Aug", year: "2023" },
    time: "09:30 AM - 03:30 PM",
    location: "National University of Singapore",
    title: "AI in Traffic Management Workshop",
    excerpt:
      "Workshop on applying AI and ML in traffic management for smarter cities.",
    category: "Workshop",
    status: "limited",
    image: "/images/p5.jpg",
    link: "#",
  },
  {
    date: { day: "05", month: "Sep", year: "2023" },
    time: "06:00 PM - 09:00 PM",
    location: "Marina Bay Financial Centre",
    title: "Smart Cities Networking Event",
    excerpt:
      "Networking with professionals from smart city projects across the region.",
    category: "Networking",
    status: "open",
    image: "/images/p6.jpg",
    link: "#",
  },
  {
    date: { day: "12", month: "Sep", year: "2023" },
    time: "02:00 PM - 05:00 PM",
    location: "Singapore Sustainability Academy",
    title: "Sustainable Mobility Seminar",
    excerpt:
      "Seminar on electric mobility, shared transport, and green transport policies.",
    category: "Seminar",
    status: "open",
    image: "/images/p7.jpg",
    link: "#",
  },
  {
    date: { day: "20", month: "Sep", year: "2023" },
    time: "11:00 AM - 12:30 PM",
    location: "Online (Zoom)",
    title: "Future of Public Transport Webinar",
    excerpt:
      "Webinar discussing innovations in public transport and mobility integrations.",
    category: "Webinar",
    status: "open",
    image: "/images/slide1.jpg",
    link: "#",
  },
  {
    date: { day: "03", month: "Oct", year: "2023" },
    time: "09:00 AM - 05:00 PM",
    location: "Singapore Expo",
    title: "Traffic Data Analytics Conference",
    excerpt: "Conference on big data use in traffic and smart city planning.",
    category: "Conference",
    status: "limited",
    image: "/images/slide2.jpg",
    link: "#",
  },
];

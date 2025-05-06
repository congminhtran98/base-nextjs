import GallerySection, { GalleryItem } from "@/components/GallerySection";
import CallToActionSection from "@/components/CallToActionSection";
import AboutHeroIntro from "@/components/About/AboutUsHeroIntro";

export const mockGalleryItems: GalleryItem[] = [
  // Conferences
  {
    id: "c1",
    image: "/images/slide2.jpg",
    title: "ITS Summit 2023",
    description: "A gathering of ITS professionals and decision-makers.",
    category: "Conferences",
  },
  {
    id: "c2",
    image: "/images/slide3.jpg",
    title: "Public Transport Forum",
    description: "Panel discussion on the future of urban transit.",
    category: "Conferences",
  },
  {
    id: "c3",
    image: "/images/slide1.jpg",
    title: "National ITS Meeting",
    description: "Annual meeting with government and industry stakeholders.",
    category: "Conferences",
  },

  // Workshops
  {
    id: "w1",
    image: "/images/slide3.jpg",
    title: "Mobility Hackathon",
    description: "Participants developed innovative mobility solutions.",
    category: "Workshops",
  },
  {
    id: "w2",
    image: "/images/slide2.jpg",
    title: "Singapore ITS Tech Day",
    description: "Hands-on demos and tech discussions with vendors.",
    category: "Workshops",
  },
  {
    id: "w3",
    image: "/images/slide1.jpg",
    title: "AI Traffic Workshop",
    description: "Using AI to optimize traffic flow in cities.",
    category: "Workshops",
  },

  // Networking
  {
    id: "n1",
    image: "/images/slide1.jpg",
    title: "Annual Dinner",
    description: "Networking over dinner with members and partners.",
    category: "Networking",
  },
  {
    id: "n2",
    image: "/images/slide2.jpg",
    title: "Tech Networking Night",
    description: "An evening of drinks and meaningful tech connections.",
    category: "Networking",
  },
  {
    id: "n3",
    image: "/images/slide1.jpg",
    title: "Industry Mixer 2025",
    description: "Connecting startups with transport industry leaders.",
    category: "Networking",
  },

  // Webinars
  {
    id: "wb1",
    image: "/images/slide2.jpg",
    title: "Webinar: Future Roads",
    description: "Online session about smart and green road networks.",
    category: "Webinars",
  },
  {
    id: "wb2",
    image: "/images/slide3.jpg",
    title: "ITS & AI Webinar",
    description: "Exploring artificial intelligence in transportation.",
    category: "Webinars",
  },
  {
    id: "wb3",
    image: "/images/slide1.jpg",
    title: "Policy & ITS Webinar",
    description: "How ITS policies shape smart city growth.",
    category: "Webinars",
  },

  // Expos
  {
    id: "e1",
    image: "/images/slide1.jpg",
    title: "Smart Traffic Expo",
    description: "Showcase of latest smart traffic technologies.",
    category: "Expos",
  },
  {
    id: "e2",
    image: "/images/slide2.jpg",
    title: "ITS Asia Tech Show",
    description: "Asia’s biggest event for intelligent transport systems.",
    category: "Expos",
  },
  {
    id: "e3",
    image: "/images/slide3.jpg",
    title: "Urban Mobility Expo",
    description: "Urban planning and mobility innovation showcase.",
    category: "Expos",
  },
];

export default function GalleryPage() {
  return (
    <div className="mt-[84px]">
      <AboutHeroIntro
        heading="Photo Gallery"
        subheading="Explore moments from our events, conferences, and activities"
        backgroundImage="/images/slide2.jpg"
        hideIntro
        icon={<i className="fa fa-globe" />}
        title="Intelligent Transportation Society (ITS) Singapore"
        description="ITS Singapore was formed on August 26, 2001, bringing together professionals, practitioners, academics and researchers in the field of intelligent transportation systems."
      />
      <GallerySection
        //   title="Event Gallery"
        //   description="Explore moments captured from our recent events including conferences, workshops, and more."
        items={mockGalleryItems}
        categories={[
          "Conferences",
          "Workshops",
          "Networking",
          "Webinars",
          // "Seminars",
          // "Youth",
          "Expos",
        ]}
      />
      <CallToActionSection
        title="Join Our Growing Community"
        description="Be part of our community and contribute to the advancement of intelligent transportation systems in Singapore and the Asia-Pacific region."
      />
    </div>
  );
}

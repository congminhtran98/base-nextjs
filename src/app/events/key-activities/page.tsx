import CallToActionSection from "@/components/CallToActionSection";
import AboutHeroIntro from "@/components/About/AboutUsHeroIntro";
import KeyActivitiesSection, {
  KeyActivity,
} from "@/components/About/KeyacctivitiesSection";

const keyActivities: KeyActivity[] = [
  {
    id: 1,
    title: "Technology Sharing",
    image: "/images/slide1.jpg",
    paragraphs: [
      "Technology and Innovation are key driving forces in shaping the ITS industry. It is essential for us to be kept abreast of emerging technologies, new mobility concepts and collaborative opportunities in this rapidly evolving market.",
      "ITS Singapore aims to provide the platform to facilitate easy exchange and sharing of latest technological developments with and for our members. These platforms include organised visits to member companies to view latest technology offerings, annual flagship ITS Singapore Summits and webinars.",
      "We want to help our members grow and build competencies through organising targeted training and sharing related to intelligent transportation.",
    ],
  },
  {
    id: 2,
    title: "Business Collaborations",
    image: "/images/slide2.jpg",
    paragraphs: [
      "ITS Singapore and its members are thought leaders in the industry. We bring together professionals in public and private organisations, practitioners, academics and researchers related to ITS, and create opportunities for business collaboration.",
      "Given its diverse membership, ITS Singapore keeps our members closely-knitted with regular industry networking sessions, company visits, webinars, annual ITS Singapore Summit and Annual Dinner. These activities provide opportunities to create new connections, foster beneficial partnership and collaboration",
    ],
  },
  {
    id: 3,
    title: "ITS Congress",
    image: "/images/slide2.jpg",
    paragraphs: [
      "As a board member of the ITS Asia-Pacific...",
      "Part of ITS Asia-Pacific's efforts...",
      "ITS Singapore will take the lead...",
      "ITS World Congress is the world's largest...",
      "ITS Singapore actively participates...",
      "Singapore successfully hosted...",
    ],
  },
  {
    id: 4,
    title: "Youth Development",
    image: "/images/slide1.jpg",
    paragraphs: ["In ITS Singapore, we believe that developing..."],
  },
  {
    id: 5,
    title: "Start-Up",
    image: "/images/slide2.jpg",
    paragraphs: ["ITS Singapore aims to create an ecosystem..."],
    link: {
      text: "Access Membership and About Us",
      href: "http://icommerce.com.sg/demo/?page_id=771",
    },
  },
];

export default function KeyActivitiesPage() {
  return (
    <div className="mt-[84px]">
      <AboutHeroIntro
        heading="Key Activities"
        subheading="Technology sharing, business collaborations, ITS Congress, youth development, and startup support initiatives"
        backgroundImage="/images/slide2.jpg"
        hideIntro
        icon={<i className="fa fa-globe" />}
        title="Intelligent Transportation Society (ITS) Singapore"
        description="ITS Singapore was formed on August 26, 2001, bringing together professionals, practitioners, academics and researchers in the field of intelligent transportation systems."
      />
      <KeyActivitiesSection activities={keyActivities} />
      <CallToActionSection
        title="Stay Updated on Events"
        description="Subscribe to our newsletter to receive notifications about upcoming events, early bird registrations, and exclusive content."
      />
    </div>
  );
}

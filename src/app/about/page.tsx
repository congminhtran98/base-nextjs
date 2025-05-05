import CouncillorsSlider from "@/components/ui/CouncillorsSlider";
import AboutUs from "@/components/About/AboutUs";
import VisionBox from "@/components/About/VisionBox";
import OurMission from "@/components/About/OurMission";
import VideoSection from "@/components/About/VideoSection";
import Banner from "@/components/ui/Banner";
import AboutHeroIntro from "@/components/About/AboutUsHeroIntro";
import VisionMissionSection from "@/components/About/VisionMisionSection";
import TimelineSection from "@/components/About/TimelineSection";
import TeamSection from "@/components/About/TeamSection";
import CallToActionSection from "@/components/CallToActionSection";

export default function About() {
  return (
    <div className=" mt-[84px]">
      {/* <Banner
          backgroundImage="/images/banner1.png"
          title="Join ITS Singapore"
          subtitle="Committed to the growth of Intelligent Transport Systems in Singapore"
        /> */}
      <AboutHeroIntro
        heading="About Us"
        subheading="Shaping the Future of Transportation in Singapore"
        icon={<i className="fa fa-globe" />}
        title="Intelligent Transportation Society (ITS) Singapore"
        description="ITS Singapore was formed on August 26, 2001, bringing together professionals, practitioners, academics and researchers in the field of intelligent transportation systems."
      />

      <VisionMissionSection />
      <TimelineSection
        items={[
          {
            year: "2001",
            title: "Foundation of ITS Singapore",
            iconClass: "fa-flag",
            description:
              "Established to promote intelligent transportation systems in Singapore. Our founding members came together with a vision to transform transportation through technology.",
            imageSrc: "/images/p1.jpg",
          },
          {
            year: "2010",
            title: "Major Milestone",
            iconClass: "fa-trophy",
            description:
              "Expanded our reach to international partnerships. We began collaborating with transportation societies around the world to share knowledge and best practices.",
            imageSrc: "/images/p2.jpg",
          },
          {
            year: "2020",
            title: "Digital Transformation",
            iconClass: "fa-rocket",
            description:
              "Launched new initiatives for smart mobility solutions. We embraced digital technologies to create more efficient, sustainable, and user-friendly transportation systems.",
            imageSrc: "/images/p3.jpg",
          },
        ]}
      />

      <TeamSection />

      <CallToActionSection
        title="Join Our Growing Community"
        description="Be part of our community and contribute to the advancement of intelligent transportation systems in Singapore and the Asia-Pacific region."
      />
      {/* <AboutUs />
      <VisionBox />
      <OurMission />
      <VideoSection />
      <CouncillorsSlider /> */}
    </div>
  );
}

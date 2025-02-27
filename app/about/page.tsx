import CouncillorsSlider from "@/components/ui/CouncillorsSlider";
import AboutUs from "@/components/About/AboutUs";
import VisionBox from "@/components/About/VisionBox";
import OurMission from "@/components/About/OurMission";
import VideoSection from "@/components/About/VideoSection";
import Banner from "@/components/ui/Banner";

export default function About() {
    return (
      <div className=" mt-[84px]">
        <Banner
          backgroundImage="/images/banner1.png"
          title="Join ITS Singapore"
          subtitle="Committed to the growth of Intelligent Transport Systems in Singapore"
        />
        <AboutUs />
        <VisionBox />
        <OurMission />
        <VideoSection />
        <CouncillorsSlider />
      </div>
    );
  }
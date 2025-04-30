import MainSlider from "@/components/Home/MainSlider";
import UpcomingEventsSection from "@/components/Home/UpcomingEventSection";
import LatestNewsSection from "@/components/Home/LatestNewSection";
import JoinSection from "@/components/JoinSection";

export default function Home() {
  return (
    <div className=" mt-[84px]">
      <MainSlider />
        <UpcomingEventsSection />
        {/* <LatestNewsSection /> */}
        {/* <AboutUs /> */}
        <LatestNewsSection />
        <JoinSection />
        {/* <Membership /> */}
        {/* <LinkedInFeed /> */}
        {/* <LatestNews /> */}
        {/* <ComingUp /> */}
        {/* <Membership /> */}
        {/* <LinkedInFeed /> */}
    </div>
  );
}
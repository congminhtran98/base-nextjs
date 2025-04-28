import Image from "next/image";

import HomeSlider from "@/components/Home/HomeBanner";
import LatestNewsSection from "@/components/Home/LatestNewSection";
import UpcomingEventsSection from "@/components/Home/UpcomingEventSection";
import MainSlider from "@/components/Home/MainSlider";

import AboutUs from "@/components/Home/AboutUs";
import LatestNews from "@/components/Home/LatestNews";
import ComingUp from "@/components/Home/ComingUp";
import Membership from "@/components/Home/Membership";
import LinkedInFeed from "@/components/Home/LinkedInPosts";

export default function Home() {
  return (
    <div className=" mt-[84px]">
      <HomeSlider />
      <UpcomingEventsSection />
      <LatestNewsSection />
      <MainSlider />

      <AboutUs />
      <LatestNews />
      {/* <ComingUp /> */}
      <Membership />
      <LinkedInFeed />
    </div>
  );
}

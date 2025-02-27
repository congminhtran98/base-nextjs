import Image from "next/image";

import AboutUs from "@/components/Home/AboutUs";
import LatestNews from "@/components/Home/LatestNews";
import ComingUp from "@/components/Home/ComingUp";
import Membership from "@/components/Home/Membership";
import LinkedInFeed from "@/components/Home/LinkedInPosts";

export default function Home() {
  return (
    <div className=" mt-[84px]">
      <AboutUs />
      <LatestNews />
      <ComingUp />
      <Membership />
      <LinkedInFeed />
    </div>
  );
}

import Image from "next/image";
import ComingUp from "@/components/Home/ComingUp";
import Membership from "@/components/Home/Membership";
import LinkedInFeed from "@/components/Home/LinkedInPosts";

export default function Home() {
  return (
    <div className=" mt-[84px]">
     
      <ComingUp />
      <Membership />
      <LinkedInFeed />
    </div>
  );
}

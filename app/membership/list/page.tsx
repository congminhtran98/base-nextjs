"use client";

import Banner from "@/components/ui/Banner";
import MemberList from "@/components/Membership/MemberList";

export default function About() {
  return (
    <div className=" mt-[84px] mb-10">
      <Banner
        backgroundImage="/images/banner1.png"
        title="Join ITS Singapore"
        subtitle="Committed to the growth of Intelligent Transport Systems in Singapore"
      />

      <MemberList />
    </div>
  );
}

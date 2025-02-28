"use client";

import Banner from "@/components/ui/Banner";
import MemberList from "@/components/Membership/MemberList";
import PaymentForm from "@/components/Membership/MemberPayMethod";

export default function About() {
  return (
    <div className=" mt-[84px] mb-10">
      <Banner
        backgroundImage="/images/banner2.png"
        title="Join ITS Singapore"
        subtitle="Committed to the growth of Intelligent Transport Systems in Singapore"
      />
      
      <PaymentForm />
    </div>
  );
}
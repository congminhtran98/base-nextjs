"use client";

import Banner from "@/components/ui/Banner";
import MembershipPlans from "@/components/Membership/MemberPlan";
import MembershipForm from "@/components/Membership/MemberForm";

export default function JoinUs() {
  const benefits = [
    "Network with likeminded people through organised conference, exhibition, seminars and other events",
    "Knowledge sharing through webinars, dialogues and access to conference proceedings",
    "Overseas business missions and opportunities through reciprocal arrangements with the ITS international community (Asia Pacific, America and Europe).",
  ];
  return (
    <div className=" mt-[84px]">
      <Banner
        backgroundImage="/images/banner2.png"
        title="Join ITS Singapore"
        subtitle="Committed to the growth of Intelligent Transport Systems in Singapore"
      />

      <section className="w-full max-w-6xl mx-auto px-6 pt-10">
        {/* Join Us */}
        <div className="bg-white">
          <h2 className="text-[32px] font-medium text-black">Join Us!</h2>
          <p className="text-black text-base font-medium mt-2">
            ITS Singapore is committed to the growth of ITS in Singapore. Our
            members comprise industry, academia and government agencies from
            start-ups to multinational corporations that leverage technology to
            optimize transport.
          </p>
          <p className="text-black text-base font-medium mt-2">
            By joining ITS Singapore, you will be able to:
          </p>

          {/* Danh sách lợi ích */}
          <ul className="list-disc list-inside mt-3 space-y-2 text-black text-base font-medium">
            {benefits.map((benefit, index) => (
              <li key={index} className="pl-2">
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Types of Membership */}
        <div className="mt-6">
          <h3 className="text-[32px] font-medium text-black">
            Types of Membership
          </h3>
          <p className="text-black text-base font-medium">
            Be part of the ITS Singapore community and select from the types of
            membership below:
          </p>
        </div>
      </section>

      <MembershipPlans />
      <MembershipForm />
    </div>
  );
}

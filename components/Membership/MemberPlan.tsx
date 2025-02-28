"use client";

import { motion } from "framer-motion";

const membershipPlans = [
  {
    title: "Ordinary Membership",
    description: [
      "Any company, organisation, government body or entity incorporated in Singapore carrying on a business or activities with ITS interests.",
      "Any subsidiary of a foreign corporate entity not registered in Singapore carrying on business or activities in Singapore with ITS interests.",
      "Any other registered legal entity carrying on business or activities with ITS interests in Singapore (To be approved by the Council).",
    ],
    fee: "Membership fee: $250 - $3,000/year",
  },
  {
    title: "Associate Membership",
    description: [
      "Open to individuals in the ITS industry who do not qualify under as Ordinary Member but with an interest in ITS activities or belong to an organization (Research Institutes or Institutes of Higher Learning) whereby linking as Ordinary Member is deemed prohibited but has activities and interests in the ITS industries.",
    ],
    fee: "Annual subscription: $850",
  },
  {
    title: "Youth Membership",
    description: [
      "Open to individuals who are:",
      "Full-time or Part-time students in any of the Tertiary Institutions, including Polytechnics in Singapore.",
      "Alumni as may of the Tertiary Institutions, including Polytechnics in Singapore, having graduated not more than 2 years ago.",
      "They shall belong to the ITS Youth Membership, while the Tertiary Institution (the organisation) is an Ordinary Member of the Society, its student or alumni (that graduated less than 2 years earlier) is automatically admitted without any charges as a Youth Member.",
    ],
    fee: "Annual subscription: $850",
  },
];

export default function MembershipPlans() {
  return (
    <section className="w-full py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {membershipPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className={`p-6 rounded-lg shadow-md bg-[#F8F8FF]  ${
                index === 2 ? "col-span-1 md:col-span-2" : ""
              }`}
            >
              <h3 className="text-[#006FCF] text-[32px] font-medium mb-4 border-b-2 border-[#006FCF]">
                {plan.title}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-black text-[14px] font-medium">
                {plan.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              <p className="text-[#14AE5C] text-[14px] font-bold mt-4">
                {plan.fee}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

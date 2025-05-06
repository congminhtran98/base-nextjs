import AboutHeroIntro from "@/components/About/AboutUsHeroIntro";
import TechComparisonTable from "@/components/Technology/TechComparisonTable";
import TrafficStatsSection from "@/components/Technology/TrafficStatsSection";

export default function SmartMobility() {
  return (
    <div className="mt-[84px]">
      <AboutHeroIntro
        heading="Smart Mobility"
        subheading="Latest News and Innovations in Smart Transportation Solutions"
        icon={<i className="fa fa-calendar" />}
        title="Smart Mobility Solutions"
        description="Smart mobility leverages technology and innovation to create more efficient, sustainable, and user-friendly transportation systems that enhance urban living and reduce environmental impact."
      />
      {/* Add more content here */}
      <TechComparisonTable />
      <TrafficStatsSection />
    </div>
  );
}

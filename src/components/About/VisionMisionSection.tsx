import React from "react";
import Image from "next/image";

interface VisionMissionItemProps {
  icon: React.ReactNode;
  title: string;
  description: string | string[];
  imageSrc: string;
}

const VisionMissionItem: React.FC<VisionMissionItemProps> = ({
  icon,
  title,
  description,
  imageSrc,
}) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-xl p-8 min-h-[550px] justify-between transition-transform duration-300 hover:-translate-y-2">
      <div className="text-[#39c8e2] text-[50px] mb-4 text-center">{icon}</div>
      <div className="text-left mb-6">
        <h3 className="text-2xl font-medium text-[#39c8e2] mb-4 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[50px] after:h-[3px] after:bg-[#39c8e2]">
          {title}
        </h3>
        {typeof description === "string" ? (
          <p className="text-[#777777] leading-relaxed">{description}</p>
        ) : (
          <ul className="text-[#777777] leading-relaxed space-y-3 pl-0 list-none">
            {description.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-[#39c8e2] mr-2 pt-[2px]">
                  <i className="fa fa-check-circle"></i>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="text-center">
        <Image
          src={imageSrc}
          alt={title}
          width={400}
          height={250}
          className="rounded shadow-md object-cover max-h-[250px] w-full"
        />
      </div>
    </div>
  );
};

const VisionMissionSection = () => {
  return (
    <div className="bg-[#f8f9fa] py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <VisionMissionItem
            icon={<i className="fa fa-eye"></i>}
            title="Our Vision"
            description="Be the champion for Singapore's ITS and mobility community, towards transportation that enhances quality of life."
            imageSrc="/images/slide1.jpg"
          />
          <VisionMissionItem
            icon={<i className="fa fa-bullseye"></i>}
            title="Our Mission"
            description={[
              "Promote innovation in Intelligent Transport Systems",
              "Build awareness and facilitate thought leadership",
              "Unite stakeholders for sustainable transportation",
            ]}
            imageSrc="/images/slide2.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default VisionMissionSection;

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AboutHeroIntro from "@/components/About/AboutUsHeroIntro";
import CallToActionSection from "@/components/CallToActionSection";




export default function JoinUs() {
  // Định nghĩa interface cho props
  interface MembershipCardProps {
    title: string;
    price: string | number; // Có thể là string hoặc number tùy thuộc vào dữ liệu
    description: string;
    benefits: string[]; // benefits là mảng các chuỗi
    note?: string; // note là tùy chọn
    highlight?: boolean; // highlight là tùy chọn
  }
  interface TestimonialProps {
    quote: string;
    author: string;
  }
  const steps = [
    {
      title: "Choose Your Membership Type",
      description: "Review our membership levels below and select the one that best fits your organization or individual profile."
    },
    {
      title: "Complete the Application Form",
      description: "Fill out our membership application form with your details and information about your organization."
    },
    {
      title: "Submit Payment",
      description: "Process your membership fee payment through our secure online system."
    },
    {
      title: "Receive Confirmation",
      description: "Once your application is approved, you'll receive a welcome package with information on how to access member benefits."
    }
  ];
  const MembershipCard = ({ title, price, description, benefits, note, highlight } : MembershipCardProps) => {
    return (
          <div className="bg-white shadow-[0_15px_35px_rgba(0,0,0,0.2)] group rounded-lg text-center transform transition duration-300 hover:scale-105 hover:border-2 hover:border-[#39c8e2]">
            <div className="mb-4 py-6 px-5 bg-[#f8f9fa] border-b border-[#eee] group-hover:bg-[#39c8e2] ">
              <h4 className="text-xl mb-4 font-semibold text-gray-800 group-hover:text-white">{title}</h4>
              <div className="text-2xl font-bold text-[#39c8e2] mt-2 group-hover:text-white">
                {price}
                <span className="text-sm font-normal text-gray-600 group-hover:text-white">/year</span>
              </div>
            </div>
            <div className="text-left p-6">
              <p className="text-gray-600 mb-4">{description}</p>
              <ul className="space-y-2 mb-14 min-h-80">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start py-2 border-b-[1px] border-[#eee]">
                    <i
                      className={`fas ${
                        highlight && index === benefits.length - 1
                          ? 'fa-info-circle text-blue-500'
                          : 'fa-check text-[#39c8e2]'
                      } mr-2 mt-1`}
                    ></i>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              {note ? (
                <p className="text-sm text-gray-500 my-4">{note}</p>
              ) : (
                <p className="text-sm text-gray-500 my-4 min-h-5" />
              )}
              <a
                href="#"
                className="inline-block bg-[#ff0000] text-white py-2 px-4 rounded hover:bg-[#cc0000] transition w-full text-center"
              >
                Join Now
              </a>
            </div>
          </div>
    );
  };
  
  const Testimonial = ({ quote, author } : TestimonialProps) => {
    return (
      <div className="mb-7 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.1)] p-7 rounded-md">
        <p className="text-gray-600 italic m-4">"{quote}"</p>
        <div className=" text-[#aa0000] text-center font-semibold mt-2">{author}</div>
      </div>
    );
  };

  return (
    <div className="mt-[84px]">
      {/* Hero Section */}
      <AboutHeroIntro
        heading="Join Us"
        subheading="Join Our Community of Transportation Professionals"
        icon={<i className="fa fa-users"></i>}
        title="Membership Benefits"
        description="As a member of the Intelligent Transportation Society (ITS) Singapore, you'll join our growing community of transportation professionals, organizations, and enthusiasts. 
                    Our membership offers exclusive benefits and opportunities to connect with industry leaders in the intelligent transportation sector."
      />
      {/* Join Us Section */}
      <section id="join-us" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-start">
            <div className="text-center">
              <h3 className="text-4xl font-semibold text-gray-800 mb-10 relative mt-9">
                Join Us
                <span className="block w-20 h-1 bg-[#39c8e2] mx-auto mt-4"></span>
              </h3>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="max-w-3xl text-center">
              <p className="text-xl font-normal color-[#777777] mb-8">
                Becoming a member of ITS Singapore is simple. Follow these steps to join our community of transportation professionals:
              </p>
              
              <div className="text-left mb-10">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start mb-6">
                    <div className="bg-[#39c8e2] text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-gray-800 mb-2">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <a 
                href="#membership-types" 
                className="inline-block bg-[#ff0000] text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-teal-600 transition-colors"
              >
                Start Application Process
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Membership Types */}
      <div id="membership-types" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-start pb-10 pt-9">
            <h3 className="text-4xl font-semibold text-gray-800">
              Types of Membership
              <span className="block w-20 mx-auto h-1 bg-[#39c8e2] mt-4"></span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
            <MembershipCard
              title="Ordinary Membership"
              price="S$250 - S$3,000"
              description="Open to:"
              benefits={[
                "Companies or organizations in Singapore with ITS interests",
                "Branches/subsidiaries of foreign companies registered in Singapore with ITS interests",
                "Other registered legal entities with ITS interests (Council approval required)",
                "Access to all ITS Singapore events and resources",
                "Voting rights at Annual General Meetings",
              ]}
              note="*Fee is determined by the member's annual revenue"
            />
            <MembershipCard
              title="Associate Membership"
              price="S$80"
              description="Open to individuals who:"
              benefits={[
                "Are in the ITS industry but don't qualify as Ordinary Members",
                "Have interest in ITS activities",
                "Belong to Research Institutes, Institutes of Higher Learning, or certain Non-Profit/Government Agencies",
                "Access to selected ITS Singapore events",
                "Networking opportunities with industry professionals",
              ]}
            />
            <MembershipCard
              title="Youth Membership"
              price="S$20"
              description="Open to individuals who are:"
              benefits={[
                "Full-time or Part-time students in Tertiary Institutions or Polytechnics in Singapore",
                "Alumni who graduated no more than 2 years ago",
                "Access to educational resources and workshops",
                "Mentorship opportunities with industry professionals",
                "Free for students whose institution is an Ordinary Member",
              ]}
              highlight={true}
            />
          </div>

          <div className="md:w-2/3 mx-auto mt-14">
            <h4 className="text-2xl font-semibold text-gray-800 mb-5 mt-8 text-center">
              What Our Members Say
            </h4>
            <Testimonial
              quote="Being a member of ITS Singapore has opened doors to new opportunities and connections that have been invaluable for our organization's growth in the intelligent transportation sector."
              author="- David Tan, Director of Transportation Technologies, Singapore Transit Solutions"
            />
            <Testimonial
              quote="The exclusive events and workshops have provided our research team with cutting-edge knowledge and insights that keep us at the forefront of transportation innovation in Singapore."
              author="- Dr. Li Wei, Senior Researcher, National University of Singapore"
            />
          </div>
        </div>
      </div>
      {/* Apply For Membership */}
      <CallToActionSection
        title="Ready to Join ITS Singapore?"
        description="Be part of our community and contribute to the advancement of intelligent transportation systems in Singapore and the Asia-Pacific region."
        buttonText="APPLY FOR MEMBERSHIP"
      />
    </div>
  );
}


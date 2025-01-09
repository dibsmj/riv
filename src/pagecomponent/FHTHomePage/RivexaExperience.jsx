import React from "react";
import f1 from "@/assets/FHThomepage/f1.png";
import f2 from "@/assets/FHThomepage/f2.png";
import f3 from "@/assets/FHThomepage/f3.png";
import f4 from "@/assets/FHThomepage/f4.png";
import f5 from "@/assets/FHThomepage/f5.png";
import f6 from "@/assets/FHThomepage/f6.png";

const RivexaExperience = () => {
  const features = [
    {
      title: "Global Access",
      description: "Connect with 500+ curated and verified Indian exporters",
      icon: f1.src,
    },
    {
      title: "Efficiency Boost",
      description: "Reduce sourcing time by 25%",
      icon: f2.src,
    },
    {
      title: "Design Advisory",
      description: "Expert design solutions for unparalleled results",
      icon: f3.src,
    },
    {
      title: "Quality Assurance",
      description: "Rigorous vetting process for all suppliers",
      icon: f4.src,
    },
    {
      title: "Cost Savings",
      description: "Average of 20% reduction in sourcing costs",
      icon: f5.src,
    },
    {
      title: "Streamlined Process",
      description: "End-to-end management from RFQ to delivery",
      icon: f6.src,
    },
  ];

  return (
    <div className="bg-[#856ACFE3] md:py-8 lg:py-8 px-4  lg:px-16 xs:p-4">
      {/* Header */}
      <div className="text-center mb-8 lg:mb-12">
        <h2 className="text-sm lg:text-xl font-light text-primaryWhite uppercase tracking-widest">
          Unlock Your Rivexa Experience
        </h2>
        <h1 className="text-xl lg:text-3xl font-bold text-primaryWhite mt-2 lg:mt-4 title">
          Connect, source, and build with rivexa
        </h1>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-3xl shadow-lg md:p-3 lg:p-3 text-center"
            style={{
              border: "2px solid white",
            }}
          >
            {/* Responsive Flex Layout */}
            <div className="flex xs:flex-row md:flex-col items-center lg:space-x-4 xs:space-x-4">
              {/* Icon */}
              <img
                src={feature.icon}
                alt={feature.title}
                className="md:mr-0 xs:mr-0 md:mb-4 lg:mb-0 xs:ml-7 sm:ml-7"
                style={{
                  width: "40px",
                  height: "40px",
                  objectFit: "contain",
                }}
              />
              {/* Title and Description */}
              <div className="md:text-center lg:text-center text-center xs:text-center w-[80%]">
                <h3 className="text-sm lg:text-lg font-light text-primaryWhite uppercase mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs lg:text-base text-primaryWhite desc">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RivexaExperience;

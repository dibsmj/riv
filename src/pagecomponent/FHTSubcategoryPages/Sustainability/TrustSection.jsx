import React from "react";
import { TRUST_DATA } from "./SustainabiltyContent";

const TrustSection = () => {
  return (
    <section className="bg-[#4A3587] text-white py-12 px-8">
      <div className="text-center mb-8">
        <h2 className="text-[32px] font-semibold mb-4 text-primaryWhite text-left title">
          A Credible Partner Rooted in Trust and Transparency
        </h2>
        <p className="text-[16px] text-primaryWhite text-left desc">
          With over two decades of digital commerce expertise, mjunction drives
          rivexa’s vision with its industry knowledge, technological
          infrastructure, and trusted marketplace ecosystem.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TRUST_DATA.map((item, index) => (
          <div
            key={index}
            className="bg-primaryWhite text-gray-800 p-6 rounded-lg shadow-md text-center"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-[20px] font-semibold mb-2 desc text-[#12141D]">
              {item.title}
            </h3>
            <p className="text-[16px] leading-normal desc text-[#12141D]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustSection;

import React from "react";
import { useEffect, useState, useRef } from "react";
import humanBg from "@/assets/CategoryPage/FHT/FHTSubcategory/Sustainability/humanBg.png";
import bgImage from "@/assets/CategoryPage/FHT/FHTSubcategory/Sustainability/humanBg2.png";
import RequestDemo from "@/component/Common/RequestDemo";
import RoundButton from "@/component/RoundButton";
import EnquiryModal from "@/component/Common/EnquiryModal";

const EffortlesslyManage = () => {
  const [isEnquiryOpen, SetIsEnquiryOpen] = useState(false);
  const [isAutoOpenEnquiryModal, setIsAutoOpenEnquiryModal] = useState(false);
  const [activeTab, setActiveTab] = useState("enquiry");
  const [messages, setMessages] = useState([]);
  return (
    <div
      className="flex flex-col md:flex-row xs:items-center justify-between p-8 rounded-lg border border-blue-300"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
        <img
          src={humanBg.src}
          alt="Sourcing Hero"
          className="w-full h-auto object-cover -mb-8"
        />
      </div>

      <div className="w-full md:w-[44%] text-left px-4 md:px-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#1C1A1A] xs:text-left md:text-left lg:text-left desc">
          Start sourcing with rivexa
        </h2>
        <ul className="list-none pl-0 space-y-2 md:space-y-4 desc">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">✔</span>
            <span>50+ Successfully Fulfilled Orders  </span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">✔</span>
            <span>Strong Track Record of Repeat Business  </span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">✔</span>
            <span>Transforming Sustainable Sourcing In US, UK, Germany, France, Australia </span>
          </li>
        </ul>

        <RoundButton
          buttonID="start_your_journey"
          title="Submit Enquiry"
          isEnquiryOpen={isEnquiryOpen}
          onEventHandle={() => setIsAutoOpenEnquiryModal(true)}
        />
        <EnquiryModal
          isAutoOpen={isAutoOpenEnquiryModal}
          dealyTime={1000}
          messages={messages}
          setMessages={setMessages}
          setIsAutoOpenEnquiryModal={setIsAutoOpenEnquiryModal}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
    </div>
  );
};

export default EffortlesslyManage;

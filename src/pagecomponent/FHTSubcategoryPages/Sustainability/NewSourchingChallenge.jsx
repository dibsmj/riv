/* eslint-disable no-undef */
/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import dynamic from "next/dynamic";
import SourchingChallengeStyles from "@/pagecomponent/IGSubCategory/AluminiumDieCasting/Components/SourchingChallengeStyles";
import SourchingLine from "@/assets/CategoryPage/IG/aluminium/sourchingline.webp";
const TabContent = dynamic(() =>
  import("./Tab1Content")
);
import { tabContentData } from "./SustainabiltyContent";

const NewSourchingChallenge = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: "tab-custom-one", name: "Find reliable and verified suppliers" },
    { id: "tab-custom-two", name: "Ensure ethical production practices" },
    { id: "tab-custom-three", name: "Source sustainable materials" },
  ];

  return (
    <div css={SourchingChallengeStyles}>
      <div className="sourceingback h-auto">
        <h2 className="w-[88%] m-auto pt-3 font-['Chillax'] md:text-[32px] xs:text-[20px] text-primaryWhite xs:text-center md:text-left md:ml-7">
          Sustainability Challenges Holding You Back?
        </h2>
        <img src={SourchingLine.src} alt="SourchingLine" className="w-full" />
        <div className="my-7">
          <div className="bg-primaryWhite rounded-[22px] w-[96%] m-auto h-auto">
            <div className="flex flex-row xs:flex-col sm:flex-col ssm:flex-row md:flex-row lg:flex-row">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(index)}
                  className={`transform transition-transform duration-300 hover:scale-105 hover:shadow-md p-8 xs:p-4 sm:p-4 ssm:p-8 md:p-8 lg:p-8 text-[28px] xs:text-[22px] sm:text-[22px] ssm:text-[28px] md:text-[28px] lg:text-[28px] underline text-left ${
                    activeTab === index
                      ? "activebutton"
                      : "nonActivBbutton borderClass xs:borderNonClass sm:borderNonClass ssm:borderClass md:borderClass lg:borderClass"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
            <div className="p-8">
              <TabContent {...tabContentData[activeTab]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSourchingChallenge;

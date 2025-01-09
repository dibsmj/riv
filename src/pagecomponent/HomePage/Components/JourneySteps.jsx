/** @jsxImportSource @emotion/react */
import { memo, useState, useCallback } from "react";
import JourneyCard from "@/component/JourneyCard";


const JourneySteps = memo(() => {
  const [activeCard, setActiveCard] = useState(null);
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <div className="w-[85%] sm:w-[95%] xs:w-[95%] ssm:w-[90%] md:w-[85%] mx-auto mt-[4rem]">
      <h2 className="journeyheadertitle  text-[2.25rem] sm:text-[1.5rem] xs:text-[1.5rem] md:text-[2.25rem] !my-0">
        Complete Your Journey In 4 Simple Steps
      </h2>
      <p className="journeysubheader !my-0 !mt-2">
        Transform your business journey into a clear, actionable roadmap for
        success.
      </p>
      <div className=" flex justify-center items-center align-middle gap-5 mt-6">
        <button
          className={`py-2 px-10 w-auto cursor-pointer hover:-translate-x-1 hover:scale-110 hover:delay-150 ${
            activeTab === "tab1" ? "journeybtnactive" : "journeybtn"
          }`}
          onClick={() => setActiveTab("tab1")}
        >
          Buyer
        </button>
        <button
          className={`py-2 px-10 w-auto cursor-pointer hover:-translate-x-1 hover:scale-110 hover:delay-150 ${
            activeTab === "tab2" ? "journeybtnactive" : "journeybtn"
          }`}
          onClick={() => setActiveTab("tab2")}
        >
          Seller
        </button>
      </div>
      {activeTab === "tab1" && (
        <div className="grid grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 ssm:grid-cols-2 md:grid-cols-4 mt-12 gap-[1rem]">
          <JourneyCard
            activeCard={activeCard}
            step={"stepOne"}
            setActiveCard={setActiveCard}
            stepNumber={1}
            title={"Transparent Pricing"}
            description={
              "AI matches your needs with manufacturers, ensuring transparent pricing for end-to-end RFx process."
            }
            headerColor={"#1BABE2"}
          />
          <JourneyCard
            activeCard={activeCard}
            step={"stepTwo"}
            setActiveCard={setActiveCard}
            stepNumber={2}
            title={"Contracting Models"}
            description={
              "Manage contracts, purchase orders, and delivery schedules with our comprehensive all-in-one e-marketplace."
            }
            headerColor={"#FFB82E"}
          />
          <JourneyCard
            activeCard={activeCard}
            step={"stepThree"}
            setActiveCard={setActiveCard}
            stepNumber={3}
            title={"Order Visibility"}
            description={
              "Monitor projects with customizable templates, live updates, and seamless tracking for full visibility."
            }
            headerColor={"#20AF98"}
          />
          <JourneyCard
            activeCard={activeCard}
            step={"stepFour"}
            setActiveCard={setActiveCard}
            stepNumber={4}
            title={"End-To-End Support"}
            description={
              "Access global logistics, quality assurance, and financing with partners supporting cross-border needs."
            }
            headerColor={"#DB78A1"}
          />
        </div>
      )}
      {activeTab === "tab2" && (
        <div className="grid grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 ssm:grid-cols-2 md:grid-cols-4 mt-12 gap-[1rem]">
          <JourneyCard
            activeCard={activeCard}
            step={"stepOne"}
            setActiveCard={setActiveCard}
            stepNumber={1}
            title={"Multiple Enquiries"}
            description={
              "Gain visibility to our global buyer ecosystem, generating unlimited leads based on your manufacturing capabilities."
            }
            headerColor={"#1BABE2"}
          />
          <JourneyCard
            activeCard={activeCard}
            step={"stepTwo"}
            setActiveCard={setActiveCard}
            stepNumber={2}
            title={"Unlimited Leads"}
            description={
              "Gain visibility to our global buyer ecosystem, generating unlimited leads based on your manufacturing capabilities."
            }
            headerColor={"#FFB82E"}
          />
          <JourneyCard
            activeCard={activeCard}
            step={"stepThree"}
            setActiveCard={setActiveCard}
            stepNumber={3}
            title={"Order Visibility"}
            description={
              "Oversee orders from start to finish with instant tracking for each order, ensuring smooth operations and customer satisfaction."
            }
            headerColor={"#20AF98"}
          />
          <JourneyCard
            activeCard={activeCard}
            step={"stepFour"}
            setActiveCard={setActiveCard}
            stepNumber={4}
            title={"Product Showcase"}
            description={
              "Create dynamic product listings tailored to your brand, reaching curated global buyers to maximize your sales potential."
            }
            headerColor={"#DB78A1"}
          />
        </div>
      )}
    </div>
  );
});

export default JourneySteps;

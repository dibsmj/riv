"use client";
/** @jsxImportSource @emotion/react */
import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import loadable from "@loadable/component";
import { menStyles } from "../MensApparel/menStyles";
import {
  HERO_SECTION_CONTENT,
  LOGOS,
  LANDING_FAQ_DATA,
} from "@/pagecomponent/FHTSubcategoryPages/Sustainability/SustainabiltyContent";
import EnquiryModal from "@/component/Common/EnquiryModal";
import RoundButton from "@/component/RoundButton";
import { CASTING_PLATFORM_DATA } from "@/constants/ig";

const PlatformData = dynamic(() => import("@/component/Common/PlatformData"));
const FaqSection = dynamic(() => import("@/component/Common/FaqSection"));
const FHTCategorySection = dynamic(() =>
  import("@/component/Common/FHTCategorySection")
);
const SourchingChallenge = dynamic(() =>
  import(
    "@/pagecomponent/FHTSubcategoryPages/Sustainability/NewSourchingChallenge"
  )
);
const EfforlesslyManage = dynamic(() =>
  import("@/pagecomponent/FHTSubcategoryPages/Sustainability/EfforlesslyManage")
);
const TrustSection = dynamic(() =>
  import("@/pagecomponent/FHTSubcategoryPages/Sustainability/TrustSection")
);
const InnovateSustainably = dynamic(() =>
  import("../Sustainability/InnovateSustainably")
);
const HeroSection = loadable(() =>
  import("@/pagecomponent/FHTSubcategoryPages/Sustainability/HeaderSection")
);
const FactoryCertification = loadable(() =>
  import("../MensApparel/FactoryCertification")
);

const FHTSubcategorypage = () => {
  const [isAutoOpenEnquiryModal, setIsAutoOpenEnquiryModal] = useState(true);
  const [messages, setMessages] = useState([]);
  const [activeTab, setActiveTab] = useState("enquiry");

  const [isVisible, setIsVisible] = useState(false);
  const FHTCategorySectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 }
    );
    if (FHTCategorySectionRef.current)
      observer.observe(FHTCategorySectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <div css={menStyles}>
        <div className="h-[48rem]">
          <HeroSection
            landingPageBg={`https://static-uat.rivexa.com/images/lbg1.webp`}
            mainTitle={HERO_SECTION_CONTENT.mainTitle}
            title={HERO_SECTION_CONTENT.title}
            desc={HERO_SECTION_CONTENT.desc}
            mobileImage={HERO_SECTION_CONTENT.mobileImage}
            breadcrumbItems={HERO_SECTION_CONTENT.breadcrumbItems}
            isAutoOpenEnquiryModal={isAutoOpenEnquiryModal}
            setIsAutoOpenEnquiryModal={setIsAutoOpenEnquiryModal}
            messages={messages}
            setMessages={setMessages}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
        <div className="relative -top-40">
          <SourchingChallenge />
        </div>
        <div className="relative -top-40">
          <EfforlesslyManage />
        </div>
        <div className="relative -top-44">
          <TrustSection />
        </div>

        <div className="relative -top-48" id="FactoryCertification">
          <FactoryCertification logos={LOGOS} />
        </div>
        <div className="relative -top-48">
          <InnovateSustainably
            setIsAutoOpenEnquiryModal={setIsAutoOpenEnquiryModal}
            setActiveTab={setActiveTab}
            setMessages={setMessages}
            mainTitle="Have you considered sustainability?"
            subtitle="Turn your brand’s sustainability commitment into a reality. Partner with our 60+ verified manufacturers."
          />
        </div>
        <div id="howitworks" className="my-14 -mt-48">
          <PlatformData platformdata={CASTING_PLATFORM_DATA} />
        </div>
        <div
          ref={FHTCategorySectionRef}
          className="w-full m-auto relative -top-12 "
        >
          <h2 className="title justify-center items-center text-center align-middle mt-20 text-[25px] xs:text-[25px] sm:text-[25px] ssm:text-[32px] md:text-[25px] lg:text-[32px]">
            Enhance Your Sustainable Fashion Line with a Variety of Options
          </h2>
          <div className="-mt-0">
            {isVisible && <FHTCategorySection showButton={false} />}
          </div>
        </div>
        {/* 
      <div className="relative -top-8" id="CategorySection">
        <Expertise categories={RANGE_DATA} title={rangeTitle} />
      </div> */}
        <div className=" m-auto flex justify-center items-center align-middle">
          <RoundButton
            buttonID="start_your_journey"
            title="Submit Enquiry"
            onEventHandle={() => setIsAutoOpenEnquiryModal(true)}
          />
        </div>
        {/* <EnquiryModal
          isAutoOpen={isAutoOpenEnquiryModal}
          dealyTime={1000}
          messages={messages}
          setMessages={setMessages}
          setIsAutoOpenEnquiryModal={setIsAutoOpenEnquiryModal}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        /> */}
        <div className="">
          <FaqSection
            title="Sustainabilty FAQ"
            description="We have got you covered all your queries!"
            faqData={LANDING_FAQ_DATA}
          />
        </div>
      </div>
    </main>
  );
};

export default FHTSubcategorypage;

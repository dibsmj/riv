"use client";
/** @jsxImportSource @emotion/react */
import { useState } from "react";
import loadable from "@loadable/component";
import { menStyles } from "./menStyles";
import {
  HERO_SECTION_CONTENT,
  INFO_SECTION_CONTENT,
  RIVEXA_CONTENT_OPTIONS,
  TITLE_CONSTANTS,
  CATEGORIES,
  LOGOS,
  LEFT_SIDE_IMAGE,
  FAQ_DATA,
} from "./mensApparelContent";

import { CASTING_PLATFORM_DATA } from "@/constants/ig";

import PlatformData from "@/component/Common/PlatformData";
import FaqSection from "@/component/Common/FaqSection";
import BlogSection from "@/component/Common/BlogSection";
import FHTCategorySection from "@/component/Common/FHTCategorySection";

const HeroSection = loadable(() => import("./HeaderSection"));
const InfoSection = loadable(() => import("./InfoSection"));
const FHTVideo = loadable(() =>
  import("@/pagecomponent/FHTSubcategoryLandingPage/FHTVideo")
);
const EndPart = loadable(() => import("./EndPart"));
const ChooseRivexa = loadable(() => import("./chooseRivexa"));
const FactoryCertification = loadable(() => import("./FactoryCertification"));
const Expertise = loadable(() => import("./expertise"));
const titleText = TITLE_CONSTANTS.RIVEXA_SECTION_TITLE;
const expertiseTitleText = TITLE_CONSTANTS.EXPERTISE_SECTION_TITLE;

const FHTSubcategorypage = () => {
  const [isAutoOpenEnquiryModal, setIsAutoOpenEnquiryModal] = useState(true);
  const [messages, setMessages] = useState([]);
  const [activeTab, setActiveTab] = useState("enquiry");
  return (
    <main>
      <div css={menStyles}>
        <div className="h-[48rem]">
          <HeroSection
            topImage={HERO_SECTION_CONTENT.topImage}
            mainTitle={HERO_SECTION_CONTENT.mainTitle}
            title={HERO_SECTION_CONTENT.title}
            desc={HERO_SECTION_CONTENT.desc}
            mobileImage={HERO_SECTION_CONTENT.mobileImage}
            breadcrumbItems={HERO_SECTION_CONTENT.breadcrumbItems} // Pass breadcrumbItems as a prop
            isAutoOpenEnquiryModal={isAutoOpenEnquiryModal}
            setIsAutoOpenEnquiryModal={setIsAutoOpenEnquiryModal}
            messages={messages}
            setMessages={setMessages}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>

        {/* Other sections */}
        {INFO_SECTION_CONTENT.map((section) => (
          <InfoSection
            key={section.title.replace(/\s+/g, "-").toLowerCase()}
            title={section.title}
            desc={section.desc}
            image={section.image}
            order={section.order}
          />
        ))}

        <div className="relative -top-24">
          <ChooseRivexa
            contentOptions={RIVEXA_CONTENT_OPTIONS}
            title={titleText}
          />
        </div>
        <div className="relative -top-24">
          <Expertise
            categories={CATEGORIES}
            title={expertiseTitleText}
            setIsAutoOpenEnquiryModal={setIsAutoOpenEnquiryModal}
            setMessages={setMessages}
            setActiveTab={setActiveTab}
          />
        </div>
        <div className="relative -top-24">
          <FactoryCertification logos={LOGOS} />
        </div>
        <div id="howitworks" className="my-14 -mt-32">
          <PlatformData platformdata={CASTING_PLATFORM_DATA} />
        </div>
        <div className="relative top-0">
          <FHTVideo />
        </div>
        <div className="w-full m-auto relative top-0 ">
          <h2 className="title justify-center items-center text-center align-middle mt-20 text-[25px] xs:text-[25px] sm:text-[25px] ssm:text-[32px] md:text-[25px] lg:text-[42px]">
            Explore more categories
          </h2>
          <div className="-mt-0">
            <FHTCategorySection />
          </div>
        </div>

        <div className="mb-2">
          <FaqSection
            title="Men's Apparel FAQ"
            description="We have got you covered all your queries!"
            faqData={FAQ_DATA}
          />
        </div>

        <BlogSection
          typeID={"fashion-and-home-textiles"}
          firstBlogIndex={0}
          lastBlogIndex={3}
        />
        <div className="mt-20">
          <EndPart leftSideImage={LEFT_SIDE_IMAGE} />
        </div>
      </div>
    </main>
  );
};

export default FHTSubcategorypage;

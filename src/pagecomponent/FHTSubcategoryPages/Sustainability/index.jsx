"use client";
/** @jsxImportSource @emotion/react */
import loadable from "@loadable/component";
import { menStyles } from "../MensApparel/menStyles";
import {
  HERO_SECTION_CONTENT,
  INFO_SECTION_CONTENT,
  RIVEXA_CONTENT_OPTIONS,
  CATEGORIES,
  LOGOS,
  LEFT_SIDE_IMAGE,
  TITLE_CONSTANTS,
  FAQ_DATA,
  RANGE_DATA,
} from "./SustainabiltyContent";
import { CASTING_PLATFORM_DATA } from "@/constants/ig";

import PlatformData from "@/component/Common/PlatformData";
import FaqSection from "@/component/Common/FaqSection";
import BlogSection from "@/component/Common/BlogSection";
import FHTCategorySection from "@/component/Common/FHTCategorySection";
import SourchingChallenge from "./NewSourchingChallenge";
import EfforlesslyManage from "./EfforlesslyManage";
import TrustSection from "./TrustSection";
import SustainableFashion from "./SustainableFashion";

const HeroSection = loadable(() => import("../MensApparel/HeaderSection"));
const InfoSection = loadable(() => import("../MensApparel/InfoSection"));
const FHTVideo = loadable(() =>
  import("@/pagecomponent/FHTSubcategoryLandingPage/FHTVideo")
);
const EndPart = loadable(() => import("../MensApparel/EndPart"));
const ChooseRivexa = loadable(() => import("../MensApparel/chooseRivexa"));
const FactoryCertification = loadable(() =>
  import("../MensApparel/FactoryCertification")
);
const Expertise = loadable(() => import("../MensApparel/expertise"));
const chooseTitleText = TITLE_CONSTANTS.RIVEXA_SECTION_TITLE;
const expertiseTitleText = TITLE_CONSTANTS.EXPERTISE_SECTION_TITLE;
const rangeTitle = TITLE_CONSTANTS.RANGE_TITLE;

const FHTSubcategorypage = () => (
  <main>
    <div css={menStyles}>
      <div className="h-[48rem]">
        <HeroSection
          topImage={HERO_SECTION_CONTENT.topImage}
          mainTitle={HERO_SECTION_CONTENT.mainTitle}
          title={HERO_SECTION_CONTENT.title}
          desc={HERO_SECTION_CONTENT.desc}
          mobileImage={HERO_SECTION_CONTENT.mobileImage}
          breadcrumbItems={HERO_SECTION_CONTENT.breadcrumbItems}
        />
      </div>
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
          title={chooseTitleText}
        />
      </div>
      <div className="relative -top-24">
        <Expertise categories={CATEGORIES} title={expertiseTitleText} />
      </div>
      <div className="relative -top-24">
        <FactoryCertification logos={LOGOS} />
      </div>
      <div className="relative -top-36">
        <Expertise categories={RANGE_DATA} title={rangeTitle} />
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
        <div className="-mt-0" id="">
          <FHTCategorySection />
        </div>
      </div>

      <div className="mb-2">
        <FaqSection
          title="Sustainabilty FAQ"
          description="We have got you covered all your queries!"
          faqData={FAQ_DATA}
        />
      </div>
      <div className="mt-20">
        <EndPart leftSideImage={LEFT_SIDE_IMAGE} />
      </div>
    </div>
  </main>
);

export default FHTSubcategorypage;

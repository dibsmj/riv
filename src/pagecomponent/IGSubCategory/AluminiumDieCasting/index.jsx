"use client";
/** @jsxImportSource @emotion/react */
import { useEffect, useState, useRef, memo } from "react";
import AluminiumDieCastingStyles from "./AluminiumDieCastingStyles";
import FaqSection from "@/component/Common/FaqSection";
import EasySteps from "@/component/EasySteps/EasySteps";
import RoundButton from "@/component/RoundButton";
import EnquiryModal from "@/component/Common/EnquiryModal";
import ImageLazyLoad from "@/component/ImageLazyLoad";
import TrustedBySection from "@/component/TrustedBySection/TrustedBySection";
import WorkFlow from "../WorkFlow";
import Effortlessly from "@/assets/CategoryPage/IG/aluminium/effortlessly.webp";
import {
  getCategoryHeader,
  getCategoryFaqs,
  getCategoryProcess,
} from "@/constants/ig";
import SourchingChallenge from "./Components/SourchingChallenge";
import Elevating from "./Components/Elevating";
import SubProcessProducts from "./Components/SubProcessProducts";
import PerfectMaterial from "./Components/PerfectMaterial";
import Breadcrumb from "@/pagecomponent/BlogPages/components/Breadcrumb";

import Logo1 from "@/assets/CategoryPage/IG/aluminium/logo1.png";
import Logo2 from "@/assets/CategoryPage/IG/aluminium/logo2.png";
import Logo3 from "@/assets/CategoryPage/IG/aluminium/logo3.png";
import Logo4 from "@/assets/CategoryPage/IG/aluminium/logo4.png";

import Logo5 from "@/assets/CategoryPage/IG/aluminium/logo5.png";
import Logo6 from "@/assets/CategoryPage/IG/aluminium/logo6.png";
import Logo7 from "@/assets/CategoryPage/IG/aluminium/logo7.png";
import Logo8 from "@/assets/CategoryPage/IG/aluminium/logo8.png";

const logosOneList = [
  { src: Logo1, alt: "Logo1" },
  { src: Logo2, alt: "Logo2" },
  { src: Logo3, alt: "Logo3" },
  { src: Logo4, alt: "Logo4" },
];

const logosTwoList = [
  { src: Logo5, alt: "Logo5" },
  { src: Logo6, alt: "Logo6" },
  { src: Logo7, alt: "Logo7" },
  { src: Logo8, alt: "Logo8" },
];

const HomePage = memo(() => {
  const heights = {
    default: "820px",
    mobile: "700px",
    tablet: "650px",
    desktop: "700px",
    others: "950px",
  };
  const [isEnquiryOpen, SetIsEnquiryOpen] = useState(true);
  const breadcrumbItems = [
    { text: "Home", url: "/" },
    { text: "Industrial Goods", url: "/industrial-goods" },
    {
      text: `${getCategoryHeader("aluminiumdiecasting").title}`,
      url: ``,
    },
  ];
  const [messages, setMessages] = useState([]);
  const [activeTab, setActiveTab] = useState("enquiry");
  return (
    <div css={() => AluminiumDieCastingStyles({ heights })}>
      <div className="w-full m-auto overflow-hidden">
        <div className="headerbackground relative">
          <div className="p-[5rem] xs:p-[3rem] sm:p-[3rem] ssm:p-[5rem] md:p-[5rem] lg:p-[5rem]">
            <Breadcrumb items={breadcrumbItems} />
            <div>
              <h1 className="subProcessName w-[35%] xs:w-[112%] sm:w-full ssm:w-[70%] md:w-[35%] lg:w-[35%] m-auto shadow-2xl transform transition-transform duration-300 hover:scale-105 hover:shadow-xl ">
                Aluminum Die Casting Services
              </h1>
              <h1 className="headerTitle text-[55px] xs:text-[35px] sm:text-[35px] ssm:text-[50px] md:text-[55px] lg:text-[55px] leading-[75px] xs:leading-10 sm:leading-10 ssm:leading-[50px] md:leading-[75px] lg:leading-[75px]">
                Innovate Faster, manufacture Smarter
              </h1>
              <h2 className="headerSubTitle text-[55px] xs:text-[35px] sm:text-[35px] ssm:text-[50px] md:text-[55px] lg:text-[55px] leading-[75px] xs:leading-10 sm:leading-10 ssm:leading-[50px] md:leading-[75px] lg:leading-[75px]">
                Precision. Delivered.
              </h2>
              <div className=" m-auto flex justify-center items-center align-middle">
                <RoundButton
                  buttonID="start_your_journey"
                  title="Submit Enquiry"
                  isEnquiryOpen={isEnquiryOpen}
                />
              </div>
            </div>
          </div>
        </div>
        <EnquiryModal
          messages={messages}
          setMessages={setMessages}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <SourchingChallenge />
        <div className="effortlessly">
          <div className="w-[90%] m-auto grid xs:grid-cols-1 sm:grid-cols-1 ssm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5">
            <div className="flex items-center justify-center">
              <ImageLazyLoad
                imageSrc={Effortlessly.src}
                alt="Effortlessly"
                className="max-w-full max-h-full"
              />
            </div>
            <div className="flex items-center">
              <div className="text-left">
                <div className="font-['Urbanist'] text-3xl font-semibold">
                  Effortlessly manage all your sourcing needs from India with a
                  reliable and transparent digital co-pilot, rivexa.
                </div>
                <div className="mt-7">
                  <RoundButton
                    buttonID="start_your_journey"
                    title="Submit Enquiry"
                    isEnquiryOpen={isEnquiryOpen}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Elevating />
        <div className=" w-[88%] m-auto flex justify-center align-middle items-center py-5">
          <TrustedBySection
            logosOne={logosOneList}
            logosTwo={logosTwoList}
            title={`Our Trusted Clients`}
          />
        </div>
        <WorkFlow
          title={`How Aluminum Die Casting Works..`}
          getProcess={getCategoryProcess("aluminiumdiecasting")}
        />
        <div className=" w-[88%] m-auto flex justify-center align-middle items-center">
          <RoundButton
            buttonID="start_your_journey"
            title="Submit Enquiry"
            isEnquiryOpen={isEnquiryOpen}
          />
        </div>
        <div className=" w-[88%] m-auto flex justify-center align-middle items-center">
          <SubProcessProducts
            title={`Enhance Your Precision Die Casted Products with a Variety of Finishes`}
          />
        </div>
        <div className="bg-[#4a3587]">
          <div className=" w-[88%] m-auto py-20">
            <PerfectMaterial
              title={`Choose the Perfect Material for Your Custom Die Casted Products`}
            />
          </div>
        </div>
        <div className="esaystep w-full m-auto">
          <EasySteps
            title={`How to use our platform..`}
            subTitle={`Powered by AI, our platform will disrupt the way you source`}
          />
        </div>
        <div className=" w-[88%] m-auto flex justify-center align-middle items-center mt-5">
          <RoundButton
            buttonID="start_your_journey"
            title="Submit Enquiry"
            isEnquiryOpen={isEnquiryOpen}
          />
        </div>
        <FaqSection
          title={`${getCategoryHeader("aluminiumdiecasting").title} FAQ`}
          description={`We have  got you covered for all your queries!`}
          faqData={getCategoryFaqs("aluminiumdiecasting")}
        />
      </div>
    </div>
  );
});

export default HomePage;

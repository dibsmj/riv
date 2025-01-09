/** @jsxImportSource @emotion/react */
"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import LandingPageStyles from "./LandingPageStyles";
import { ArrowDown } from "../../config/GetImages";
import { faqsArray } from "@/pagecomponent/FaqPage/faqConstants";
import VideoSection from "@/component/Common/VideoSection";
import BlogSection from "@/component/Common/BlogSection";
import FaqSection from "@/component/Common/FaqSection";
import FeaturesSection from "@/component/Common/FeaturesSection";
import CategorySection from "@/component/Common/CategorySection";
import JourneySection from "@/component/Common/JourneySection";
import HeaderRegistrationButton from "@/component/Common/HeaderRegistrationButton";
import EnquiryModal from "@/component/Common/EnquiryModal";
import IGVideo from "@/assets/CategoryPage/IG/ig_bv.mp4";
import HeaderBacgroundWebp from "@/assets/CategoryPage/IG/ig_bv_webp.webp";
import Breadcrumb from "@/pagecomponent/BlogPages/components/Breadcrumb";

const IGLandingPage = () => {
  const [getControls, setControls] = useState(true);
  const heights = {
    default: "820px",
    mobile: "465px",
    tablet: "600px",
    desktop: "740px",
  };
  const videoRef = useRef(null);
  const [videoWebLoaded, setWebVideoLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      videoRef?.current?.play();
      setWebVideoLoaded(true);
    }, 3000);
  }, [videoRef]);
  const breadcrumbItems = [
    { text: "Home", url: "/" },
    { text: "Industrial Goods", url: "/industrial-goods" },
  ];
  const [messages, setMessages] = useState([]);
  const [activeTab, setActiveTab] = useState("enquiry");
  return (
    <div css={() => LandingPageStyles({ heights })}>
      <div className="headerbackground relative">
        <div className="w-full h-full absolute z-[-1] ">
          {!videoWebLoaded && (
            <Image
              alt={"HeaderVideoWebp"}
              className={`w-full h-full`}
              src={HeaderBacgroundWebp}
              priority
              style={{ opacity: videoWebLoaded ? 0 : 1 }}
            />
          )}
          {videoWebLoaded && (
            <video
              autoPlay={getControls}
              muted
              loop
              id="headerVideo"
              className="w-full"
              playsInline
              ref={videoRef}
              style={{ opacity: videoWebLoaded ? 1 : 0 }}
            >
              <source src={IGVideo} type="video/mp4" />
              <track src={null} kind="captions" label="English" />
              Your browser does not support HTML5 video.
            </video>
          )}
        </div>
        <div className="flex flex-row justify-start items-start">
          <div className=" w-1/2 xs:w-full sm:w-full ssm:w-1/2 md:w-3/5 lg:w-3/5 relative top-14 left-0">
            <div className="m-10 xs:m-2 sm:m-2 md:m-20 lg:m-12">
              <div className="grid grid-cols-1">
                <div className="headertextsection p-4 xs:p-3 sm:p-3 md:p-4 lg:p-4">
                  <div className="">
                    <Breadcrumb items={breadcrumbItems} />
                  </div>
                  <h1 className="igtext text-5xl xs:text-xl sm:text-xl md:text-4xl lg:text-5xl -mt-5">
                    Custom Industrial Products, Machinery Parts, and Components
                    <div className="igsubtext mt-2 xs:text-xl sm:text-xl md:text-xl lg:text-xl">
                      Unlock customized manufacturing for your designs
                    </div>
                  </h1>
                  <div>
                    <HeaderRegistrationButton
                      image={ArrowDown}
                      className={`registerbutton cursor-pointer inline-flex text-[15px] xs:text-[15px] sm:text-[15px] md:text-xl lg:text-xl`}
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 mt-3 xs:mt-0 sm:mt-0 md:mt-2 lg:mt-3">
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <div className="headersectionheader text-5xl xs:text-lg sm:text-lg md:text-4xl lg:text-5xl">
                      500+
                    </div>
                    <div className="headersubsectionheader mt-1 xs:mt-0 sm:mt-0 md:mt-1 lg:mt-1 text-lg xs:text-sm sm:text-sm md:text-lg lg:text-lg">
                      Verified manufacturers
                    </div>
                  </div>
                  <div>
                    <div className="headersectionheader text-5xl xs:text-lg sm:text-lg md:text-4xl lg:text-5xl">
                      100 %
                    </div>
                    <div className="headersubsectionheader mt-1 xs:mt-0 sm:mt-0 md:mt-1 lg:mt-1 text-lg xs:text-sm sm:text-sm md:text-lg lg:text-lg">
                      Compliant and certified
                    </div>
                  </div>
                  <div>
                    <div className="headersectionheader text-5xl xs:text-lg sm:text-lg md:text-4xl lg:text-5xl">
                      06
                    </div>
                    <div className="headersubsectionheader mt-1 xs:mt-0 sm:mt-0 md:mt-1 lg:mt-1 text-lg xs:text-sm sm:text-sm md:text-lg lg:text-lg">
                      Manufacturing processes
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="capabilities"
        className="ourcapabilities justify-center items-center text-center align-middle text-[20px] xs:text-[10px] sm:text-[10px] ssm:text-[15px] md:text-[20px] lg:text-[20px]"
      >
        Our capabilities
      </div>
      <div className="w-[90%] m-auto">
        <h2 className="millionproducts justify-center items-center text-center align-middle mt-5 text-[42px] xs:text-[25px] sm:text-[25px] ssm:text-[32px] md:text-[42px] lg:text-[42px]">
          Millions of products unlocked through our manufacturing capabilities
        </h2>
      </div>
      <EnquiryModal
        messages={messages}
        setMessages={setMessages}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {/* category section start */}
      <CategorySection />
      {/* category section end */}
      {/* features setion start */}
      <FeaturesSection />
      {/* features setion end */}
      {/* Register section start */}
      <JourneySection />
      {/* Register section end */}
      {/* Video section start */}
      <VideoSection />
      <div className=" -mt-[9.25rem] xs:-mt-[6.25rem] sm:-mt-[6.25rem] ssm:-mt-[7.25rem] md:-mt-[9.25rem] lg:-mt-[9.25rem]">
        <FaqSection
          title={`Frequently Asked Questions`}
          description={`We got the answer for thousand of questions`}
          faqData={faqsArray}
        />
      </div>
      {/* Faq section end */}
      {/* Blog section start */}
      <BlogSection
        typeID={"industrial-goods"}
        firstBlogIndex={0}
        lastBlogIndex={3}
      />
      {/* Blog section end   */}
    </div>
  );
};

export default IGLandingPage;

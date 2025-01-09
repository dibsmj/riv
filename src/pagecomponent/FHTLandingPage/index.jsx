"use client";
/** @jsxImportSource @emotion/react */
import { useEffect, useState, useRef } from "react";
import LandingPageStyles from "./LandingPageStyles";
import { ArrowDown } from "../../config/GetImages";
import FHTVideoSection from "@/component/Common/FHTVideoSection";
import BlogSection from "@/component/Common/BlogSection";
import FaqSection from "@/component/Common/FaqSection";
import FHTFeaturesSection from "@/component/Common/FHTFeaturesSection";
import FHTCategorySection from "@/component/Common/FHTCategorySection";
import JourneySection from "@/component/Common/JourneySection";
import HeaderRegistrationButton from "@/component/Common/HeaderRegistrationButton";
import EnquiryModal from "@/component/Common/EnquiryModal";
import { faqsArray } from "@/pagecomponent/FaqPage/faqConstants";
import FhtBgVideo from "@/assets/CategoryPage/FHT/fht_bg_video.mp4";
import Logo from "@/assets/CategoryPage/Header/rivexa-logo.svg";
import UserIconBlack from "@/assets/CategoryPage/Header/UserIconBlack.png";
import HeaderBacgroundWebp from "@/assets/CategoryPage/FHT/fht_bg_video_webp.webp";
import Breadcrumb from "@/pagecomponent/BlogPages/components/Breadcrumb";

const FHTLandingPage = () => {
  const [getControls, setControls] = useState(true);
  const heights = {
    default: "820px",
    mobile: "480px",
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
    { text: "Fashion and Home Textiles", url: "/fashion-and-textiles" },
  ];
  const [messages, setMessages] = useState([]);
  const [activeTab, setActiveTab] = useState("enquiry");
  return (
    <main>
      <div css={() => LandingPageStyles({ heights })}>
        <div className="headerbackground relative">
          <div className="w-full h-full absolute z-[-1] left-0 xs:-left-5 sm:-left-5 ssm:left-0 md:left-0 lg:left-0">
            {!videoWebLoaded && (
              <img
                alt={"HeaderVideoWebp"}
                className={`w-full h-full`}
                src={HeaderBacgroundWebp}
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
                <source src={FhtBgVideo} type="video/mp4" />
                <track src={null} kind="captions" label="English" />
                Your browser does not support HTML5 video.
              </video>
            )}
          </div>
          <div className="flex flex-row justify-start items-start">
            <div className=" relative top-14 xs:top-2 sm:top-2 ssm:top-14 md:top-2 lg:top-14 xl:top-14 left-0">
              <div className="m-10 xs:m-4 sm:m-4 md:m-20 lg:m-12">
                <div className="grid grid-cols-1">
                  <div className="mt-4">
                    <Breadcrumb items={breadcrumbItems} color={`#fff`} />
                  </div>
                  <div className="headertextsection p-4 xs:p-3 sm:p-3 md:p-4 lg:p-4 mt-2 sm:-mt-2 xs:-mt-2 ssm:mt-2 md:mt-2 lg:mt-2 xl:mt-2">
                    <h1 className="igtext text-5xl xs:text-xl sm:text-xl md:text-4xl lg:text-5xl">
                      Fashion & Home Textiles
                    </h1>
                    <div className="igsubtext xs:text-xl sm:text-xl md:text-4xl lg:text-5xl">
                      Bringing your designs to life
                    </div>
                    <div>
                      <HeaderRegistrationButton
                        image={ArrowDown}
                        className={`registerbutton cursor-pointer inline-flex text-[15px] xs:text-[15px] sm:text-[15px] md:text-xl lg:text-xl`}
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 mt-3 xs:mt-2 sm:mt-2 md:mt-2 lg:mt-3">
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
                        100+
                      </div>
                      <div className="headersubsectionheader mt-1 xs:mt-0 sm:mt-0 md:mt-1 lg:mt-1 text-lg xs:text-sm sm:text-sm md:text-lg lg:text-lg">
                        Product categories
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
          className="mt-5 ourcapabilities justify-center items-center text-center align-middle text-[20px] xs:text-[10px] sm:text-[10px] ssm:text-[15px] md:text-[20px] lg:text-[20px]"
        >
          Our capabilities
        </div>
        <div className="w-[90%] m-auto">
          <h2 className="millionproducts justify-center items-center text-center align-middle mt-5 text-[42px] xs:text-[25px] sm:text-[25px] ssm:text-[32px] md:text-[42px] lg:text-[42px]">
            Millions of products unlocked through our manufacturing capabilities
          </h2>
        </div>
        <EnquiryModal
          fromPage={`Textiles`}
          messages={messages}
          setMessages={setMessages}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <FHTCategorySection />
        <FHTFeaturesSection />
        <div className="-mt-20">
          <JourneySection />
        </div>
        <FHTVideoSection />
        <div className=" -mt-[9.25rem] xs:-mt-[6.25rem] sm:-mt-[6.25rem] ssm:-mt-[7.25rem] md:-mt-[9.25rem] lg:-mt-[9.25rem]">
          <FaqSection
            title={`Frequently Asked Questions`}
            description={`We got the answer for thousand of questions`}
            faqData={faqsArray}
          />
        </div>
        <BlogSection
          typeID={`fashion-and-home-textiles`}
          firstBlogIndex={0}
          lastBlogIndex={3}
        />
      </div>
    </main>
  );
};

export default FHTLandingPage;

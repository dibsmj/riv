/** @jsxImportSource @emotion/react */
"use client";
import { memo, useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import IGHomePageStyles from "./IGHomePageStyles";
import { JOURNEY_CARDS } from "./components/FeatureConstant";
import IGVideoBackground from "@/assets/IGHomePage/video-back.webp";

const HeaderSlider = dynamic(() =>
  import("@/pagecomponent/IGHomePage/components/HeaderSlider")
);
const QueryAccordion = dynamic(() => import("@/component/QueryAccordion"));
const ResourcesSection = dynamic(() =>
  import("@/pagecomponent/IGHomePage/components/ResourcesSection")
);
const Capabilities = dynamic(() =>
  import("@/pagecomponent/IGHomePage/components/Capabilities")
);
const IndustryServed = dynamic(() =>
  import("@/pagecomponent/IGHomePage/components/IndustryServed")
);
const PoweringProcurement = dynamic(() =>
  import("@/pagecomponent/IGHomePage/components/PoweringProcurement")
);
const Features = dynamic(
  () => import("@/pagecomponent/IGHomePage/components/Features"),
  { ssr: false }
);
const Videopart = dynamic(() =>
  import("@/pagecomponent/IGHomePage/components/Videopart")
);
const EnquiryModal = dynamic(() => import("@/component/Common/EnquiryModal"), {
  ssr: false,
});

const IGHomePage = memo(({ propsData, homePageBlogs }) => {
  const [isAutoOpenEnquiryModal, setIsAutoOpenEnquiryModal] = useState(true);
  const [activeTab, setActiveTab] = useState("enquiry");
  const [messages, setMessages] = useState([]);

  const [isResourcesVisible, setIsResourcesVisible] = useState(false);
  const targetResourcesRef = useRef(null);

  useEffect(() => {
    const createObserver = (ref, setState) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setState(true);
            observer.unobserve(entry.target); // Stop observing this element
          }
        },
        { threshold: 0.1 } // Adjust threshold based on when you want to trigger
      );

      if (ref.current) observer.observe(ref.current);
      return observer;
    };

    const resourcesObserver = createObserver(
      targetResourcesRef,
      setIsResourcesVisible
    );

    return () => {
      resourcesObserver.disconnect();
    };
  }, []);

  return (
    <main className="mt-[60px]">
      <div css={IGHomePageStyles}>
        <EnquiryModal
          isAutoOpen={isAutoOpenEnquiryModal}
          dealyTime={3000}
          messages={messages}
          setMessages={setMessages}
          setIsAutoOpenEnquiryModal={setIsAutoOpenEnquiryModal}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div className="w-full mx-auto aboutsection">
          <HeaderSlider
            breadcrumbItems={[
              { text: "Home", url: "/" },
              { text: "Industrial Goods", url: "/industrial-goods" },
            ]}
            slides={[
              {
                className: "sliderTwo",
                showLogo: false,
                titleColor: "#fff",
                subTitleColor: "#fff",
                infoDataColor: "#fff",
                title: "Turning your custom concepts into tangible products.",
                subTitle: "Unlock customized manufacturing for your designs",
                infoData: [
                  { name: "Verified Manufacturers", value: 500, sign: "+" },
                  { name: "Compliant and Certified", value: 100, sign: "%" },
                  { name: "Manufacturing Processes", value: 6, sign: "+" },
                ],
              },
            ]}
          />
        </div>
        <div className="w-full mx-auto my-[3rem]">
          <Capabilities />
        </div>
        <div className="w-full mx-auto my-[3rem]">
          <IndustryServed />
        </div>
        <div className="w-full mx-auto my-[3rem]">
          <PoweringProcurement />
        </div>
        <div className="w-full mx-auto my-[3rem]">
          <Features
            setIsAutoOpenEnquiryModal={setIsAutoOpenEnquiryModal}
            description="Discover our exclusive features designed to simplify your workflow."
            journeyCards={JOURNEY_CARDS}
            featuresList={[
              "Tailored Manufacturing Solutions",
              "Precision Engineering",
              "Competitive Pricing",
            ]}
          />
        </div>
        <div className="w-full mx-auto my-[3rem]">
          <Videopart
            videopath={`https://empdataprivacy.s3.ap-south-1.amazonaws.com/rivexa/Rivexa_IG_Video_V4.mp4`}
            imagepath={IGVideoBackground}
             title=" rivexa in Action: Streamlining Industrial Sourcing"
          />
        </div>
        <div className="w-full mx-auto mt-[2rem]">
          <QueryAccordion />
        </div>
        <div
          id="resources"
          ref={targetResourcesRef}
          className=" w-full m-auto bg-[#4A3587] py-[2rem]"
        >
          {isResourcesVisible && <ResourcesSection blogData={homePageBlogs} />}
        </div>
      </div>
    </main>
  );
});

IGHomePage.propTypes = {
  propsData: PropTypes.object.isRequired,
  homePageBlogs: PropTypes.array.isRequired,
};

export default IGHomePage;

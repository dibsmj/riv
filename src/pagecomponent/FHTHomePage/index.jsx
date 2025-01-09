/** @jsxImportSource @emotion/react */
"use client";
import { memo, useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import FHTHomePageStyles from "./FHTHomePageStyles";
import { JOURNEY_CARDS } from "./FeatureConstant";
import IGVideoBackground from "@/assets/FHThomepage/fht-video-back.webp";

const RivexaExperience = dynamic(() =>
  import("@/pagecomponent/FHTHomePage/RivexaExperience")
);
const HeaderSlider = dynamic(() =>
  import("@/pagecomponent/IGHomePage/components/HeaderSlider")
);
const QueryAccordion = dynamic(() => import("@/component/QueryAccordion"));
const ResourcesSection = dynamic(() =>
  import("@/pagecomponent/IGHomePage/components/ResourcesSection")
);
const Capabilities = dynamic(() => import("./Capabilities"));
const InnovateSustainably = dynamic(() =>
  import(
    "@/pagecomponent/FHTSubcategoryPages/Sustainability/InnovateSustainably"
  )
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

const FHTHomePage = memo(({ propsData, homePageBlogs }) => {
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
      <div css={FHTHomePageStyles}>
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
              {
                text: "Fashion and Home Textiles",
                url: "/fashion-and-textiles",
              },
            ]}
            slides={[
              {
                className: "sliderFour",
                showLogo: false,
                titleColor: "#fff",
                subTitleColor: "#fff",
                bgColor: "#00000096",
                infoDataColor: "#fff",
                title: "Empowering global trade with Indian craftsmanship",
                subTitle: "Crafting connections worldwide",
                infoData: [
                  { name: "Verified Manufacturers", value: 500, sign: "+" },
                  { name: "Compliant and Certified", value: 100, sign: "%" },
                  { name: "Manufacturing Processes", value: 6, sign: "+" },
                ],
                customText: "",
                // "Partner with our curated and verified Indian manufacturers for custom menswear sourcing",
              },
            ]}
          />
        </div>
        <div className="w-full mx-auto my-[3rem]">
          <Capabilities />
        </div>

        <div className="w-full mx-auto md:my-[6rem] xs:my-[4rem]">
          <InnovateSustainably
            setIsAutoOpenEnquiryModal={setIsAutoOpenEnquiryModal}
            setActiveTab={setActiveTab}
            setMessages={setMessages}
            mainTitle="Have you considered sustainability?"
            subtitle="Turn your brand’s sustainability commitment into a reality. Partner with our 60+ verified manufacturers."
          />
        </div>
        <div className="w-full mx-auto md:my-[-4rem] xs:my-[-4rem] sm:my-[-4rem]">
          <RivexaExperience />
        </div>
        <div className="w-full mx-auto my-[6rem]">
          <Features
            setIsAutoOpenEnquiryModal={setIsAutoOpenEnquiryModal}
            description="Discover our exclusive features designed to simplify your workflow."
            journeyCards={JOURNEY_CARDS}
            featuresList={[
              "4 - Tier quality checks ",
              "Delivering to 6+ countries",
              "Trusted by 50+ buyers",
            ]}
          />
        </div>
        <div className="w-full mx-auto my-[-2.5rem]">
          <Videopart
            videopath={`https://empdataprivacy.s3.ap-south-1.amazonaws.com/rivexa/Rivexa_Video_FHT_V3.mp4`}
            imagepath={IGVideoBackground}
            title="rivexa in Action: Streamlining Fashion and Home Textiles Sourcing"
          />
        </div>
        <div className="w-full mx-auto mt-[6rem]">
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

FHTHomePage.propTypes = {
  propsData: PropTypes.object.isRequired,
  homePageBlogs: PropTypes.array.isRequired,
};

export default FHTHomePage;

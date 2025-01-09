/** @jsxImportSource @emotion/react */
"use client";
import { memo, useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import HomePageStyles from "./HomePageStyles";

const HeaderSlider = dynamic(() =>
  import("@/pagecomponent/HomePage/Components/HeaderSlider")
);
const InformationSection = dynamic(() =>
  import("@/pagecomponent/HomePage/Components/InformationSection")
);
const AboutSection = dynamic(() =>
  import("@/pagecomponent/HomePage/Components/AboutSection")
);
const CategorySection = dynamic(() =>
  import("@/pagecomponent/HomePage/Components/CategorySection")
);
const JourneySteps = dynamic(() =>
  import("@/pagecomponent/HomePage/Components/JourneySteps")
);
const BuyerSection = dynamic(() =>
  import("@/pagecomponent/HomePage/Components/BuyerSection")
);
const SellerSection = dynamic(() =>
  import("@/pagecomponent/HomePage/Components/SellerSection")
);
const WhyChoose = dynamic(
  () => import("@/pagecomponent/HomePage/Components/WhyChoose"),
  {
    ssr: false,
  }
);
const TrustedSection = dynamic(
  () => import("@/pagecomponent/HomePage/Components/TrustedSection"),
  {
    ssr: false,
  }
);
const QueryAccordion = dynamic(() => import("@/component/QueryAccordion"));
const ResourcesSection = dynamic(
  () => import("@/pagecomponent/HomePage/Components/ResourcesSection"),
  {
    ssr: false,
  }
);
const EnquiryModal = dynamic(() => import("@/component/Common/EnquiryModal"));

const HomePage = memo(({ propsData, homePageBlogs }) => {
  const [isAutoOpenEnquiryModal, setIsAutoOpenEnquiryModal] = useState(false);
  const [activeTab, setActiveTab] = useState("enquiry");
  const [messages, setMessages] = useState([]);

  const [isWhyChooseVisible, setIsWhyChooseVisible] = useState(false);
  const [isFaqVisible, setIsFaqVisible] = useState(false);
  const [isResourcesVisible, setIsResourcesVisible] = useState(false);

  const targetWhyChooseRef = useRef(null);
  const targetFaqRef = useRef(null);
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

    const whyChooseObserver = createObserver(
      targetWhyChooseRef,
      setIsWhyChooseVisible
    );
    const faqObserver = createObserver(targetFaqRef, setIsFaqVisible);
    const resourcesObserver = createObserver(
      targetResourcesRef,
      setIsResourcesVisible
    );

    return () => {
      whyChooseObserver.disconnect();
      faqObserver.disconnect();
      resourcesObserver.disconnect();
    };
  }, []);

  return (
    <main className="mt-[60px]">
      <div css={HomePageStyles}>
        <EnquiryModal
          isAutoOpen={isAutoOpenEnquiryModal}
          dealyTime={100}
          messages={messages}
          setMessages={setMessages}
          setIsAutoOpenEnquiryModal={setIsAutoOpenEnquiryModal}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div className="w-full mx-auto aboutsection">
          <HeaderSlider />
          <div className="my-[2rem]">
            <InformationSection />
          </div>
          <div className="aboutfullsection m-auto w-[90%] xs:w-[98%] sm:w-[98%] ssm:w-[90%] md:w-[90%] min-h-[600px]">
            <div className="w-[90%] xs:w-full sm:w-full ssm:w-[90%] md:w-[90%] mx-auto my-[2rem] min-h-[400px]">
              <AboutSection
                setIsAutoOpenEnquiryModal={setIsAutoOpenEnquiryModal}
                setActiveTab={setActiveTab}
                messages={messages}
                setMessages={setMessages}
              />
            </div>
            <div className="w-[90%] xs:w-full sm:w-full ssm:w-[90%] md:w-[90%] mx-auto my-[3rem] min-h-[400px]">
              <CategorySection />
            </div>
          </div>
        </div>

        <div className="w-full mx-auto mt-[4rem]">
          <JourneySteps />
        </div>
        <div className="w-full mx-auto my-[4rem]">
          <BuyerSection setIsAutoOpenEnquiryModal={setIsAutoOpenEnquiryModal} />
        </div>
        <div className="w-full mx-auto my-[4rem]">
          <SellerSection
            setIsAutoOpenEnquiryModal={setIsAutoOpenEnquiryModal}
          />
        </div>
        <div ref={targetWhyChooseRef} className="w-full m-auto">
          <WhyChoose />
        </div>
        <div className=" w-full m-auto flex justify-center align-middle items-center">
          <div id="trustedsection">
            <TrustedSection />
          </div>
        </div>
        <div ref={targetFaqRef} className="w-full mx-auto mt-[2rem]">
          <QueryAccordion />
        </div>
        <div
          id="resources"
          ref={targetResourcesRef}
          className=" w-full m-auto bg-[#4A3587] py-[3rem]"
        >
          {isResourcesVisible && <ResourcesSection blogData={homePageBlogs} />}
        </div>
      </div>
    </main>
  );
});

HomePage.propTypes = {
  propsData: PropTypes.object.isRequired,
  homePageBlogs: PropTypes.array.isRequired,
};

export default HomePage;

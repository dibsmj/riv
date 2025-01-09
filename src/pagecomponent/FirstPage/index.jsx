/** @jsxImportSource @emotion/react */
"use client";
import { useEffect, useState, useRef, memo } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import loadable from "@loadable/component";
import RoundButton from "@/component/RoundButton";
import FirstPageStyles from "./FirstPageStyles";
import AboutRivexRight from "@/assets/FirstPage/aboutrivexa.gif";
import ConnectorOne from "@/assets/FirstPage/c1.png";
import ConnectorTwo from "@/assets/FirstPage/c2.png";
import ConnectorThree from "@/assets/FirstPage/c3.png";
import ConnectorFour from "@/assets/FirstPage/c4.png";
import ConnectorFive from "@/assets/FirstPage/c5.png";
import { whyChooseConstant } from "@/constants/home/whyChooseConstants";
const EnquiryModal = loadable(() => import("@/component/Common/EnquiryModal"));
const HeaderSearch = loadable(() => import("./components/HeaderSearch"));
const AboutCompany = loadable(() => import("./components/AboutCompany"));
const CategoryPart = loadable(() => import("./components/CategoryPart"));
const BuyerPart = loadable(() => import("./components/BuyerPart"));
const ManufacturesPart = loadable(() => import("./components/Manufactures"));
const TrustedBySection = loadable(() =>
  import("@/component/TrustedBySection/TrustedBySection")
);
const WhyChoose = loadable(() => import("@/component/Static/WhyChoose"));
const EasySteps = loadable(() => import("@/component/EasySteps/EasySteps"), {
  fallback: <div>...</div>,
});
const BlogResources = loadable(() => import("@/component/BlogResources"));

const VideoComponent = loadable(() => import("@/component/Video"), {
  fallback: <div className=" bg-primaryBlack">...</div>,
});

const HomePage = memo(({ propsData }) => {
  const heights = {
    default: "820px",
    mobile: "700px",
    tablet: "650px",
    desktop: "820px",
    others: "950px",
  };
  const [getControls, setControls] = useState(true);
  const [isSlice, setIsSlice] = useState(false);
  const videoRef = useRef(null);
  const videoMobileRef = useRef(null);
  const handleContextMenu = (e) => {
    e.preventDefault(); // Prevent the default right-click behavior
  };

  const [videoWebLoaded, setWebVideoLoaded] = useState(false);
  const [videoMobileLoaded, setMobileVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      videoRef?.current?.play();
      videoMobileRef?.current?.play();
      setWebVideoLoaded(true);
      setMobileVideoLoaded(true);
    }, 4000);
  }, [videoRef, videoMobileRef]);

  useEffect(() => {
    // Lazy loading for the web video
    const webObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWebVideoLoaded(true);
          webObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      webObserver.observe(videoRef.current);
    }

    // Lazy loading for the mobile video
    const mobileObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMobileVideoLoaded(true);
          mobileObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (videoMobileRef.current) {
      mobileObserver.observe(videoMobileRef.current);
    }
  }, []);

  const [pageLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setPageLoaded(true);
    }, 3000);
  }, []);

  const [isAutoOpenEnquiryModal, setIsAutoOpenEnquiryModal] = useState(false);
  const [messages, setMessages] = useState([]);
  const [activeTab, setActiveTab] = useState("enquiry");
  return (
    <div css={() => FirstPageStyles({ heights })}>
      <div className="w-full m-auto overflow-hidden">
        <div className="headerbackground relative">
          <div className="w-full bg-[#000] h-[95%] absolute z-[-1]">
            {!isMobile && videoWebLoaded && (
              <VideoComponent
                url={`https://empdataprivacy.s3.ap-south-1.amazonaws.com/rivexa/homepageheader.mp4`}
                handleContextMenu={handleContextMenu}
                videoWebLoaded={videoWebLoaded}
                videoRef={videoRef}
                getControls={getControls}
                className={`w-full xs:hidden sm:hidden ssm:block md:block lg:block`}
              />
            )}
            {isMobile && videoMobileLoaded && (
              <VideoComponent
                url={`https://empdataprivacy.s3.ap-south-1.amazonaws.com/rivexa/homepageheader-mobile.mp4`}
                handleContextMenu={handleContextMenu}
                videoWebLoaded={videoWebLoaded}
                videoRef={videoMobileRef}
                getControls={getControls}
                className={`w-full xs:block sm:block ssm:hidden md:hidden lg:hidden`}
              />
            )}
          </div>
          <HeaderSearch
            headerTitle={propsData.headerTitle}
            messages={messages}
            setMessages={setMessages}
            setIsAutoOpenEnquiryModal={setIsAutoOpenEnquiryModal}
          />
        </div>
        <EnquiryModal
          isAutoOpen={isAutoOpenEnquiryModal}
          dealyTime={1000}
          messages={messages}
          setMessages={setMessages}
          setIsAutoOpenEnquiryModal={setIsAutoOpenEnquiryModal}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div className="w-full m-auto pb-10">
          <div className="w-[90%] m-auto ">
            <AboutCompany image={AboutRivexRight} />
          </div>
        </div>
        <div className="relative w-full m-auto py-10 bg-gradient-to-r from-[#4A3587] via-[#48388A] to-[#C0AFEF]">
          {pageLoaded && (
            <Image
              src={ConnectorOne}
              alt="connector1"
              priority
              className=" absolute block xs:hidden sm:hidden ssm:block md:block lg:block connectorone"
            />
          )}
          <CategoryPart />
        </div>
        <div className="relative esaystep w-full m-auto">
          {pageLoaded && (
            <Image
              src={ConnectorTwo}
              alt="ConnectorTwo"
              priority
              className="z-0 block xs:hidden sm:hidden ssm:block md:block lg:block absolute connectortwo"
            />
          )}
          <EasySteps />
        </div>
        <div className="relative">
          {/* For Buyers */}
          <div className="w-[90%] m-auto">
            <BuyerPart />
          </div>
          {pageLoaded && (
            <Image
              src={ConnectorThree}
              alt="ConnectorThree"
              className="translate-x-4 block xs:hidden sm:hidden ssm:block md:block lg:block absolute -bottom-[20%] right-[25%] "
            />
          )}
        </div>
        <div className="w-[90%] m-auto relative">
          <ManufacturesPart />
          {pageLoaded && (
            <Image
              src={ConnectorFour}
              priority
              alt="ConnectorThree"
              className="block xs:hidden sm:hidden ssm:block md:block lg:block absolute -bottom-[30%] left-[10%] "
            />
          )}
        </div>
        <div className=" w-[90%] m-auto text-center pt-[8rem] pb-[5rem]">
          <h2 className="whychooseus">Why choose us?</h2>
          <h3 className="whychooseusdesc">
            We aim to be the digital co-pilot for your end-to-end sourcing
            journey..
          </h3>
          <div className=" space-y-[4rem] pt-[6rem]">
            {whyChooseConstant &&
              whyChooseConstant.map((item) => (
                <WhyChoose key={item.id} data={item} />
              ))}
          </div>
        </div>
        <div className=" w-[90%] m-auto flex justify-center align-middle items-center">
          <TrustedBySection />
        </div>
        <div className="relative">
          {pageLoaded && (
            <Image
              src={ConnectorFive}
              priority
              alt="ConnectorThree"
              className=" scale-0 ssm:scale-[0.7] absolute block xs:hidden sm:hidden ssm:block md:block lg:block left-[15rem] xs:left-0 sm:left-0 ssm:-left-[2rem] md:left-[5rem] lg:left-[15rem]"
            />
          )}
        </div>
        <div className="pt-[10rem] xs:pt-[4rem] sm:pt-[4rem] ssm:pt-[7rem] md:pt-[10rem] lg:pt-[10rem] pb-[4rem] m-auto w-[95%] text-center justify-center items-center align-middle">
          <h2 className="homepageblogtitle m-auto xs:pt-0 sm:pt-0 ssm:pt-[3rem] md:pt-[3rem] lg:pt-[5rem] pt-[5rem]  text-[42px] xs:text-[28px] sm:text-[28px] ssm:text-[38px] md:text-[42px] lg:text-[42px] ">
            Learn how Companies are using rivexa to transform their business.
          </h2>
          <div className=" m-auto pt-[3rem] text-left grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 ssm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-5">
            <BlogResources
              searchQuery={""}
              typeID={"all"}
              isSlice={!isSlice}
              startIndex={0}
              endIndex={3}
              className={``}
            />
          </div>
          <div className=" mt-[2rem]">
            <RoundButton
              buttonID={`blog_read_more`}
              title={"Read more"}
              link={`${process.env.NEXT_PUBLIC_APP_ROOT_URL}/resources`}
            />
          </div>
        </div>
      </div>
    </div>
  );
});

HomePage.propTypes = {
  propsData: PropTypes.object.isRequired,
};

export default HomePage;

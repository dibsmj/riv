/** @jsxImportSource @emotion/react */
"use client";
import Image from "next/image";
import PropTypes from "prop-types";
import { useState, useEffect, lazy } from "react";
import SubCategoryStyles from "./SubCategoryStyles";
import WorkFlow from "./WorkFlow";
import CastingProcess from "./CastingProcess";
import MaterialsHandled from "./MaterialsHandled";
import {
  getCategoryHeader,
  getCategoryFaqs,
  getCaterogyStats,
  getCategoryProcess,
  CASTING_PLATFORM_DATA,
  getSubSubCategory,
  getSubSubCategoryFooter,
  getMaterialHandled,
  getPostProcess,
} from "@/constants/ig";
import FaqSection from "@/component/Common/FaqSection";
import EnquiryModal from "@/component/Common/EnquiryModal";
import HeaderRegistrationButton from "@/component/Common/HeaderRegistrationButton";
import RequestDemo from "@/component/Common/RequestDemo";
import PlatformData from "@/component/Common/PlatformData";
import Breadcrumb from "@/pagecomponent/BlogPages/components/Breadcrumb";
// import NoPage from "../General/404";

const IGSubCategory = ({ igcategory, subprocess }) => {
  const validCategories = [
    "casting",
    "forging",
    "machining",
    "fabrication",
    "extrusion",
    "aluminiumdiecasting",
    "landingaluminiumdiecasting",
    "sandcasting",
    "investmentcasting",
    "opendieforging",
    "closeddieforging",
    "cncmachining",
    "conventionalmachining",
    "equipmentfabrication",
    "sheetmetalfabrication",
    "structuralfabrication",
    "aluminiumextrusion",
    "injectionmolding",
    "plasticmolding",
  ];

  const heights = {
    default: "820px",
    mobile: "820px",
    tablet: "930px",
    desktop: "820px",
  };
  const getparams =
    subprocess && subprocess !== undefined
      ? subprocess.replace(/-/g, "")
      : igcategory;
  const [shouldRedirect, setShouldRedirect] = useState(false);
  useEffect(() => {
    const isValidCategory = validCategories.includes(getparams);
    if (!isValidCategory) {
      setShouldRedirect(true);
    }
  }, [getparams]);

  const breadcrumbItems = [
    { text: "Home", url: "/" },
    { text: "Industrial Goods", url: "/industrial-goods" },
    {
      text: `${getCategoryHeader(igcategory).title}`,
      url: `${process.env.NEXT_PUBLIC_APP_ROOT_URL}/industrial-goods/${igcategory}`,
    },
  ];

  if (subprocess) {
    breadcrumbItems.push({
      text: `${getCategoryHeader(getparams).title}`,
      url: `${process.env.NEXT_PUBLIC_APP_ROOT_URL}/industrial-goods/${igcategory}/${subprocess}`,
    });
  }

  const additionalBreadcrumb = subprocess
    ? `,{
      "@type": "ListItem", 
      "position": 4, 
      "name": "${getCategoryHeader(getparams).title}",
      "item": "${
        process.env.NEXT_PUBLIC_APP_ROOT_URL
      }/industrial-goods/${igcategory}/${subprocess}"
    }`
    : "";
  const [isAutoOpenEnquiryModal, setIsAutoOpenEnquiryModal] = useState(true);
  const [messages, setMessages] = useState([]);
  const [activeTab, setActiveTab] = useState("enquiry");
  return (
    <main>
      <div css={() => SubCategoryStyles({ heights })}>
        <div className="w-full m-auto overflow-hidden">
          <div className=" headerbackground">
            <div className="w-full m-auto py-[3rem]">
              <div className="my-4 xs:my-2 sm:my-2 ssm:my-4 md:my-4 lg:my-4 xl:my-4">
                <div className="mx-4 xs:mx-4 md:mx-14 mt-[4rem] sm:mt-0 xs:mt-0 ssm:mt-0 md:mt-[4rem] lg:mt-[4rem] xl:mt-[4rem]">
                  <Breadcrumb items={breadcrumbItems} />
                </div>
                <div className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 ssm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  <div className="mx-4 xs:mx-4 md:mx-14 flex flex-col justify-between ">
                    <div>
                      <div className="font-black uppercase">
                        <h1 className="headerText text-[46px] xs:text-[36px] sm:text-[36px] ssm:text-[40px] md:text-[45px] lg:text-[45px]">
                          {getCategoryHeader(getparams).title}
                        </h1>
                      </div>
                      <div
                        className="headerpara text-base md:text-xs lg:text-xl xs:text-justify"
                        dangerouslySetInnerHTML={{
                          __html: getCategoryHeader(getparams).description,
                        }}
                      />
                    </div>

                    <div className="button-container">
                      <div className="flex flex-row flex-wrap m-auto items-center align-middle gap-3 justify-start xs:justify-center sm:justify-center ssm:justify-start md:justify-start lg:justify-start">
                        <div>
                          <RequestDemo
                            className="custom-button-active cursor-pointer p-[1.25rem]"
                            name="Send Enquiry"
                            setIsAutoOpenEnquiryModal={
                              setIsAutoOpenEnquiryModal
                            }
                            setActiveTab={setActiveTab}
                            setMessages={setMessages}
                          />
                        </div>
                        <div className="z-50">
                          <HeaderRegistrationButton
                            className={`custom-button`}
                          />
                        </div>
                        <div>
                          <a
                            href="#howitworks"
                            className="custom-button no-underline ml-2"
                          >
                            See how it works
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mx-4 md:mx-8 ">
                    <div className="m-auto flex justify-center items-center flex-shrink-0 h-full">
                      <img
                        alt={getCategoryHeader(getparams).imageAltTag}
                        className={`w-[75%] h-[75%] xs:w-full xs:h-full sm:w-full sm:h-full ssm:w-[70%] ssm:h-[75%] md:w-[75%] md:h-[40%] lg:w-[75%] lg:h-[40%] rounded-md`}
                        src={getCategoryHeader(getparams).image.src}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <EnquiryModal
              isAutoOpen={isAutoOpenEnquiryModal}
              dealyTime={3000}
              messages={messages}
              setMessages={setMessages}
              setIsAutoOpenEnquiryModal={setIsAutoOpenEnquiryModal}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
          <div className="small-grid flex justify-center">
            <div className="grid grid-cols-5 xs:grid-cols-1 sm:grid-cols-1 ssm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-6 m-4">
              {getCaterogyStats(getparams).map((item, index) => (
                <div className="layout" key={item.text}>
                  <p className="big-text text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                    {item.count}
                  </p>
                  <p className="small-text text-[#486284]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <WorkFlow getProcess={getCategoryProcess(getparams)} />
          {!subprocess && subprocess === undefined && (
            <CastingProcess
              processTitle={`${
                getCategoryHeader(getparams).title
              } Process Types`}
              processDescription={`rivexa has verified suppliers across various ${getCategoryHeader(
                getparams
              ).title.toLowerCase()} process types catering to all your sourcing needs..`}
              getSubSubCategory={getSubSubCategory(getparams)}
              getSubSubCategoryFooter={getSubSubCategoryFooter(getparams)}
            />
          )}
          {subprocess && subprocess !== undefined && (
            <MaterialsHandled
              title={`Materials Handled`}
              getData={getMaterialHandled(getparams)}
            />
          )}
          {subprocess && subprocess !== undefined && (
            <MaterialsHandled
              title={`Post Processes`}
              getData={getPostProcess(getparams)}
            />
          )}
          <div id="howitworks" className="mx-16 my-14">
            <PlatformData platformdata={CASTING_PLATFORM_DATA} />
          </div>
          <FaqSection
            title={`${getCategoryHeader(getparams).title} FAQ`}
            description={`We have  got you covered for all your queries!`}
            faqData={getCategoryFaqs(getparams)}
          />
        </div>
      </div>
    </main>
  );
};

IGSubCategory.propTypes = {
  igcategory: PropTypes.string.isRequired,
  subprocess: PropTypes.string.isRequired,
};

export default IGSubCategory;

/** @jsxImportSource @emotion/react */
import { useState, useEffect, lazy } from "react";
import { useNavigate, useParams } from "react-router-dom";
import loadable from "@loadable/component";

import { FHTSubcategoryLandingPageStyle } from "./FHTSubcategoryLandingPageStyle";
import ValueAddedServices from "./valueAddedServices";
import FHTVideo from "./FHTVideo";
import FHTHeaderPage from "./components/FHTHeaderPage";
import ExploreIndustry from "./ExploreIndustry";
import Appointments from "./components/Appointments";
import {
  getCategoryHeader,
  getCaterogyStats,
  getExploreIndustry,
  getCategoryFaqs,
} from "../../constants/fht";
import { CASTING_PLATFORM_DATA } from "../../constants/ig";
import {
  PlatformData,
  FaqSection,
  EnquiryModal,
} from "../../components/common";
import NoPage from "../General/404";
import HomeTextiles from "../FHTSubcategoryPages/HomeTextiles";
import Sustainabilty from "../FHTSubcategoryPages/Sustainability/index.jsx";
import Uniform from "../FHTSubcategoryPages/Uniform";
import Bags from "../FHTSubcategoryPages/Bags";
import Leather from "../FHTSubcategoryPages/Leather";
import Footwear from "../FHTSubcategoryPages/Footwear";
import SleepAndInnerwear from "../FHTSubcategoryPages/SleepAndInnerWear";
import WomensApparel from "../FHTSubcategoryPages/WomensApparel";

const FHTSubCategory = loadable(() =>
  import("../FHTSubcategoryPages/MensApparel")
);

const FHTSubcategorypage = () => {
  const navigate = useNavigate();
  const { fhtcategory } = useParams();
  const validCategories = [
    "uniformandworkwear",
    "mensapparel",
    "hometextiles",
    "sustainability",
    "bags",
    "leather",
    "sleepandinnerwear",
    "footwear",
    "womensapparel",
  ];
  const getparams = fhtcategory.replace(/-/g, "");
  const [shouldRedirect, setShouldRedirect] = useState(false);
  useEffect(() => {
    const isValidCategory = validCategories.includes(getparams);
    if (!isValidCategory) {
      setShouldRedirect(true);
    }
  }, []);
  if (shouldRedirect) {
    return <NoPage />;
  }
  const [messages, setMessages] = useState([]);
  const [activeTab, setActiveTab] = useState("enquiry");
  return (
    <div>
      {getparams === "mensapparel" ? (
        <FHTSubCategory />
      ) : getparams === "hometextiles" ? (
        <HomeTextiles />
      ) : getparams === "uniformandworkwear" ? (
        <Uniform />
      ) : getparams === "sustainability" ? (
        <Sustainabilty />
      ) : getparams === "bags" ? (
        <Bags />
      ) : getparams === "leather" ? (
        <Leather />
      ) : getparams === "sleepandinnerwear" ? (
        <SleepAndInnerwear />
      ) : getparams === "footwear" ? (
        <Footwear />
      ) : getparams === "womensapparel" ? (
        <WomensApparel />
      ) : (
        <div css={() => FHTSubcategoryLandingPageStyle()}>
          <div className="headerbackground">
            <div className="mb-0 md:mb-[90px]">
              <FHTHeaderPage
                getCategoryHeader={getCategoryHeader(getparams)}
                getCaterogyStats={getCaterogyStats(getparams)}
              />
              <EnquiryModal
                fromPage={`Textiles`}
                messages={messages}
                setMessages={setMessages}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </div>
            <div className="mb-[7rem]">
              <ExploreIndustry
                getExploreIndustry={getExploreIndustry(getparams)}
              />
            </div>
            <div className="mb-24">
              <Appointments />
            </div>
            <div id="howitworks" className="mx-16 my-14">
              <PlatformData platformdata={CASTING_PLATFORM_DATA} />
            </div>
            <div>
              <FHTVideo />
            </div>
            <br /> <br />
            <div>
              <ValueAddedServices />
            </div>
            <div className="mb-2">
              <FaqSection
                title="Uniform and Workwear FAQ"
                description="We have got you covered all your queries!"
                faqData={getCategoryFaqs(getparams)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FHTSubcategorypage;

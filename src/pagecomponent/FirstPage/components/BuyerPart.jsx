/* eslint-disable no-undef */
/** @jsxImportSource @emotion/react */
import React, { memo } from "react";
import ImageLazyLoad from "@/component/ImageLazyLoad";
import RoundButton from "@/component/RoundButton";
import SmallFeature from "@/component/Static/SmallFeature";
import RequestDemo from "@/component/Common/RequestDemo";
import ForBuyer from "@/assets/FirstPage/forbuyers.webp";
import BOne from "@/assets/FirstPage/b1.png";
import BTwo from "@/assets/FirstPage/b2.png";
import BThree from "@/assets/FirstPage/b3.png";
import BFour from "@/assets/FirstPage/b4.png";

const BuyerPart = memo(() => (
  <div className=" mt-[6rem] grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 ssm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5">
    <div className="order-1 xs:order-2 sm:order-2 ssm:order-1 md:order-1 lg:order-1">
      <h2 className="formanufacturetitle text-[42px] xs:text-[32px] sm:text-[32px] ssm:text-[40px] md:text-[42px] lg:text-[42px]">
        For Buyers
      </h2>
      <div className="formanufacturedesc mt-[1rem]">
        Seamless solutions for buyer success: Empowering your procurement
        journey with rivexa
      </div>
      <div>
        <div className=" grid grid-cols-2 gap-5 mt-[2rem]">
          <SmallFeature
            title={`Complete Transparency`}
            image={BOne}
            description={`Online RFx process, pricing, negotiations and collaboration tools to directly engage with manufacturers`}
          />
          <SmallFeature
            title={`Verified Manufacturers`}
            image={BTwo}
            description={`Verified factories and capabilities, product and social compliance certificates, export experience`}
          />
        </div>
        <div className=" grid grid-cols-2 gap-5 mt-[2rem]">
          <SmallFeature
            title={`Simple User Experience`}
            image={BThree}
            description={`Seamless journeys, data-rich dashboards, supply chain visibility that makes business decisions easier`}
          />
          <SmallFeature
            title={`Operations Support`}
            image={BFour}
            description={`On-ground team that ensures proactive time & action management, quality checks to ensure on time delivery`}
          />
        </div>
        <div className=" flex flex-row flex-wrap justify-center xs:justify-center sm:justify-center ssm:justify-start md:justify-start lg:justify-start gap-5 mt-[1rem]">
          <RoundButton
            buttonID={`for_buyers`}
            title={"Sign up for free"}
            link={`${process.env.NEXT_PUBLIC_APP_API_ENDPOINT}register-buyer`}
          />
          <RequestDemo
            name="Send Enquiry"
            className={`requestdemo !border-[#20af98] !rounded-full cursor-pointer inline-flex text-[15px] xs:text-[15px] sm:text-[15px] md:text-xl lg:text-xl`}
          />
        </div>
      </div>
    </div>
    <div className=" flex justify-center items-center align-middle order-2 xs:order-1 sm:order-1 ssm:order-2 md:order-2 lg:order-2">
      <ImageLazyLoad
        alt={`ForBuyer`}
        className={`max-w-full max-h-full`}
        imageSrc={ForBuyer.src}
      />
    </div>
  </div>
));

export default BuyerPart;

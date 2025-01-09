/* eslint-disable no-undef */
/** @jsxImportSource @emotion/react */
import React, { memo } from "react";
import ImageLazyLoad from "@/component/ImageLazyLoad";
import RoundButton from "@/component/RoundButton";
import SmallFeature from "@/component/Static/SmallFeature";
import RequestDemo from "@/component/Common/RequestDemo";
import Manufactures from "@/assets/FirstPage/Manufactures.webp";
import SOne from "@/assets/FirstPage/s1.png";
import STwo from "@/assets/FirstPage/s2.png";
import SThree from "@/assets/FirstPage/s3.png";
import SFour from "@/assets/FirstPage/s4.png";

const ManufacturesPart = memo(() => (
  <div className="mt-[8rem] grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 ssm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5">
    <div className=" flex justify-center items-center align-middle">
      <ImageLazyLoad
        alt={`Manufactures`}
        className={`max-w-full max-h-full rounded-3xl`}
        imageSrc={Manufactures.src}
      />
    </div>
    <div>
      <h2 className="formanufacturetitle text-[42px] xs:text-[32px] sm:text-[32px] ssm:text-[40px] md:text-[42px] lg:text-[42px]">
        For Manufacturers
      </h2>
      <div className="formanufacturedesc mt-[1rem]">
        Discover endless opportunities with rivexa, tap into unlimited leads for
        your global expansion
      </div>
      <div>
        <div className=" grid grid-cols-2 gap-5 mt-[2rem]">
          <SmallFeature
            title={`Multiple Enquiries`}
            image={SOne}
            description={`Be the custom manufacturer of choice to multiple verified buyers and handle their requirements simultaneously with our smart RFx process.`}
          />
          <SmallFeature
            title={`Unlimited Leads`}
            image={STwo}
            description={`You will be visible to all of our global buyer ecosystem, with unlimited leads generated for you to service based on your capabilities.`}
          />
        </div>
        <div className=" grid grid-cols-2 gap-5 mt-[2rem]">
          <SmallFeature
            title={`End-to-End Order Visibility`}
            image={SThree}
            description={`Effortlessly oversee orders from start to finish. Instantly track each order for smooth operations and customer satisfaction.`}
          />
          <SmallFeature
            title={`Showcase Product Listing`}
            image={SFour}
            description={`Enhance products with dynamic listings tailored to your brand. Reach curated buyers globally, maximizing sales potential.`}
          />
        </div>
      </div>
      <div className=" flex flex-row flex-wrap justify-center xs:justify-center sm:justify-center ssm:justify-start md:justify-start lg:justify-start gap-5 mt-[1rem]">
        <RoundButton
          buttonID={`for_manufactures`}
          title={"Sign up for free"}
          link={`${process.env.NEXT_PUBLIC_APP_API_ENDPOINT}register-seller`}
        />
        <RequestDemo
          name="Send Enquiry"
          className={`requestdemo !border-[#20af98] !rounded-full cursor-pointer inline-flex text-[15px] xs:text-[15px] sm:text-[15px] md:text-xl lg:text-xl`}
        />
      </div>
    </div>
  </div>
));

export default ManufacturesPart;

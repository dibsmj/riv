/* eslint-disable no-undef */
/** @jsxImportSource @emotion/react */
import React, { useEffect, useState, memo } from "react"; // Import memo here
import Image from "next/image";
import PropTypes from "prop-types";
import RoundButton from "@/component/RoundButton";

const AboutCompany = memo(({ image }) => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(true);

  return (
    <div className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 ssm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[4rem] mt-[0rem] xs:mt-[2rem] sm:mt-[2rem] ssm:mt-[6rem] md:mt-[0rem] lg:mt-[0rem]">
      <div>
        <h2 className="aboutrivexaheader text-[48px] xs:text-[35px] sm:text-[35px] ssm:text-[40px] md:text-[48px] lg:text-[48px]">
          About rivexa
        </h2>
        <div className="aboutrivexadescription mt-3">
          Our vision is to make global businesses prosperous through technology
          that creates ease and confidence in international trade. We understand
          that prosperity requires a holistic, dynamic approach; from ideation
          to execution, we walk alongside you at every turn, guiding you through
          the twists and turns of the trade journey.
        </div>
        <div className="flex flex-row flex-wrap m-auto items-center align-middle gap-[4rem] xs:gap-[2rem] sm:gap-[2rem] ssm:gap-[3rem] md:gap-[2rem] lg:gap-[4rem] justify-start xs:justify-center sm:justify-center ssm:justify-start md:justify-start lg:justify-start">
          <div className="mt-8 text-left xs:text-center sm:text-center ssm:text-left md:text-left lg:text-left">
            <div className="aboutrivexadata text-[38px] xs:text-[28px] sm:text-[28px] ssm:text-[35px] md:text-[38px] lg:text-[38px]">
              1000+
            </div>
            <div className="aboutrivexadatatext mt-4">
              Verified manufacturers
            </div>
          </div>
          <div className="mt-8 text-left xs:text-center sm:text-center ssm:text-left md:text-left lg:text-left">
            <div className="aboutrivexadata text-[38px] xs:text-[28px] sm:text-[28px] ssm:text-[35px] md:text-[38px] lg:text-[38px]">
              500+
            </div>
            <div className="aboutrivexadatatext mt-4">Active enquiries</div>
          </div>
          <div className="mt-8 text-left xs:text-center sm:text-center ssm:text-left md:text-left lg:text-left">
            <div className="aboutrivexadata text-[38px] xs:text-[28px] sm:text-[28px] ssm:text-[35px] md:text-[38px] lg:text-[38px]">
              $ 15M
            </div>
            <div className="aboutrivexadatatext mt-4">PO value targeted</div>
          </div>
        </div>
        <div className="mt-[2rem] text-left xs:text-center sm:text-center ssm:text-left md:text-left lg:text-left">
          <RoundButton
            buttonID={`start_your_journey`}
            title={"Start your journey"}
            isEnquiryOpen={isEnquiryOpen}
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Image
          alt={`AboutRivexRight`}
          className={`max-w-full max-h-full`}
          src={image}
        />
      </div>
    </div>
  );
});

AboutCompany.propTypes = {
  image: PropTypes.string.isRequired,
};

export default AboutCompany;

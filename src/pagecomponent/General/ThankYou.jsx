"use client";
/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import loadable from "@loadable/component";
import GeneralStyles from "./GeneralStyles";
const BlogResources = loadable(() => import("@/component/BlogResources"));

const ThankYou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isSlice, setIsSlice] = useState(false);
  return (
    <div css={GeneralStyles}>
      <div className="w-full m-auto relative top-32 mb-[13rem]">
        <div className="w-full m-auto z-10">
          <div className="thankyoutext pt-[3rem] text-center text-[130px] xs:text-[60px] sm:[60px] ssm:[90px] md:text-[130px] lg:text-[130px]">
            Thank you!
          </div>
        </div>
        <div className="w-full thnakyoufooter">
          <div className="z-20 thanyoudescription relative top-14 m-auto w-[80%] text-center text-[30px] xs:text-[20px] sm:[20px] ssm:[25px] md:text-[30px] lg:text-[30px]">
            We appreciate your interest in our platform. Our category experts
            will reach out to you shortly to take the conversation forward. We
            look forward to working with you!!!
          </div>
          <div className=" m-auto relative top-9 pt-[3rem] text-left grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 ssm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-5">
            <BlogResources
              searchQuery={""}
              typeID={"all"}
              isSlice={!isSlice}
              startIndex={0}
              endIndex={3}
              className={``}
              sourceType={'resources'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;

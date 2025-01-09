/** @jsxImportSource @emotion/react */
import { memo, useState, useCallback } from "react";
import dynamic from "next/dynamic";

const CustomTooltip = dynamic(() => import("./CustomTooltip"));

const TooltipContent = () => (
  <div className="flex flex-row gap-[.75rem]">
    <div className="tooltiptext">
      <a
        href={`${process.env.NEXT_PUBLIC_APP_CUSTOMER_ROOT_URL}register-buyer`}
        className="tooltiptext no-underline cursor-pointer"
      >
        Register as a <b>Buyer</b>
      </a>
    </div>
    <div className="tooltipdivider" />
    <div className="tooltiptext">
      <a
        href={`${process.env.NEXT_PUBLIC_APP_CUSTOMER_ROOT_URL}register-seller`}
        className="tooltiptext no-underline cursor-pointer"
      >
        Register as a <b>Seller</b>
      </a>
    </div>
  </div>
);

const InformationSection = memo(() => {
  return (
    <div className=" m-auto w-[85%] sm:w-[95%] xs:w-[95%] ssm:w-[90%] md:w-[85%] justify-center items-center align-middle space-y-0 sm:space-y-4 xs:space-y-4 ssm:space-y-3 md:space-y-0">
      <div className="grid grid-cols-2">
        <div className="startyourjourneytext text-xl sm:text-sm xs:text-sm ssm:text-base md:text-xl text-left">
          Seamless Sourcing
        </div>
        <div className="startyourjourneytext text-xl sm:text-sm xs:text-sm ssm:text-base md:text-xl text-right">
          Real - Time Visibility
        </div>
      </div>
      <div className="flex flex-row items-center gap-5">
        <div className=" w-8/12 sm:w-1/4 xs:w-1/4 ssm:w-1/2 md:w-8/12 h-[.1rem] bg-[#856ACF]" />
        <div className=" w-4/12 sm:w-2/4 xs:w-2/4 ssm:w-1/2 md:w-4/12 flex justify-center items-center">
          <CustomTooltip title={<TooltipContent />}>
            Start Your Journey
          </CustomTooltip>
        </div>
        <div className="w-8/12 sm:w-1/4 xs:w-1/4 ssm:w-1/2 md:w-8/12 h-[.1rem] bg-[#856ACF]" />
      </div>
      <div className="grid grid-cols-2">
        <div className="startyourjourneytext text-xl sm:text-sm xs:text-sm ssm:text-base md:text-xl text-left">
          Trust & Transparency
        </div>
        <div className="startyourjourneytext text-xl sm:text-sm xs:text-sm ssm:text-base md:text-xl text-right">
          Innovation - AI Technology
        </div>
      </div>
    </div>
  );
});

export default InformationSection;

"use client";
/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { PageNotFoundBackground, LeftArrow } from "../../config/GetImages";

const NoPage = () => {
  const heights = [];
  return (
    <div className="w-[80%] m-auto relative top-20">
      <div className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 ssm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 mb-20">
        <div>
          <img
            src={PageNotFoundBackground.src}
            alt="404"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className="font-[700] text-[200px] xs:text-[150px] sm:text-[150px] ssm:text-[150px] md:text-[200px] lg:text-[200px] text-[#42307D]">
            404
          </div>
          <div className="font-medium text-base text-center mt-0 xs:mt-[2rem] sm:mt-[2rem] ssm:mt-0 md:mt-0 lg:mt-0 xs:text-[#42307D] sm:text-[#42307D]">
            The page you are looking for does not exist!
          </div>
          <div className="font-semibold text-base text-[#42307D] mt-4">
            <a href="/" className="no-underline inline-flex">
              <img src={LeftArrow.src} alt="LeftArrow" loading="lazy" />
              <span className="ml-2">Back to homepage</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoPage;

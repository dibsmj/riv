/** @jsxImportSource @emotion/react */
import { memo, useState, useRef, useEffect } from "react";
// import Image from "next/image";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import BannerLogo from "@/assets/Home/banner-logo.mp4";
import HeaderSliderCardStyles from "./HeaderSliderCardStyles";

const LazyCountUp = dynamic(() => import("./LazyCountUp"));
const DynamicVideo = dynamic(() => import("./VideoComponent"), { ssr: false });

const HeaderSliderCard = memo(
  ({
    className,
    showLogo,
    titleColor,
    subTitleColor,
    infoDataColor,
    title,
    subTitle,
    infoData,
    sign,
    customText,
    bgColor,
  }) => {
    const [countStart, setCountStart] = useState(false);
    return (
      <div css={HeaderSliderCardStyles} className="!w-full">
        <div
          className={`${className} headerSliderOneMain !w-full sm:min-h-[32.125rem] xs:min-h-[32.125rem] ssm:min-h-[32.125rem] md:min-h-[35.25rem] lg:min-h-[35.25rem] xl:min-h-[35.25rem]`}
        >
          <div className="w-[95%] xs:w-auto sm:w-auto md:w-[95%] m-auto p-[4rem] xs:p-[2rem] sm:p-[2rem] ssm:p-[1rem] md:p-[4rem]">
            <div
              className={`flex sm:flex-col xs:flex-col ssm:flex-row lg:flex-row xl:flex-row gap-1 ${
                showLogo ? "" : "mt-0 sm:mt-20 xs:mt-20 ssm:mt-0 md:mt-0"
              }`}
            >
              <div className=" sm:w-full xs:w-full ssm:w-[50%] md:w-[50%] lg:w-[50%] xl:w-[50%] text-left">
                <h1
                  style={{ color: titleColor }}
                  className="headerSliderOneTitle sm:text-[1.25rem] xs:text-[1.25rem] ssm:text-[2.188rem] md:text-[2.5rem] lg:text-[2.5rem] xl:text-[2.5rem]"
                >
                  {title}
                </h1>
                <p
                  style={{ color: subTitleColor }}
                  className="headerSliderOneSubTitle sm:text-[0.625rem] xs:text-[0.625rem] ssm:text-[0.813rem] md:text-[1rem] lg:text-[1rem] xl:text-[1rem]"
                >
                  {subTitle}
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {infoData.map((item, index) => (
                    <div
                      key={`${item.name}-${index}`}
                      style={{
                        border: `1px solid ${infoDataColor}`,
                        backgroundColor: `${bgColor}` || "transparent",
                      }}
                      className="headerSliderOneInfo px-[1rem] py-[1.25rem] text-center"
                    >
                      <div
                        style={{ color: infoDataColor, minHeight: "3.333rem" }}
                        className="headerSliderOneInfoData sm:text-[1.25rem] xs:text-[1.25rem] ssm:text-[2.188rem] md:text-[2.5rem] lg:text-[2.5rem] xl:text-[2.5rem]"
                      >
                        <LazyCountUp
                          start={0}
                          end={item.value}
                          duration={3}
                          setCountStart={setCountStart}
                        />
                        {countStart && item.sign}
                      </div>
                      <div
                        style={{ color: infoDataColor }}
                        className="headerSliderOneInfoText text-wrap sm:text-[0.625rem] xs:text-[0.625rem] ssm:text-[0.813rem] md:text-[1rem] lg:text-[1rem] xl:text-[1rem]"
                      >
                        {item.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {showLogo && (
                <div className=" relative w-[50%] sm:w-full xs:w-full ssm:w-[50%] md:w-[50%]">
                  <DynamicVideo videoSrc={BannerLogo} />
                </div>
              )}
            </div>
            <p className="title text-left align-middle items-center mt-8 text-primaryWhite text-sm md:w-[24%] lg:w-[24%] xs:w-[65%] sm:w-[65%]  mx-auto">
              {customText}
            </p>
          </div>
        </div>
      </div>
    );
  }
);

HeaderSliderCard.propTypes = {
  className: PropTypes.string.isRequired,
  showLogo: PropTypes.bool.isRequired,
  titleColor: PropTypes.string.isRequired,
  subTitleColor: PropTypes.string.isRequired,
  infoDataColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  infoData: PropTypes.array.isRequired,
  customText: PropTypes.string.isRequired,
};

export default HeaderSliderCard;

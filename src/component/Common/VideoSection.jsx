/** @jsxImportSource @emotion/react */
import Image from "next/image";
import React, { useState, useRef } from "react";
import VideoSectionStyles from "./VideoSectionStyles";
import { FaqUpper, PlayButton } from "../../config/GetImages";

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [getControls, setControls] = useState(false);
  const [getPlayIcon, setPlayIcon] = useState(true);
  const handlePlayClick = () => {
    setIsPlaying(true);
    setControls(true);
    videoRef.current.play();
  };
  return (
    <section css={VideoSectionStyles}>
      <div className="w-full m-auto justify-center items-center text-center align-middle mt-20 z-20">
        <div className="vediotext text-[20px] xs:text-[10px] sm:text-[10px] ssm:text-[15px] md:text-[20px] lg:text-[20px]">
          video
        </div>
        <div className="mt-3">
          <h2 className="howtobuy text-[42px] xs:text-[25px] sm:text-[25px] ssm:text-[32px] md:text-[42px] lg:text-[42px]">
            How to Buy & Sell the Products
          </h2>
        </div>
        <div className="vediobackground h-auto">
          <div className="flex flex-row mt-10">
            <div className="relative z-30 w-full justify-center m-auto items-center text-center align-middle">
              <video
                ref={videoRef}
                id="fhtvideo"
                width={"100%"}
                preload="none"
                controls={getControls}
                autoPlay={!getPlayIcon}
                loop={getPlayIcon}
                className=" relative"
              >
                <source
                  src={`https://empdataprivacy.s3.ap-south-1.amazonaws.com/rivexa/Rivexa_IG_Video_V4.mp4`}
                  type="video/mp4"
                />
                <track src={null} kind="captions" label="English" />
              </video>
              {!isPlaying && (
                <button
                  type="button"
                  className=" absolute playbuttom cursor-pointer border-0 top-[25%] left-[45%] xs:top-[23%] xs:left-[32%] sm:top-[23%] sm:left-[32%] ssm:top-[30%] ssm:left-[42%] md:top-[32%] md:left-[45%] lg:top-[32%] lg:left-[45%]"
                  onClick={handlePlayClick}
                >
                  <Image
                    alt={`PlayButton`}
                    className={`w-full z-10 h-full xs:h-[50%] sm:h-[50%] ssm:h-[50%] md:h-full lg:h-full xs:w-[50%] sm:w-[50%] ssm:w-[50%] md:w-full lg:w-full`}
                    src={PlayButton}
                  />
                </button>
              )}
              {isPlaying && (
                <Image
                  alt={`FaqUpper`}
                  className={`z-10 absolute -bottom-[2.5rem] xs:-bottom-[.5rem] sm:-bottom-[.5rem] ssm:-bottom-[.5rem] md:-bottom-[2rem] lg:-bottom-[2.5rem] left-0 w-full`}
                  src={FaqUpper}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

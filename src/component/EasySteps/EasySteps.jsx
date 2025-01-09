/* eslint-disable no-undef */
/** @jsxImportSource @emotion/react */
import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";
import RFQVedio from "@/assets/FirstPage/RFQ.mp4";
import ContractVedio from "@/assets/FirstPage/Contract.mp4";
import TimeActionVedio from "@/assets/FirstPage/TimeAction.mp4";
import VasVideo from "@/assets/FirstPage/vas.mp4";
import EasyStepsStyles from "./EasyStepsStyles";

const Accordion = loadable(() => import("./Accordion"));

const EasySteps = ({ title = "Easy steps", subTitle = "" }) => {
  const videoEasyStepRfq = useRef(null);
  const videoContract = useRef(null);
  const videoTimeAction = useRef(null);
  const videoVas = useRef(null);
  const [getBoxClick, setClickBox] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [getControls, setControls] = useState(false);
  const [getAutoPlay, setAutoPlay] = useState(false);
  const [getLoop, setLoop] = useState(true);
  const handleVideoPlay = (param) => {
    if (param && param?.current) {
      const video = param?.current;

      // Check if the video is paused
      if (video.paused) {
        // Request play, if the browser allows autoplay, it will play, otherwise,
        // it will wait for user interaction
        const playPromise = video?.play();

        // If playPromise is rejected, it means autoplay is prevented
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.error("Autoplay prevented:", error);
            // Handle autoplay prevention
            // You may show a play button or another interactive element here
          });
        }
      }
    }
  };
  useEffect(() => {
    switch (getBoxClick) {
      case "rfq":
        if (videoEasyStepRfq?.current) {
          handleVideoPlay(videoEasyStepRfq);
        }
        break;
      case "contracting":
        if (videoContract?.current) {
          handleVideoPlay(videoContract);
        }
        break;
      case "timeaction":
        if (videoTimeAction?.current) {
          handleVideoPlay(videoTimeAction);
        }
        break;
      case "vas":
        if (videoVas?.current) {
          handleVideoPlay(videoVas);
        }
        break;
      default:
        break;
    }
  }, [getBoxClick]);
  useEffect(() => {
    setTimeout(() => {
      setClickBox("rfq");
      videoEasyStepRfq?.current?.play();
    }, 2000);
  }, [videoEasyStepRfq]);
  return (
    <div className="w-[90%] m-auto" css={EasyStepsStyles}>
      <div className=" py-[3rem]">
        <h2 className="formanufacturetitle text-[42px] xs:text-[32px] sm:text-[32px] ssm:text-[40px] md:text-[42px] lg:text-[42px]">
          {title}
        </h2>
        {subTitle && (
          <h3 className=" font-['Urbanist'] text-xl text-[#859CA5]">
            {subTitle}
          </h3>
        )}
        <div className="mt-[3rem] flex flex-row xs:flex-col sm:flex-col ssm:flex-row md:flex-row lg:flex-row gap-[4rem] xs:space-y-[2rem] sm:space-y-[2rem] ssm:gap-[4rem] md:gap-[4rem] lg:gap-[4rem]">
          <Accordion setClickBox={setClickBox} />
          <div className="ml-[2rem] flex-1 xs:hidden sm:hidden ssm:block md:block lg:block">
            {getBoxClick === "rfq" && (
              <video
                ref={videoEasyStepRfq}
                id="rfqesaystep"
                width={"100%"}
                controls={getControls}
                autoPlay={!getAutoPlay}
                loop={getLoop}
              >
                <source src={RFQVedio} type="video/mp4" />
                <track src={null} kind="captions" label="English" />
              </video>
            )}
            {getBoxClick === "contracting" && (
              <video
                ref={videoContract}
                id="contractingesaystep"
                width={"100%"}
                preload="none"
                controls={getControls}
                autoPlay={getAutoPlay}
                loop={getLoop}
              >
                <source src={ContractVedio} type="video/mp4" />
                <track src={null} kind="captions" label="English" />
              </video>
            )}
            {getBoxClick === "timeaction" && (
              <video
                ref={videoTimeAction}
                id="timeactionesaystep"
                width={"100%"}
                preload="none"
                controls={getControls}
                autoPlay={getAutoPlay}
                loop={getLoop}
              >
                <source src={TimeActionVedio} type="video/mp4" />
                <track src={null} kind="captions" label="English" />
              </video>
            )}
            {getBoxClick === "vas" && (
              <video
                ref={videoVas}
                id="vasesaystep"
                width={"100%"}
                preload="none"
                controls={getControls}
                autoPlay={getAutoPlay}
                loop={getLoop}
              >
                <source src={VasVideo} type="video/mp4" />
                <track src={null} kind="captions" label="English" />
              </video>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

EasySteps.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default EasySteps;

/** @jsxImportSource @emotion/react */
import { useState } from "react";
import Arrow from "../../../assets/resources/arrow.svg";
import BOneLogo from "../../../assets/resources/b1.webp";
import BTwoLogo from "../../../assets/resources/b2.webp";
import BThreeLogo from "../../../assets/resources/b3.webp";
import BFourLogo from "../../../assets/resources/b4.webp";
import VideoBackgorund from "../../../assets/resources/video_background.webp";
import { ImageLazyLoad } from "../index";

const AboutRivixa = () => {
  const [getPlayIcon, setPlayIcon] = useState(true);
  return (
    <>
      <div className="w-full md:w-1/2 lg:w-1/2 justify-center items-centerr">
        <p className="aboutRivexa m-auto text-left xs:text-center sm:text-center md:text-left lg:text-left">
          About rivexa
        </p>
        <p className="aboutRivexaSubtitle text-left xs:text-center sm:text-center md:text-left lg:text-left">
          Revolutionary global B2B e-commerce platform.
        </p>
        <div className="grid grid-rows-2 gap-8 mt-2 justify-start items-start align-baseline">
          <div className=" grid grid-cols-2 gap-4">
            <div className="m-auto">
              <div className="bTxtLogoDiv w-12 h-12 m-auto mb-3">
                <ImageLazyLoad alt={`BOneLogo`} imageSrc={BOneLogo} />
              </div>
              <div className="logoText m-auto text-center">
                Complete Transparency
              </div>
            </div>
            <div className="m-auto">
              <div className="bTxtLogoDiv w-12 h-12 m-auto mb-3">
                <ImageLazyLoad alt={`BTwoLogo`} imageSrc={BTwoLogo} />
              </div>
              <div className="logoText m-auto text-center">
                Verified Manufacturers
              </div>
            </div>
          </div>
          <div className=" grid grid-cols-2 gap-4">
            <div className="m-auto">
              <div className="bTxtLogoDiv w-12 h-12 m-auto mb-3">
                <ImageLazyLoad alt={`BThreeLogo`} imageSrc={BThreeLogo} />
              </div>
              <div className="logoText m-auto text-center">Simple Steps</div>
            </div>
            <div className="m-auto">
              <div className="bTxtLogoDiv w-12 h-12 m-auto mb-3">
                <ImageLazyLoad alt={`BFourLogo`} imageSrc={BFourLogo} />
              </div>
              <div className="logoText m-auto text-center">
                Operations Support
              </div>
            </div>
          </div>
        </div>
        <div className="justify-start items-start align-baseline mt-5 text-left xs:text-center sm:text-center md:text-left lg:text-left">
          <a href="/" className="no-underline">
            <button type="button" className="whatCanIDo">
              Learn more
              <ImageLazyLoad
                alt={`Arrow`}
                className={`ml-1`}
                imageSrc={Arrow}
              />
            </button>
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2 bharatVideo mt-8">
        <div className="justify-center items-center w-full relative">
          <ImageLazyLoad
            alt={`VideoBackgorund`}
            className={`w-[inherit]`}
            imageSrc={VideoBackgorund}
          />
          <video
            className=" absolute w-[83%] xs:w-[83%] md:w-[84%] lg:w-[82%] right-[2.5rem] xs:right-[1.2rem] sm:right-[2.5rem] md:right-[2.5rem] lg:right-[2.5rem] top-[2.8rem] xs:top-[1.1rem] sm:top-[3rem] md:top-[3rem] lg:top-[2.15rem] rounded-xl"
            controls
            autoPlay={!getPlayIcon}
            loop={getPlayIcon}
          >
            <source
              src={`https://empdataprivacy.s3.ap-south-1.amazonaws.com/rivexa/RivexaThematicVideo_VF.mp4`}
              type="video/mp4"
            />
            <track src={null} kind="captions" label="English" />
          </video>
        </div>
      </div>
    </>
  );
};

export default AboutRivixa;

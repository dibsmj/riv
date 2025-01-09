/** @jsxImportSource @emotion/react */
import { useState, useRef } from "react";
import Image from "next/image";
import { fhtVideoStyle } from "./fhtVideoStyle";
import { PlayButton } from "@/config/GetImages";

const index = () => {
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
    <section css={fhtVideoStyle}>
      <div className="w-full m-auto justify-center items-center text-center align-middle mt-20 z-20">
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
                  src={`https://empdataprivacy.s3.ap-south-1.amazonaws.com/rivexa/Rivexa_Video_FHT_V3.mp4`}
                  type="video/mp4"
                />
                <track src={null} kind="captions" label="English" />
              </video>
              {!isPlaying && (
                <button
                  type="button"
                  className=" absolute playbuttom cursor-pointer border-0 top-[25%] left-[45%] xs:top-[23%] xs:left-[32%] sm:top-[23%] sm:left-[32%] ssm:top-[30%] ssm:left-[42%] md:top-[32%] md:left-[45%] lg:top-[40%] lg:left-[45%]"
                  onClick={handlePlayClick}
                >
                  <Image
                    src={PlayButton}
                    alt="PlayButton"
                    className=" w-full h-full xs:h-[50%] sm:h-[50%] ssm:h-[50%] md:h-full lg:h-full xs:w-[50%] sm:w-[50%] ssm:w-[50%] md:w-full lg:w-full"
                    loading="lazy"
                  />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;

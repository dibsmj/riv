/** @jsxImportSource @emotion/react */
import { memo, useState, useRef, useEffect } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import PlayButton from "@/assets/IGHomePage/play-button.webp";

const Videopart = memo(({ videopath, imagepath, title }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [getControls, setControls] = useState(false);
  const [getPlayIcon, setPlayIcon] = useState(true);

  const handlePlayClick = () => {
    setIsPlaying(true);
    setControls(true);
  };

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      videoRef.current.play();
    }
  }, [isPlaying]);

  return (
    <div className="mx-auto w-full sm:w-[93%] xs:w-[93%] ssm:w-full md:w-full">
      <div className="captitle">Video</div>
      <div className="capdesc mt-4 text-[2rem] sm:text-[1.5rem] xs:text-[1.5rem] ssm:text-[2rem] md:text-[2rem]">
        {title}
      </div>
      {isPlaying ? (
        <div className="relative mx-auto w-[50%] sm:w-[90%] xs:w-[90%] ssm:w-[70%] md:w-[50%] mt-8">
          <video
            ref={videoRef}
            id="fhtvideo"
            width="100%"
            preload="none"
            controls={getControls}
            autoPlay={!getPlayIcon}
            loop={getPlayIcon}
            className="relative rounded-3xl"
          >
            <source src={`${videopath}`} type="video/mp4" />
            <track src={null} kind="captions" label="English" />
          </video>
        </div>
      ) : (
        <div className="relative mx-auto w-[50%] sm:w-[90%] xs:w-[90%] ssm:w-[70%] md:w-[50%] mt-8">
          <Image
            src={imagepath}
            alt=""
            fill={true}
            sizes={50}
            priority={false}
            className="!relative"
            quality={5}
          />
          <button
            type="button"
            className="!absolute top-[40%] sm:top-[35%] xs:top-[35%] ssm:top-[40%] md:top-[40%] left-1/2 xs:left-[40%] sm:left-[40%] ssm:xs:left-1/2 md:left-1/2 cursor-pointer border-0 bg-transparent"
            onClick={handlePlayClick}
          >
            <Image
              src={PlayButton}
              alt="Play"
              width={50}
              height={50}
              priority={false}
              quality={5}
            />
          </button>
        </div>
      )}
    </div>
  );
});

Videopart.propTypes = {
  videopath: PropTypes.string.isRequired,
  imagepath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired, 
};

export default Videopart;

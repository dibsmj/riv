import { useRef, useEffect } from "react";

const VideoComponent = ({ videoSrc }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <video
      ref={videoRef}
      width="100%"
      preload="none"
      controls={false}
      autoPlay
      loop
      muted
      playsInline
      className="!relative mix-blend-darken sliderOneHeaderLogoGif object-contain scale-[0.5] sm:scale-[0.5] xs:scale-[.5] ssm:scale-[.5] md:scale-[0.5]"
    >
      <source src={videoSrc} type="video/mp4" />
      <track kind="captions" />
    </video>
  );
};

export default VideoComponent;

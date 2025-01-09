import { css } from "@emotion/react";
import VideoBackground from "@/assets/CategoryPage/FHT/FHTVideobackground.webp";

const VideoSectionStyles = css`
  .vediobackground {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background: url(${VideoBackground.src}) 50%;
  }
  .playbuttom {
    background: transparent;
  }
  #fhtvideo::-webkit-media-controls {
    position: relative !important;
    top: -70px !important;
  }
  #fhtvideo::-webkit-media-controls-panel {
    background-image: linear-gradient(transparent, transparent) !important;
  }
  .vediotext {
    color: #001d6c;
    text-align: center;
    font-family: "Chillax Semibold";
    font-style: normal;
    font-weight: 700;
    line-height: 100%; /* 20px */
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .howtobuy {
    color: #21272a;
    text-align: center;
    font-family: "Chillax Semibold";
    font-style: normal;
    font-weight: 700;
  }
  #igvideoplay {
    border: 10px solid #eef0f3;
    border-radius: 5px;
  }
  .videobuttomtext {
    color: #556987;
    text-align: center;
    font-family: Arial;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
  }
`;

export default VideoSectionStyles;

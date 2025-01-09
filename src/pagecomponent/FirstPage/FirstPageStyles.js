import { css } from "@emotion/react";
import secondvector from "../../assets/FirstPage/secondvector.png";
import EastStepBackground from "../../assets/FirstPage/easysetpbackground.png";

const FirstPageStyles = ({ heights }) => css`
  h2 {
    margin: 0px !important;
  }
  h3 {
    margin: 0px !important;
  }
  .resourcestype {
    color: #6941c6;
  }
  .headerbackground {
    width: 100%;
    height: 820px;
    background-size: cover;
  }
  #headerVideo {
    position: absolute;
    width: 100%;
    height: 820px;
  }
  .connectorone {
    top: -12rem;
    left: 2rem;
  }
  .connectortwo {
    right: -6%;
    bottom: -30%;
    scale: 0.75;
  }
  @media (min-width: 350px) and (max-width: 539px) {
    .headerbackground {
      height: 630px;
    }
    #headerVideo {
      height: 700px;
      width: 700px;
      left: -160px;
      position: absolute;
    }
  }
  @media (min-width: 540px) and (max-width: 650px) {
    .headerbackground {
      height: 700px;
    }
    #headerVideo {
      height: 700px;
      width: 865px;
      position: absolute;
    }
  }
  @media (min-width: 651px) and (max-width: 749px) {
    .headerbackground {
      height: 660;
    }
    #headerVideo {
      height: 700px;
      width: 750px;
      position: absolute;
    }
  }
  @media (min-width: 750px) and (max-width: 900px) {
    .headerbackground {
      height: 600px;
    }
    #headerVideo {
      height: 700px;
      left: -160px;
      width: 140%;
      position: absolute;
    }
  }
  @media (min-width: 900px) and (max-width: 1200px) {
    .headerbackground {
      height: 700px;
    }
    #headerVideo {
      height: 700px;
      width: 110%;
      position: absolute;
    }
    .connectortwo {
      right: -17%;
      bottom: -20%;
      scale: 0.6;
    }
  }
  @media (min-width: 1201px) and (max-width: 1439px) {
    .headerbackground {
      height: 820px;
    }
    #headerVideo {
      position: absolute;
      width: 100%;
      height: 820px;
    }
  }
  @media (min-width: 1440px) and (max-width: 1599px) {
    .headerbackground {
      height: 820px;
    }
    #headerVideo {
      position: absolute;
      width: 100%;
      height: 820px;
    }
  }
  @media (min-width: 1600px) and (max-width: 1919px) {
    .headerbackground {
      height: 945px;
    }
    #headerVideo {
      position: absolute;
      width: 100%;
      height: 945px;
    }
    .connectortwo {
      right: 1%;
      bottom: -30%;
      scale: 0.9;
    }
  }
  @media (min-width: 1920px) {
    .headerbackground {
      height: 1080px;
    }
    #headerVideo {
      position: absolute;
      width: 100%;
      height: 1080px;
    }
    .connectortwo {
      right: 4%;
      bottom: -30%;
      scale: 1.06;
    }
  }
  .headertitle {
    left: calc(50% - 871px / 2 + 22.5px);
    top: 240.7px;
    font-family: "Chillax Semibold";
    font-style: normal;
    font-weight: 700;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.68px;
    color: #ffffff;
  }
  .headersubtitle {
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    display: flex;
    align-items: center;
    text-align: center;
    color: #ffffff;
  }
  .headernews {
    font-family: "Chillax Semibold";
    font-style: normal;
    font-weight: 400;
    font-size: 15.625px;
    line-height: 17px;
    align-items: center;
    text-align: center;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    color: #618adc;
  }
  .headernewsdiv {
    align-items: center;
    padding: 0px 13px 0px 0px;
    gap: 22px;
    left: calc(50% - 1174px / 2 + 0.5px);
    top: calc(50% - 25px / 2 + 11.5px);
    background: rgba(156, 224, 193, 0.27);
  }
  .newstext {
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
    leading-trim: both;
    text-edge: cap;
    align-items: center;
    letter-spacing: 0.8px;
    text-transform: capitalize;
    color: #ffffff;
  }
  .aboutrivexaheader {
    font-family: "Chillax Semibold";
    font-style: normal;
    font-weight: 600;
    line-height: 53px;
    display: flex;
    align-items: center;
    color: #444040;
  }
  .aboutrivexadescription {
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #444040;
  }
  .aboutrivexadata {
    font-family: "Arial";
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    color: #444040;
  }
  .aboutrivexadatatext {
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #444040;
  }
  .buseinessverticlestext {
    font-family: "Chillax Semibold";
    font-style: normal;
    font-weight: 600;
    line-height: 60px;
    align-items: center;
    text-align: center;
    color: #ffffff;
  }
  .businesssubtext {
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
    align-items: center;
    text-align: center;
    color: #ffffff;
  }
  .categoryhead {
    font-family: "Chillax Semibold";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    display: flex;
    align-items: center;
    color: #f3f4f6;
  }
  .categorydesc {
    font-family: "Arial";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 25px;
    display: flex;
    align-items: center;
    color: #f3f4f6;
  }
  .esaystep {
    background: url(${EastStepBackground.src}) no-repeat center center;
    background-size: cover;
    opacity: 0.76;
    border-radius: 0px 0px 0px 114px;
  }
  .secondcurve {
    background: url(${secondvector.src}) no-repeat center center;
    background-size: 80% 90%;
    background-position: calc(100% - 20px) calc(100% - 10px);
  }
  .whychooseus {
    font-family: "Chillax Semibold";
    font-style: normal;
    font-weight: 600;
    font-size: 42px;
    line-height: 120%;
    text-align: center;
    color: #222426;
  }
  .choosetext {
    font-family: "Chillax Semibold";
    font-style: normal;
    font-weight: 600;
    font-size: 42px;
    line-height: 120%;
    text-align: center;
    background: linear-gradient(87.95deg, #090edb -15.78%, #e73dc4 102.06%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .whychooseusdesc {
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 140%;
    text-align: center;
    color: #272323;
  }
  .formanufacturetitle {
    font-family: "Chillax Semibold";
    font-style: normal;
    font-weight: 600;
    line-height: 67px;
    display: flex;
    align-items: center;
    color: #222426;
  }
  .formanufacturedesc {
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    display: flex;
    align-items: center;
    color: #272323;
  }
  .usersays {
    font-family: "Chillax Semibold";
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    text-align: center;
    color: #feffff;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
  .usersayseconddiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    background: linear-gradient(
      80.42deg,
      rgba(255, 255, 255, 0.16) 25.25%,
      rgba(255, 255, 255, 0.16) 98.05%
    );
    backdrop-filter: blur(8px);
    border-radius: 20px;
  }
  .usersaythriddiv {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    gap: 10px;
    background: linear-gradient(
      79.59deg,
      rgba(51, 51, 62, 0.16) 6.21%,
      rgba(83, 84, 108, 0.16) 98.02%
    );
    border-radius: 20px;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
  .homepageblogtitle {
    font-family: "Chillax Semibold";
    font-style: normal;
    font-weight: 700;
    line-height: 110%;
    text-align: center;
    color: #222426;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
  }
  .marquee-container {
    width: 100%;
    overflow: hidden;
  }

  .marquee-content {
    display: inline-block;
    white-space: nowrap;
    animation: marquee 50s linear infinite; /* Adjust the animation duration as needed */
  }

  @keyframes marquee {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  .aisearchbackground {
    box-sizing: border-box;
    background: rgba(10, 11, 10, 0.7);
    border: 1px solid rgba(84, 90, 96, 0.4);
    border-radius: 18px;
  }
  .userChatSection {
    align-items: center;
    padding: 10px;
    gap: 8px;
    background: #d9ddff;
    border-radius: 12px;
    font-family: "Urbanist";
    font-size: 15px;
    font-weight: 500;
  }
  .robotchatsection {
    align-items: center;
    padding: 10px;
    gap: 8px;
    background: #4a3587;
    border-radius: 12px;
    color: white;
    font-family: "Urbanist";
    font-size: 15px;
    font-weight: 500;
  }
`;

export default FirstPageStyles;

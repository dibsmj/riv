import { css } from "@emotion/react";
import { colors } from "@/constants/stylesConstants";
import HeaderBackground from "@/assets/CategoryPage/Event/SteelFab_backeground.webp";
import IESSBackround from "@/assets/resources/iessFooterBackground.webp";
import ProcurementImg from "@/assets/IGHomePage/procurement.webp";
import IGCategory from "@/assets/resources/ig_categories.webp";

const MesseStyles = ({ heights }) => css`
  .headerbackground {
    width: 100%;
    height: ${heights.default};
    margin-bottom: 40px; /* Corrected typo in property name */
    overflow: hidden;
    flex-shrink: 0;
    background: url(${HeaderBackground.src}) no-repeat center center;
    background-size: cover;
    background-image: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.48) 59.15%,
        rgba(9, 9, 9, 0.4) 100%
      ),
      url(${HeaderBackground.src});
  }
  @media (max-width: 640px) {
    .headerbackground {
      height: ${heights.mobile};
    }
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    .headerbackground {
      height: ${heights.tablet};
    }
  }
  @media (min-width: 1025px) {
    .headerbackground {
      height: ${heights.desktop};
    }
  }
  .headersectionheader {
    color: #fff;
    font-family: Arial;
    font-style: normal;
    font-weight: 700;
    line-height: 110%;
  }
  .headervenue {
    color: #f9fbff;
    font-family: Arial;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
  .headersubsectionheader {
    color: #fff;
    font-family: Arial;
    font-style: normal;
    font-weight: 700;
    line-height: 110%;
  }
  .headertextsection {
    flex-direction: column;
    align-items: flex-start;
    gap: 36px;
    border-radius: 12px;
  }
  .headertextsectionlanding {
    flex-direction: column;
    align-items: flex-start;
    gap: 36px;
  }
  .headertextsectionlandingform {
    border-radius: 8.61px;
    background: #fff;
    box-shadow: 0px 6.888px 13.775px 0px rgba(142, 141, 208, 0.12);
  }
  .igtext {
    color: #f9fbff;
    font-family: "Chillax Semibold";
    font-style: normal;
    font-weight: 700;
  }
  .igsubtext {
    color: #f9fbff;
    font-family: Arial;
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
  }
  .igsubtextlanding {
    color: #ffffff;
    font-family: "Chillax Semibold";
    font-style: normal;
    font-weight: 600;
    line-height: 110%;
  }
  .ratingDiv {
    margin: auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: ${colors.primaryWhite};
  }
  .igVenueItem {
    color: #000;
    text-align: center;
    font-family: Arial;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 25.2px */
  }
  .igVenueItemValueText {
    color: #000;
    text-align: center;
    font-family: Arial;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 33.6px */
  }
  .organiserDiv {
    display: inline-flex;
    padding: 23px 30px;
    gap: 10px;
    border-radius: 38px;
    border: 1px solid #000;
  }
  .organiserText {
    color: #000;
    text-align: center;
    font-family: Arial;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    margin: inherit;
  }
  .wantModeIgEvent {
    color: #4a3587;
    font-family: "Chillax Semibold";
    font-size: 43px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
  }
  .igContent {
    color: #282525;
    font-family: Arial;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 126%;
  }
  .igLandingConnect {
    color: #000;
    font-family: Arial;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 60.2px */
  }
  .expartUpperDiv {
    height: 70px;
    width: 100%;
    background-color: white;
    z-index: 10;
    color: white;
  }
  .igExpartDivInfo {
    background: #f8f8f8;
  }
  .igExpartName {
    color: #2e2626;
    text-align: center;
    font-family: Arial;
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 23.8px */
  }
  .ixExpartPosition {
    color: #000;
    text-align: center;
    font-family: Arial;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 21px */
  }
  .separtor {
    height: 1px;
    color: #f8f8f8;
    background: #ffdc00;
  }
  .iessEventTxt {
    background: url(${IESSBackround.src}) no-repeat;
    background-size: cover;
  }
  .middleIGBharatTxt {
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.89);
  }
  .oneStepText {
    color: #000;
    text-align: center;
    font-family: Arial;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 38px; /* 135.714% */
  }
  .whatCanIDo {
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    gap: 6px;
    border-radius: 10px;
    background: #4a3587;
    text-align: center;
    font-family: Arial;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
    color: white;
    cursor: pointer;
  }
  .bTxtLogoDiv {
    border-radius: 6px;
    background: #20af98;
  }
  .logoText {
    color: #21272a;
    text-align: center;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
  }
  .aboutrivexaheader {
    color: #4a3587;
    leading-trim: both;
    text-edge: cap;
    font-family: "Chillax Semibold";
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
  }
  .rivexadescription {
    color: #282525;
    font-family: Arial;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 136%;
  }
  .whatCanIDo {
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    gap: 6px;
    border-radius: 10px;
    background: #4a3587;
    text-align: center;
    font-family: Arial;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
    color: white;
    border: 0px;
  }
  .categorytext {
    color: #fff;
    leading-trim: both;
    text-edge: cap;
    font-family: "Chillax Semibold";
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
  .categortdescription {
    color: #fff;
    font-family: Arial;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  .categoryfooter {
    border-radius: 0px 0px 15.994px 15.994px;
    background: rgba(238, 238, 238, 0.5);
  }
  .categoryfootertext {
    color: #000;
    font-family: Arial;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 110%;
  }
  .closebg {
    background: transparent;
  }
  .igTimmerDiv {
    margin-top: 2rem;
    display: inline-flex;
    align-items: flex-start;
  }
  .igTimerDivPara {
    color: #fff;
    text-align: center;
    font-family: "Chillax Semibold";
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 53.333% */
    text-transform: uppercase;
  }
  .igTimmerDivName {
    color: #fff;
    text-align: center;
    font-family: Arial;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
  }
  .profileemail {
    font-family: "Urbanist";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: #8d8d8d;
    mix-blend-mode: normal;
  }
  .procurementsection {
    background-image: image-set(url(${ProcurementImg.src}) 1x);
    background-size: cover;
  }
  .procurmenttitle {
    font-family: "Arial";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 25px;
    text-align: center;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: #e3e3e3;
    mix-blend-mode: normal;
  }
  .procurementdesc {
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
    text-align: center;
    color: #ffffff;
  }
  .poweringitem {
    border: 2px solid #ffffff;
    border-radius: 27px;
    box-sizing: border-box;
    width: 165px;
    height: 120px;
  }
  .poweringitemtitle {
    font-family: "Arial";
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 100%;
    text-align: center;
    color: #ffffff;
  }
  .poweringitemtext {
    font-family: "Arial";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 100%;
    text-align: center;
    color: #ffffff;
  }
  .igCategory {
    background: url(${IGCategory.src}) no-repeat center center;
    background-size: cover;
  }
  .categorydivIGEvent {
    justify-content: center;
    align-items: center;
    background: #e2d8ff;
  }
  .categoryName {
    color: #000;
    text-align: center;
    leading-trim: both;
    text-edge: cap;
    font-family: Arial;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 110%; /* 17.6px */
  }
  .categoryTextIG {
    color: #4a3587;
    leading-trim: both;
    text-edge: cap;
    font-family: "Chillax Semibold";
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 44.8px */
  }
  .igContentTextIG {
    color: #282525;
    font-family: Arial;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 33.6px */
  }
`;

export default MesseStyles;

import { css } from "@emotion/react";
import WhyChoose from "@/assets/Home/whychoose.webp";
import AboutBack from "@/assets/Home/about-back.webp";
import AboutBackBottom from "@/assets/Home/about-back-bottom.webp";
import MobileConnector from "@/assets/Home/mobile-connector.webp";

const HomePageStyles = () => css`
  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 1.125rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-button-prev {
    background-color: #4a3587;
    border-radius: 50%;
    width: 3.125rem;
    height: 3.125rem;
    color: white;
  }
  .swiper-button-next {
    background-color: #4a3587;
    border-radius: 50%;
    width: 3.125rem;
    height: 3.125rem;
    color: white;
  }
  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 1.25rem;
  }
  .swiper-button-prev:hover,
  .swiper-button-next:hover {
    background-color: #4a3587;
    color: #ffffff;
  }
  .startyourjourney {
    border: 1px solid #856acf;
    border-radius: 1.656rem;
    font-family: "Arial";
    font-style: normal;
    line-height: 100%;
    text-align: center;
    color: #856acf;
  }
  .startyourjourneytext {
    font-family: "Arial";
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    color: #856acf;
  }
  .aboutsection {
    background: radial-gradient(
      circle at 70% 50%,
      rgba(173, 144, 255, 0.6),
      rgba(113, 160, 255, 0.3),
      rgba(255, 255, 255, 0) 70%
    );
    width: 100%;
  }

  .aboutsectionbottom {
    background-image: image-set(url(${AboutBackBottom.src}) 1x);
    background-size: cover;
    background-position: center top 30%;
  }
  .aboutfullsection {
    background-image: image-set(url(${AboutBack.src}) 1x);
    background-size: cover;
  }
  .mobileaboutconnector {
    background-image: image-set(url(${MobileConnector.src}) 1x);
    background-size: cover;
    background-position: right;
    scale: 0.9;
  }
  .aboutriv {
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 100%;
    color: #3f3f3f;
  }
  .aboutrivdesc {
    font-family: "Arial";
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 140%;
    text-align: left;
    color: #3f3f3f;
  }
  .toprivbrand {
    background: -webkit-linear-gradient(
      to bottom,
      #e8c21d 0%,
      #e8c21d 75%,
      #20af98 75%,
      #20af98 100%
    );
    background: linear-gradient(
      to bottom,
      #e8c21d 0%,
      #e8c21d 75%,
      #20af98 75%,
      #20af98 100%
    );
    width: 0.25rem;
    height: 30%;
    top: 0;
    left: 7.12rem;
  }
  .bottomrivbrand {
    background: -webkit-linear-gradient(
      to right,
      #20af98 0%,
      #20af98 50%,
      #db78a1 50%,
      #db78a1 100%
    );
    background: linear-gradient(
      to right,
      #20af98 0%,
      #20af98 50%,
      #db78a1 50%,
      #db78a1 100%
    );
    width: 55%;
    height: 0.25rem;
    bottom: 4.25rem;
    right: -1.375rem;
  }
  .shippingtop {
    background: -webkit-linear-gradient(to bottom, #db78a1 0%, #db78a1 100%);
    background: linear-gradient(to bottom, #db78a1 0%, #db78a1 100%);
    width: 0.25rem;
    bottom: -4.3rem;
    left: 50%;
  }
  .shippingbottom {
    background: -webkit-linear-gradient(to right, #1babe2 0%, #1babe2 100%);
    background: linear-gradient(to right, #1babe2 0%, #1babe2 100%);
    height: 0.25rem;
    bottom: -70px;
  }
  .askrivbtn {
    background: rgba(255, 255, 255, 0.58);
    background: #ffffff;
    box-shadow: 7px 8px 9.3px rgba(0, 0, 0, 0.25);
    border-radius: 1.875rem;
    border: none;
  }
  .askrivbtnmobile {
    background: #4a3587;
    box-shadow: 3px 4px 4.8px -2px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    font-family: "Arial";
    font-style: normal;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 100%;
    text-align: center;
    color: #ffffff;
  }
  .askrivbtnmobiletext {
    font-family: "Arial";
    font-style: normal;
    font-weight: 500;
    font-size: 0.625rem;
    line-height: 1rem;
    text-align: center;
    color: #4a3587;
  }
  .askrivinfo {
    background: #4a3587;
    border-radius: 44px;
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.125rem;
    text-align: center;
    color: #ffffff;
  }
  .productCategories {
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
    color: #3f3f3f;
  }
  .categorymainactive {
    background: #ffffff;
    border: 2px solid #53338d;
    box-shadow: 4px 4px 8.8px 2px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
  }
  .categorymaininactive {
    background: #ffffff;
    border: 2px solid #e9e9e9;
    border-radius: 30px;
  }
  .categorytitle {
    font-family: "Chillax Variable";
    font-style: normal;
    line-height: 187%;
    color: #3f3f3f;
  }
  .categorytext {
    font-family: "Arial";
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 140%;
    color: #3f3f3f;
  }
  .learnmoreactive {
    border-radius: 30px;
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 500;
    font-size: 1.125rem;
    text-align: center;
    border: 1px solid #8d8d8d;
    filter: drop-shadow(7px 8px 9.3px rgba(0, 0, 0, 0.25));
    border-radius: 30px;
  }
  .learnmore {
    border-radius: 30px;
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 500;
    font-size: 1.125rem;
    text-align: center;
    border: 1px solid #8d8d8d;
    border-radius: 30px;
  }
  .journeyheadertitle {
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
    text-align: center;
    color: #4a3587;
  }
  .journeysubheader {
    font-family: "Arial";
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.563rem;
    text-align: center;
    color: #8d8d8d;
    mix-blend-mode: normal;
  }
  .journeybtnactive {
    border: 1px solid #856acf;
    filter: drop-shadow(7px 8px 9.3px rgba(0, 0, 0, 0.25));
    border-radius: 30px;
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 100%;
    text-align: center;
    color: #856acf;
  }
  .journeybtn {
    box-sizing: border-box;
    border: 1px solid #8d8d8d;
    filter: drop-shadow(0.5px 1px 1px rgba(0, 0, 0, 0.2));
    border-radius: 30px;
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 100%;
    text-align: center;
    color: #3f3f3f;
  }
  .activejourneycard {
    box-sizing: border-box;
    background: #ffffff;
    box-shadow: 6px 6px 9.8px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
  }
  .journeycard {
    box-sizing: border-box;
    border-radius: 20px;
  }
  .forbuyer {
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 600;
    font-size: 2.25rem;
    line-height: 100%;
    color: #4a3587;
  }
  .forbuyersubtext {
    font-family: "Arial";
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.125rem;
    color: #8d8d8d;
    mix-blend-mode: normal;
  }
  .forbuyertext {
    font-family: "Arial";
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 25px;
    text-align: left;
    color: #555555;
    mix-blend-mode: normal;
  }
  .requestquote {
    box-sizing: border-box;
    background: #ffffff;
    border: 1px solid #20af98;
    border-radius: 30px;
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 100%;
    text-align: center;
    color: #20af98;
    cursor: pointer;
  }
  .requestquote:hover {
    background: #4a3587;
    box-shadow: 7px 8px 9.3px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 100%;
    text-align: center;
    color: #ffffff;
    border: none;
    cursor: pointer;
  }
  .smallboxtitle {
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 22px;
  }
  .smallboxdescription {
    font-family: "Arial";
    font-style: normal;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 22px;
    text-align: center;
    color: #8d8d8d;
    mix-blend-mode: normal;
  }
  .whychoose {
    background: url(${WhyChoose.src}) no-repeat center center;
    background-size: cover;
  }
  .whycooseustext {
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 600;
    font-size: 2.25rem;
    line-height: 100%;
    text-align: center;
    color: #ffffff;
  }
  .whycooseussubtext {
    font-family: "Arial";
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 18px;
    text-align: center;
    color: #ffffff;
    mix-blend-mode: normal;
  }
  .whychoosesectiontitle {
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 500;
    font-size: 1.875rem;
    line-height: 100%;
    color: #ffffff;
  }
  .whchooselist li {
    font-family: "Arial";
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 28px;
    color: #ffffff;
    mix-blend-mode: normal;
    margin-bottom: 0.75rem;
  }
  .whychoosebrandone {
    background: -webkit-linear-gradient(
      to bottom,
      #e8c21d 0%,
      #e8c21d 50%,
      #20af98 50%,
      #20af98 100%
    );
    background: linear-gradient(
      to bottom,
      #e8c21d 0%,
      #e8c21d 50%,
      #20af98 50%,
      #20af98 100%
    );
    width: 0.25rem;
  }
  .whychoosebrandtwo {
    background: -webkit-linear-gradient(
      to bottom,
      #db78a1 0%,
      #db78a1 50%,
      #1babe2 50%,
      #1babe2 100%
    );
    background: linear-gradient(
      to bottom,
      #db78a1 0%,
      #db78a1 50%,
      #1babe2 50%,
      #1babe2 100%
    );
    width: 0.25rem;
  }
  .faqquestions {
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    color: #181818;
    mix-blend-mode: normal;
  }
  .middlefaqmain {
    padding: 5px 0px;
    box-shadow: none !important;
    border-bottom: 1px solid #c4c4c4;
  }
  .middlefaqmain:last-child {
    border: none !important;
  }
  .middlefaqmain::before {
    box-shadow: none !important;
    border: none !important;
    display: none !important;
  }
  .faqanswer {
    font-family: "Arial";
    font-style: normal;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 25px;
    color: #181818;
    mix-blend-mode: normal;
  }
  .cardheader {
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 100%;
    text-align: center;
    color: #ffffff;
  }
  .cardfooterbutton {
    box-sizing: border-box;
    border: 1px solid #ffffff;
    filter: drop-shadow(7px 8px 9.3px rgba(0, 0, 0, 0.25));
    border-radius: 30px;
    background: #4a3587;
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 100%;
    text-align: center;
    color: #ffffff;
    padding: 0.75rem;
  }
  .rivsearchinput {
    position: relative;
    box-sizing: border-box;
    background: #ffffff;
    border-radius: 40px;
    padding: 1rem;
    border-top: 1px solid #6f6f6f;
    border-right: 1px solid #6f6f6f;
    border-left: 1px solid #6f6f6f;
    border-bottom: 0px solid transparent;
    background-image: linear-gradient(
      to right,
      #1babe2 0%,
      #1babe2 25%,
      #e8c21d 25%,
      #e8c21d 50%,
      #20af98 50%,
      #20af98 75%,
      #db78a1 75%,
      #db78a1 100%
    );
    background-position: bottom;
    background-size: 100% 2px;
    background-repeat: no-repeat;
  }
  .custom-tooltip {
    position: absolute;
    background-color: #856acf;
    color: #fff;
    padding: 14px;
    font-size: 0.938rem;
    font-family: Urbanist, sans-serif;
    border-radius: 56px;
    white-space: nowrap;
    z-index: 10;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }
  .custom-tooltip.top {
    bottom: 100%; /* Position it above the button */
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 10px;
    opacity: 1;
  }
  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
  }
  .tooltip-arrow.top {
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent #856acf transparent;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%) rotate(180deg);
  }
  .custom-tooltip.bottom {
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 10px;
  }

  .tooltip-arrow.bottom {
    border-width: 8px 8px 0 8px;
    border-color: #856acf transparent transparent transparent;
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
  .tooltiptext {
    font-family: Urbanist;
    font-style: normal;
    font-weight: 500;
    font-size: 0.938rem;
    line-height: 100%;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
  }
  .tooltipdivider {
    width: 0.1rem;
    height: auto;
    background: #fff;
  }
`;

export default HomePageStyles;

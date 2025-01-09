import { css } from "@emotion/react";
import UniformImage from "@/assets/FHThomepage/uniform.webp";
import MenImage from "@/assets/FHThomepage/men.webp";
import WomenImage from "@/assets/FHThomepage/women.webp";
import ShoesImage from "@/assets/FHThomepage/shoes.webp";
import LeatherImage from "@/assets/FHThomepage/leather.webp";
import SleepwearImage from "@/assets/FHThomepage/sleepwear.webp";
import BagImage from "@/assets/FHThomepage/bag.webp";
import HomeTextileImage from "@/assets/FHThomepage/hometextile.webp";

const FHTHomePageStyles = () => css`
  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-button-prev {
    background-color: #4a3587;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    color: white;
  }
  .swiper-button-next {
    background-color: #4a3587;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    color: white;
  }
  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 20px;
  }
  .swiper-button-prev:hover,
  .swiper-button-next:hover {
    background-color: #4a3587;
    color: #ffffff;
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
  .cardheader {
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
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
    font-size: 18px;
    line-height: 100%;
    text-align: center;
    color: #ffffff;
    padding: 0.75rem;
  }
  .captitle {
    font-family: "Arial";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 25px;
    text-align: center;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: #555555;
    mix-blend-mode: normal;
  }
  .capdesc {
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    text-align: center;
    color: #4a3587;
  }
  .categoryname {
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 100%;
    color: #fff;
  }
  .categorydescription {
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 148%;
    color: #ffffff;
  }
  .capsubrounditem {
    background: #ffffff !important;
    border-radius: 25px;
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 100%;
    text-align: center;
    color: #4a3587;
  }
  .uniformcap {
    background-image: image-set(url(${UniformImage.src}) 1x);
    background-size: cover;
    border-radius: 25px;
    width: 339px;
    height: 251px;
  }
  .mencap {
    background-image: image-set(url(${MenImage.src}) 1x);
    background-size: cover;
    border-radius: 25px;
    width: 339px;
    height: 251px;
  }
  .womencap {
    background-image: image-set(url(${WomenImage.src}) 1x);
    background-size: cover;
    border-radius: 25px;
    width: 339px;
    height: 251px;
  }
  .shoescap {
    background-image: image-set(url(${ShoesImage.src}) 1x);
    background-size: cover;
    border-radius: 25px;
    width: 339px;
    height: 251px;
  }
  .leathercap {
    background-image: image-set(url(${LeatherImage.src}) 1x);
    background-size: cover;
    border-radius: 25px;
    width: 339px;
    height: 251px;
  }
  .sleepwearcap {
    background-image: image-set(url(${SleepwearImage.src}) 1x);
    background-size: cover;
    border-radius: 25px;
    width: 339px;
    height: 251px;
  }
  .bagcap {
    background-image: image-set(url(${BagImage.src}) 1x);
    background-size: cover;
    border-radius: 25px;
    width: 339px;
    height: 251px;
  }
  .hometextilecap {
    background-image: image-set(url(${HomeTextileImage.src}) 1x);
    background-size: cover;
    border-radius: 25px;
    width: 339px;
    height: 251px;
  }
  .capabilitiesnew {
    // mix-blend-mode: screen;
    border-radius: 25px;
    width: 339px;
    height: 251px;
  }
  .industrytitle {
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
    text-align: center;
    color: #4a3587;
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
  .getaquote {
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 100%;
    color: #ffffff;
  }
  .getaquotetext {
    font-family: "Arial";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 37px;
    color: #ffffff;
    mix-blend-mode: normal;
  }
  .signupasfree {
    background: #ffffff;
    box-shadow: 7px 8px 9.3px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    border: none;
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    text-align: center;
    color: #4a3587;
    width: 100%;
  }
  .requestademo {
    box-sizing: border-box;
    border: 1px solid #ffffff;
    filter: drop-shadow(7px 8px 9.3px rgba(0, 0, 0, 0.25));
    border-radius: 30px;
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    text-align: center;
    color: #ffffff;
  }
  .title {
    font-family: Chillax Semibold;
  }

  .desc {
    font-family: Arial;
  }

  .custom-pagination {
    display: flex;
    justify-content: center;
    gap: 8px; /* Adjust gap between dots if needed */
    margin-top: 8px; /* Space between the card and dots */
  }

  .swiper-pagination-bullet {
    background-color: #4a3587; /* Customize bullet color */
    opacity: 0.6;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    background-color: #4a3587;
  }
  .mencap,
  .womencap,
  .uniformcap,
  .shoescap,
  .leathercap,
  .sleepwearcap,
  .bagcap,
  .hometextilecap {
    background-size: cover;
    background-position: center;
    border-radius: 25px;
    width: 339px;
    height: 251px;
    position: relative;
    overflow: hidden;
  }

  .mencap::after,
  .womencap::after,
  .uniformcap::after,
  .shoescap::after,
  .leathercap::after,
  .bagcap::after,
  .hometextilecap::after,
  .sleepwearcap::after {
    opacity: 0.4; /* Adjust the opacity to control the dimming effect */
  }

  .mencap:hover::after,
  .womencap:hover::after,
  .uniformcap:hover::after,
  .shoescap:hover::after,
  .leathercap:hover::after,
  .bagcap:hover::after,
  .hometextilecap:hover::after,
  .sleepwearcap:hover::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 2.7); /* Dim the image */
    transition: opacity 0.7s ease;
    pointer-events: none; /* Prevent the overlay from interfering with other events */
    z-index: 1;
  }

  .capabilitiesnew {
    position: relative;
    z-index: 2;
  }
`;

export default FHTHomePageStyles;

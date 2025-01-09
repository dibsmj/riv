import { css } from "@emotion/react";
import { ResourcesBackGround } from "../../config/GetImages";

const NewsRoomStyles = ({ heights }) => css`
  .resourcesheader {
    background: url(${ResourcesBackGround.src}) no-repeat center center;
    background-size: cover;
    width: 100%;
  }
  .resourcestype {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 12px;
    background-color: #f9f5ff;
    border: 1px solid #4a3587;
    border-radius: 16px;
    font-family: "Arial";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #6941c6;
  }
  .resourcesh1 {
    font-family: "Chillax Semibold";
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    letter-spacing: -0.02em;
    color: #42307d;
    align-self: stretch;
  }
  .resourcesh2 {
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #6941c6;
    align-self: stretch;
  }
  .eventsFont {
    font-family: "Arial";
    font-style: normal;
    font-weight: 620;
    font-size: 30px;
    color: black;
    align-self: stretch;
  }
  .resourcescategory {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 6.5625px 15.9375px;
    background: #ffffff;
    border: 0.9375px solid #c9c9c9;
    border-radius: 29.0625px;
  }
  .searchtype {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 16px;
    gap: 8px;
    background: #ffffff;
    border: 1px solid #d0d5dd;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
  }
  .custom-border {
    padding: 2px 5px;
    border: 1.5px solid #42307d;
    border-radius: 1.9rem;
    color: #6941c6;
  }
  .react-multi-carousel-track {
    background: rgba(75, 75, 75, 0.08);
  }
  .explore-industry-card-main {
    // box-shadow: 0px 5px 15px 35px rgba(75, 75, 75, 0.08);
  }
  .react-multi-carousel-track {
    background-color: #fff;
    margin: 20px 5px;
  }
  .react-multi-carousel-track li {
    gap: 1rem;
  }
  .react-multiple-carousel__arrow--left {
    background: #4a3587;
    left: 0px;
  }
  .react-multiple-carousel__arrow--left:hover {
    background: #4a3587;
  }
  .react-multiple-carousel__arrow--right {
    background: #4a3587;
    right: 0px;
    z-index: 1;
  }
  .react-multiple-carousel__arrow--right:hover {
    background: #4a3587;
  }
  .title {
    font-family: "Chillax Semibold";
    font-style: normal;
    font-weight: 520;
    font-size: 30px;
    color: black;
    align-self: stretch;
  }
  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: left;
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
`;

export default NewsRoomStyles;

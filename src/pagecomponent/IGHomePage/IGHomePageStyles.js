import { css } from "@emotion/react";
import CastingImage from "@/assets/IGHomePage/casting.webp";
import ForgingImage from "@/assets/IGHomePage/forging.webp";
import MachiningImage from "@/assets/IGHomePage/machining.webp";
import FabricationImage from "@/assets/IGHomePage/fabrication.webp";
import ExtrusionImage from "@/assets/IGHomePage/extrusion.webp";
import InjectionImage from "@/assets/IGHomePage/injection_molding.webp";
import ProcurementImg from "@/assets/IGHomePage/procurement.webp";

const IGHomePageStyles = () => css`
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
    color: #ffffff;
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
  .castingcap {
    background-image: image-set(url(${CastingImage.src}) 1x);
    background-size: cover;
    border-radius: 25px;
    width: 339px;
    height: 251px;
  }
  .forgingcap {
    background-image: image-set(url(${ForgingImage.src}) 1x);
    background-size: cover;
    border-radius: 25px;
    width: 339px;
    height: 251px;
  }
  .machiningcap {
    background-image: image-set(url(${MachiningImage.src}) 1x);
    background-size: cover;
    border-radius: 25px;
    width: 339px;
    height: 251px;
  }
  .fabricationcap {
    background-image: image-set(url(${FabricationImage.src}) 1x);
    background-size: cover;
    border-radius: 25px;
    width: 339px;
    height: 251px;
  }
  .extrusioncap {
    background-image: image-set(url(${ExtrusionImage.src}) 1x);
    background-size: cover;
    border-radius: 25px;
    width: 339px;
    height: 251px;
  }
  .injectioncap {
    background-image: image-set(url(${InjectionImage.src}) 1x);
    background-size: cover;
    border-radius: 25px;
    width: 339px;
    height: 251px;
  }
  .capabilitiesnew {
    background: rgba(83, 51, 141, 0.86);
    mix-blend-mode: screen;
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
  .prodetailstile {
    font-family: "Arial";
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
    text-align: center;
    color: #3f3f3f;
  }
  .prodetailsitem {
    border: 2px solid #4a3587;
    border-radius: 30px;
  }
  .prodetailsitemvalue {
    font-family: "Arial";
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
    text-align: center;
    color: #787878;
  }
  .prodetailsitemtext {
    font-family: "Arial";
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
    text-align: center;
    color: #787878;
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
`;

export default IGHomePageStyles;

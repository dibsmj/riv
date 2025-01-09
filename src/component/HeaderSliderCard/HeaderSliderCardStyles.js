import { css } from "@emotion/react";
import SliderOne from "@/assets/Home/slider-1.webp";
import SliderTwo from "@/assets/Home/slider-2.webp";
import SliderThree from "@/assets/Home/slider-3.webp";
import SliderFour from "@/assets/FHThomepage/image.webp";

const HeaderSliderCardStyles = () => css`
  .headerSliderOneMain {
    border-bottom: 1px solid #856acf;
  }
  .headerSliderOneTitle {
    font-family: "Chillax Semibold";
    font-style: normal;
    font-weight: 600;
  }
  .headerSliderOneSubTitle {
    font-family: "Arial";
    font-style: normal;
    font-weight: 500;
    line-height: 146%;
  }
  .headerSliderOneInfo {
    border-radius: 24px;
  }
  .headerSliderOneInfoData {
    font-weight: bold;
  }
  .headerSliderOneInfoText {
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 500;
    text-align: center;
  }
  .sliderOneHeaderLogoGif {
    mix-blend-mode: darken;
  }
  .sliderOne {
    background: url(${SliderOne.src}) no-repeat center center;
    background-size: cover;
  }
  .sliderTwo {
    background: url(${SliderTwo.src}) no-repeat center center;
    background-size: cover;
  }
  .sliderThree {
    background: url(${SliderThree.src}) no-repeat center center;
    background-size: cover;
  }
  .sliderFour {
    background: url(${SliderFour.src}) no-repeat center center;
    background-size: cover;
  }
`;

export default HeaderSliderCardStyles;

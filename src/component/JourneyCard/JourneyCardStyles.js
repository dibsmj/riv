import { css } from "@emotion/react";

const JourneyCardStyles = () => css`
  .activejourneycardtitle {
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 100%;
    text-align: center;
    color: #808080;
  }
  .activejourneycardtext {
    font-family: "Arial";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: #8d8d8d;
    mix-blend-mode: normal;
  }
  .journeycardnumber {
    font-family: "Comfortaa";
    font-style: normal;
    font-weight: 300;
    font-size: 64px;
    line-height: 100%;
    text-align: center;
  }
`;

export default JourneyCardStyles;

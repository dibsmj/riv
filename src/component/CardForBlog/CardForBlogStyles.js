import { css } from "@emotion/react";

const CardForBlogStyles = () => css`
  .cardmain {
    background: #ffffff;
    box-shadow: 6px 6px 9.8px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
  }
  .cardcategory {
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 100%;
    text-align: center;
    color: #856acf;
  }
  .cardtitle {
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 100%;
    text-align: center;
    color: #181818;
  }
  .carddescription {
    font-family: "Arial";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: #8d8d8d;
    mix-blend-mode: normal;
  }
  .cardfootertext {
    font-family: "Arial";
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 100%;
    letter-spacing: 0.08em;
    color: #c4c4c4;
    text-align: center;
  }
`;

export default CardForBlogStyles;

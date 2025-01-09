import { css } from "@emotion/react";

const QueryAccordionStyles = () => css`
  .anyquestions {
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 100%;
    color: #181818;
  }
  .wegotyou {
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 18px;
    color: #181818;
    mix-blend-mode: normal;
  }
  .faqtext {
    font-family: "Arial";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 25px;
    color: #181818;
    mix-blend-mode: normal;
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
    font-size: 14px;
    line-height: 25px;
    color: #181818;
    mix-blend-mode: normal;
  }
  .faqinputfield {
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
`;

export default QueryAccordionStyles;

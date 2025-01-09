import { css } from '@emotion/react';

export const faqStyles = () => css`
  .font {
    font-family: 'Arial';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 120%;
  }
  .headerFontTitle {
    font-family: 'Chillax Semibold';
    color: white;
  }
  .headerFontDesc {
    font-family: 'Arial';
    color: #4a3587;
  }
  .resourcescategory {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 6.5625px 10.9375px;
    border: 0.9375px solid #c9c9c9;
    border-radius: 29.0625px;
  }
  .font {
    font-family: 'Chillax Semibold';
  }
  .middlefaqmain {
    background: #f9f5ff;
  }
  .faqleftdoubts {
    color: #fff;
    font-family: 'Chillax Semibold';
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .faqleftheader {
    color: #fff;
    font-family: 'Chillax Semibold';
    font-style: normal;
    font-weight: 700;
  }
  .faqsubheader {
    color: var(--Gray-400, #8896ab);
    font-family: Arial;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
  }
  .faqinput {
    padding: 16px 20px;
    align-items: center;
    gap: 10px;
    border-radius: 4px;
    background: #ffffff;
    border: none;
  }
  .faqinput::placeholder {
    color: #c5c0db;
    font-family: 'Chillax Semibold';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
  .faqquestions {
    color: black;
    font-family: Arial;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
  }
  .faqanswer {
    color: #8896ab;
    font-family: Arial;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
  .MuiAccordion-root {
    box-shadow: none;
    position: inherit;
  }
  .faqsection {
    overflow: hidden;
  }
  .faqsection:hover {
    scroll-behavior: smooth;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .faqsection::-webkit-scrollbar {
    width: 5px;
    background-color: #2a3342;
    color: white;
  }
  .faqsection::-webkit-scrollbar-thumb {
    background-color: #2a3342;
    color: white;
    border-radius: 5px;
  }
  .faqsection::-moz-scrollbar {
    width: 5px;
  }
  .faqsection::-moz-scrollbar-thumb {
    background-color: #2a3342;
    color: white;
    border-radius: 5px;
  }
  .bg {
    background: #f9f5ff;
  }
`;

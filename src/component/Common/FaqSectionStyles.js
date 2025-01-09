import { css } from '@emotion/react';

const FaqSectionStyles = css`
  .middlefaqmain {
    background: #4a3587;
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
    background: #f5f5f5;
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
    color: #fff;
    font-family: Arial;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
  }
  .faqanswer {
    color: #fff;
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
`;

export default FaqSectionStyles;

import { css } from '@emotion/react';

const LandingPageStyles = ({ heights }) => css`
  .headerbackground {
    width: 100%;
    height: 850px;
    margin-button: 40px;
    overflow: hidden;
    flex-shrink: 0;
    background-size: cover;
  }
  @media (max-width: 640px) {
    .headerbackground {
      height: ${heights.mobile};
    }
    #headerVideo {
      height: ${heights.mobile};
      width: 790px;
    }
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    .headerbackground {
      height: ${heights.tablet};
    }
  }
  @media (min-width: 1025px) {
    .headerbackground {
      height: ${heights.desktop};
    }
  }
  @media (min-width: 1440px) and (max-width: 1500px) {
    .headerbackground {
      height: 820px;
    }
  }
  @media (min-width: 1501px) and (max-width: 1800px) {
    .headerbackground {
      height: 945px;
    }
  }
  @media (min-width: 1801px) and (max-width: 1919px) {
    .headerbackground {
      height: 1024px;
    }
  }
  @media (min-width: 1920px) {
    .headerbackground {
      height: 1080px;
    }
  }
  .headersectionheader {
    color: #fff;
    font-family: Arial;
    font-style: normal;
    font-weight: 700;
    line-height: 110%;
  }
  .headersubsectionheader {
    color: #fff;
    font-family: Arial;
    font-style: normal;
    font-weight: 700;
    line-height: 110%;
  }
  .headertextsection {
    flex-direction: column;
    align-items: flex-start;
    gap: 36px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.7);
  }
  .headertextsectionlanding {
    flex-direction: column;
    align-items: flex-start;
    gap: 36px;
  }
  .headertextsectionlandingform {
    border-radius: 8.61px;
    background: #fff;
    box-shadow: 0px 6.888px 13.775px 0px rgba(142, 141, 208, 0.12);
  }
  .igtext {
    color: #18709d;
    font-family: 'Chillax Semibold';
    font-style: normal;
    font-weight: 700;
  }
  .igsubtext {
    color: #21272a;
    font-family: 'Chillax Semibold';
    font-style: normal;
    font-weight: 600;
    line-height: 110%;
  }
  .igsubtextlanding {
    color: #ffffff;
    font-family: 'Chillax Semibold';
    font-style: normal;
    font-weight: 600;
    line-height: 110%;
  }
  .ourcapabilities {
    color: #001d6c;
    text-align: center;
    font-family: 'Chillax Semibold';
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .millionproducts {
    color: #21272a;
    text-align: center;
    font-family: 'Chillax Semibold';
    font-style: normal;
    font-weight: 700;
  }
  .registerbutton {
    padding: 18px 32px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 10px;
    background: #4a3587;
    border: none;
    color: #fff;
    text-align: center;
    font-family: Arial;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }
  .requestdemo {
    background: #2a3342;
    padding: 18px 32px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 10px;
    border: 1px solid #20af98;
    color: #20af98;
    text-align: center;
    font-family: Arial;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }
  .requestvideodemo {
    padding: 18px 32px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 10px;
    border: 1px solid #20af98;
    color: #20af98;
    text-align: center;
    font-family: Arial;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }
  .closebg {
    background: transparent;
  }
`;

export default LandingPageStyles;

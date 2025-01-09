import { css } from '@emotion/react';
import SourceingBackground from '@/assets/CategoryPage/IG/aluminium/sourceingbackground.webp';

const SourchingChallengeStyles = ({ heights }) => css`
  .sourceingback {
    border: 2px solid;
    background: url(${SourceingBackground.src}) no-repeat center center;
    background-size: cover;
  }
  .activebutton {
    background: #4a3587;
    border-radius: 22px 22px 0px 0px;
    font-family: 'Urbanist';
    font-style: normal;
    font-weight: 700;
    line-height: 155%;
    color: #ffffff;
    border: none;
    cursor: pointer;
  }
  .nonActivBbutton {
    background: #fff;
    font-family: 'Urbanist';
    font-style: normal;
    font-weight: 700;
    line-height: 155%;
    color: #000000;
    border: none;

    border-radius: 22px 22px 0px 0px;
    cursor: pointer;
  }
  .borderNonClass {
    border-bottom: 0px solid #4a3587;
  }
  .borderClass {
    border-bottom: 6px solid #4a3587;
  }
  .tabOneTitle {
    font-family: 'Urbanist';
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 119%;
    color: #0f131b;
  }
  .tabTwoDescription {
    font-family: 'Urbanist';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    color: #292a2e;
  }
  .cardOneCertificate {
    filter: drop-shadow(-1px -1px 13px #fafbff)
      drop-shadow(2px 2px 15px rgba(166, 171, 189, 0.5));
  }
  .cardTwoBox {
    box-sizing: border-box;
    background: #ffffff;
    border: 1px solid #4a3587;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
  }
  .tabTwoTitle {
    font-family: 'Urbanist';
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 110%;
    color: #433c3c;
  }
  .tabTwoDescription {
    font-family: 'Urbanist';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 131%;
    color: #433c3c;
  }
`;

export default SourchingChallengeStyles;

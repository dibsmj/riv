import { css } from '@emotion/react';
import EastStepBackground from '@/assets/FirstPage/easysetpbackground.png';
import AluminiumDieCastingBackground from '@/assets/CategoryPage/IG/aluminium/AluminiumDieCastingBackground.webp';

const AluminiumDieCastingStyles = ({ heights }) => css`
  .resourcestype {
    color: #6941c6;
  }
  .headerbackground {
    height: ${heights.default};
    background: url(${AluminiumDieCastingBackground.src}) no-repeat center center;
    background-size: cover;
  }
  @media (min-width: 350px) and (max-width: 539px) {
    .headerbackground {
      height: 600px;
    }
  }
  @media (min-width: 540px) and (max-width: 650px) {
    .headerbackground {
      height: 700px;
    }
  }
  @media (min-width: 651px) and (max-width: 749px) {
    .headerbackground {
      height: 660;
    }
  }
  @media (min-width: 750px) and (max-width: 900px) {
    .headerbackground {
      height: 600px;
    }
  }
  @media (min-width: 900px) and (max-width: 1200px) {
    .headerbackground {
      height: 700px;
    }
  }
  @media (min-width: 1201px) {
    .headerbackground {
      height: ${heights.desktop};
    }
  }
  .esaystep {
    background: url(${EastStepBackground.src}) no-repeat center center;
    background-size: cover;
    opacity: 0.76;
    border-radius: 0px 0px 0px 114px;
  }
  .effortlessly {
    background: linear-gradient(
      88.81deg,
      rgba(255, 230, 142, 0) -0.15%,
      #f3f8ff 33.24%,
      #ffffff 64.13%,
      #f4f9ff 78.87%,
      #f8f3e7 109.42%
    );
  }
  .subProcessName {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 7px 20px;
    gap: 10px;
    background: #e2d8ff;
    border-bottom: 1px solid #4a3587;
    font-family: 'Chillax Semibold';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #312e2e;
  }
  .headerTitle {
    font-family: 'Chillax Semibold';
    font-style: normal;
    font-weight: 600;
    leading-trim: both;
    text-edge: cap;
    text-align: center;
    text-transform: capitalize;
    color: #35343b;
  }
  .headerSubTitle {
    font-family: 'Chillax Semibold';
    font-style: normal;
    font-weight: 600;
    leading-trim: both;
    text-edge: cap;
    text-align: center;
    text-transform: capitalize;
    color: #4a3587;
  }
`;

export default AluminiumDieCastingStyles;

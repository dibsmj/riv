import { css } from '@emotion/react';
import Circle from '@/assets/CategoryPage/IG/circle.svg';

const FeaturesSectionStyles = css`
  .featuretext {
    color: #001d6c;
    font-family: 'Chillax Semibold';
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .featureheadertext {
    color: #21272a;
    font-family: 'Chillax Semibold';
    font-style: normal;
    font-weight: 700;
  }
  .featurecicle {
    height: 50px;
    width: 50px;
    background: url(${Circle.src}) no-repeat;
  }
  .featurenumber {
    color: #fff;
    text-align: center;
    font-feature-settings: 'salt' on;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: -0.4px;
    top: 8px;
    position: relative;
  }
  .featureheading {
    color: #2a3342;
    font-family: 'Chillax Semibold';
    font-style: normal;
    font-weight: 700;
  }
  .featuredescription {
    color: #556987;
    font-family: Arial;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
`;

export default FeaturesSectionStyles;

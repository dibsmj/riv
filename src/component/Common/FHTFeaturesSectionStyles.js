import { css } from '@emotion/react';
import FeatureBackground from '@/assets/CategoryPage/FHT/fht_feature_background.webp';

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
  .featurebackground {
    background: linear-gradient(180deg, #fff 0%, #e0edfe 100%);
  }
  .containerfeature {
    width: 100%;
    background-image: url(${FeatureBackground.src});
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .featureicondiv {
    border-radius: 6px;
    // background: #20af98;
  }
  .featuretitle {
    color: #2a3342;
    text-align: center;
    font-family: 'Chillax Semibold';
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
  }
  .featuredesc {
    color: #556987;
    text-align: center;
    font-family: Arial;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
`;

export default FeaturesSectionStyles;

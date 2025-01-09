import { css } from '@emotion/react';

const WhyChooseStyles = ({ heights }) => css`
  .whychooseuscard {
    align-items: flex-start;
    padding: 40px;
    gap: 10px;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 6px 2px 22px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
  }
  .whychoosecardheadertext {
    font-family: 'Arial';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 120%;
    color: #272323;
  }
  .whychoosecarddesc {
    font-family: 'Arial';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    color: #272323;
    grow: 0;
  }
`;

export default WhyChooseStyles;

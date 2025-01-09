import { css } from '@emotion/react';
import { ResourcesBackGround } from '../../config/GetImages';

const ResourcesStyles = ({ heights }) => css`
  .resourcesheader {
    background: url(${ResourcesBackGround.src}) no-repeat center center;
    background-size: cover;
  }
  .resourcestype {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 12px;
    background-color: #f9f5ff;
    border: 1px solid #4a3587;
    border-radius: 16px;
    font-family: 'Arial';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #6941c6;
  }
  .resourcesh1 {
    font-family: 'Chillax Semibold';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    letter-spacing: -0.02em;
    color: #42307d;
    align-self: stretch;
  }
  .resourcesh2 {
    font-family: 'Arial';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #6941c6;
    align-self: stretch;
  }
  .resourcescategory {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 6.5625px 15.9375px;
    background: #ffffff;
    border: 0.9375px solid #c9c9c9;
    border-radius: 29.0625px;
  }
  .searchtype {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 16px;
    gap: 8px;
    background: #ffffff;
    border: 1px solid #d0d5dd;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
  }
`;

export default ResourcesStyles;

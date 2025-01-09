import { css } from '@emotion/react';

const PerfectMaterialStyles = () => css`
  .partnamesub {
    font-family: 'Urbanist';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    leading-trim: both;
    text-edge: cap;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    border-radius: 5px;
    border: 1px solid #ffffff;
    grow: 0;
  }
  .materialTitle {
    font-family: 'Chillax Semibold';
    font-style: normal;
    font-weight: 600;
    line-height: 120px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #ffffff;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
  .activeButtom {
    background: #fff;
  }
  .nonActiveButton {
    background: #4a3587;
  }
`;

export default PerfectMaterialStyles;

import { css } from '@emotion/react';

const SubProcessProductsStyles = () => css`
  .materialhandled {
    background: #fff;
  }
  .partnamesub {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 30px;
    gap: 10px;
    background: #ffffff;
    border: 1px solid #dadada;
    border-radius: 10px;
    font-family: 'Urbanist';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    leading-trim: both;
    text-edge: cap;
    color: #4a3587;
  }
  .productTitle {
    font-family: 'Urbanist';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    leading-trim: both;
    text-edge: cap;
    color: #ffffff;
  }
  .productdescription {
    font-family: 'Urbanist';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    leading-trim: both;
    text-edge: cap;
    text-align: center;
    color: #ffffff;
  }
`;

export default SubProcessProductsStyles;

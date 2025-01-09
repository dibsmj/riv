import { css } from '@emotion/react';

const FHTCategorySectionStyles = css`
  .categoryoverlay::after {
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      lightgray 50% / cover no-repeat;
  }
  .subcategory {
    border-radius: 4px;
    background: #fff;
    box-shadow: 0px 6.888px 13.775px 0px rgba(142, 141, 208, 0.12);
  }
  .subcategoryfirstdiv {
    border-radius: 4px 4px 0px 0px;
    border-bottom: 1px solid #bab9b99;
  }
  .subcategoryname {
    color: #000;
    text-align: center;
    font-family: Arial;
    font-style: normal;
    font-weight: 600;
    line-height: 110%;
  }
  .categorytitle {
    color: #fff;
    text-align: center;
    font-family: Arial;
    font-style: normal;
    font-weight: 700;
  }
  .categorydesc {
    color: #fff;
    font-family: Arial;
    font-style: normal;
    font-weight: 500;
    line-height: 131%;
  }
  .vewallbtn {
    display: inline-flex;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #4a3587;
    color: #fff;
    text-align: center;
    font-family: Arial;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
    border: none;
  }
`;

export default FHTCategorySectionStyles;

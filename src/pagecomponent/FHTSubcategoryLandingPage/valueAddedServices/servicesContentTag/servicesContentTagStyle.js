import { css } from '@emotion/react';

export const servicesContentTag = () => css`
  .tag-box {
    display: flex;
    padding: 20px 29px;
    gap: 10px;
    border-radius: 14px;
    background-color: border-radius: 14px;
    background: #F4F4F4;
    position: relative;
    overflow: hidden;
  }

  .tag-image {
    display: flex;
    align-items: center;
    align-items: center;
    padding: 7px;
    background-color: #fff;
    border-radius: 50%;
    height:30px;
  }

  .tag-title {
    color: #FFF;
    font-family: Arial;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .description {
    max-height: 0;
    opacity: 0;
    // transition: max-height 0.3s ease, opacity 0.3s ease;
    text-align:center;
    margin-top:10px;
    font-size: 12px;
  }

  .description.expanded {
    max-height: 1000px; 
    opacity: 1;
    transition: max-height 0.3s ease, opacity 0.3s ease;
  }
`;

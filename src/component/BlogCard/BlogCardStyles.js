import { css } from '@emotion/react';

const BlogCardStyles = () => css`
  .cardcategory {
    font-family: 'Chillax Semibold';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #6941c6;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }
  .cardheader {
    font-family: 'Arial';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 32px;
    flex: none;
    order: 0;
    flex-grow: 1;
  }
  .carddescription {
    font-family: 'Arial';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #667085;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
  }
  .cardfootertext {
    font-family: 'Arial';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 100%;
    leading-trim: both;
    text-edge: cap;
    text-transform: capitalize;
    color: #777777;
    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;

export default BlogCardStyles;

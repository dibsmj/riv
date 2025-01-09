import { css } from '@emotion/react';

const BlogSectionStyles = css`
  .blogheadertitle {
    color: #21272a;
    text-align: center;
    font-family: 'Chillax Semibold';
    font-style: normal;
    font-weight: 700;
  }
  .blogdate {
    color: #556987;
    font-family: Arial;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }
  .blogtext {
    color: #001d6c;
    text-align: center;
    font-family: 'Chillax Semibold';
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .blogtitle {
    color: #333f51;
    font-family: 'Chillax Semibold';
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
  }
  .blogdescription {
    color: #8896ab;
    font-family: Arial;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
  }
  .registerbutton {
    padding: 18px 32px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 10px;
    background: #4a3587;
    border: none;
    color: #fff;
    text-align: center;
    font-family: Arial;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }
`;

export default BlogSectionStyles;

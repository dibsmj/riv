import { css } from '@emotion/react';

const BlogPagesStyles = ({ heights }) => css`
  .blogsingletitle {
    font-family: 'Chillax Semibold';
    font-style: normal;
    font-size: 21px;
    line-height: 140%;
    text-transform: capitalize;
    color: #333333;
  }
  .blogsingle h2 {
    font-family: 'Chillax Semibold';
    font-style: normal;
    line-height: 140%;
    // text-transform: capitalize;
    color: #333333;
  }
  .blogsingle h3 {
    font-family: 'Chillax Semibold';
    font-style: normal;
    line-height: 140%;
    // text-transform: capitalize;
    color: #333333;
  }
  .blogsingle p {
    font-family: 'Arial';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 150%;
    color: #666666;
  }
  .blogsingle ul li {
    font-family: 'Arial';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 150%;
    color: #666666;
  }
  .blogsingle ol li {
    font-family: 'Arial';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 150%;
    color: #666666;
  }
  .blogsingle a {
    font-family: 'Arial';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 150%;
    color: #666666;
  }
  .blogsingle span {
    font-family: 'Arial';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 150%;
    color: #666666;
  }
  .blogsingle img {
    width: 100%;
    height: 100%;
  }
  .blogsingledesc {
    font-family: 'Arial';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 150%;
    color: #666666;
  }
  .headertitle {
    font-family: 'Chillax Semibold';
    font-style: normal;
    color: #222222;
  }
  .blogfootertext {
    font-family: 'Arial';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
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

export default BlogPagesStyles;

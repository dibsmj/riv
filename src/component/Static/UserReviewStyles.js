import { css } from '@emotion/react';

const UserReviewStyles = ({ heights }) => css`
  .usersayauthor {
    font-family: 'Arial';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
    display: flex;
    align-items: center;
    color: #ffffff;
  }
  .usersaydesc {
    font-family: 'Arial';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    color: #ffffff;
  }
`;

export default UserReviewStyles;

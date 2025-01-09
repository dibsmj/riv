import { css } from '@emotion/react';
import { colors } from '../../constants/stylesConstants';

const EnquiryFormStyles = css`
  .header-font {
    font-family: 'Chillax Variable';
    font-weight: 700;
    color: #4a3587;
  }
  .center-col {
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
  .arrowLeft {
    position: relative;
    width: 0;
    height: 0;
  }

  .arrowLeft::before {
    content: '';
    position: absolute;
    top: -35px;
    left: 25px;
    width: 0;
    height: 0;
    border-top: 15px solid transparent; /* Adjust the size of the arrow */
    border-bottom: 15px solid transparent;
    border-right: 15px solid #cd82ab; /* Arrow fill color */
  }
  .arrowRight {
    position: relative;
    width: 0;
    height: 0;
  }

  .arrowRight::before {
    content: '';
    position: absolute;
    top: 5px;
    width: 0;
    height: 0;
    border-top: 15px solid transparent; /* Adjust the size of the arrow */
    border-bottom: 15px solid transparent;
    border-left: 15px solid #2ab8a1; /* Arrow fill color */
  }
  .leftTextColor {
    color: #cd82ab;
    font-weight: 600;
  }
  .rightTextColor {
    color: #2ab8a1;
    font-weight: 600;
  }
  .header-text {
    font-family: 'Arial', sans-serif;
  }
  .imageClass {
    border-radius: 16px;
  }
  .categorydiv {
    justify-content: center;
    align-items: center;
    background: #e2d8ff;
  }
  .categorydRating {
    position: relative;
    margin: auto;
  }
  .categorydRatingDiv {
    position: absolute;
    top: -60px;
    margin: auto;
    width: 100%;
    padding: 30px;
    gap: 8px;
    border-radius: 80px;
    background: #4a3587;
    color: ${colors.primaryWhite};
  }
  .ratingDiv {
    margin: auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: ${colors.primaryWhite};
  }
  .ratingChildOne {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: ${colors.primaryWhite};
  }
  .explorebtn {
    border-radius: 21px;
    padding: 14px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    position: relative;
    border: none;
    color: white;
  }
  .explorebtn::after {
    content: '';
    height: 6px;
    position: absolute;
    left: -7px;
    right: -7px;
    bottom: -1px;
    border-top: none;
    background: -webkit-linear-gradient(
      to right,
      #e8c21d 0%,
      #e8c21d 25%,
      #1babe2 25%,
      #1babe2 50%,
      #db78a1 50%,
      #db78a1 75%,
      #20af98 75%,
      #20af98 100%
    );
    background: linear-gradient(
      to right,
      #e8c21d 0%,
      #e8c21d 25%,
      #1babe2 25%,
      #1babe2 50%,
      #db78a1 50%,
      #db78a1 75%,
      #20af98 75%,
      #20af98 100%
    );
  }
  .btn-explore {
    background-color: #4a3587;
    border-color: #4a3587;
    overflow: hidden;
  }
  .btn-explore:hover {
    background-color: #4a3587;
    border-color: #4a3587;
    overflow: hidden;
  }
  .marginButtom {
    margin: 0.5rem;
  }
  .rowDiv {
    display: flex;
    margin-bottom: 0.5rem;
  }
  .errorMessage {
    color: ${colors.statusRed};
  }
  .mainRowDiv {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.5rem;
  }
  @media (min-width: 1200px) {
    .mainRowDiv {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  .enquiryclass {
    background: transparent;
    cursor: pointer;
  }
`;

export default EnquiryFormStyles;

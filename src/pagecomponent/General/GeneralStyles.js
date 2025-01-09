import { css } from '@emotion/react';
import { ThankyouBackground } from '../../config/GetImages';

const GeneralStyles = ({ heights }) => css`
  .thankyoutext {
    font-family: 'Chillax Semibold';
    font-style: normal;
    font-weight: 600;
    line-height: 46px;
    color: #747474;
  }
  .thanyoudescription {
    font-family: 'Arial';
    font-style: normal;
    font-weight: 600;
    line-height: 46px;
    text-edge: cap;
    display: flex;
    align-items: center;
    text-align: center;
    color: #747474;
  }
  .thnakyoufooter {
    background: url(${ThankyouBackground.src}) no-repeat center center;
    background-size: cover;
  }
`;

export default GeneralStyles;

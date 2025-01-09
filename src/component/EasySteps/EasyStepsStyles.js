import { css } from '@emotion/react';

const EasyStepsStyles = () => css`
  .formanufacturetitle {
    font-family: 'Chillax Semibold';
    font-style: normal;
    font-weight: 600;
    line-height: 67px;
    display: flex;
    align-items: center;
    color: #222426;
  }
  .esaystepsone {
    background: #ddf2ff;
    box-shadow: 6px 2px 22px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
  .easystepstwo {
    background: #ffffff;
    box-shadow: 6px 2px 22px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    flex: none;
    order: 1;
    flex-grow: 0;
  }
  .easystepstitle {
    font-family: 'Chillax Semibold';
    font-style: normal;
    font-weight: 600;
    font-size: 26.7969px;
    line-height: 33px;
    align-items: center;
    color: #181313;
    border-left: 2px solid #4a3587;
    border-top: 0px;
    border-bottom: 0px;
    border-right: 0px;
  }
  .easystepsdesc {
    font-family: 'Arial';
    font-style: normal;
    font-weight: 400;
    font-size: 17.6px;
    line-height: 27px;
    color: #181313;
  }
`;

export default EasyStepsStyles;

import { css } from "@emotion/react";

const ChatBotStyles = () => css`
  .chatbotbody {
    position: relative;
    background: #ffffff;
    --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    --tw-shadow-colored: 0 50px 75px -12px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    border-radius: 20px; /* Rounded corners */
    overflow: hidden; /* Prevent scroll */
  }

  .chatbotheader {
    position: relative;
    left: 0px;
    top: 0px;
    margin: auto;
    padding: 2rem 0rem;
    background: linear-gradient(87.2deg, #4a3587 -2.53%, #120d21 152.2%);
  }
  .chatbotsubheader {
    position: absolute;
    display: flex;
    flex-direction: row;
    gap: 5rem;
    text-align: center;
    margin: auto;
    box-sizing: border-box;
    padding: 2.5242px 24px;
    background: #ffffff;
    border-bottom: 0.544126px solid #4a3587;
    box-shadow: 0px 0px 56.4831px rgba(0, 0, 0, 0.05);
    border-radius: 9.68282px;
    align-items: center;
    justify-content: center;
    left: 50%;
    top: 3.5rem;
    transform: translate(-50%, -50%);
  }
  .chatbotsubheaderdiv {
    display: flex;
    flex-direction: column;
  }
  .chatbotsubheaderdiv button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
  .chatbotsubheaderimage {
    height: 100%;
    width: 100%;
  }
  .chatmessagebody {
    margin: auto;
    text-align: center;
    position: relative;
    height: 100%;
  }
  .enquiryparentdiv {
    padding: 2rem;
    height: 94vh;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .userChatSection {
    align-items: center;
    padding: 10px;
    gap: 8px;
    background: #d9ddff;
    border-radius: 12px;
    font-family: Arial;
    font-size: 18px;
    font-weight: 400;
  }
  .robotchatsection {
    align-items: center;
    padding: 10px;
    gap: 8px;
    background: #4a3587;
    border-radius: 12px;
    color: white;
    font-family: Arial;
    font-size: 18px;
    font-weight: 400;
  }
  .hithere {
    font-family: "Chillax";
    font-style: normal;
    font-weight: 600;
    font-size: 20.1679px;
    line-height: 120%;
    color: #524646;
    opacity: 0.7;
  }
  .howcanwehelp {
    font-family: "Chillax";
    font-style: normal;
    font-weight: 600;
    font-size: 20.1679px;
    line-height: 120%;
    color: #4a3587;
  }
  .allserviceenquiry {
    font-family: "Chillax";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    color: #4a3587;
  }
  .emptysubtext {
    font-family: "Urbanist";
    font-style: normal;
    font-weight: 400;
    font-size: 8.8976px;
    line-height: 120%;
    color: #463333;
  }
  .chatinputfield {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    transform: translate(-0%, -50%);
    margin: auto;
    text-align: center;
  }
  .chatinputfield div {
    position: relative;
  }
  .inputfield {
    align-items: center;
    padding: 11.8635px;
    gap: 17.8px;
    width: 90%;
    height: 44px;
    left: 20px;
    background: #fafafa;
  }
  .chatbutton {
    position: absolute;
    bottom: 15px;
    right: 25px;
    background: transparent;
    border: none;
    cursor: pointer;
  }
  .buttonimage {
    width: 35px;
  }
  .faqparentdiv {
    height: 110vh;
    overflow-x: hidden;
    overflow-y: scroll;
    border: none;
    position: relative;
  }
  .faqchatinput {
    padding: 16px 20px;
    align-items: center;
    gap: 10px;
    border-radius: 4px;
    background: #f5f5f5;
  }
  .faqchatinput::placeholder {
    color: #c5c0db;
    font-family: "Chillax Semibold";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
  .faqquestions {
    font-family: Arial;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
  }
  .faqanswerchat {
    color: #8896ab;
    font-family: Arial;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
  .middlefaqmainchat {
    background: #ffffff;
    box-shadow: 0px 7.25532px 14.5106px rgba(75, 52, 37, 0.05);
    border-radius: 1119.13px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
  }
  .MuiAccordion-root {
    box-shadow: none;
    position: inherit;
  }
  .faqsectionchat {
    overflow: hidden;
  }
  .faqsectionchat:hover {
    scroll-behavior: smooth;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .faqsectionchat::-webkit-scrollbar {
    width: 5px;
    background-color: #2a3342;
    color: white;
  }
  .faqsectionchat::-webkit-scrollbar-thumb {
    background-color: #2a3342;
    color: white;
    border-radius: 5px;
  }
  .faqsectionchat::-moz-scrollbar {
    width: 5px;
  }
  .faqsectionchat::-moz-scrollbar-thumb {
    background-color: #2a3342;
    color: white;
    border-radius: 5px;
  }
  .differentform > h2 > button > .MuiSvgIcon-root {
    display: none;
  }
  .differentform > h2 {
    background: #fff;
  }
  .differentform .MuiDialogContent-root {
    background: #fff;
  }
`;

export default ChatBotStyles;

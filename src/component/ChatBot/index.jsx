/** @jsxImportSource @emotion/react */
"use client";
import { useState, Suspense, useEffect } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import ChatBotStyles from "./ChatBotStyles";
import ChatIcon from "@/assets/chatbot/Chat_chat.png";
import ChatIconActive from "@/assets/chatbot/Chat_chat_active.png";
import EnquiryIcon from "@/assets/chatbot/Enquire_chat.png";
import EnquiryIconActive from "@/assets/chatbot/Enquire_chat_active.png";
import ChatTab from "./ChatTab";
import EnquirySection from "./EnquirySection";

const ChatBot = ({
  open = false,
  fromPage = "All",
  messages = [],
  setMessages = () => {},
  activeTab = "enquiry",
  setActiveTab = () => {},
}) => {
  useEffect(() => {
    if (messages && messages.length > 0) {
      setActiveTab("chat");
    }
  }, [messages]);

  const tabs = [
    { name: "chat", icon: ChatIcon, activeIcon: ChatIconActive },
    { name: "enquiry", icon: EnquiryIcon, activeIcon: EnquiryIconActive },
  ];

  return (
    <div css={ChatBotStyles} className="h-[116vh] md:h-[116vh] xs:h-[99vh]">
      <div className="chatbotbody">
        <div className="chatbotheader z-50" />
          {/* <div className="chatbotsubheader">
            {tabs.map(({ name, icon, activeIcon }) => (
              <div key={name} className="chatbotsubheaderdiv">
                <button onClick={() => setActiveTab(name)} type="button">
                  <Image
                    src={activeTab === name ? activeIcon : icon}
                    alt={name}
                  />
                </button>
              </div>
            ))}
          </div>
        </div> */}
        <div className="chatmessagebody">
          <Suspense fallback={<div>Loading...</div>}>
            {activeTab === "chat" && (
              <div className=" p-4 overflow-x-hidden overflow-y-auto h-[109.5vh]">
                <ChatTab messages={messages} setMessages={setMessages} />
              </div>
            )}
            {activeTab === "enquiry" && (
              <div className=" p-4 overflow-x-hidden overflow-y-auto md:h-[109vh] xs:h-[80.5vh]">
                <EnquirySection open={open} />
              </div>
            )}
            {activeTab === "faq" && (
              <div className="faqparentdiv">
                <FaqChatSection title="" description="" faqData={faqsArray} />
              </div>
            )}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

ChatBot.propTypes = {
  open: PropTypes.bool,
  fromPage: PropTypes.string,
  messages: PropTypes.array,
  setMessages: PropTypes.func,
  activeTab: PropTypes.string,
  setActiveTab: PropTypes.func,
};

export default ChatBot;

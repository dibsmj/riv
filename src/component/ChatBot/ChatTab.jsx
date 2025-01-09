/** @jsxImportSource @emotion/react */
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import Typewriter from "typewriter-effect";
import { useGetHeaderSearchMutation } from "@/redux/slices/apiSlice";
import EmptyBotIcon from "@/assets/chatbot/empty_bot_icon.png";
import UserChatIcon from "@/assets/FirstPage/user-chat-icon.png";
import RobotChatIcon from "@/assets/FirstPage/chat-icon.png";
import SendIcon from "@/assets/FirstPage/send.png";

const Loader = () => {
  const [text, setText] = useState("");
  const placeholderText = "...";
  const typingSpeed = 500;
  let timeoutRef = null;

  useEffect(() => {
    const typeText = () => {
      if (text.length === placeholderText.length) {
        setText("");
      } else {
        setText((prevText) => prevText + placeholderText[text.length]);
      }
    };
    timeoutRef = setTimeout(typeText, typingSpeed);
    return () => clearTimeout(timeoutRef);
  }, [text]);
  return (
    <div className="align-middle justify-center items-center w-6 h-6 text-primaryWhite text-[2rem] relative -top-3.5">
      {text}
    </div>
  );
};

const TypewriterWrapper = ({ messageContent, onTypingEnd }) => {
  const [content, setContent] = useState("...");
  const [key, setKey] = useState(0);

  useEffect(() => {
    setContent("");
    setTimeout(() => {
      setContent(messageContent);
      setKey((prevKey) => prevKey + 1);
    }, 500);
  }, [messageContent]);

  return (
    <Typewriter
      key={key}
      onInit={(typewriter) => {
        typewriter
          .typeString(content)
          .callFunction(() => {
            setTimeout(() => {
              const cursorElements = document.querySelectorAll(
                ".Typewriter__cursor"
              );
              cursorElements.forEach((cursorElement) => {
                cursorElement.style.display = "none";
              });
            }, 100);
          })
          .pauseFor(1000)
          .callFunction(() => {
            onTypingEnd();
          })
          .start();
      }}
      options={{
        delay: 10,
        cursor: "|",
        deleteSpeed: 5,
      }}
    />
  );
};

TypewriterWrapper.propTypes = {
  messageContent: PropTypes.string.isRequired,
  onTypingEnd: PropTypes.func.isRequired,
};

const ChatTab = ({ messages, setMessages }) => {
  const [getMoreQuery, setMoreQuery] = useState("");
  const [getMoreQueryLoader, setMoreQueryLoader] = useState(false);
  const [getSearch] = useGetHeaderSearchMutation();
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const sendSecondAndMoreMessage = async () => {
    setMoreQueryLoader(true);

    if (getMoreQuery) {
      const payload = { query: getMoreQuery };
      const initialApiResponse = [
        {
          id: messages.length + 1,
          type: "user",
          isUser: true,
          content: getMoreQuery,
        },
        {
          id: messages.length + 2,
          type: "robot",
          isUser: false,
          content: "...",
          isLoading: true,
          isDisplayed: false,
        },
      ];
      setMessages((prevMessages) => [...prevMessages, ...initialApiResponse]);

      try {
        const { data } = await getSearch(payload);
        const updatedApiResponse = [
          { ...initialApiResponse[0] },
          {
            ...initialApiResponse[1],
            content: data?.response || "No response",
            isLoading: false,
          },
        ];
        setMessages((prevMessages) => {
          const newMessages = [...prevMessages];
          newMessages.splice(-2, 2, ...updatedApiResponse);
          return newMessages;
        });
      } catch (error) {
        console.error("Error fetching API response:", error);
      } finally {
        setMoreQuery("");
        setTimeout(() => setMoreQueryLoader(false), 1000);
      }
    }
  };

  return (
    <>
      <div className="chatmessagebody">
        {messages.length === 0 && (
          <div className="enquiryparentdiv">
            <Image src={EmptyBotIcon} alt="EmptyBotIcon" className="mt-7" />
            <div className="grid grid-cols-1 m-auto text-center justify-center">
              <div className="howcanwehelp">
                Hi there, I am riv! How can I help you?
              </div>
            </div>
          </div>
        )}
        {messages.length > 0 && (
          <div className="enquiryparentdiv">
            {messages.map((message, index) => (
              <div
                key={message.id}
                className="w-full inline-flex flex-row justify-start items-start text-left gap-5 space-y-8"
              >
                <div className="flex-shrink-0 self-start relative top-7">
                  <Image
                    src={message.isUser ? UserChatIcon : RobotChatIcon}
                    alt={message.isUser ? "UserChatIcon" : "RobotChatIcon"}
                    className="w-8 h-8"
                  />
                </div>
                <div
                  className={`${
                    message.isUser ? "userChatSection" : "robotchatsection"
                  }`}
                >
                  {message.isUser ? (
                    message.content
                  ) : message.isLoading ? (
                    <Loader />
                  ) : !message.isDisplayed ? (
                    <TypewriterWrapper
                      messageContent={message.content}
                      onTypingEnd={() => {
                        setMessages((prevMessages) => {
                          const updatedMessages = [...prevMessages];
                          updatedMessages[index].isDisplayed = true;
                          return updatedMessages;
                        });
                      }}
                    />
                  ) : (
                    <div
                      dangerouslySetInnerHTML={{ __html: message.content }}
                    />
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>
      <div className="chatinputfield">
        <div>
          <input
            placeholder=""
            value={getMoreQuery}
            onChange={(e) => setMoreQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendSecondAndMoreMessage();
              }
            }}
            className={` placeholder:text-grayLight placeholder:text-lg placeholder:font-medium placeholder:font-['Urbanist'] bg-[#FAFAFA] rounded-3xl w-[80%] h-14 shadow-md focus:outline-none indent-5`}
          />
          <button
            type="button"
            onClick={sendSecondAndMoreMessage}
            disabled={getMoreQuery === "" || getMoreQueryLoader}
            className="cursor-pointer flex justify-center items-center m-auto p-2 border-none absolute rounded-full bg-[#856ACF] top-3 right-[1rem] xs:right-[2.5rem] sm:right-[2.5rem] ssm:right-[3rem] md:right-[6rem] lg:right-[6rem]"
          >
            <Image src={SendIcon} alt="SendIcon" />
          </button>
        </div>
        <small className="text-[12px] italic">
          The response has been generated through AI and may not be correct at
          all times. Please use your discretion.
        </small>
      </div>
    </>
  );
};

ChatTab.defaultProps = {
  messages: [],
  setMessages: () => {},
};

ChatTab.propTypes = {
  messages: PropTypes.array,
  setMessages: PropTypes.func,
};

export default ChatTab;

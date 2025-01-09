/** @jsxImportSource @emotion/react */
"use client";
import { useEffect, useState, useRef, memo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import { useGetHeaderSearchMutation } from "@/redux/slices/apiSlice";
import dynamic from "next/dynamic";
import Search from "@/assets/FirstPage/search.png";

const ReactTypingAnimation = dynamic(() =>
  import("@/pagecomponent/FirstPage/components/ReactTypingAnimation")
);

const HeaderSearch = memo(
  ({ messages, setMessages, setIsAutoOpenEnquiryModal, setActiveTab }) => {
    const placeholders = [
      "Hello...",
      "I am riv your virtual assistant.....",
      "I am here to assist you with your queries....",
    ];
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
    const [getSearch] = useGetHeaderSearchMutation();

    const messagesEndRef = useRef(null);
    useEffect(() => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
      }
    }, [messages]);
    const [getFirstQuery, setFirstQuery] = useState("");
    const [getFirstQueryLoader, setFirstQueryLoader] = useState(false);
    const sendFirstMessage = async () => {
      if (getFirstQuery) {
        setActiveTab("chat");
        setFirstQueryLoader(true);
        setIsAutoOpenEnquiryModal(true);
        const payload = { query: getFirstQuery };
        const initialApiResponse = [
          {
            id: messages.length + 1,
            type: "user",
            isUser: true,
            content: getFirstQuery,
          },
          {
            id: messages.length + 2,
            type: "robot",
            isUser: false,
            content: text,
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
          setFirstQuery("");
          setMessages((prevMessages) => {
            const newMessages = [...prevMessages];
            newMessages.splice(-2, 2, ...updatedApiResponse);
            return newMessages;
          });
          setTimeout(() => {
            setFirstQueryLoader(false);
          }, 500);
        } catch (error) {
          console.error("Error fetching API response:", error);
        } finally {
          setFirstQuery("");
          setTimeout(() => setFirstQueryLoader(false), 1000);
        }
      }
    };
    return (
      <div className="grid grid-cols-1 h-[inherit]">
        <div className="relative">
          <ReactTypingAnimation
            placeholders={placeholders}
            value={getFirstQuery}
            onChange={(value) => {
              setFirstQuery(value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendFirstMessage();
              }
            }}
            className={`rivsearchinput placeholder:text-[#3f3f3f] placeholder:text-[1rem] placeholder:font-['Arial'] bg-primaryWhite rounded-3xl w-[90%] sm:w-[95%] xs:w-[95%] ssm:w-[90%] md:w-[90%] h-14 border-none shadow-none focus:outline-none indent-5`}
          />
          <button
            type="button"
            onClick={sendFirstMessage}
            disabled={getFirstQuery === "" || getFirstQueryLoader}
            className="cursor-pointer flex justify-center items-center m-auto p-2 border-none absolute rounded-full bg-[#856ACF] top-2 right-[3rem] xs:right-[2.5rem] sm:right-[2.5rem] ssm:right-[5rem] md:right-[5rem] lg:right-[5.5rem] xl:right-[6.5rem] w-10 h-10 xs:w-8 xs:h-8 sm:w-8 sm:h-8 ssm:w-10 ssm:h-10"
          >
            {!getFirstQueryLoader && (
              <Image
                src={Search}
                alt="Search"
                priority={false}
                quality={1}
                className="w-full h-full object-contain" // Ensures the image fully fills the button
              />
            )}
            {getFirstQueryLoader && (
              <div className="align-middle justify-center items-center w-6 h-6 text-primaryWhite text-[2rem] relative -top-3.5">
                {text}
              </div>
            )}
          </button>
        </div>
      </div>
    );
  }
);

HeaderSearch.propTypes = {
  messages: PropTypes.array.isRequired,
  setMessages: PropTypes.func.isRequired,
  setIsAutoOpenEnquiryModal: PropTypes.func.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default HeaderSearch;

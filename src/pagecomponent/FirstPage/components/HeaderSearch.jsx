/** @jsxImportSource @emotion/react */
"use client";
import { useEffect, useState, useRef, memo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import { useGetHeaderSearchMutation } from "@/redux/slices/apiSlice";
import Search from "@/assets/FirstPage/search.png";
import ReactTypingAnimation from "./ReactTypingAnimation";

const HeaderSearch = memo(
  ({ headerTitle, messages, setMessages, setIsAutoOpenEnquiryModal }) => {
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
        <div className="w-[50%] xs:w-full sm:w-full ssm:w-[80%] md:w-[80%] lg:w-[65%] m-auto">
          <div className="text-center -mt-[3.5rem]">
            <div className="xs:w-full sm:w-full ssm:w-[90%] md:w-[90%] lg:w-[90%] m-auto flex text-center justify-center items-center align-middle">
              <h1 className="headertitle text-[58px] xs:text-[37px] sm:text-[37px] ssm:text-[45px] md:text-[58px] lg:text-[58px]">
                {headerTitle}
              </h1>
            </div>
            <h2 className="headersubtitle flex justify-center text-[21px] xs:text-[17px] sm:text-[17px] ssm:text-[20px] md:text-[21px] lg:text-[21px]">
              We enable seamless end to end sourcing for custom manufactured
              goods from verified manufacturers.
            </h2>
            <div className="relative mt-10">
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
                className={`placeholder:font-light placeholder:text-grayLight placeholder:text-lg placeholder:font-['Urbanist'] bg-primaryWhite rounded-3xl w-[90%] h-14 border-none shadow-none focus:outline-none indent-5`}
              />
              <button
                type="button"
                onClick={sendFirstMessage}
                disabled={getFirstQuery === "" || getFirstQueryLoader}
                className="cursor-pointer flex justify-center items-center m-auto p-2 border-none absolute rounded-full bg-[#856ACF] top-2.5 right-[3rem] xs:right-[2.5rem] sm:right-[2.5rem] ssm:right-[5rem] md:right-[5rem] lg:right-[4rem]"
              >
                {!getFirstQueryLoader && <Image src={Search} alt="Search" />}
                {getFirstQueryLoader && (
                  <div className=" align-middle justify-center items-center w-6 h-6 text-primaryWhite text-[2rem] relative -top-3.5">
                    {text}
                  </div>
                )}
              </button>
            </div>
          </div>
          <div className="relative top-5 xs:top-2 sm:top-2 ssm:top-2 md:top-5 lg:top-5 text-center px-4">
            {/* <div className="headernews">News & announcements</div> */}
            {/* <div className=" flex flex-row xs:flex-col sm:flex-col ssm:flex-col md:flex-row lg:flex-row headernewsdiv rounded-3xl mt-[2rem]">
              <div className=" flex-shrink-0 text-center mt-1">
                <div className="flex bg-[#98F2CA] py-[5px] px-[8px] rounded-3xl">
                  <img src={StarIcon} alt="StarIcon" />
                  <div className="ml-2">Announcements</div>
                </div>
              </div>
              <div className="marquee-container flex-1 newstext text-sm xs:text-[12px] sm:text-[12px] ssm:text-sm md:text-sm lg:text-sm text-left xs:text-center sm:text-center ssm:text-center md:text-left lg:text-left">
                <div className="marquee-content">
                  Revolutionary global B2B e-commerce platform. We enable
                  seamless end to end sourcing for custom manufactured goods
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
);

HeaderSearch.propTypes = {
  headerTitle: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired,
  setMessages: PropTypes.func.isRequired,
  setIsAutoOpenEnquiryModal: PropTypes.func.isRequired,
};

export default HeaderSearch;

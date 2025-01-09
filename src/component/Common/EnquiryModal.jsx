/** @jsxImportSource @emotion/react */
"use client";
import debounce from "lodash/debounce";
import dynamic from "next/dynamic";
import { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import CloseIcon from "@mui/icons-material/Close";

const ChatBot = dynamic(() => import("../ChatBot"));

const EnquiryModal = ({
  isAutoOpen = true,
  fromPage = "All",
  dealyTime = 100,
  messages = [],
  setMessages = () => {},
  setIsAutoOpenEnquiryModal = () => {},
  activeTab = "enquiry",
  setActiveTab = () => {},
}) => {
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line
  useEffect(() => {
    if (!open && isAutoOpen) {
      const timeoutId = setTimeout(() => {
        setOpen(true);
      }, dealyTime);
      return () => clearTimeout(timeoutId);
    }
  }, [isAutoOpen]);
  const modalCloseClear = () => {
    setOpen(false);
    setIsAutoOpenEnquiryModal(false);
  };
  const [style, setStyle] = useState({
    borderRadius: 20,
    border: "0px",
    position: "absolute",
    top: "30.5%",
    left: "128%",
    backgroundColor: "rgba(249, 245, 245, 0.98)",
    color: "#000",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 10px 20px",
    zIndex: "1000",
  });
  const updateStyles = useCallback(
    debounce(() => {
      if (window.innerWidth < 600) {
        // Adjust the breakpoint as needed for small mobile screens
        setStyle((prevStyle) => ({
          ...prevStyle,
          top: "40.5%",
          left: "50%",
          width: "100%",
          transform: "translate(-50%, -50%) scale(0.8)",
        }));
      } else if (window.innerWidth < 850) {
        setStyle((prevStyle) => ({
          ...prevStyle,
          top: "36.5%",
          left: "50%",
          width: "100%",
          transform: "translate(-50%, -50%) scale(0.8)",
        }));
      } else {
        setStyle((prevStyle) => ({
          ...prevStyle,
          top: "40.5%",
          left: "128%",
          width: "65%",
          transform: "translate(-50%, -50%) scale(0.7)",
        }));
      }
    }, 300),
    []
  );

  useEffect(() => {
    updateStyles();
    window.addEventListener("resize", updateStyles);
    return () => window.removeEventListener("resize", updateStyles);
  }, []);

  return (
    <>
      <div className="fixed -right-10 top-1/2 transform -translate-y-1/2 text-primaryBlack z-50">
        <button
          type="button"
          className="border-0 text-black float-right absolute right-0 -top-9 xs:-top-16 sm:-top-16 ssm:-top-9 md:-top-9 lg:-top-9 xl:-top-9 cursor-pointer closebg ring-0 shadow-2xl whitespace-nowrap rounded-tr-2xl rounded-tl-2xl"
          onClick={() => {
            setActiveTab("enquiry");
            setOpen(true);
          }}
          style={{
            background: "#4a3587",
            color: "#fff",
            width: "auto",
            height: "auto",
            transform: "rotate(-90deg)",
            padding: "0.75rem 1rem",
            marginBottom: "0.5rem",
            display: open ? "none" : "block",
          }}
        >
          Enquire Now
        </button>
      </div>
      <Backdrop
        sx={{
          color: "#000",
          zIndex: 1000,
          height: "129vh",
          background: "none !important",
          width: {
            xs: "100%",
            sm: "100%",
            md: "66%",
          },
        }}
        open={open}
        className={`${open ? "animate-fade-left" : ""}`}
      >
        <div style={style} id="enquirymodal_bakdrop">
          <div style={{ position: "relative" }}>
            <div
              style={{
                display: "flex",
                position: "absolute",
                justifyContent: "space-between",
                top: "5px",
                right: "5px",
                color: "white",
                zIndex: 999999,
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.2)", // Transparent white color
                  borderRadius: "50%",
                  width: "32px", // Adjust size as needed
                  height: "32px",
                }}
              >
                <CloseIcon
                  onClick={modalCloseClear}
                  className="cursor-pointer"
                />
              </div>
            </div>
            <ChatBot
              open={open}
              fromPage={fromPage}
              messages={messages}
              setMessages={setMessages}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
        </div>
      </Backdrop>
    </>
  );
};

EnquiryModal.propTypes = {
  isAutoOpen: PropTypes.bool,
  fromPage: PropTypes.string,
  dealyTime: PropTypes.number,
  messages: PropTypes.array,
  setMessages: PropTypes.func,
  setIsAutoOpenEnquiryModal: PropTypes.func,
  activeTab: PropTypes.string,
  setActiveTab: PropTypes.func,
};

export default EnquiryModal;

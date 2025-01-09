/* eslint-disable no-undef */
/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import loadable from "@loadable/component";
import RoundButtonStyle from "./RoundButtonStyle";
import WhitebgRightArrow from "@/assets/FirstPage/WhitebgRightArrow.png";

const Modal = loadable(() => import("@mui/material/Modal"));
const CloseIcon = loadable(() => import("@mui/icons-material/Close"));
const EnquriyForm = loadable(() => import("@/component/Enquiry/EnquriyForm"));

const RoundButton = ({
  buttonID,
  title,
  onEventHandle = () => {},
  link = "",
  isEnquiryOpen = false,
}) => {
  const style = {
    borderRadius: 20,
    border: "0px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) scale(0.7)",
    backgroundColor: "#fff",
    padding: "1.5rem",
  };
  const [getErrorMessage, setShowErrorMessage] = useState(null);
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const clickEvent = () => {
    if (!link) {
      onEventHandle();
      if (isEnquiryOpen) {
        setOpen(true);
      }
    }
    if (link) {
      window.location.href = link;
    }
  };
  const modalCloseClear = () => {
    setOpen(false);
  };

  return (
    <>
      <button
        id={buttonID}
        css={RoundButtonStyle}
        type="button"
        className="bg-[#4A3587] rounded-full border-[#fff] w-[15rem] border-[.01rem] border-soild px-[1rem] py-[.5rem] focus:ring-0 relative overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={clickEvent}
      >
        <div className="flex items-center">
          <Image
            alt={"WhitebgRightArrow"}
            className={`mr-2 max-w-full max-h-full transition-transform duration-300 transform ${
              isHovered ? `translate-x-[11.15rem]` : "translate-x-0"
            }`}
            src={WhitebgRightArrow}
          />
          <span
            className={`btntext transition-transform duration-300 transform ${
              isHovered ? "-translate-x-[2rem]" : "translate-x-0"
            }`}
          >
            {title}
          </span>
        </div>
      </button>
      {isEnquiryOpen && (
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div style={style} className="modal-popup">
            <div
              className="modal-header"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div className="modal-header-text">{`Let's Connect`}</div>
              <CloseIcon onClick={modalCloseClear} className="cursor-pointer" />
            </div>
            <EnquriyForm
              categories={[
                { id: 1, name: `Fashion & Home Textiles` },
                { id: 2, name: `Industrial Goods` },
              ]}
              fromPage="All"
              setShowErrorMessage={setShowErrorMessage}
            />
          </div>
        </Modal>
      )}
    </>
  );
};

RoundButton.propTypes = {
  buttonID: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  onEventHandle: PropTypes.func,
  isEnquiryOpen: PropTypes.bool,
};

export default RoundButton;

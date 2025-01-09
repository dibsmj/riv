/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import loadable from "@loadable/component";
import RequestDemoStyles from "./RequestDemoStyles";

const Modal = loadable(() => import("@mui/material/Modal"));
const CloseIcon = loadable(() => import("@mui/icons-material/Close"));
const EnquriyForm = loadable(() => import("../Enquiry/EnquriyForm"));

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

const RequestDemo = ({
  name = "",
  className = "",
  img = "",
  setIsAutoOpenEnquiryModal,
  setActiveTab,
  setMessages,
}) => {
  const [open, setOpen] = useState(false);
  const modalCloseClear = () => {
    setOpen(false);
  };
  const [getErrorMessage, setShowErrorMessage] = useState(null);
  return (
    <div css={RequestDemoStyles}>
      <button
        type="button"
        onClick={(e) => {
          setIsAutoOpenEnquiryModal(true);

          setActiveTab("enquiry");
        }}
        className={className}
      >
        {name}
        {img && (
          <Image
            src={img}
            alt="ArrowGreen"
            className="ml-[2px]"
            loading="lazy"
          />
        )}
      </button>
      {/* <Modal
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
      </Modal> */}
    </div>
  );
};

export default RequestDemo;

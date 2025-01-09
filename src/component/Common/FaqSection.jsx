/** @jsxImportSource @emotion/react */
import Image from "next/image";
import React, { useState, useRef, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";
import FaqSectionStyles from "./FaqSectionStyles";
import {
  FaqUpper,
  FaqLower,
  Search,
  ExpandMoreIconImg,
} from "../../config/GetImages";

const Accordion = loadable(() => import("@mui/material/Accordion"));
const AccordionDetails = loadable(() =>
  import("@mui/material/AccordionDetails")
);
const AccordionSummary = loadable(() =>
  import("@mui/material/AccordionSummary")
);
const Typography = loadable(() => import("@mui/material/Typography"));

const ExpandMoreIcon = () => (
  <Image alt={`ExpandMoreIconImg`} src={ExpandMoreIconImg} />
);
const FaqSection = ({ title, description, faqData }) => {
  const [searchKeyword, setSearchKeyword] = useState("");

  function highlightText(text, keyword) {
    if (!keyword.trim()) {
      return text;
    }

    const regex = new RegExp(`(${keyword})`, "gi");
    return text
      .split(regex)
      .map((part, index) => (regex.test(part) ? <mark>{part}</mark> : part));
  }

  const filteredFAQs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchKeyword.toLowerCase())
  );
  return (
    <section css={FaqSectionStyles}>
      <div
        id="faq"
        className="w-full mb-5 m-auto justify-center items-center text-center align-middle mt-20"
      >
        <div className="w-[100%]">
          <img
            alt={`FaqUpper`}
            className={`w-full justify-center items-center -mb-[0.5rem]`}
            src={FaqUpper.src}
          />
        </div>
        <div className="middlefaqmain py-2 xs:py-10 sm:py-10 md:py-2 lg:py-2">
          <div className="w-[90%] m-auto justify-center items-center text-center align-middle">
            <div className=" grid grid-cols-1">
              <div className=" text-left">
                <div className="faqleftdoubts text-[20px] xs:text-[18px] sm:text-[18px] ssm:text-[19px] md:text-[20px] lg:text-[20px]">
                  Queries
                </div>
                <div>
                  <h2 className="faqleftheader mt-1 text-[20px] xs:text-[30px] sm:text-[30px] ssm:text-[36px] md:text-[48px] lg:text-[48px]">
                    {title}
                  </h2>
                </div>
                {/* <div className="faqsubheader">{description}</div> */}
              </div>
              <div className=" text-left">
                <div className=" text-left relative">
                  <Image
                    alt={`search`}
                    className={`absolute top-[15px] left-[15px]`}
                    src={Search}
                  />
                  <input
                    type="text"
                    placeholder={"Search help articles.."}
                    className="faqinput w-[90%] indent-5"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                  />
                </div>
                <div
                  className={`text-left ${
                    filteredFAQs.length > 5 ? "faqsection h-[400px]" : ""
                  }`}
                >
                  {filteredFAQs.map((faq, index) => (
                    <Accordion key={faq.id} className="middlefaqmain">
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography
                          variant="h3"
                          className="faqquestions !text-[19px] xs:!text-[17px] sm:!text-[17px] ssm:!text-[18px] md:!text-[19px] lg:!text-[19px] xl:!text-[19px]"
                        >
                          {highlightText(faq.question, searchKeyword)}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography variant="p" className="faqanswer text-[15px] xs:text-[14px] sm:text-[14px] ssm:text-[15px] md:text-[15px] lg:text-[15px] xl:text-[15px]">
                          {highlightText(faq.answer, searchKeyword)}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%]">
          <Image
            alt={`FaqLower`}
            className={`w-full object-cover justify-center items-center -mt-4 xs:-mt-12 sm:-mt-12 ssm:-mt-4 md:-mt-4 lg:-mt-4 xl:-mt-4`}
            src={FaqLower}
          />
        </div>
      </div>
    </section>
  );
};

FaqSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  faqData: PropTypes.object.isRequired,
};

export default FaqSection;

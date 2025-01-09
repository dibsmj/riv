/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { Search, ExpandMoreIconImg } from "../../config/GetImages";
import ImageLazyLoad from "@/component/ImageLazyLoad";

const highlightText = (text, keyword) => {
  if (!keyword) return text;
  const parts = text.split(new RegExp(`(${keyword})`, "gi"));
  return parts.map((part, index) =>
    part.toLowerCase() === keyword.toLowerCase() ? (
      /* eslint-disable-next-line react/no-array-index-key */
      <span key={`${index}-${part}`} style={{ backgroundColor: "yellow" }}>
        {part}
      </span>
    ) : (
      part
    )
  );
};

const ExpandMoreIcon = () => (
  <ImageLazyLoad alt={`ExpandMoreIconImg`} imageSrc={ExpandMoreIconImg.src} />
);
const FaqCategories = ({ categories, faqs }) => {
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0].id);
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleCategoryClick = (categoryId) => {
    setActiveCategoryId(categoryId);
  };
  const filteredFAQs = faqs.filter((faq) => {
    if (activeCategoryId !== 1 && faq.categoryId !== activeCategoryId)
      return false;
    if (!searchKeyword) return true;
    return (
      faq.question.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchKeyword.toLowerCase())
    );
  });

  return (
    <div className="w-full m-auto justify-center items-center text-center align-middle mt-10">
      <div className="flex flex-row flex-wrap pt-[3rem] gap-[0.3rem]">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            className={`resourcescategory cursor-pointer ${
              activeCategoryId === category.id
                ? "bg-[rgba(133,106,207,1)] text-primaryWhite"
                : ""
            }`}
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="text-left mt-10">
        <div className="text-left relative">
          <ImageLazyLoad
            alt="search"
            className="absolute top-[15px] left-[15px]"
            imageSrc={Search.src}
          />
          <input
            type="text"
            placeholder="Search help articles.."
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
          {filteredFAQs.map((faq) => (
            <Accordion key={faq.id} className="middlefaqmain">
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  variant="h3"
                  className="faqquestions text-[19px] xs:text-[17px] sm:text-[17px] ssm:text-[18px] md:text-[16px] lg:text-[16px]"
                >
                  {highlightText(faq.question, searchKeyword)}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="faqanswer text-[15px] xs:text-[14px] sm:text-[14px] ssm:text-[15px] md:text-[15px] lg:text-[15px]">
                  {highlightText(faq.answer, searchKeyword)}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

FaqCategories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      categoryId: PropTypes.number.isRequired,
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FaqCategories;

/** @jsxImportSource @emotion/react */
import React, { useState, useRef, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';
import { Search, ExpandMoreIconImg } from '../../config/GetImages';
import ImageLazyLoad from '@/component/ImageLazyLoad';

const Accordion = loadable(() => import('@mui/material/Accordion'));
const AccordionDetails = loadable(() =>
  import('@mui/material/AccordionDetails')
);
const AccordionSummary = loadable(() =>
  import('@mui/material/AccordionSummary')
);
const Typography = loadable(() => import('@mui/material/Typography'));

const ExpandMoreIcon = () => (
  <ImageLazyLoad alt={`ExpandMoreIconImg`} imageSrc={ExpandMoreIconImg.src} />
);
const FaqChatSection = ({ title, description, faqData }) => {
  const [searchKeyword, setSearchKeyword] = useState('');

  function highlightText(text, keyword) {
    if (!keyword.trim()) {
      return text;
    }

    const regex = new RegExp(`(${keyword})`, 'gi');
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
    <div
      id="faqchat"
      className="w-full m-auto justify-center items-center text-center align-middle mt-20"
    >
      <div className="middlefaqmain py-2 xs:py-0 sm:py-0 md:py-2 lg:py-2">
        <div className="w-[90%] m-auto justify-center items-center text-center align-middle">
          <div className=" grid grid-cols-1">
            <div className=" text-left">
              <div className=" text-left relative">
                <ImageLazyLoad
                  alt={`search`}
                  className={`absolute top-[15px] left-[15px]`}
                  imageSrc={Search.src}
                />
                <input
                  type="text"
                  placeholder={'Search help articles..'}
                  className="faqchatinput w-[90%] indent-5"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                />
              </div>
              <div
                className={`text-left ${
                  filteredFAQs.length > 5 ? 'faqsectionchat h-[400px]' : ''
                }`}
              >
                {filteredFAQs.map((faq, index) => (
                  <Accordion key={faq.id} className="middlefaqmain">
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography
                        variant="h3"
                        className="faqquestionschat text-[19px] xs:text-[17px] sm:text-[17px] ssm:text-[18px] md:text-[19px] lg:text-[19px]"
                      >
                        {highlightText(faq.question, searchKeyword)}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="faqanswerchat text-[15px] xs:text-[14px] sm:text-[14px] ssm:text-[15px] md:text-[15px] lg:text-[15px]">
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
    </div>
  );
};

FaqChatSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  faqData: PropTypes.object.isRequired,
};

export default FaqChatSection;

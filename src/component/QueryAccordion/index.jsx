/** @jsxImportSource @emotion/react */
import { memo, useState, useMemo } from "react";
import { faqsArray } from "@/pagecomponent/FaqPage/faqConstants";
import Image from "next/image";
import loadable from "@loadable/component";
import QueryAccordionStyles from "@/component/QueryAccordion/QueryAccordionStyles";
import { debounce } from "lodash";
import Search from "@/assets/FirstPage/search.png";
import ExpandMoreIconImg from "@/assets/Home/arrow-down-sign.png";

const Accordion = loadable(() => import("@mui/material/Accordion"), {
  ssr: false,
});
const AccordionDetails = loadable(
  () => import("@mui/material/AccordionDetails"),
  { ssr: false }
);
const AccordionSummary = loadable(
  () => import("@mui/material/AccordionSummary"),
  { ssr: false }
);
const Typography = loadable(() => import("@mui/material/Typography"), {
  ssr: false,
});

const ExpandMoreIcon = memo(() => (
  <Image
    alt="ExpandMoreIconImg"
    src={ExpandMoreIconImg}
    className="bg-[#E8E8E8] p-[.4rem] rounded-full"
    width={10}
    height={10}
    priority={false}
  />
));

const QueryAccordion = memo(() => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = debounce((keyword) => setSearchKeyword(keyword), 300);

  const filteredFAQs = useMemo(() => {
    if (!searchKeyword.trim()) return faqsArray.slice(0, 5);
    return faqsArray.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchKeyword.toLowerCase())
    );
  }, [searchKeyword]);

  const highlightText = useMemo(
    () => (text, keyword) => {
      if (!keyword.trim()) return text;
      const regex = new RegExp(`(${keyword})`, "gi");
      return text
        .split(regex)
        .map((part, index) =>
          regex.test(part) ? <mark key={index}>{part}</mark> : part
        );
    },
    []
  );

  return (
    <div css={QueryAccordionStyles} className="mb-[2rem]">
      <div className="m-auto gap-5 w-[85%] sm:w-[98%] xs:w-[98%] ssm:w-[98%] md:w-[85%] flex flex-row sm:flex-col xs:flex-col ssm:flex-col md:flex-row">
        <div className=" w-2/5 sm:w-full xs:w-full ssm:w-full md:w-2/5">
          <div className="w-[90%] mx-auto">
            <h2 className="anyquestions">Any Questions?</h2>
            <h3 className="wegotyou">We Got You.</h3>
            <p className="faqtext">
              From Product Specs to Shipping Details: Our Experts Have the
              Answers You're Looking For
            </p>
            <div className=" relative">
              <input
                type="text"
                placeholder={"Search help articles.."}
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className=" relative faqinputfield w-[80%] sm:w-full xs:w-full ssm:w-[80%] md:w-[80%] outline-none"
              />
              <button
                type="button"
                onChange={(e) => setSearchKeyword(searchKeyword)}
                className="cursor-pointer flex justify-center items-center m-auto p-2 border-none absolute rounded-full bg-[#856ACF] top-[.3rem] right-[5rem] sm:right-[.75rem] xs:right-[.75rem] ssm:right-[2rem] md:right-[5rem] lg:right-[5rem] xl:right-[6.5rem]"
              >
                <Image alt={`search`} src={Search} />
              </button>
            </div>
          </div>
        </div>
        <div className=" w-3/5 sm:w-full xs:w-full ssm:w-full md:w-3/5 ">
          {filteredFAQs.slice(0, 5).map((faq, index) => (
            <Accordion key={faq.id} className="middlefaqmain animate-fade-down">
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  variant="h3"
                  className="faqquestions !my-0 !text-[20px] xs:!text-[15px] sm:!text-[15px] ssm:!text-[15px] md:!text-[20px]"
                >
                  {highlightText(faq.question, searchKeyword)}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="animate-fade-down">
                <Typography className="faqanswer text-[14px] xs:text-[12px] sm:text-[12px] ssm:text-[12px] md:text-[14px]">
                  {highlightText(faq.answer, searchKeyword)}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
});

export default QueryAccordion;

// export default ContactUs;
/** @jsxImportSource @emotion/react */
"use client";
import React, { useState } from "react";
import { css } from "@emotion/react";
import topImage from "@/assets/faq/bg.png";
import bottomImage from "@/assets/faq/bgWave.png";
import FaqCategories from "./FaqCategories";
import { faqStyles } from "./faqStyles";
import { categoriesArray, faqsArray } from "./faqConstants";
import Breadcrumb from "@/pagecomponent/BlogPages/components/Breadcrumb";

const Faq = () => {
  const [selectedCategory, setSelectedCategory] = useState("Fashion");
  const breadcrumbItems = [
    { text: "Home", url: "/" },
    { text: "Frequently Asked Questions", url: "/faq" },
  ];

  return (
    <main>
      <div css={faqStyles}>
        <div className="w-full m-auto overflow-hidden bg">
          <div className="w-full m-auto justify-center items-center text-center align-middle mt-10">
            <div
              className="relative w-full h-[13rem] bg-cover bg-center"
              style={{ backgroundImage: `url(${topImage.src})` }}
            >
              <div className="headerFontTitle absolute inset-0 flex flex-col justify-center items-start bg-black bg-opacity-50 text-white mt-32 ml-20">
                <h1 className="text-3xl font-bold -mt-3 xs:-ml-3 sm :ml-3">
                  Got a question? <br />
                  <span className="flex flex-col ml-1.5">Get your answer</span>
                </h1>
              </div>
            </div>
            <div
              className=" relative w-full h-[7rem] bg-cover bg-center"
              style={{ backgroundImage: `url(${bottomImage.src})` }}
            />
            <div className="bg">
              <div className="mt-4 ml-10">
                <Breadcrumb items={breadcrumbItems} />
              </div>
              <h1 className="font text-start m-14 mt-2">
                Frequently asked questions
              </h1>
              <div className="m-14 -mt-16">
                <FaqCategories categories={categoriesArray} faqs={faqsArray} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Faq;

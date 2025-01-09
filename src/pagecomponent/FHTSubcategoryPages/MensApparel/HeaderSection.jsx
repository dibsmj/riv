import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import RequestDemo from "@/component/Common/RequestDemo";
import HeaderRegistrationButton from "@/component/Common/HeaderRegistrationButton";
import Breadcrumb from "@/pagecomponent/BlogPages/components/Breadcrumb";
import EnquiryModal from "@/component/Common/EnquiryModal";

const HeroSection = ({
  topImage,
  mobileImage,
  title,
  desc,
  mainTitle,
  breadcrumbItems,
  isAutoOpenEnquiryModal,
  setIsAutoOpenEnquiryModal,
  messages,
  setMessages,
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className="relative w-full h-[48rem] overflow-hidden">
      <div className="absolute top-20 left-4 w-auto z-10">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <picture className="block w-full h-full">
          <source media="(max-width: 640px)" srcSet={mobileImage} />
          <Image
            src={topImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </picture>
      </div>

      {/* Hero Section Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white px-4">
        <div className="text-center mb-4 max-w-2xl">
          <h1 className="title text-4xl font-bold text-primaryWhite mb-4 leading-tight mt-52">
            {title}
          </h1>
          <h2 className="desc mt-4 font-medium text-sm leading-7 text-primaryWhite">
            {desc}
          </h2>
        </div>
        <div className="flex space-x-4 -mt-4">
          <RequestDemo className="button-first cursor-pointer" name="Enquire" />
          <HeaderRegistrationButton className="button-header mt-0" />
        </div>
      </div>
      <EnquiryModal
        isAutoOpen={isAutoOpenEnquiryModal}
        dealyTime={3000}
        messages={messages}
        setMessages={setMessages}
        setIsAutoOpenEnquiryModal={setIsAutoOpenEnquiryModal}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
};

HeroSection.propTypes = {
  topImage: PropTypes.string.isRequired,
  mobileImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  mainTitle: PropTypes.string.isRequired,
  breadcrumbItems: PropTypes.array.isRequired,
};

export default HeroSection;

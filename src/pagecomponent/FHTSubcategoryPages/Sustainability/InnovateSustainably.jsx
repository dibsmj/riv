import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // React components
import { Pagination, Autoplay } from "swiper/modules"; // Swiper modules
import "swiper/css"; // Swiper core styles
import "swiper/css/pagination"; // Pagination styles
import "swiper/css/autoplay"; // Autoplay styles
import RoundButton from "@/component/RoundButton";
import { innovateData } from "./SustainabiltyContent";

const InnovateSustainably = ({
  setIsAutoOpenEnquiryModal,
  setActiveTab,
  setMessages,
  mainTitle,
  subtitle,
}) => {
  return (
    <section className="bg-gradient-to-r from-purple-100 to-white py-8 px-4 md:px-8 lg:px-8">
      <h2 className="text-2xl md:text-[32px] font-bold text-center text-[#4A3587] title mb-4 -mt-12">
        {mainTitle}
      </h2>
      <p className="text-center md:text-[24px] xs:text-[16px] mb-8 title">
        {subtitle}
      </p>

      {/* Grid for larger screens */}
      <div className="hidden sm:flex flex-wrap justify-center gap-0 mt-4">
        {innovateData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-full sm:w-1/2 lg:w-1/3"
          >
            <img src={card.image} alt={card.title} className="w-40 h-40" />
            <h3 className="font-semibold text-[24px] text-[#4A3587] mb-2 title">
              {card.title}
            </h3>
            <p className="text-[16px] w-[85%] title">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Slider for mobile */}
      <div className="sm:hidden bg-white rounded-xl shadow-lg p-4 mt-4 relative">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: ".custom-pagination", // Target custom pagination container
          }}
          autoplay={{ delay: 10000, disableOnInteraction: false }}
        >
          {innovateData.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center">
                <img src={card.image} alt={card.title} className="w-40 h-40" />
                <h3 className="font-semibold text-[24px] text-[#4A3587] mb-2 title">
                  {card.title}
                </h3>
                <p className="text-[16px] w-[85%] title">{card.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Pagination Dots */}
      <div className="sm:hidden flex justify-center mt-4">
        <div className="custom-pagination"></div>
      </div>

      <div className="flex justify-center mt-8">
        <RoundButton
          buttonID="start_your_journey"
          title="Submit Enquiry"
          onEventHandle={() => {
            setIsAutoOpenEnquiryModal(true);
            setActiveTab("enquiry");
          }}
        />
      </div>
    </section>
  );
};

export default InnovateSustainably;

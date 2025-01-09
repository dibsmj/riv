import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import RequestDemo from "@/component/Common/RequestDemo";
import HeaderRegistrationButton from "@/component/Common/HeaderRegistrationButton";

const InfoSection = ({ title, desc, image, order }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start my-12 mx-8 lg:mx-16">
    {order === "textFirst" ? (
      <>
        <div className="flex flex-col justify-start p-4 lg:p-6 order-2 lg:order-1">
          <h2 className="text-2xl lg:text-4xl font-bold title lg:w-[94%] lg:-mt-8">
            {title}
          </h2>
          <div className="mt-4 desc flex flex-col lg:w-[80%] text-justify lg:-mt-8 tracking-wider">
            {desc}
          </div>
          <div className="mt-4 lg:mt-0 flex space-x-4">
            <RequestDemo
              className="button-second cursor-pointer"
              name="Submit Enquiry"
            />
          </div>
        </div>
        <div className="flex justify-center order-1 lg:order-2 lg:ml-4">
          <Image
            src={image}
            alt={title}
            className="rounded-lg shadow-md max-w-full h-auto"
          />
        </div>
      </>
    ) : (
      <>
        <div className="flex justify-center order-2 lg:order-1 lg:mr-4">
          <Image
            src={image}
            alt={title}
            className="rounded-lg shadow-md max-w-full h-auto"
          />
        </div>
        <div className="flex flex-col justify-start p-4 lg:p-6 order-1 lg:order-2">
          <h2 className="text-2xl lg:text-4xl font-bold title lg:w-[94%] lg:-mt-8">
            {title}
          </h2>
          <div className="mt-4 desc lg:w-[90%] text-justify lg:-mt-8 tracking-wider">
            {desc}
          </div>
          <div className="mt-4 lg:mt-0 flex space-x-4  lg:mb-20 ">
            <HeaderRegistrationButton className="button-second mt-0 bg-transparent" />
          </div>
        </div>
      </>
    )}
  </div>
);

InfoSection.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  order: PropTypes.oneOf(["textFirst", "imageFirst"]).isRequired,
};

export default InfoSection;

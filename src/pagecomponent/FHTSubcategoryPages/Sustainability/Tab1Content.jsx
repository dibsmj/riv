import React from "react";
import ImageLazyLoad from "@/component/ImageLazyLoad";

const Tab1Content = ({
  title,
  description,
  imageSrc,
  items,
  showButton,
  buttonText,
  scrollTarget,
}) => {
  const scrollToSection = () => {
    const targetElement = document.getElementById(scrollTarget);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-[74%] md:p-4 ">
        {/* <h3 className="text-[24px] font-bold mb-4 text-[#0F131B]">{title}</h3> */}
        <p className="text-[16px] mb-6 text-[#292A2E] tracking-wide -mt-4">
          {description}
        </p>
        <ImageLazyLoad
          imageSrc={imageSrc}
          alt="Tab Content Image"
          className=" w-[98%] h-[68%]"
        />
      </div>
      <div className="hidden md:block lg:block w-[1px] bg-[#E0E0E0] mx-4"></div>

      <div className="w-full md:w-[33%] md:pl-4 mt-0">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center mb-8 p-6 bg-white rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 "
          >
            <img
              src={item.icon}
              alt={item.label}
              className="w-12 h-12 mr-6 pr-2"
            />
            <span className="text-[16px] font-bold text-[#151E23] desc">
              {item.label}
            </span>
          </div>
        ))}
        {showButton && (
          <button
            onClick={scrollToSection}
            className=" p-2 bg-primaryWhite text-[#20AF98] rounded-lg transition-colors duration-300 cursor-pointer md:ml-28 xs:ml-[90px]"
            style={{ border: "2px solid rgba(32, 175, 152, 1)" }}
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Tab1Content;

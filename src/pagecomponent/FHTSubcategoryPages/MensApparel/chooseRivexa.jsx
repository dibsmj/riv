/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import icon from "@/assets/CategoryPage/FHT/FHTSubcategory/MensAparrel/icon.png";

const chooseRivexa = ({ contentOptions = [], title }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === contentOptions.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [contentOptions.length]);

  const handleContentChange = (index) => {
    setActiveIndex(index);
  };

  const activeContent = contentOptions[activeIndex] || {};

  return (
    <div className="flex flex-col items-center bg-[#F2F5F7] p-8 pb-10">
      <h2 className="text-2xl md:text-4xl font-bold mb-5 text-center md:text-start md:-ml-28 md:w-4/5 title">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full md:w-[94%] mt-6">
        <div>
          <div className="p-5 border-white">
            {contentOptions.map((option, index) => (
              <div
                key={option.id}
                className={`cursor-pointer p-3 mb-2 flex items-center ${
                  index === activeIndex
                    ? "bg-primaryWhite font-semibold text-[#20AF98]"
                    : "bg-transparent"
                }`}
                onClick={() => handleContentChange(index)}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleContentChange(index)
                }
                role="button"
                tabIndex={0}
              >
                <Image
                  src={index === activeIndex ? option.activeIcon : option.icon}
                  alt="icon"
                  className="mr-2"
                />
                <h3 className="text-xl">{option.title}</h3>

                {(option.title === "Sustainable Practices" ||
                  option.title === "Sustainable Sourcing" ||
                  option.title === "Sustainability") && (
                  <a
                    href="/fashion-and-textiles/sustainability"
                    className="ml-3 bg-[#20AF98] text-primaryWhite px-3 py-1 rounded-full text-sm no-underline"
                  >
                    Learn More
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="relative w-full mt-5">
            {activeContent.image && (
              <Image
                src={activeContent.image}
                alt="Fashion Apparel"
                className="w-[100%] h-[450px] object-fill"
              />
            )}
            <div className="absolute bottom-0 left-0 text-white bg-black bg-opacity-50 p-3 w-full mb-[0.5rem]">
              {activeContent.descriptions?.map((description) => (
                <p
                  key={`${activeContent.id}-${description}`}
                  className="text-primaryWhite flex items-center pr-10 pl-5 desc animate-fade-down md:text-[16px] xs:text-sm md:text-justify md:mb-10 md:tracking-wider"
                >
                  <Image
                    src={icon}
                    alt="icon"
                    className="text-green-400 mr-2"
                  />
                  {description}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

chooseRivexa.propTypes = {
  contentOptions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      activeIcon: PropTypes.string.isRequired,
      descriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ),
  title: PropTypes.string.isRequired,
};

export default chooseRivexa;

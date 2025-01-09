/** @jsxImportSource @emotion/react */
import React from "react";
import PropTypes from "prop-types";
import SubCategoryStyles from "./SubCategoryStyles";
import Image from "next/image";

const WorkFlow = ({ getProcess, title = "How it works", subtitle = "" }) => {
  const heights = {
    default: "820px",
    mobile: "820px",
    tablet: "930px",
    desktop: "820px",
  };
  return (
    <div css={() => SubCategoryStyles({ heights })}>
      <div className="my-14 w-[70%] xs:w-full sm:w-full ssm:w-[95%] md:w-[70%] lg:w-[70%] mx-auto">
        <h2 className="text-3xl justify-center items-center text-center align-middle">
          {title}
        </h2>
        {subtitle && (
          <h3 className=" text-['Urbanist'] text-center text-xl font-[400]">
            {subtitle}
          </h3>
        )}
      </div>
      <div className="mx-14 my-10">
        {getProcess.map((item, itemIndex) => (
          <div
            key={item.id}
            className="grid grid-cols-5 gap-8 xs:grid-cols-1 ssm:grid-cols-5 md:grid-cols-5"
          >
            {item.items.map((process, index) => {
              const stepNumber = itemIndex * item.items.length + index + 1;
              return (
                <React.Fragment key={process.title}>
                  <div className="flex flex-col items-center mb-12">
                    <Image
                      alt={`Icon ${stepNumber}`}
                      className="w-24 h-24"
                      src={process.image}
                    />
                    <h3 className="text-lg font-semibold mt-2 workflow-image-title">
                      {process.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-2 workflow-image-description">
                      {process.description}
                    </p>
                    <div className=" font-bold">Step {stepNumber}</div>
                  </div>
                  {process.vector && (
                    <div className="flex justify-center items-center sm:block ssm:block xs:hidden md:block mb-12">
                      <Image
                        alt={`Curve Vector`}
                        className="md:w-80 sm:w-32 h-24 md:-ml-12"
                        src={process.vector}
                      />
                    </div>
                  )}
                  {index % 5 === 4 && <div className="w-full" />}
                </React.Fragment>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

WorkFlow.propTypes = {
  getProcess: PropTypes.object.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default WorkFlow;

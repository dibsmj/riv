/** @jsxImportSource @emotion/react */
import { memo, useState, useCallback } from "react";
import JourneyCardStyles from "./JourneyCardStyles";

const JourneyCard = ({
  activeCard,
  step,
  setActiveCard,
  stepNumber,
  title,
  description,
  headerColor,
}) => {
  const isActive = activeCard === step;
  const handleMouseEnter = useCallback(() => {
    setActiveCard(step);
  }, [step, setActiveCard]);

  const handleMouseLeave = useCallback(() => {
    setActiveCard(null);
  }, [setActiveCard]);
  return (
    <div
      css={JourneyCardStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative ${
        isActive ? "activejourneycard" : "journeycard"
      }  text-center !bg-primaryWhite py-[2rem] xs:py-[1rem] sm:py-[1rem] ssm:py-[1rem] md:py-[2rem] px-[1rem] xs:px-[.25rem] sm:px-[.25rem] ssm:px-[.25rem] md:px-[1rem] space-y-[1rem] xs:space-y-[.25rem] sm:space-y-[.25rem] ssm:space-y-[.25rem] md:space-y-[1rem]`}
      style={
        isActive
          ? { border: `2px solid ${headerColor}` }
          : { border: `1px solid #e7e7e7` }
      }
    >
      {!isActive && (
        <div
          style={{ backgroundColor: headerColor }}
          className={`absolute top-0 left-0 w-full rounded-t-[1.25rem] h-4`}
        />
      )}
      <div
        className={`journeycardnumber ${!isActive ? "text-[#9b9595]" : ""}`}
        style={isActive ? { color: headerColor } : {}}
      >
        {stepNumber}
      </div>
      <div
        className={`activejourneycardtitle ${
          isActive ? "animate-fade-up" : ""
        }`}
      >
        {title}
      </div>
      <div
        className={`activejourneycardtext ${isActive ? "animate-fade-up" : ""}`}
      >
        {description}
      </div>
    </div>
  );
};

export default JourneyCard;

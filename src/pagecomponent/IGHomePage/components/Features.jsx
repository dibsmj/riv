// export default Features;
/** @jsxImportSource @emotion/react */
import { memo, useState } from "react";
import Image from "next/image";
import JourneyCard from "@/component/JourneyCard";
import DropdownButton from "@/component/DropdownButton";
import PropTypes from "prop-types";
import RightIcon from "@/assets/IGHomePage/right-icon.webp";

const Features = memo(
  ({ setIsAutoOpenEnquiryModal, description, journeyCards, featuresList }) => {
    const [activeCard, setActiveCard] = useState(null);

    return (
      <div className="w-full">
        <div className="w-[85%] sm:w-[90%] xs:w-[90%] ssm:w-[90%] md:w-[85%] mx-auto flex flex-col justify-center place-items-center align-middle items-center">
          <div className="captitle">Features</div>
          <div className="capdesc mt-4 text-[2rem] sm:text-[1.5rem] xs:text-[1.5rem] ssm:text-[2rem] md:text-[2rem]">
            {description}
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 ssm:grid-cols-2 md:grid-cols-4 mt-12 gap-[1rem]">
            {journeyCards.map((card) => (
              <JourneyCard
                key={card.step}
                activeCard={activeCard}
                step={card.step}
                setActiveCard={setActiveCard}
                stepNumber={card.stepNumber}
                title={card.title}
                description={card.description}
                headerColor={card.headerColor}
              />
            ))}
          </div>
        </div>

        <div className="w-full bg-[#4A3587] h-96 sm:h-[32rem] xs:h-[32rem] ssm:h-96 md:h-96 border-2 border-solid border-[#4A3587] -mt-[7rem]">
          <div className="w-[60%] sm:w-[90%] xs:w-[90%] ssm:w-[90%] md:w-[60%] mx-auto mt-[10rem]">
            <button
              type="button"
              className="getaquote bg-transparent border-none cursor-pointer m-0 xs:m-auto sm:m-auto ssm:m-0 md:m-0 flex justify-start xs:justify-center sm:justify-center ssm:justify-start md:justify-start"
              onClick={() => {
                setIsAutoOpenEnquiryModal(true);
              }}
            >
              Get Quote Now
            </button>
            <div className="m-auto w-full sm:w-[80%] xs:w-[80%] ssm:w-full md:w-full grid grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 ssm:grid-cols-2 md:grid-cols-2 mt-8 gap-7">
              <div className="flex flex-col text-left items-start justify-start place-items-start">
                {featuresList.map((text, index) => (
                  <div
                    key={index}
                    className="inline-flex flex-row justify-center items-center place-items-center align-middle gap-3"
                  >
                    <Image src={RightIcon} alt="" width={16} height={11} />
                    <div className="getaquotetext">{text}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-7">
                <DropdownButton
                  key={`mobile_signin`}
                  className="signupasfree text-[#4A3587] px-7 py-3 normal-case cursor-pointer"
                  title="Sign Up For Free"
                  itemlist={[
                    {
                      title: `Buyer`,
                      link: `${process.env.NEXT_PUBLIC_APP_CUSTOMER_ROOT_URL}register-buyer`,
                    },
                    {
                      title: `Seller`,
                      link: `${process.env.NEXT_PUBLIC_APP_CUSTOMER_ROOT_URL}register-seller`,
                    },
                  ]}
                  width={`w-[92%]`}
                  divwidth={`!w-full inline-block`}
                />
                <a
                  href="https://outlook.office365.com/owa/calendar/rivexa2@rivexa.com/bookings/"
                  target="_blank"
                  className="cursor-pointer requestademo px-7 py-3 bg-transparent no-underline"
                >
                  Request a Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

Features.propTypes = {
  setIsAutoOpenEnquiryModal: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  journeyCards: PropTypes.arrayOf(
    PropTypes.shape({
      step: PropTypes.string.isRequired,
      stepNumber: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      headerColor: PropTypes.string.isRequired,
    })
  ).isRequired,
  featuresList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Features;

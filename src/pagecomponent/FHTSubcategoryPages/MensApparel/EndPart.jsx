/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import Image from "next/image";
import backgroundImage from "@/assets/CategoryPage/FHT/FHTSubcategory/MensAparrel/bg1.png";
import RequestDemo from "@/component/Common/RequestDemo";
import HeaderRegistrationButton from "@/component/Common/HeaderRegistrationButton";

const SourcingJourneyComponent = ({ leftSideImage }) => (
  <div
    className="flex flex-col lg:flex-row items-center justify-between bg-cover bg-no-repeat bg-center p-6 lg:p-10"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    {/* Left side images */}
    <div className="flex flex-col items-center lg:items-start space-y-4 lg:w-1/2 w-full mb-6 lg:mb-0">
      <Image
        src={leftSideImage}
        alt="LeftImage"
        className="max-w-[60%] lg:max-w-[100%] object-cover -mt-14 lg:-mt-16"
      />
    </div>

    {/* Right side content */}
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:w-1/2 w-full">
      <h2 className="title text-3xl lg:text-4xl font-bold text-[#2d2d2d]">
        Start your sourcing journey now!
      </h2>
      <div className="flex space-x-4">
        <RequestDemo className="button-first cursor-pointer" name="Enquire" />
        <HeaderRegistrationButton className="button-second mt-0 bg-transparent" />
      </div>
    </div>
  </div>
);

SourcingJourneyComponent.propTypes = {
  leftSideImage: PropTypes.string.isRequired,
};

export default SourcingJourneyComponent;

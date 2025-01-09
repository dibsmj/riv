import { useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import Breadcrumb from "@/pagecomponent/BlogPages/components/Breadcrumb";
import EnquiryModal from "@/component/Common/EnquiryModal";
import RoundButton from "@/component/RoundButton";

const HeroSection = ({
  topImage,
  landingPageBg,
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
  // const [isAutoOpenEnquiryModal, setIsAutoOpenEnquiryModal] = useState(false);
  // const [activeTab, setActiveTab] = useState("enquiry");
  // const [messages, setMessages] = useState([]);
  // const [isEnquiryOpen, SetIsEnquiryOpen] = useState(false);

  return (
    <div className="relative w-full h-[48rem] overflow-hidden">
      <div className="absolute top-20 left-4 w-auto z-10">
        <Breadcrumb
          items={breadcrumbItems}
          color="#FFFFFF"
          activeColor="#ffffff"
        />
      </div>

      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <picture className="block w-full h-[80%]">
          <source media="(max-width: 640px)" srcSet={mobileImage} />
          <Image
            loading="lazy"
            priority={false}
            blurDataURL={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="}
            src={landingPageBg}
            fill={true}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </picture>
      </div>
      {/* <div className="absolute inset-0 w-full h-full overflow-hidden">
        <picture className="block w-full max-h-[80%]">
          <source media="(max-width: 640px)" srcSet={mobileImage} />
          <Image
            src={landingPageBg}
            alt="Background"
            className="w-full h-full object-cover object-top"
          />
        </picture>
      </div> */}

      {/* Hero Section Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white px-4">
        <div className="text-center -mt-20 xs:-mt-28 max-w-6xl mx-auto">
          <div
            className="px-8 sm:px-16 md:px-16 rounded-lg inline-block mx-auto"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[white] mb-4 leading-10 sm:mt-4 md:mt-8 title md:leading-[3.35rem] ">
              Where Sustainability Meets Sourcing
              <br />
              {/* <span className="text-[white]">
                Eco-friendly. Ethical. Delivered
              </span> */}
            </h1>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 mt-4 sm:mt-8">
          <div className=" m-auto flex justify-center items-center align-middle">
            <RoundButton
              buttonID="start_your_journey"
              title="Submit Enquiry"
              onEventHandle={() => setIsAutoOpenEnquiryModal(true)}
            />
          </div>
        </div>
      </div>
      <EnquiryModal
        isAutoOpen={isAutoOpenEnquiryModal}
        dealyTime={1000}
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

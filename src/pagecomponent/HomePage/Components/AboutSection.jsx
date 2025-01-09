/** @jsxImportSource @emotion/react */
import { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import dynamic from "next/dynamic";
import Shipping from "@/assets/Home/shipping.webp";

const RivSearch = dynamic(() =>
  import("@/pagecomponent/HomePage/Components/RivSearch")
);

const AboutSection = memo(
  ({ setIsAutoOpenEnquiryModal, setActiveTab, messages, setMessages }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
      handleResize(); // Set initial value
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return (
      <div className=" m-auto flex flex-row gap-[3rem]">
        <div
          className={` ${
            isMobile ? "w-full" : "w-[80%]"
          }  p-0 sm:p-1 xs:p-1 ssm:p-1 md:p-0 my-[2rem]`}
        >
          <div>
            <h2 className="!my-0 min-h-[2.5rem] aboutriv text-left sm:text-center xs:text-center ssm:text-left md:text-left">
              About rivexa
            </h2>
          </div>
          <div>
            <p className="aboutrivdesc px-0 sm:px-3 xs:px-3 ssm:px-3 md:px-0 text-left">
              rivexa, a global B2B e-marketplace, transforms international trade
              by connecting buyers with verified Indian suppliers across
              Industrial Goods and Fashion & Home Textiles. As an innovation
              from mjunction—a Tata Steel and SAIL joint venture—rivexa is the
              B2B procurement platform that leverages cutting-edge technology to
              streamline sourcing, ensuring seamless transactions from supplier
              discovery to fulfillment.
            </p>
          </div>
          <div>
            <p className="aboutrivdesc px-0 sm:px-3 xs:px-3 ssm:px-3 md:px-0 text-left">
              Our e-marketplace showcases India's manufacturing strength,
              facilitating custom, design-based components with comprehensive
              support. rivexa's mission is to elevate "Made in India" globally,
              fostering prosperous business relationships through dynamic,
              tech-driven solutions. From ideation to execution, we guide every
              step of the trade journey, setting new standards in digital
              commerce and international business.
            </p>
          </div>
          <div>
            <RivSearch
              messages={messages}
              setMessages={setMessages}
              setIsAutoOpenEnquiryModal={setIsAutoOpenEnquiryModal}
              setActiveTab={setActiveTab}
            />
          </div>
        </div>
        {!isMobile && (
          <div className="w-[20%] relative flex-none flex items-center justify-center bg-gradient-to-b from-purple-50 to-purple-100 py-10 px-5">
            <div className="toprivbrand absolute" />
            <div className="relative">
              <Image
                src={Shipping}
                quality={5}
                priority={false}
                fill
                alt="Shipping"
                className="rounded-xl !relative"
              />
              <div className="shippingtop absolute h-1/2 md:h-1/2 lg:h-[39%] xl:h-[30%]" />
              <div className="shippingbottom absolute -right-[5.313rem] md:-right-[5.313rem] lg:-right-[5rem] xl:-right-[5rem] w-[95%] md:w-[95%] lg:w-[88%] xl:w-[81%]" />
            </div>
          </div>
        )}
      </div>
    );
  }
);

AboutSection.propTypes = {
  setIsAutoOpenEnquiryModal: PropTypes.func.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  messages: PropTypes.array.isRequired,
  setMessages: PropTypes.func.isRequired,
};

export default AboutSection;

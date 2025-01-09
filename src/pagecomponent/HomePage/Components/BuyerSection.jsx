/** @jsxImportSource @emotion/react */
import { memo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import CompleteTransparency from "@/assets/Home/CompleteTransparency.webp";
import VerifiedManufacturers from "@/assets/Home/VerifiedManufacturers.webp";
import SimpleExperience from "@/assets/Home/SimpleExperience.webp";
import OperationsSupport from "@/assets/Home/OperationsSupport.webp";

const BuyerSection = memo(({ setIsAutoOpenEnquiryModal }) => {
  return (
    <div className="w-[85%] sm:w-[95%] xs:w-[95%] ssm:w-[90%] md:w-[85%] mx-auto mt-[2rem]">
      <div className="grid grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 ssm:grid-cols-1 md:grid-cols-2 gap-[2rem]">
        <div>
          <h2 className="forbuyer !my-[.35rem]">For Buyers</h2>
          <p className="forbuyersubtext !my-0">
            Unlock buyer success with rivexa’s seamless procurement solutions.
          </p>
          <p className="forbuyertext mt-7">
            Explore global B2B manufacturing and sourcing excellence through our
            procurement platform. We connect discerning international buyers
            with top-tier Indian manufacturers offering custom manufacturing
            services. Our rigorous "rivexa verified" process ensures reliable
            partnerships for sourcing custom components.
          </p>
          <p className="forbuyertext">
            rivexa streamlines your procurement journey from sourcing to
            fulfillment. Advanced tools simplify negotiations, enhance
            transparency, and optimize supply chains. We bridge continents and
            cultures, empowering businesses to leverage India's custom product
            manufacturing prowess while ensuring quality, compliance, and
            cost-effectiveness. Experience the future of global trade with
            rivexa – where cutting-edge technology meets world-class custom
            manufacturing services
          </p>
          <div className=" flex felx-row gap-3 justify-start xs:justify-center sm:justify-center ssm:justify-start md:justify-start">
            <a
              href={`${process.env.NEXT_PUBLIC_APP_CUSTOMER_ROOT_URL}register-buyer`}
              className="requestquote px-8 py-3 no-underline cursor-pointer"
            >
              Sign Up
            </a>
            <button
              onClick={() => {
                setIsAutoOpenEnquiryModal(true);
              }}
              className="requestquote px-8 py-3"
            >
              Request a Quote
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[2rem] mt-[2rem] sm:mt-0 xs:mt-0 ssm:mt-0 md:mt-[2rem]">
          <div className="text-center">
            <Image
              src={CompleteTransparency}
              width={50}
              height={50}
              alt="CompleteTransparency"
              className=" w-[50px] h-[50px]"
            />
            <div className="smallboxtitle text-[#1BABE2]">
              Complete Transparency
            </div>
            <div className="relative overflow-hidden">
              <p className="smallboxdescription">
                Clear pricing and streamlined negotiations via online RFx for
                easier manufacturer engagement.
              </p>
              <span className="absolute bottom-0 left-0 h-1 w-full bg-[#1BABE2]" />
            </div>
          </div>
          <div className="text-center">
            <Image
              src={VerifiedManufacturers}
              width={50}
              height={50}
              alt="VerifiedManufacturers"
              className=" w-[50px] h-[50px]"
            />
            <div className="smallboxtitle text-[#FFB400]">
              Verified Manufacturers
            </div>
            <div className="relative overflow-hidden">
              <p className="smallboxdescription">
                Access certified factories with proven export experience,
                ensuring high standards and reliability.
              </p>
              <span className="absolute bottom-0 left-0 h-1 w-full bg-[#FFB400]" />
            </div>
          </div>
          <div className=" text-center">
            <Image
              src={SimpleExperience}
              width={50}
              height={50}
              alt="SimpleExperience"
              className=" w-[50px] h-[50px]"
            />
            <div className="smallboxtitle text-[#20AF98]">
              Simple User Experience
            </div>
            <div className="relative overflow-hidden">
              <p className="smallboxdescription">
                User-friendly e-Marketplace with dashboards for informed
                decisions and supply chain visibility.
              </p>
              <span className="absolute bottom-0 left-0 h-1 w-full bg-[#20AF98]" />
            </div>
          </div>
          <div className="relative text-center">
            <Image
              src={OperationsSupport}
              width={50}
              height={50}
              alt="OperationsSupport"
              className=" w-[50px] h-[50px]"
            />
            <div className="smallboxtitle text-[#DB78A1] w-full sm:w-[40%] xs:w-[40%] ssm:w-full md:w-full mx-auto">
              Operations Support
            </div>
            <div className="relative overflow-hidden">
              <p className="smallboxdescription">
                On-ground team manages time, quality, and delivery to keep your
                business operations on track.
              </p>
              <span className="absolute bottom-0 left-0 h-1 w-full bg-[#DB78A1]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

BuyerSection.propTypes = {
  setIsAutoOpenEnquiryModal: PropTypes.func.isRequired,
};

export default BuyerSection;

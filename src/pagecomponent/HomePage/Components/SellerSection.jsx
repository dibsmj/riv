/** @jsxImportSource @emotion/react */
import { memo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import MultipleEnquiries from "@/assets/Home/MultipleEnquiries.webp";
import UnlimitedLeads from "@/assets/Home/UnlimitedLeads.webp";
import OrderVisibility from "@/assets/Home/OrderVisibility.webp";
import ProductListing from "@/assets/Home/ProductListing.webp";

const SellerSection = memo(({ setIsAutoOpenEnquiryModal }) => {
  return (
    <div className="w-[85%] sm:w-[95%] xs:w-[95%] ssm:w-[90%] md:w-[85%] mx-auto mt-[2rem]">
      <div className="grid grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 ssm:grid-cols-1 md:grid-cols-2 gap-[2rem]">
        <div className="grid grid-cols-2 gap-[2rem] order-1 sm:order-2 xs:order-2 ssm:order-2 md:order-1 mt-[2rem] sm:mt-0 xs:mt-0 ssm:mt-0 md:mt-[2rem]">
          <div className="text-center">
            <Image
              src={MultipleEnquiries}
              width={50}
              height={50}
              alt="MultipleEnquiries"
              className=" w-[50px] h-[50px]"
            />
            <div className="smallboxtitle text-[#1BABE2]">
              Multiple Enquiries
            </div>
            <div className="relative overflow-hidden">
              <p className="smallboxdescription">
                Be the top choice for verified buyers. Handle multiple
                requirements with our smart RFx process.
              </p>
              <span className="absolute bottom-0 left-0 h-1 w-full bg-[#1BABE2]" />
            </div>
          </div>
          <div className="text-center">
            <Image
              src={UnlimitedLeads}
              width={50}
              height={50}
              alt="UnlimitedLeads"
              className=" w-[50px] h-[50px]"
            />
            <div className="smallboxtitle text-[#FFB400]">Unlimited Leads</div>
            <div className="relative overflow-hidden">
              <p className="smallboxdescription">
                Gain visibility in our global buyer network. Generate unlimited
                leads based on your capabilities.
              </p>
              <span className="absolute bottom-0 left-0 h-1 w-full bg-[#FFB400]" />
            </div>
          </div>
          <div className=" text-center">
            <Image
              src={OrderVisibility}
              width={50}
              height={50}
              alt="OrderVisibility"
              className=" w-[50px] h-[50px]"
            />
            <div className="smallboxtitle text-[#20AF98]">
              End-to-End Order Visibility
            </div>
            <div className="relative overflow-hidden">
              <p className="smallboxdescription">
                Track orders from start to finish. Monitor each step for smooth
                operations and satisfaction.
              </p>
              <span className="absolute bottom-0 left-0 h-1 w-full bg-[#20AF98]" />
            </div>
          </div>
          <div className="relative text-center">
            <Image
              src={ProductListing}
              width={50}
              height={50}
              alt="ProductListing"
              className=" w-[50px] h-[50px]"
            />
            <div className="smallboxtitle text-[#DB78A1]">
              Showcase Product Listing
            </div>
            <div className="relative overflow-hidden">
              <p className="smallboxdescription">
                Create tailored product listings. Reach curated global buyers to
                maximize your sales potential.
              </p>
              <span className="absolute bottom-0 left-0 h-1 w-full bg-[#DB78A1]" />
            </div>
          </div>
        </div>
        <div className="order-2 sm:order-1 xs:order-1 ssm:order-1 md:order-2">
          <h2 className="forbuyer !my-[.35rem]">For Manufacturers</h2>
          <p className="forbuyersubtext !my-0">
            Unleash global potential: rivexa connects you to limitless leads
          </p>
          <p className="forbuyertext mt-7">
            rivexa, a cutting-edge B2B procurement platform, connects you to
            limitless leads for custom product manufacturing. Access our select
            pool of meticulously vetted Global B2B Manufacturers, evaluated on
            multiple criteria. Our e-marketplace showcases comprehensive
            profiles highlighting capabilities, certifications, and trade
            history. 
          </p>
          <p className="forbuyertext">
            Engage in complete RFx processes with diverse INCO terms and
            personalized suggestions. Enjoy full pricing transparency, online
            negotiations, and clear fee structures. Our local team ensures
            optimal delivery times with real-time updates. Quality is assured
            through multiple inspections and top-tier partnerships. Streamline
            global trade with trusted logistics partners offering online booking
            and cargo tracking across various transportation modes.
          </p>
          <div className=" flex felx-row gap-3 justify-start xs:justify-center sm:justify-center ssm:justify-start md:justify-start">
            <a
              href={`${process.env.NEXT_PUBLIC_APP_CUSTOMER_ROOT_URL}register-seller`}
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
              Request Callback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

SellerSection.propTypes = {
  setIsAutoOpenEnquiryModal: PropTypes.func.isRequired,
};

export default SellerSection;

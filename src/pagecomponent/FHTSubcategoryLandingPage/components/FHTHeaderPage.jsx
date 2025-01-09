/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import { usePathname } from "next/navigation";
import {
  RequestDemo as EnquiryHandleButtonModal,
  HeaderRegistrationButton,
  ImageLazyLoad,
} from "../../../components/common";
import { FHTSubcategoryLandingPageStyle } from "../FHTSubcategoryLandingPageStyle";
import Breadcrumb from "../../BlogPages/components/Breadcrumb";

const FHTHeaderPage = ({ getCategoryHeader, getCaterogyStats }) => {
  const pathname = usePathname();
  const currentUrl = `${process.env.NEXT_PUBLIC_APP_ROOT_URL}${pathname}`;
  const breadcrumbItems = [
    { text: "Home", url: "/" },
    { text: "Fashion & Home Textiles", url: "/fashion-and-textiles" },
    {
      text: `${getCategoryHeader.title}`,
      url: currentUrl,
    },
  ];
  return (
    <div css={() => FHTSubcategoryLandingPageStyle()}>
      <div className="md:grid grid-cols-2 relative top-10 md:gap-32">
        <div className="col-span-1 m-auto mt-[50px] md:mt-[100px] p-12 flex flex-col justify-between">
          <div>
            <div className="-mt-[5rem]">
              <Breadcrumb items={breadcrumbItems} />
            </div>
            <h1 className="fhtcategory-title">{getCategoryHeader.title}</h1>
            <div className="fhtcategory-title-desc my-5 text-xl">
              {getCategoryHeader.description}
            </div>
          </div>
          <div className="button-container">
            <div className="flex flex-row flex-wrap m-auto items-center align-middle gap-3 justify-start xs:justify-center sm:justify-center ssm:justify-start md:justify-start lg:justify-start md:w-max md:mb-[34px]">
              <div>
                <EnquiryHandleButtonModal
                  className="button-first cursor-pointer p-[1.25rem]"
                  name="Send Enquiry"
                />
              </div>
              <div className="z-50">
                <HeaderRegistrationButton className={`button-second`} />
              </div>
              <div>
                <a href="#howitworks" className="button-second no-underline">
                  See how it works
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 relative">
          <ImageLazyLoad
            alt={`background`}
            className={`w-full h-full`}
            imageSrc={getCategoryHeader.background}
          />
          {/* <ImageLazyLoad
            alt={`human2`}
            className={`absolute -left-[8rem] xs:left-0 sm:left-0 ssm:left-0 md:-left-[8rem] lg:-left[8rem] bottom-0 ssm:bottom-0 md:bottom-0 lg:bottom-0 w-full h-full`}
            imageSrc={getCategoryHeader.image}
          /> */}
        </div>
      </div>
      <div className="relative flex justify-center mx-5 md:mx-0 md:m-0 xs:-top-[1rem] sm:-top-[1rem] ssm:-top-16 md:-top-[3.2rem] lg:-top-[3.2rem]">
        <div className="w-[90%] justify-evenly fht-tab grid grid-cols-4 xs:grid-cols-1 sm:grid-cols-1 ssm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 p-5">
          {getCaterogyStats?.map((item) => (
            <div key={item.name} className="w-auto ssm:w-[200px] md:w-[270px]">
              <div className="fht-tab-name">{item.name}</div>
              <div className="fht-tab-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

FHTHeaderPage.propTypes = {
  getCategoryHeader: PropTypes.array.isRequired,
  getCaterogyStats: PropTypes.array.isRequired,
};

export default FHTHeaderPage;

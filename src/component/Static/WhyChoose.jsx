/* eslint-disable no-undef */
/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import WhyChooseStyles from "./WhyChooseStyles";
import DoubleArrow from "@/assets/FirstPage/arrow-down-double.png";
import ImageLazyLoad from "@/component/ImageLazyLoad";

const WhyChoose = ({ data }) => (
  <div css={WhyChooseStyles}>
    <div className="whychooseuscard flex flex-row">
      <div className=" flex-shrink-0 relative">
        <img
          alt={"DoubleArrow"}
          src={DoubleArrow.src}
          style={{ backgroundColor: `${data.colorCode}` }}
          className={`rounded-full p-2`}
        />
        <ImageLazyLoad
          alt={"LineOne"}
          imageSrc={data.line.src}
          className={data.lineClass}
        />
      </div>
      <div className="flex-1">
        <div className=" flex flex-row xs:flex-col sm:flex-col ssm:flex-row md:flex-row lg:flex-row gap-3">
          <div className=" w-3/4 xs:w-full sm:w-full ssm:w-3/4 md:w-3/4 lg:w-3/4 text-left">
            <h3 className="whychoosecardheadertext">{data.title}</h3>
            {data?.points &&
              data?.points.map((item) => (
                <div key={item.id} className=" inline-flex my-3">
                  <ImageLazyLoad
                    alt={"CheckMark"}
                    imageSrc={data.checkmark.src}
                    className={" w-[28px] h-[28px]"}
                  />
                  <div className="ml-2 whychoosecarddesc flex">{item.text}</div>
                </div>
              ))}
          </div>
          <div className="w-1/4 xs:w-full sm:w-full ssm:w-1/4 md:w-1/4 lg:w-1/4 flex align-middle justify-center items-center">
            <ImageLazyLoad
              alt={"CardOne"}
              imageSrc={data.leftImage.src}
              className={"max-w-full max-h-full"}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);
WhyChoose.propTypes = {
  data: PropTypes.any.isRequired,
};

export default WhyChoose;

/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import UseOurPlatformStyles from "./UseOurPlatformStyles";
import Image from "next/image";

const UseOurPlatform = ({ imageSrc, title, description }) => {
  const data = 0;
  return (
    <div
      css={UseOurPlatformStyles}
      className="m-auto justify-center align-middle items-center w-1/4 xs:w-full sm:w-full ssm:w-1/4 md:w-1/4 lg:w-1/4"
    >
      <div className="w-28 rounded-full bg-[#4A3587] m-auto">
        <Image
          alt={`Image2`}
          className={`scale-50 justify-center align-middle text-center items-center w-full h-full`}
          src={imageSrc}
        />
      </div>
      <div className="flex flex-col justify-center items-center text-center">
        <h3 className="platformtitle">{title}</h3>
        <p className="platformdescription mb-4 -mt-3">{description}</p>
      </div>
    </div>
  );
};
UseOurPlatform.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default UseOurPlatform;

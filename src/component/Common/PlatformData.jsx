/** @jsxImportSource @emotion/react */
import { Fragment } from "react";
import PropTypes from "prop-types";
import UseOurPlatform from "./UseOurPlatform";
import Image from "next/image";
import PlatformDataStyles from "./PlatformDataStyles";

const PlatformData = ({ platformdata }) => {
  const z = 0;
  return (
    <section css={PlatformDataStyles}>
      <div className="ml-4 mr-4">
        <h2 className="font-bold justify-center items-center text-center align-middle text-[32px] title ">
          How to use our platform
        </h2>
      </div>
      {platformdata.map((data, index) => (
        <div
          key={`platformdata-${index}`}
          className={`flex flex-wrap flex-row ${
            index === 0
              ? "gap-1 mt-16"
              : "xs:flex-col-reverse sm:flex-c-reverse ssm:flex-row md:flex-row lg:flex-row" // Apply styling for the second row
          }`}
        >
          {data.items.map((item, dataindexx) => (
            <Fragment key={`platformdata-data-${dataindexx}`}>
              <UseOurPlatform
                imageSrc={item.imageSrc}
                title={item.title}
                description={item.description}
              />
              {item.arrow && (
                <div className="mt-32 hidden xs:hidden md:block sm:block ssm:block">
                  {index === 0 ? (
                    <Image alt={`arrow`} src={item.arrow} />
                  ) : (
                    <img
                      style={{ transform: "scaleX(-1)" }}
                      src={item.arrow.src}
                      alt="arrow"
                      loading="lazy"
                    />
                  )}
                </div>
              )}
            </Fragment>
          ))}
        </div>
      ))}
    </section>
  );
};

PlatformData.propTypes = {
  platformdata: PropTypes.array.isRequired,
};

export default PlatformData;

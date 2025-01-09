/** @jsxImportSource @emotion/react */
import React from 'react';
import PropTypes from 'prop-types';
import CategoryCard from '@/pagecomponent/Event/IG/CategoryCard';
import ExploreOtherProcess from './ExploreOtherProcess';
import SubCategoryStyles from './SubCategoryStyles';
import HeaderRegistrationButton from "@/component/Common/HeaderRegistrationButton";

const CastingProcess = ({
  processTitle,
  processDescription,
  getSubSubCategory,
  getSubSubCategoryFooter,
}) => {
  const heights = {
    default: '820px',
    mobile: '820px',
    tablet: '930px',
    desktop: '820px',
  };
  return (
    <div css={() => SubCategoryStyles({ heights })}>
      <div className="casting-process-layout-2 py-10 px-0 xs:px-10 sm:px-10 ssm:px-0 md:px-0 lg:px-0">
        <div className="w-[80%] xs:w-full sm:w-full ssm:w-[80%] md:w-[80%] lg:w-[80%] m-auto flex flex-row xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-1 ssm:grid ssm:grid-cols-1 md:flex md:flex-row lg:flex lg:flex-row gap-5">
          <div className=" w-[25%] xs:w-full sm:w-full ssm:w-full md:w-[25%] lg:w-[25%]">
            <div className="w-full">
              <h2 className="casting-title text-lg md:text-2xl">
                {processTitle}
              </h2>
              <p className="text-gray-600 casting-description">
                {processDescription}
              </p>
              <HeaderRegistrationButton className={`casting-button`} />
            </div>
          </div>
          <div className="w-[75%] xs:w-full sm:w-full ssm:w-full md:w-[75%] lg:w-[75%]">
            <div
              className={`grid grid-cols-${getSubSubCategory.length} xs:grid-cols-1 sm:grid-cols-1 ssm:grid-cols-${getSubSubCategory.length} md:grid-cols-${getSubSubCategory.length} lg:grid-cols-${getSubSubCategory.length} gap-8`}
            >
              {getSubSubCategory.map(({ image, name, link }) => (
                <div key={name}>
                  <CategoryCard
                    image={image}
                    name={name}
                    className={`absolute bottom-1 xs:bottom-0 sm:bottom-0 ssm:bottom-0 md:bottom-[.1rem] lg:bottom-[.1rem] left-0 h-10 w-full categoryfooter m-auto`}
                    link={link}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="casting-process-layout-2">
        <div className=" w-[80%] xs:w-full sm:w-full ssm:w-[80%] md:w-[80%] lg:w-[80%] m-auto flex flex-row">
          <div className=" w-[25%] flex-shrink-0 block xs:hidden sm:hidden ssm:hidden md:block lg:block">
            {' '}
          </div>
          <div className="flex-1 w-[75%] xs:w-full sm:w-full ssm:w-full md:w-[75%] lg:w-[75%]">
            <div className="flex flex-row items-center text-lg">
              <span className="text-primaryWhite flex-shrink-0 m-auto">
                Explore Other Processes{' '}
              </span>
              <span className="md:block xs:hidden text-primaryWhite w-full h-[2px] bg-primaryWhite">
                {''}
              </span>
            </div>
            <div className="grid grid-cols-4 gap-20 mt-4 pb-14 xs:grid-cols-1 sm:grid-cols-1 ssm:grid-cols-4 md:grid-cols-4 sm:mr-4">
              {getSubSubCategoryFooter.map(({ imageUrl, title, link }) => (
                <ExploreOtherProcess
                  key={title}
                  imageUrl={imageUrl}
                  title={title}
                  link={link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CastingProcess.propTypes = {
  processTitle: PropTypes.string.isRequired,
  processDescription: PropTypes.string.isRequired,
  getSubSubCategory: PropTypes.object.isRequired,
  getSubSubCategoryFooter: PropTypes.object.isRequired,
};

export default CastingProcess;

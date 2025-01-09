import React from 'react';
import PropTypes from 'prop-types';
import SubCategoryStyles from './SubCategoryStyles';

const PostProcess = ({ getPostProcess }) => {
  const z = 0;
  return (
    <div css={() => SubCategoryStyles()}>
      <div className="materialhandled py-14">
        <h2 className="text-3xl font-bold justify-center items-center text-center align-middle text-[#fff]">
          Post Processes
        </h2>
        <div className=" relative top-4 m-auto w-[80%] flex flex-row flex-wrap justify-center text-center items-center align-middle gap-5">
          {getPostProcess &&
            getPostProcess.map((process) => (
              <div className="partnamesub" key={process.id}>
                {process.name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

PostProcess.propTypes = {
  getPostProcess: PropTypes.array.isRequired,
};

export default PostProcess;

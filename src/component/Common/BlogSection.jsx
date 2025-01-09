/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import BlogSectionStyles from "./BlogSectionStyles";
import RoundButton from "@/component/RoundButton";
import BlogResources from "@/component/BlogResources";

const BlogSection = ({ typeID = 9, firstBlogIndex, lastBlogIndex }) => {
  const [isSlice, setIsSlice] = useState(false);
  return (
    <section css={BlogSectionStyles}>
      <div
        id="blog"
        className="w-[95%]  m-auto justify-center items-center text-center align-middle mt-20"
      >
        <div className="blogtext text-[20px] xs:text-[10px] sm:text-[10px] ssm:text-[15px] md:text-[20px] lg:text-[20px]">
          From Our Blog
        </div>
        <div className="blogheadertitle mt-5">
          <h2 className="text-[42px] xs:text-[25px] sm:text-[25px] ssm:text-[32px] md:text-[42px] lg:text-[42px]">
            Learn how Companies are using rivexa to transform their business.
          </h2>
        </div>
        <div className=" text-left grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 ssm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-10">
          <BlogResources
            searchQuery={""}
            typeID={typeID}
            isSlice={!isSlice}
            startIndex={firstBlogIndex}
            endIndex={lastBlogIndex}
            className={``}
          />
        </div>
        <div className=" justify-center items-center align-middle text-center mt-10">
          <RoundButton
            buttonID={`blog_read_more`}
            title={"Read more"}
            link={`${process.env.NEXT_PUBLIC_APP_ROOT_URL}/resources`}
          />
        </div>
      </div>
    </section>
  );
};

BlogSection.propTypes = {
  typeID: PropTypes.number,
  firstBlogIndex: PropTypes.number.isRequired,
  lastBlogIndex: PropTypes.number.isRequired,
};

export default BlogSection;

/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import moment from "moment";
import loadable from "@loadable/component";
import Image from "next/image";
import BlogCardStyles from "./BlogCardStyles";
import { ViewEye, CalenderIcon, ClockIcon } from "../../config/GetImages";

const Tooltip = loadable(() => import("@mui/material/Tooltip"));

const BlogCard = ({
  blogType,
  blogTitle,
  blogDesc,
  blogImage,
  blogLink,
  createdAt,
  pageCount,
  sourceType,
}) => (
  <a
    href={`/${sourceType}/${blogLink}`}
    className=" no-underline border-0 focus:outline-none text-primaryBlack active:text-primaryBlack"
  >
    <div
      css={BlogCardStyles}
      className="bg-primaryWhite p-5 m-auto shadow-2xl rounded-md"
    >
      <img alt={blogTitle} className={`w-full h-full`} src={blogImage} />
      <div className="cardcategory my-3 w-full text-[#6941C6] active:text-[#6941C6]">
        {blogType}
      </div>
      <div className="flex">
        <div className="cardheader w-full overflow-hidden text-primaryBlack active:text-primaryBlack">
          <Tooltip
            title={blogTitle && blogTitle.replace(/&amp;/g, "&")}
            placement="top"
            arrow
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: "common.black",
                  padding: "10px",
                  fontFamily: "Arial",
                  fontSize: "16px",
                  "& .MuiTooltip-arrow": {
                    color: "common.black",
                  },
                },
              },
            }}
          >
            {blogTitle.length > 20
              ? `${blogTitle.replace(/&amp;/g, "&").slice(0, 20)}...`
              : blogTitle.replace(/&amp;/g, "&")}
          </Tooltip>
        </div>
      </div>
      <div className="carddescription my-3">
        {blogDesc.length > 120 ? `${blogDesc.slice(0, 120)}...` : blogDesc}
      </div>
      <div className="py-3 flex flex-row flex-wrap m-auto items-center align-middle gap-3 justify-start xs:justify-center sm:justify-center ssm:justify-start md:justify-start lg:justify-start">
        <div className="flex-1 xs:flex-none sm:flex-none ssm:flex-1 md:flex-1 lg:flex-1">
          <Image alt={`CalenderIcon`} src={CalenderIcon} />
          <span className="cardfootertext ml-2">
            {moment(createdAt).format("DD MMM YYYY")}
          </span>
        </div>
        <div className="flex-1 xs:flex-none sm:flex-none ssm:flex-1 md:flex-1 lg:flex-1">
          <Image alt={`ViewEye`} src={ViewEye} />
          <span className="cardfootertext ml-2">{pageCount} views</span>
        </div>
        <div className="flex-1 xs:flex-none sm:flex-none ssm:flex-1 md:flex-1 lg:flex-1">
          <Image alt={`ClockIcon`} src={ClockIcon} />
          <span className="cardfootertext ml-2">3 min. to read</span>
        </div>
      </div>
    </div>
  </a>
);

BlogCard.propTypes = {
  blogType: PropTypes.string.isRequired,
  blogTitle: PropTypes.string.isRequired,
  blogDesc: PropTypes.string.isRequired,
  blogImage: PropTypes.string.isRequired,
  blogLink: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  pageCount: PropTypes.number.isRequired,
  sourceType: PropTypes.string.isRequired,
};

export default BlogCard;

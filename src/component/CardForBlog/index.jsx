/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import moment from "moment";
import dynamic from "next/dynamic";
import Image from "next/image";
import CardForBlogStyles from "./CardForBlogStyles";

const Tooltip = dynamic(() => import("@mui/material/Tooltip"));

const CardForBlog = ({
  blogType,
  blogTitle,
  blogDesc,
  blogImage,
  blogLink,
  createdAt,
  pageCount,
  type,
}) => (
  <a
    css={CardForBlogStyles}
    href={`/${type}/${blogLink}`}
    className=" no-underline border-0 focus:outline-none text-primaryBlack active:text-primaryBlack"
  >
    <div className="cardmain space-y-4" key={blogTitle}>
      <div className="p-2 flex justify-center">
        <div className="h-52">
          <Image
            src={blogImage}
            alt="card-image"
            quality={3}
            priority={false}
            loading="lazy"
            width={310}
            height={208}
            className="rounded-xl"
          />
        </div>
      </div>
      <div className="cardcategory">{blogType}</div>
      <div className="cardtitle">
        <Tooltip
          title={
            <div className="tooltiptext">
              {blogTitle && blogTitle.replace(/&amp;/g, "&")}
            </div>
          }
          placement="top"
          arrow
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: "#856ACF",
                padding: "10px",
                fontFamily: "Arial",
                fontSize: "16px",
                color: "#ffffff",
                borderRadius: "10px",
                fontFamily: "Urbanist",
                "& .MuiTooltip-arrow": {
                  color: "#856ACF",
                },
                "& .tooltiptext": {
                  fontFamily: "Urbanist",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "15px",
                  lineHeight: "100%",
                  textAlign: "center",
                  color: "#ffffff",
                  cursor: "pointer",
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
      <div className="carddescription">
        <div className="mx-4">
          {blogDesc.length > 120 ? `${blogDesc.slice(0, 120)}...` : blogDesc}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[2rem] m-auto p-3 ">
        <div className="cardfootertext">
          {moment(createdAt).format("DD MMM YYYY")}
        </div>
        <div className="cardfootertext">{pageCount} views</div>
        <div className="cardfootertext">3min to read.</div>
      </div>
    </div>
  </a>
);

CardForBlog.propTypes = {
  blogType: PropTypes.string.isRequired,
  blogTitle: PropTypes.string.isRequired,
  blogDesc: PropTypes.string.isRequired,
  blogImage: PropTypes.string.isRequired,
  blogLink: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  pageCount: PropTypes.number.isRequired,
};

export default CardForBlog;

/** @jsxImportSource @emotion/react */
/* eslint-disable jsx-a11y/control-has-associated-label */
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import PropTypes from "prop-types";
import loadable from "@loadable/component";
import moment from "moment";
import { AiFillInstagram } from "react-icons/ai";
import { LiaFacebookF } from "react-icons/lia";
import { FaLinkedinIn } from "react-icons/fa";
import BlogPagesStyles from "./BlogPagesStyles";
import ShareComponent from "@/component/Share";
import BlogResources from "@/component/BlogResources";
import { CalenderIcon, ClockIcon, ViewEye } from "../../config/GetImages";
import {
  useLazyGetSingleBlogQuery,
  useUpdateBlogHitMutation,
} from "@/redux/slices/apiSlice";

const Alert = loadable.lib(() => import("@mui/material/Alert"));
const CheckIcon = loadable.lib(() => import("@mui/icons-material/Check"));
const Breadcrumb = loadable(() => import("./components/Breadcrumb"));
const SinglePage = loadable(() => import("./components/SinglePage"), {
  fallback: <div>Loading...</div>,
});

const BlogPage = ({ propsData, resource }) => {
  const [isSlice, setIsSlice] = useState(false);
  const [getPageDetails, setPageDetails] = useState([]);
  const [getPage] = useLazyGetSingleBlogQuery();
  const [isGetPageData, setIsGetPageData] = useState(false);
  const fetchPage = async () => {
    try {
      const result = await getPage(resource);
      if (result?.data.length > 0) {
        setPageDetails(result?.data[0]);
      } else {
        setPageDetails([]);
      }
      setIsGetPageData(true);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchPage();
  }, []);
  useEffect(() => {
    setPageDetails(propsData[0]);
    setIsGetPageData(true);
  }, [propsData]);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  useEffect(() => {
    if (
      getPageDetails &&
      getPageDetails.length === 0 &&
      getPageDetails === undefined
    ) {
      setShouldRedirect(true);
    }
  }, [getPageDetails]);
  const [getCopied, setCopied] = useState(false);
  const [updateHit] = useUpdateBlogHitMutation();
  const updatePageHit = (pageID) => {
    try {
      updateHit(pageID);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      if (isGetPageData && getPageDetails && getPageDetails?.page_id) {
        updatePageHit(getPageDetails?.page_id);
      }
    }, 3000);
  }, [isGetPageData, getPageDetails]);

  const breadcrumbItems = [
    { text: "Home", url: "/" },
    { text: "Resources", url: "/resources" },
    {
      text: `${getPageDetails?.page_title}`,
      url: `/resources/${getPageDetails?.page_link}`,
    },
  ];
  if (shouldRedirect) {
    notFound(); // Redirect to 404 page if invalid
  }
  return (
    <main>
      <div css={BlogPagesStyles}>
        <div className="w-full m-auto mt-[7rem] mb-[5rem]">
          {getCopied && (
            <Alert
              className="absolute top-0 right-5 z-10"
              icon={<CheckIcon fontSize="inherit" />}
              severity="success"
            >
              URL copied to clipboard
            </Alert>
          )}
          <div className="w-[95%]  m-auto justify-center items-center align-middle">
            <div className="py-1 flex flex-row">
              <div className="headertitle w-[90%]">
                <h1 className="my-0">
                  {getPageDetails?.page_title &&
                    getPageDetails?.page_title.replace(/&amp;/g, "&")}
                </h1>
                <div className="-ml-5">
                  <Breadcrumb items={breadcrumbItems} />
                </div>
              </div>
              <div className="w-[10%]">
                <ShareComponent setCopied={setCopied} />
              </div>
            </div>
            <div className=" flex flex-row gap-5 py-3">
              <div className="inline-flex justify-center items-center align-middle">
                <Image alt={`CalenderIcon`} src={CalenderIcon} />
                <span className="blogfootertext ml-2">
                  {moment(getPageDetails?.created_at).format("DD MMMM YYYY")}
                </span>
              </div>
              <div className="inline-flex justify-center items-center align-middle">
                <Image alt={`ClockIcon`} src={ClockIcon} />
                <span className="blogfootertext ml-2">3 min. to read</span>
              </div>
              <div className="inline-flex justify-center items-center align-middle">
                <Image alt={`ViewEye`} src={ViewEye} />
                <span className="blogfootertext ml-2">
                  {getPageDetails?.page_hit_count} views
                </span>
              </div>
            </div>
            {isGetPageData && (
              <SinglePage data={getPageDetails?.page_description} />
            )}
          </div>
          <div className="w-[95%] m-auto py-[4rem]">
            <div className="flex flex-row gap-2">
              <div className="w-2/5 h-[1px] bg-[#CAD1E9]">{""}</div>
              <div className="w-1/5">
                <div className="flex flex-row gap-5 justify-center items-center align-middle text-center">
                  <a
                    href="https://instagram.com/rivexa_by_mjunction?igshid=OGQ5ZDc2ODk2ZA"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillInstagram className="icon-large text-dark" />
                  </a>
                  <a
                    href="https://www.facebook.com/rivexabymjunction?mibextid=ZbWKwL"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LiaFacebookF className="icon-large text-dark" />
                  </a>
                  <a
                    href="https://www.linkedin.com/showcase/rivexabymjunction"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedinIn className="icon-large text-dark" />
                  </a>
                </div>
              </div>
              <div className="w-2/5 h-[1px] bg-[#CAD1E9]">{""}</div>
            </div>
          </div>
          <div className="w-[95%] m-auto text-left grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 ssm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8">
            <BlogResources
              searchQuery={""}
              typeID={"all"}
              isSlice={!isSlice}
              startIndex={0}
              endIndex={3}
              className={``}
              sourceType={"resources"}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

BlogPage.propTypes = {
  propsData: PropTypes.any.isRequired,
  resource: PropTypes.string.isRequired,
};

export default BlogPage;

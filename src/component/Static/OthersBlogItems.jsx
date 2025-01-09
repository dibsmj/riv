/* eslint-disable no-undef */
/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import BlogCard from "@/component/BlogCard";
import { getResourcesItem, modules } from "@/constants/resourcesConstent";

const OthersBlogItems = ({ fromIndex, toIndex }) => {
  const resourcesItems = getResourcesItem();
  const [getAllResourcesItems, setAllResourcesItems] = useState(resourcesItems);
  return (
    <>
      {getAllResourcesItems.slice(fromIndex, toIndex).map((item, index) => (
        <BlogCard
          blogType={item.typeTitle}
          blogTitle={item.title}
          blogDesc={item.title}
          blogImage={item.image}
          blogLink={item.link}
          createdAt={
            modules[`${item.link}`]?.getContentPage(item.link)?.createdAt
          }
          pageCount={0}
        />
      ))}
    </>
  );
};

OthersBlogItems.propTypes = {
  fromIndex: PropTypes.number.isRequired,
  toIndex: PropTypes.number.isRequired,
};

export default OthersBlogItems;

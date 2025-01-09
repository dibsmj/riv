/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import BlogCard from "@/component/BlogCard";
import {
  useLazyGetAllBlogsQuery,
  useLazyGetAllCategoryBlogsQuery,
} from "@/redux/slices/apiSlice";

const BlogResources = ({
  blogParentCategory = "resources",
  searchQuery,
  typeID,
  isSlice,
  startIndex,
  endIndex,
  className,
  sourceType,
}) => {
  const [getBlogs] = useLazyGetAllBlogsQuery();
  const [getBlogsCategoryWise] = useLazyGetAllCategoryBlogsQuery();
  const [blogData, setBlogData] = useState([]);
  const fetchBlogs = async (searchQuery) => {
    try {
      const result = await getBlogs(blogParentCategory);
      if (result?.data) {
        if (searchQuery) {
          const filteredResults = result?.data.filter((resource) =>
            resource.page_title.toLowerCase().includes(searchQuery)
          );
          setBlogData(filteredResults);
        } else {
          setBlogData(result?.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchBlogsTypes = async (categoryID, searchQuery) => {
    try {
      const result = await getBlogsCategoryWise(categoryID);
      if (result?.data) {
        if (searchQuery) {
          const filteredResults = result?.data.filter((resource) =>
            resource.page_title.toLowerCase().includes(searchQuery)
          );
          setBlogData(filteredResults);
        } else {
          setBlogData(result?.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (typeID === "all") {
      console.log("searchQuery: ", searchQuery);
      fetchBlogs(searchQuery);
    } else {
      fetchBlogsTypes(typeID, searchQuery);
    }
  }, [typeID, searchQuery]);

  return (
    <>
      {isSlice &&
        blogData &&
        blogData
          .slice(startIndex, endIndex)
          .map((item, index) => (
            <BlogCard
              key={item.page_title}
              blogType={item.blog_typename}
              blogTitle={item.page_title}
              blogDesc={item.page_description}
              blogImage={item.blog_image}
              blogLink={item.page_link}
              createdAt={item.created_at}
              pageCount={item.page_hit_count}
              sourceType={sourceType}
            />
          ))}
      {!isSlice && blogData && blogData.length > 3 && (
        <div className={className}>
          {blogData &&
            blogData
              .slice(3)
              .map((item, index) => (
                <BlogCard
                  key={item.page_title}
                  blogType={item.blog_typename}
                  blogTitle={item.page_title}
                  blogDesc={item.page_description}
                  blogImage={item.blog_image}
                  blogLink={item.page_link}
                  createdAt={item.created_at}
                  pageCount={item.page_hit_count}
                  sourceType={sourceType}
                />
              ))}
        </div>
      )}
    </>
  );
};

BlogResources.propTypes = {
  blogParentCategory: PropTypes.string,
  searchQuery: PropTypes.string.isRequired,
  typeID: PropTypes.number.isRequired,
  isSlice: PropTypes.bool.isRequired,
  startIndex: PropTypes.number.isRequired,
  endIndex: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
  sourceType: PropTypes.string.isRequired,
};

export default BlogResources;

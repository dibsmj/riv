/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import loadable from "@loadable/component";
import Image from "next/image";
import RequestDemoStyles from "@/component/Common/RequestDemoStyles";
import EnquiryModal from "@/component/Common/EnquiryModal";

// Lazy-loaded components
const Modal = loadable(() => import("@mui/material/Modal"));
const CloseIcon = loadable(() => import("@mui/icons-material/Close"));

const style = {
  borderRadius: 20,
  border: "0px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%) scale(0.7)",
  backgroundColor: "#fff",
  padding: "1.5rem",
};

const CategoryCard = ({
  imageSrc,
  title,
  hoverContent,
  className,
  onClick,
  categoryCount,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const hoverTopStyle = categoryCount === 6 ? "md:top-32" : "md:top-16";
  const hoverLeftStyle = categoryCount === 6 ? "md:left-10" : "md:left-7";

  const handleClick = () => {
    if (title === "Sustainable Clothing") {
      router.push("/fashion-and-textiles/sustainability");
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={`relative ${className} group overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover rounded-md transition-all duration-300 ease-in-out"
      />
      <div
        className={`absolute inset-0 bg-[black] transition-opacity duration-300 ease-in-out ${
          isHovered ? "bg-opacity-50" : "bg-opacity-0"
        }`}
      >
        {isHovered && (
          <p
            className={`absolute xs:top-28 xs:left-9 ${hoverTopStyle} ${hoverLeftStyle} animate-fade-up w-[80%] text-primaryWhite text-md mt-10 rounded-md text-center`}
          >
            {hoverContent.replace(/'/g, "&apos;")}
          </p>
        )}
      </div>
      <button
        type="button"
        style={{
          border: "2px solid #FFFFFF",
        }}
        className={`absolute ${
          title === "Sustainable Clothing" ? " cursor-pointer" : ""
        } bottom-2 left-1/2 transform -translate-x-1/2 bg-transparent text-primaryWhite py-1 px-2 rounded-md text-sm whitespace-nowrap`}
        onClick={handleClick}
      >
        {title}
      </button>
    </div>
  );
};

// Add prop types for CategoryCard
CategoryCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  hoverContent: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  categoryCount: PropTypes.number.isRequired,
};

CategoryCard.defaultProps = {
  className: "",
  onClick: undefined,
};

const CategoryGrid = ({
  categories,
  title,
  setIsAutoOpenEnquiryModal,
  setMessages,
  setActiveTab,
}) => {
  const [open, setOpen] = useState(false);
  const [getErrorMessage, setShowErrorMessage] = useState(null);

  const handleEnquiryClick = () => {
    setOpen(true);
  };

  const modalCloseClear = () => {
    setOpen(false);
  };

  const getGridColsClass = () => {
    const categoryCount = categories.length;
    if (categoryCount === 6) return "grid-cols-3";
    if (categoryCount === 5) return "grid-cols-3 md:grid-cols-3";
    if (categoryCount === 8) return "grid-cols-4";
    return "grid-cols-4 xs:grid-cols-2 md:grid-cols-4";
  };
  const [isEnquiryOpen, SetIsEnquiryOpen] = useState(false);

  return (
    <div css={RequestDemoStyles}>
      <section className="flex flex-col items-center px-5 py-10">
        <h2 className="text-[32px] md:text-[32px] font-bold mb-10 title text-center">
          {title}
        </h2>
        <div
          className={`grid ${getGridColsClass()} gap-4 w-full max-w-6xl max-md:grid-cols-1 mt-6`}
        >
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              imageSrc={category.imageSrc}
              title={category.title}
              hoverContent={category.hoverContent}
              className="h-85"
              categoryCount={categories.length}
              onClick={() => {
                if (category.title === "Explore More") {
                  setIsAutoOpenEnquiryModal(true);
                  setActiveTab("enquiry");
                }
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

CategoryGrid.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      imageSrc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      hoverContent: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default CategoryGrid;

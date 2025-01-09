/** @jsxImportSource @emotion/react */
"use client";
import { useRef } from "react";
import BlogSection from "@/component/Common/BlogSection";
import VasStyles from "./VasStyles";
import ValueAddedServiceCard from "./ValueAddedServiceCard";
import CrossBorderLogistics from "./CrossBorderLogistics";
import SupplierFinancing from "./SupplierFinancing";
import QualityAssurance from "./QualityAssurance";
import ExportAdvisoryServicesData from "./ExportAdvisoryServices";
import DesignAdvisory from "./DesignAdvisory";

const VasPage = () => {
  const heights = {
    default: "820px",
    mobile: "820px",
    tablet: "1650",
    desktop: "820px",
  };

  const sectionsRefs = {
    "cross-border-logistics": useRef(null),
    "supplier-financing": useRef(null),
    "quality-assurance": useRef(null),
    "export-advisory": useRef(null),
    "design-advisory": useRef(null),
  };

  const scrollToSection = (sectionId) => {
    const offset = -30;
    const element = sectionsRefs[sectionId].current;
    const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <main>
      <div css={() => VasStyles({ heights })}>
        <div className="w-full m-auto overflow-hidden">
          <div className="w-full m-auto justify-center items-center text-center align-middle mt-10">
            <ValueAddedServiceCard scrollToSection={scrollToSection} />
            <div ref={sectionsRefs["cross-border-logistics"]}>
              <CrossBorderLogistics />
            </div>
            <div ref={sectionsRefs["supplier-financing"]}>
              <SupplierFinancing />
            </div>
            <div ref={sectionsRefs["quality-assurance"]}>
              <QualityAssurance />
            </div>
            <div ref={sectionsRefs["export-advisory"]}>
              <ExportAdvisoryServicesData />
            </div>
            <div ref={sectionsRefs["design-advisory"]}>
              <DesignAdvisory />
            </div>
            {/* <EnquiryForm /> */}
            <BlogSection
              typeID={"value-added-services"}
              firstBlogIndex={0}
              lastBlogIndex={3}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default VasPage;

/** @jsxImportSource @emotion/react */
import { useState, useMemo } from "react";
import PropTypes from "prop-types";
import QualityInspectionForm from "@/pagecomponent/VasPage/CrossBorderForm";
import SupplierFinancingForm from "@/pagecomponent/VasPage/SupplierFinancingForm";
import QualityAssuranceForm from "@/pagecomponent/VasPage/QualityAssuranceForm";
import ExportAdvisoryForm from "@/pagecomponent/VasPage/ExportAdvisoryForm";
import DesignAdvisoryForm from "@/pagecomponent/VasPage/DesignAdvisoryForm";
import BackIcon from "@/assets/chatbot/back.svg";
import EnquiryForm from "./NewEnquiryForm";

const EnquirySection = ({ open }) => {
  const [queryForm, setQueryForm] = useState("buying");
  const closeModal = () => {
    console.log("success");
  };
  const formComponents = useMemo(
    () => ({
      buying: (
        // <EnquriyForm
        //   categories={[
        //     { id: 1, name: "Fashion & Home Textiles" },
        //     { id: 2, name: "Industrial Goods" },
        //   ]}
        //   fromPage="All"
        //   setShowErrorMessage={() => {}}
        // />
        <EnquiryForm open={open} />
      ),
      logistics: <QualityInspectionForm closeModal={closeModal} />,
      financing: <SupplierFinancingForm closeModal={closeModal} />,
      quality: <QualityAssuranceForm closeModal={closeModal} />,
      export: <ExportAdvisoryForm closeModal={closeModal} />,
      design: <DesignAdvisoryForm closeModal={closeModal} />,
    }),
    []
  );

  return (
    <div className="max-w-[45rem] mx-auto mt-8">
      {!queryForm ? (
        <>
          <div className=" flex flex-row sm:flex-col xs:flex-col ssm:flex-row md:flex-row lg:flex-row xl:flex-row text-xl font-bold mb-2 gap-[2rem]">
            <div className="hithere">Hi there 👋</div>
            <div className="howcanwehelp">Pls select the enquire topic</div>
          </div>
          <div className="emptysubtext text-left w-[100%] pt-2 m-auto">
            I&#39;m typically reply in few seconds
          </div>
          <div className="grid grid-cols-2 gap-4 mt-3 justify-start items-start align-baseline">
            {[
              { label: "Product Enquiry", value: "buying" },
              { label: "Cross Border Logistics", value: "logistics" },
              { label: "Supplier Financing", value: "financing" },
              { label: "Quality Assurance", value: "quality" },
              { label: "Export Advisory Services", value: "export" },
              { label: "Design Advisory", value: "design" },
            ].map(({ label, value }) => (
              <button
                key={value}
                type="button"
                onClick={() => setQueryForm(value)}
                className="bg-[#C5F2EB] p-8 rounded-lg shadow-md text-center cursor-pointer border-none"
              >
                <span className="text-lg font-semibold">{label}</span>
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className=" p-4 overflow-y-visible h-auto relative">
          <button
            type="button"
            className="absolute top-0 left-0 bg-transparent border-none cursor-pointer"
            onClick={() => setQueryForm("")}
          >
            <div className=" inline-flex flex-row justify-center items-center align-middle -mt-8 -ml-4">
              <img src={BackIcon.src} alt="BackIcon" />
              <span className="allserviceenquiry">All service enquiries</span>
            </div>
          </button>
          {open && (
            <div className="differentform mt-4">
              {formComponents[queryForm]}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

EnquirySection.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default EnquirySection;

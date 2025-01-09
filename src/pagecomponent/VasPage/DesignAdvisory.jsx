import React, { useState } from "react";
import { Dialog } from "@mui/material";
import DesignAdvisoryForm from "./DesignAdvisoryForm";
import Services from "./Services";
import ServiceData from "./ServiceData";

const DesignAdvisory = () => {
  const DesignAdvisoryData = ServiceData.find(
    (service) => service.title === "Design Advisory"
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEnquireClick = () => {
    // console.log("Enquire button clicked!");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  // console.log(DesignAdvisory);

  return (
    <>
      <Services
        title={DesignAdvisoryData.title}
        description={DesignAdvisoryData.description}
        items={DesignAdvisoryData.items}
        logo={DesignAdvisoryData.logo}
        onEnquireClick={handleEnquireClick}
        bgColor={DesignAdvisoryData.bgColor}
        image={DesignAdvisoryData.image}
        order1="order-1"
        order2="order-2"
      />
      {isModalOpen && (
        <Dialog
          open
          onClose={closeModal}
          fullWidth
          maxWidth="sm"
          sx={{
            top: "5%",
            margin: "10px",
            height: "90vh",
          }}
        >
          <DesignAdvisoryForm closeModal={closeModal} />
        </Dialog>
      )}
    </>
  );
};

export default DesignAdvisory;

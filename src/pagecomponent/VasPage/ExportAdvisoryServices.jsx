import React, { useState } from 'react';
import { Dialog } from '@mui/material';
import Services from './Services';
import ServiceData from './ServiceData';
import ExportAdvisoryForm from './ExportAdvisoryForm';

const ExportAdvisoryServices = () => {
  const ExportAdvisoryServicesData = ServiceData.find(
    (service) => service.title === 'Export Advisory Services'
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEnquireClick = () => {
    console.log('Enquire button clicked!');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  // console.log(ExportAdvisoryServices);

  return (
    <>
      <Services
        title={ExportAdvisoryServicesData.title}
        description={ExportAdvisoryServicesData.description}
        items={ExportAdvisoryServicesData.items}
        logo={ExportAdvisoryServicesData.logo}
        onEnquireClick={handleEnquireClick}
        bgColor={ExportAdvisoryServicesData.bgColor}
        image={ExportAdvisoryServicesData.image}
        order1="order-2"
        order2="order-1"
      />
      {isModalOpen && (
        <Dialog
          className="mt-10"
          open
          onClose={closeModal}
          fullWidth
          maxWidth="sm"
          sx={{
            top: '5%',
            bottom: '-10%',
            margin: '10px',
            height: '90vh',
          }}
        >
          <ExportAdvisoryForm closeModal={closeModal} />
        </Dialog>
      )}
    </>
  );
};

export default ExportAdvisoryServices;

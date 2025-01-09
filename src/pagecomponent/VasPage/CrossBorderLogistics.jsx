import React, { useState } from 'react';
import { Dialog } from '@mui/material';
import Services from './Services';
import ServiceData from './ServiceData';
import QualityInspectionForm from './CrossBorderForm';

const CrossBorderLogistics = () => {
  const crossBorderData = ServiceData.find(
    (service) => service.title === 'Cross Border Logistics'
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEnquireClick = () => {
    console.log('Enquire button clicked!');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Services
        title={crossBorderData.title}
        description={crossBorderData.description}
        items={crossBorderData.items}
        logo={crossBorderData.logo}
        onEnquireClick={handleEnquireClick}
        bgColor={crossBorderData.bgColor}
        image={crossBorderData.image}
        order1="order-1"
        order2="order-2"
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
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          }}
        >
          <QualityInspectionForm closeModal={closeModal} />
        </Dialog>
      )}
    </>
  );
};

export default CrossBorderLogistics;

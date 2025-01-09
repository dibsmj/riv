import React, { useState } from 'react';
import { Dialog } from '@mui/material';
import Services from './Services';
import ServiceData from './ServiceData';
import FinancingForm from './QualityAssuranceForm';

const QualityAssurance = () => {
  const QualityAssuranceData = ServiceData.find(
    (service) => service.title === 'Quality Assurance '
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEnquireClick = () => {
    console.log('Enquire button clicked!');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // console.log(QualityAssuranceData);

  return (
    <>
      <Services
        title={QualityAssuranceData.title}
        description={QualityAssuranceData.description}
        items={QualityAssuranceData.items}
        logo={QualityAssuranceData.logo}
        onEnquireClick={handleEnquireClick}
        bgColor={QualityAssuranceData.bgColor}
        image={QualityAssuranceData.image}
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
          }}
        >
          <FinancingForm closeModal={closeModal} />
        </Dialog>
      )}
    </>
  );
};

export default QualityAssurance;

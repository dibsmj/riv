import React, { useState } from 'react';
import { Dialog } from '@mui/material';
import Services from './Services';
import ServiceData from './ServiceData';
import SupplierFinancingForm from './SupplierFinancingForm';

const SupplierFinancing = () => {
  const SupplierFinancingData = ServiceData.find(
    (service) => service.title === 'Supplier Financing'
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEnquireClick = () => {
    console.log('Enquire button clicked!');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // console.log(SupplierFinancingData);

  return (
    <>
      <Services
        title={SupplierFinancingData.title}
        description={SupplierFinancingData.description}
        items={SupplierFinancingData.items}
        logo={SupplierFinancingData.logo}
        onEnquireClick={handleEnquireClick}
        bgColor={SupplierFinancingData.bgColor}
        image={SupplierFinancingData.image}
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
          <SupplierFinancingForm closeModal={closeModal} />
        </Dialog>
      )}
    </>
  );
};

export default SupplierFinancing;

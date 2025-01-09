import React, { useState } from 'react';
import PropTypes from 'prop-types';
/** @jsxImportSource @emotion/react */
import EnquriyForm from '../Enquiry/EnquriyForm';

function EnquiryFromOverLay({ categories, fromPage }) {
  return <EnquriyForm categories={categories} fromPage={fromPage} />;
}

EnquiryFromOverLay.propTypes = {
  categories: PropTypes.array.isRequired,
  fromPage: PropTypes.string.isRequired,
};
export default EnquiryFromOverLay;

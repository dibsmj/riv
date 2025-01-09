/* eslint-disable jsx-a11y/control-has-associated-label */
/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { MuiTelInput } from 'mui-tel-input';
import { useLandingOverlayEnquiryMutation } from '../../../redux/slices/apiSlice';

const EventEnquiryForm = ({ fromPage }) => {
  const navigate = useNavigate();
  const [landingOverlayEnquiry] = useLandingOverlayEnquiryMutation();
  const [getPhoneCode, setPhoneCode] = React.useState('+91');
  const handleChange = (newValue) => {
    setPhoneCode(newValue);
  };
  const EnquirySchema = yup.object().shape({
    businessName: yup.string().required('Business name is required'),
    email: yup
      .string()
      .matches(
        // eslint-disable-next-line no-useless-escape
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Email is not valid'
      )
      .required('Email is required'),
    phoneNumber: yup
      .string()
      .matches(
        // eslint-disable-next-line no-useless-escape
        /^\+(?:[0-9] ?){6,14}[0-9]$/,
        'Phone number must be valid with correct country code'
      )
      .required('Phone number is required with correct country code'),
    message: yup.string().required('Message is required'),
  });
  const {
    control,
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(EnquirySchema),
    mode: 'all',
    reValidateMode: 'onChange',
  });
  const [getError, setError] = useState('');
  console.log(errors);
  const onSubmit = async (data) => {
    const businessNameNew = `${fromPage}: ${data.businessName} ${data.companyName}`;
    const payload = {
      userType: 'seller',
      businessName: businessNameNew,
      email: data.email,
      phoneNumber: data.phoneNumber,
      categoryId: 0,
      subCategoryId: 0,
      description: data.message,
      consent: true,
    };
    const { error } = await landingOverlayEnquiry(payload);
    if (!error) {
      navigate('/thank-you');
    } else {
      setError('Their are something wrong!');
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <p className="igEventFromHeader">Connect with us</p>
      <div className="mt-3">
        <input
          {...register('businessName')}
          id="outlined-basic"
          placeholder="Name"
          className="igEventFromInput w-full"
        />
        {errors && errors?.businessName?.message && (
          <div className="errorMessage">{errors?.businessName?.message}</div>
        )}
      </div>
      <div className="mt-3">
        <input
          {...register('email')}
          placeholder="Email id"
          className="igEventFromInput w-full"
        />
        {errors && errors?.email?.message && (
          <div className="errorMessage">{errors?.email?.message}</div>
        )}
      </div>
      <div className="mt-3 flex flex-row gap-2">
        <div className=" flex-0 w-full">
          <MuiTelInput
            {...register('phoneNumber')}
            value={getPhoneCode}
            onChange={handleChange}
            style={{
              marginBottom: '10px',
              marginTop: '10px',
              width: '100%',
              background: '#f5f5f5',
            }}
          />
        </div>
      </div>
      {errors && errors?.phoneNumber?.message && (
        <div className="errorMessage">{errors?.phoneNumber?.message}</div>
      )}
      <div className="mt-3">
        <input
          {...register('companyName')}
          placeholder="Company name (optional)"
          className="igEventFromInput w-full"
        />
      </div>
      <div className="mt-3">
        <textarea
          {...register('message')}
          placeholder="Text"
          className="igEventFromInput w-full"
        />
        {errors && errors?.message?.message && (
          <div className="rowDiv errorMessage">{errors?.message?.message}</div>
        )}
      </div>
      <div className="mt-3 ">
        <button
          type="submit"
          className="igEventFromBtn center-col text-center items-center justify-center place-content-center"
        >
          Join now
        </button>
      </div>
    </form>
  );
};

EventEnquiryForm.propTypes = {
  fromPage: PropTypes.string.isRequired,
};

export default EventEnquiryForm;

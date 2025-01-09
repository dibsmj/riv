/** @jsxImportSource @emotion/react */
import React, { useState, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import PropTypes from 'prop-types';

const HeaderRegistrationButton = ({ image = '', className }) => {
  const [getRegistrationBtn, setRegistrationBtn] = useState(false);
  const openLoginMenuBtn = () => {
    setRegistrationBtn(!getRegistrationBtn);
  };
  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button
          onClick={openLoginMenuBtn}
          className="relative closebg flex ring-0 border-0 cursor-pointer text-sm bg-transparent"
        >
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          <p className={className}>
            Sign up for free
            {image && <img src={image.src} alt="HeaderArrow" loading="lazy" />}
          </p>
        </Menu.Button>
      </div>
      <Transition
        show={getRegistrationBtn}
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-2 w-32 origin-top-right rounded-md px-4 py-2 shadow-lg bg-[#fff]">
          <div className=" text-left text-[15px] font-semibold">
            <a
              className="headerdropdown no-underline text-primaryBlack"
              href={`${process.env.NEXT_PUBLIC_APP_CUSTOMER_ROOT_URL}register-buyer`}
            >
              Buyer
            </a>
          </div>
          <div className=" text-left text-[15px] mt-3 font-semibold">
            <a
              className="headerdropdown no-underline text-primaryBlack"
              href={`${process.env.NEXT_PUBLIC_APP_CUSTOMER_ROOT_URL}register-seller`}
            >
              Seller
            </a>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

HeaderRegistrationButton.propTypes = {
  image: PropTypes.string,
  className: PropTypes.string.isRequired,
};

export default HeaderRegistrationButton;

/** @jsxImportSource @emotion/react */
import { FHTSubcategoryLandingPageStyle } from '../FHTSubcategoryLandingPageStyle';

import calenderWithHuman from '../../../assets/CategoryPage/FHT/FHTSubcategory/calenderHuman.webp';
import { RequestDemo as EnquiryHandleButtonModal } from '../../../components/common';

const Appointments = () => (
  <div className="appointments" css={() => FHTSubcategoryLandingPageStyle()}>
    <div className="md:flex md:justify-between items-center p-11 md:p-24">
      <div className="appointments-content w-full md:w-[30%] mb-11 md:mb-0">
        <div className="appointments-content-title">Connect with an expert</div>
        <div className="appointments-content-desc my-3">
          New to sourcing from India? We’ve got you covered! Connect with our
          category expert and get a head start on sourcing workwear and uniforms
          from India!
        </div>
        {/* <button className="appointments-content-btn" type="button">
          Request a Callback
        </button> */}
        <EnquiryHandleButtonModal
          className="button-first cursor-pointer p-[1.25rem]"
          name="    Request a Callback"
        />
      </div>
      <div className="appointments-image md:relative md:left-11">
        <img
          className="max-w-full h-auto"
          src={calenderWithHuman}
          alt="nothing"
          loading="lazy"
        />
      </div>
    </div>
  </div>
);

export default Appointments;

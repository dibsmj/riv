/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Accordion = ({ setClickBox }) => {
  const items = [
    {
      title: 'RFQ',
      subTitle: 'rfq',
      content:
        'AI-powered curation engine for end-to-end RFx process that matches your requirements to the right manufacturers',
      subtitle: 'transparent pricing',
    },
    {
      title: 'Contracting',
      subTitle: 'contracting',
      content:
        'Seamlessly manage multiple contracts, purchase orders and delivery schedules, all in one place',
      subtitle: 'multiple contracting models',
    },
    {
      title: 'Time & Action',
      subTitle: 'timeaction',
      content:
        'Keep track of all your projects with our live Time & Action module. Customized project templates, order monitoring, approvals, documentation.',
      subtitle: 'Real-time order visibility',
    },
    {
      title: 'Value Added Services',
      subTitle: 'vas',
      content:
        'Avail services in cross border logistics, quality assurance and supplier financing through our reputed global partners',
      subtitle: 'end to end support',
    },
  ];
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className=" w-[35%] xs:w-full sm:w-full ssm:w-[45%] md:w-[35%] lg:w-[35%] space-y-[2rem] flex-shrink-0">
      {items.map((item, index) => (
        <div
          key={item.title}
          className={`${
            openIndex === index ? 'esaystepsone' : 'easystepstwo'
          } p-5`}
        >
          <button
            type="button"
            className="easystepstitle cursor-pointer bg-transparent w-full text-left"
            onClick={() => {
              setClickBox(item.subTitle);
              toggleItem(index);
            }}
          >
            <h3 className=" ml-[0.8rem]">{item.title}</h3>
          </button>
          {openIndex === index && (
            <>
              <div className="easystepsdesc mt-3">{item.content}</div>
              <div className=" uppercase mt-10">{item.subtitle}</div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

Accordion.propTypes = {
  setClickBox: PropTypes.func.isRequired,
};

export default Accordion;

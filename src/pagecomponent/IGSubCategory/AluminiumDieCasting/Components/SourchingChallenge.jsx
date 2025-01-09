/* eslint-disable no-undef */
/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import ImageLazyLoad from '@/component/ImageLazyLoad';
import SourchingChallengeStyles from './SourchingChallengeStyles';
import SourchingLine from '@/assets/CategoryPage/IG/aluminium/sourchingline.webp';

import Tab1Content from './Tab1Content';
import Tab2Content from './Tab2Content';
import Tab3Content from './Tab3Content';

const SourchingChallenge = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      id: 'tab-one',
      name: 'Require precision manufacturing?',
      component: <Tab1Content />,
    },
    {
      id: 'tab-two',
      name: 'Concerned about quality control?',
      component: <Tab2Content />,
    },
    {
      id: 'tab-three',
      name: 'Facing supply chain challenges?',
      component: <Tab3Content />,
    },
  ];

  return (
    <div css={SourchingChallengeStyles}>
      <div className="sourceingback h-auto">
        <h2 className="w-[88%] m-auto pt-3 font-['Chillax'] text-[32px] text-primaryWhite">
          Sourcing challenges holding you back from scaling your business?
        </h2>
        <ImageLazyLoad
          imageSrc={SourchingLine.src}
          alt={'SourchingLine'}
          className={'w-full'}
        />
        <div className="my-7">
          <div className="bg-primaryWhite rounded-[22px] w-[88%] m-auto h-auto">
            <div className="flex flex-row xs:flex-col sm:flex-col ssm:flex-row md:flex-row lg:flex-row">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(index)}
                  className={`transform transition-transform duration-300 hover:scale-105 hover:shadow-md p-8 xs:p-4 sm:p-4 ssm:p-8 md:p-8 lg:p-8 text-[28px] xs:text-[22px] sm:text-[22px] ssm:text-[28px] md:text-[28px] lg:text-[28px] ${
                    activeTab === index
                      ? 'activebutton'
                      : 'nonActivBbutton borderClass xs:borderNonClass sm:borderNonClass ssm:borderClass md:borderClass lg:borderClass'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
            <div className="p-8">{tabs[activeTab].component}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SourchingChallenge;

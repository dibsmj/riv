/** @jsxImportSource @emotion/react */
import FeaturesSectionStyles from './FeaturesSectionStyles';
import { FeatureImg } from '../../config/GetImages';

const FeaturesSection = () => {
  const FeatureList = [
    {
      id: 1,
      name: 'Curated manufacturers',
      description:
        '500+ rivexa VERIFIED manufacturers with multiple primary and secondary machining capapbility',
    },
    {
      id: 2,
      name: 'Faster Quotations',
      description:
        'End-to-end RFx process, multiple supplier quotations, bid management, contract signing and PO',
    },
    {
      id: 3,
      name: 'Order tracking',
      description:
        'Customized project templates, order monitoring, approvals, documentation',
    },
    {
      id: 4,
      name: 'Value added Services',
      description:
        'Partnerships with reputed global players for cross border logistics, quality assurance and supplier financing',
    },
  ];
  return (
    <section css={FeaturesSectionStyles}>
      <div
        id="features"
        className="w-[90%] m-auto justify-center items-center text-center align-middle mt-20"
      >
        <div className="  grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 ssm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 space-y-0 xs:space-y-10 sm:space-y-10 md:space-y-0 lg:space-y-0 mt-10">
          <div className="justify-center items-center text-center align-middle relative">
            <img
              src={FeatureImg.src}
              alt={'FeatureImg'}
              className=" scale-95 w-full h-full xs:h-full xs:w-full sm:h-full sm:w-full ssm:h-full ssm:w-full md:w-full md:h-full lg:w-full lg:h-full"
              loading="lazy"
            />
          </div>
          <div>
            <div className="featuretext text-left text-[20px] xs:text-[10px] sm:text-[10px] ssm:text-[15px] md:text-[20px] lg:text-[20px]">
              Features
            </div>
            <div>
              <h2 className="featureheadertext text-left mt-5 text-[40px] xs:text-[25px] sm:text-[25px] ssm:text-[32px] md:text-[40px] lg:text-[40px]">
                See how our platform helps you bring your designs to life
              </h2>
            </div>
            <div className=" grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 xs:gap-1 sm:gap-1 ssm:gap-2 md:gap-2 lg:gap-2 text-left mt-2">
              {FeatureList.map((feat, index) => (
                <div
                  key={feat.id}
                  className="border-1 border-solid border-primaryWhite break-words"
                >
                  <div className="featurecicle">
                    <p className="featurenumber">{feat.id}</p>
                  </div>
                  <div>
                    <h3 className="featureheading text-[20px] xs:text-[18px] sm:text-[18px] ssm:text-[18px] md:text-[20px] lg:text-[20px]">
                      {feat.name}
                    </h3>
                  </div>
                  <div className="featuredescription text-[16px] xs:text-[14px] sm:text-[14px] ssm:text-[15px] md:text-[16px] lg:text-[16px]">
                    {feat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

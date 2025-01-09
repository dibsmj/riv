/** @jsxImportSource @emotion/react */
import FHTFeaturesSectionStyles from "./FHTFeaturesSectionStyles";
import {
  FHTFeatureLady,
  FHTFeatureOne,
  FHTFeatureTwo,
  FHTFeatureThree,
  FHTFeatureFour,
} from "../../config/GetImages";
import ImageLazyLoad from "@/component/ImageLazyLoad";

const FHTFeaturesSection = () => {
  const z = 0;
  return (
    <section css={FHTFeaturesSectionStyles}>
      <div
        id="features"
        className="w-full m-auto justify-center items-center text-center align-middle featurebackground"
      >
        <div className=" w-[90%] m-auto justify-center items-center text-center align-middle mt-20">
          <div className="featuretext flex justify-center items-center text-center text-[20px] xs:text-[10px] sm:text-[10px] ssm:text-[15px] md:text-[20px] lg:text-[20px]">
            Features
          </div>
          <div>
            <h2 className="featureheadertext inline w-full text-left mt-3 text-[42px] xs:text-[25px] sm:text-[25px] ssm:text-[32px] md:text-[42px] lg:text-[42px]">
              See how our platform helps you bring your designs to life
            </h2>
          </div>
        </div>
        <div className=" w-[90%] m-auto justify-center items-center text-center align-middle">
          <div className="containerfeature mt-5 grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 ssm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            <div className=" flex flex-col justify-start items-start mb-0 xs:mb-5 sm:mb-5 ssm:mb-5 md:mb-0 lg:mb-0">
              <div className=" w-3/4 xs:w-full sm:w-full ssm:w-3/4 md:w-3/4 lg:w-3/4 mb-5 m-auto justify-center items-center align-middle">
                <ImageLazyLoad
                  alt={`FHTFeatureOne`}
                  className={`featureicondiv p-2 justify-center items-center align-middle`}
                  imageSrc={FHTFeatureOne.src}
                />
                <div>
                  <h3 className="featuretitle my-3">Curated manufacturers</h3>
                </div>
                <div className="featuredesc text-center mx-0 xs:mx-2 sm:mx-2 ssm:mx-0 md:mx-0 lg:mx-0">
                  500+ rivexa VERIFIED manufacturers with multiple primary and
                  secondary machining capapbilit
                </div>
              </div>
              <div className="w-3/4 xs:w-full sm:w-full ssm:w-3/4 md:w-3/4 lg:w-3/4 m-auto justify-center items-center align-middle">
                <ImageLazyLoad
                  alt={`FHTFeatureThree`}
                  className={`featureicondiv p-2 justify-center items-center align-middle`}
                  imageSrc={FHTFeatureThree.src}
                />
                <div>
                  <h3 className="featuretitle my-3">Faster Quotations</h3>
                </div>
                <div className="featuredesc text-center mx-0 xs:mx-2 sm:mx-2 ssm:mx-0 md:mx-0 lg:mx-0">
                  End-to-end RFx process, multiple supplier quotations, bid
                  management, contract signing and PO
                </div>
              </div>
            </div>
            <div className=" h-[100%] justify-center text-center align-middle items-center block xs:hidden sm:hidden ssm:hidden md:block lg:block">
              <ImageLazyLoad
                alt={`FeatureLady`}
                className={`justify-center text-center align-middle items-center w-full h-full`}
                imageSrc={FHTFeatureLady.src}
              />
            </div>
            <div className=" flex flex-col justify-end items-end mb-0 xs:mb-5 sm:mb-5 ssm:mb-5 md:mb-0 lg:mb-0">
              <div className="w-3/4 xs:w-full sm:w-full ssm:w-3/4 md:w-3/4 lg:w-3/4 mb-5 m-auto justify-center items-center align-middle">
                <ImageLazyLoad
                  alt={`FeatureTwo`}
                  className={`featureicondiv p-2 justify-center items-center align-middle`}
                  imageSrc={FHTFeatureTwo.src}
                />
                <div>
                  <h3 className="featuretitle my-3">Order tracking</h3>
                </div>
                <div className="featuredesc text-center mx-0 xs:mx-2 sm:mx-2 ssm:mx-0 md:mx-0 lg:mx-0">
                  Customized project templates, order monitoring, approvals,
                  documentation
                </div>
              </div>
              <div className="w-3/4 xs:w-full sm:w-full ssm:w-3/4 md:w-3/4 lg:w-3/4 m-auto justify-center items-center align-middle">
                <ImageLazyLoad
                  alt={`FeatureFour`}
                  className={`featureicondiv p-2 justify-center items-center align-middle`}
                  imageSrc={FHTFeatureFour.src}
                />
                <div>
                  <h3 className="featuretitle my-3">Value added Services</h3>
                </div>
                <div className="featuredesc text-center mx-0 xs:mx-2 sm:mx-2 ssm:mx-0 md:mx-0 lg:mx-0">
                  Partnerships with reputed global players for cross border
                  logistics, quality assurance and supplier financing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FHTFeaturesSection;

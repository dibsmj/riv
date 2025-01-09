/** @jsxImportSource @emotion/react */
import JourneySectionStyles from './JourneySectionStyles';
import Arrow from '@/assets/CategoryPage/IG/arrow.svg';
import ArrowGreen from '@/assets/CategoryPage/IG/ArrowGreen.svg';
import RequestDemo from './RequestDemo';
import HeaderRegistrationButton from './HeaderRegistrationButton';

const JourneySection = () => {
  return (
    <section css={JourneySectionStyles}>
      <div className="w-full m-auto justify-center items-center text-center align-middle mt-20">
        <div className="journeysection">
          <div className=" w-[90%] m-auto py-8 grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 ssm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 space-y-0 xs:space-y-6 sm:space-y-6 md:space-y-0 lg:space-y-0 mt-6">
            <div className="text-left xs:text-center sm:text-center md:text-left lg:text-left">
              <div className="doyouwantto">Do you want to</div>
              <div className="startjourney xs:break-words sm:break-words text-3xl xs:text-xl sm:text-xl md:text-3xl lg:text-3xl">
                Start your journey with us?
              </div>
              {/* <div className="customers">32000+ customers worldwide</div> */}
            </div>
            <div className=" text-right xs:text-center sm:text-center md:text-right lg:text-right">
              <div className=" flex justify-end xs:justify-center sm:justify-center ssm:justify-center md:justify-end lg:justify-end items-end relative -mt-5">
                <HeaderRegistrationButton
                  image={Arrow}
                  className={`registerbutton cursor-pointer inline-flex text-[15px] xs:text-[15px] sm:text-[15px] md:text-xl lg:text-xl`}
                />
              </div>
            </div>
            <div className=" text-center">
              <RequestDemo
                name="Send Enquiry"
                className={`requestdemo cursor-pointer inline-flex text-[15px] xs:text-[15px] sm:text-[15px] md:text-xl lg:text-xl`}
                img={ArrowGreen}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;

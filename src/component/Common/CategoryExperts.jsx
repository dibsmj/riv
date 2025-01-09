/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import LinkedInFull from "@/assets/resources/linkedin-full.png";
import Phone from "@/assets/resources/phone.png";
import ImageLazyLoad from "@/component/ImageLazyLoad";

const CategoryExperts = ({
  IGExpartOne,
  expartOne,
  expartOneEmail,
  expartOnePhone,
  expartOneLinkedIn,
  IGExpartTwo,
  expartTwo,
  expartTwoEmail,
  expartTwoPhone,
  expartTwoLinkedIn,
  background,
}) => (
  <>
    <div className="w-full md:w-[40%] lg:w-[40%]">
      <p className="igLandingConnect pl-4 text-[30px] md:text-[43px] lg:text-[43px] mt-4">
        Connect with our Category experts
      </p>
    </div>
    <div className="w-full md:w-[60%] lg:w-[60%] relative">
      <div className=" expartUpperDiv absolute">xyz</div>
      <div
        style={{ backgroundColor: background }}
        className="flex flex-row gap-5 px-0 md:px-5 lg:px-5"
      >
        <ImageLazyLoad
          alt={`IGExpartOne`}
          className={`relative z-50 w-36 h-36 md:w-56 md:h-56 lg:w-60 lg:h-60 ml-0 md:ml-10 lg:ml-10`}
          imageSrc={IGExpartOne.src}
        />
        <ImageLazyLoad
          alt={`IGExpartTwo`}
          className={`relative z-50 w-36 h-36 md:w-56 md:h-56 lg:w-60 lg:h-60 ml-auto mr-0 md:mr-10 lg:mr-10`}
          imageSrc={IGExpartTwo.src}
        />
      </div>
      <div className="igExpartDivInfo flex flex-row px-0 md:px-5 lg:px-5 pt-3 pb-8">
        <div className="ml-0 md:ml-20 lg:ml-20">
          <p className="igExpartName">{expartOne}</p>
          <p className="ixExpartPosition">
            <a
              class="no-underline profileemail mt-1 text-center"
              href={`mailto:${expartOneEmail}`}
            >
              {expartOneEmail}
            </a>
          </p>
          <div className="separtor center-col">x</div>
          <div className="center-col flex justify-center gap-4 mt-3">
            <div>
              <a href={expartOneLinkedIn} target="_blank" rel="noreferrer">
                <ImageLazyLoad
                  alt={`LinkedInFull`}
                  imageSrc={LinkedInFull.src}
                />
              </a>
            </div>
            <div>
              <a href={`tel:${expartOnePhone}`} className=" cursor-pointer">
                <ImageLazyLoad alt={`LinkedInFull`} imageSrc={Phone.src} />
              </a>
            </div>
          </div>
        </div>
        <div className="ml-auto mr-0 md:mr-20 lg:mr-20">
          <p className="igExpartName">{expartTwo}</p>
          <p className="ixExpartPosition">
            <a
              class="no-underline profileemail mt-1 text-center"
              href={`mailto:${expartTwoEmail}`}
            >
              {expartTwoEmail}
            </a>
          </p>
          <div className="separtor center-col">x</div>
          <div className="center-col flex justify-center gap-4 mt-3">
            <div>
              <a href={expartTwoLinkedIn} target="_blank" rel="noreferrer">
                <ImageLazyLoad
                  alt={`LinkedInFull`}
                  imageSrc={LinkedInFull.src}
                />
              </a>
            </div>
            <div>
              <a href={`tel:${expartTwoPhone}`} className=" cursor-pointer">
                <ImageLazyLoad alt={`LinkedInFull`} imageSrc={Phone.src} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

CategoryExperts.propTypes = {
  IGExpartOne: PropTypes.string.isRequired,
  expartOne: PropTypes.string.isRequired,
  expartOneEmail: PropTypes.string.isRequired,
  expartOnePhone: PropTypes.string.isRequired,
  expartOneLinkedIn: PropTypes.string.isRequired,
  IGExpartTwo: PropTypes.string.isRequired,
  expartTwo: PropTypes.string.isRequired,
  expartTwoEmail: PropTypes.string.isRequired,
  expartTwoPhone: PropTypes.string.isRequired,
  expartTwoLinkedIn: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
};

export default CategoryExperts;

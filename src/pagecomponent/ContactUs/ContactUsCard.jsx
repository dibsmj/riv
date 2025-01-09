/** @jsxImportSource @emotion/react */
import Image from "next/image";
import { useState } from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import linkedinIcon from "@/assets/ContactUs/connect.png";
import ContactUsStyles from "./ContactUsStyles";

const ContactUsCard = ({
  name,
  email,
  linkedinUrl,
  cardImage,
  country,
  nameStyles = {},
  connectStyles = {},
  countryFlags = [],
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      css={ContactUsStyles}
      key={name}
      className=" relative transition-transform duration-500 ease-out hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div className="absolute top-5 -right-3">
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <Image
              alt="LinkedIn Icon"
              className="w-8 h-8 mr-6 -mt-6"
              src={linkedinIcon}
              width="2rem"
              height="2rem"
              priority={false}
            />
          </a>
        </div>
        <div className={isHovered ? "activemaincard" : "maincarddiv"}>
          <div className="flex flex-row md:flex-col ssm:flex-col md:items-center mt-4">
            <div className="flex justify-center items-center">
              <Image
                alt={name}
                className=""
                src={cardImage}
                priority={true}
                quality={100}
              />
            </div>
            <div className="mt-5 md:ml-4">
              <div className="flex flex-col justify-center items-center md:items-center align-middle mb-2">
                <h3
                  className={`${
                    isHovered ? "activename" : "inactivename"
                  } !m-auto md:!m-0`}
                >
                  {name}
                </h3>
                <a
                  className="no-underline profileemail mt-1 text-center"
                  href={`mailto:${email}`}
                >
                  {email}
                </a>
              </div>
              {countryFlags.length > 0 && (
                <hr className="h-px w-[85%] m-auto md:m-0 bg-[#C4C4C4] border-0" />
              )}
              <div className="flex flex-col justify-center items-center md:items-center align-middle mt-2">
                <div className="profilecountry">{country}</div>
                <div className="flex">
                  {countryFlags.length > 0 &&
                    countryFlags.map((item, index) => (
                      <Image
                        key={`name-${index}-flag`}
                        src={item.img}
                        alt={`Flag ${index + 1}`}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ContactUsCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  linkedinUrl: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  nameStyles: PropTypes.object,
  connectStyles: PropTypes.object,
  countryFlags: PropTypes.array,
};

export default ContactUsCard;

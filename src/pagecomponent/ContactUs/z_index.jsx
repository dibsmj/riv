/** @jsxImportSource @emotion/react */
"use client";
import React, { useState } from "react";
import { Tooltip, Typography, Button } from "@mui/material";
import ContactUsStyles from "./ContactUsStyles";
import bg from "@/assets/ContactUs/bg-1.png";
import ContactCard from "./ContactCard";
import contacts from "../../constants/contactsConstants";
import Address from "../../constants/addressConstants";

const ContactUs = () => {
  const [selectedCategory, setSelectedCategory] = useState("Fashion");

  const handleToggle = (category) => {
    setSelectedCategory(category);
  };

  const fashionContactCards = (contactsArray) =>
    contactsArray
      .slice(0, 3)
      .map((contact) => (
        <ContactCard
          key={contact.name}
          name={contact.name}
          email={contact.email}
          linkedinUrl={contact.linkedinUrl}
          cardImage={contact.cardImage}
          country={contact.country}
          nameStyles={contact.nameStyles}
        />
      ));
  const industrialContactCards = (contactsArray) =>
    contactsArray
      .slice(3, 5)
      .map((contact) => (
        <ContactCard
          key={contact.name}
          name={contact.name}
          email={contact.email}
          linkedinUrl={contact.linkedinUrl}
          cardImage={contact.cardImage}
          country={contact.country}
          nameStyles={contact.nameStyles}
        />
      ));
  const vasContactCards = (contactsArray) =>
    contactsArray
      .slice(contactsArray.length - 1)
      .map((contact) => (
        <ContactCard
          key={contact.name}
          name={contact.name}
          email={contact.email}
          linkedinUrl={contact.linkedinUrl}
          cardImage={contact.cardImage}
          country={contact.country}
          nameStyles={contact.nameStyles}
        />
      ));
  return (
    <div css={ContactUsStyles}>
      <div
        className="w-full m-auto overflow-hidden"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="w-full m-auto justify-center items-center text-center align-middle mt-[7rem]">
          <h1 className={"headerFontTitle"}>Meet our Category experts</h1>
          <h4 className={"belowHeader"}>
            Our global team of experts will be happy to guide you through your
            journey on rivexa
          </h4>
          <br />
        </div>
        <div className="">
          <div className="">
            <div className="max-[875px]:ml-0 max-[875px]:text-center ml-44">
              <h2 className="underline underline-offset-8 subCategory">
                Fashion and Home Textile
              </h2>
            </div>
            <div className="flex justify-center -mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {fashionContactCards(contacts)}
              </div>
            </div>
          </div>

          <div className="">
            <div className="">
              <div className="max-[875px]:ml-0 max-[875px]:text-center ml-44">
                <h2 className="underline underline-offset-8 subCategory">
                  Industrial Goods
                </h2>
              </div>
            </div>
            <div className="flex justify-center -mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {industrialContactCards(contacts)}
              </div>
            </div>
          </div>

          <div className=" ">
            <div className="max-[875px]:ml-0 max-[875px]:text-center ml-44">
              <h2 className="underline underline-offset-8 subCategory">
                Value added Services
                <Tooltip
                  title={
                    <>
                      Cross Border Logistics
                      <br />
                      Supplier Financing <br />
                      Quality Assurance and Export Advisory
                    </>
                  }
                  arrow
                  placement="top"
                >
                  <button
                    className="cursor-pointer"
                    type="button"
                    style={{
                      fontSize: ".75rem",
                      background: "#ffffff",
                      color: "#1976d2",
                      border: "none",
                      padding: "10px",
                      marginTop: "6px",
                    }}
                  >
                    Know more
                  </button>
                </Tooltip>
              </h2>
            </div>

            <div className="flex justify-center -mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedCategory === "Fashion" && vasContactCards(contacts)}
              </div>
            </div>
          </div>
        </div>
        <div
          className=" w-full m-auto justify-center items-center text-center align-middle mt-8"
          style={{ backgroundColor: "#5D459C" }}
        >
          <div className="flex flex-row xs:flex-col sm:flex-col ssm:flex-row md:flex-row lg:flex-row xl:flex-row justify-between items-center text-primaryWhite">
            <Address />
            <div className="w-[70%] xs:w-full sm:w-full ssm:w-[70%] md:w-[70%] lg:w-[70%] xl:w-[70%] p-6">
              <iframe
                src="https://maps.google.com/maps?q=mjunctionservices limited, Kolkata,Saltlake&output=embed"
                title="Mjunction Location"
                style={{
                  width: "90%",
                  height: "540px",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

/** @jsxImportSource @emotion/react */
"use client";
import React, {
  useState,
  useMemo,
  useCallback,
  useEffect,
  Suspense,
} from "react";
import debounce from "lodash/debounce";
import { Tooltip } from "@mui/material";
import ContactUsStyles from "./ContactUsStyles";
import bg from "@/assets/ContactUs/bg-1.png";
import ContactCard from "./ContactUsCard";
import contacts from "../../constants/contactsConstants";
import Address from "../../constants/addressConstants";
import Breadcrumb from "@/pagecomponent/BlogPages/components/Breadcrumb";
import EnquriyForm from "@/component/Enquiry/EnquriyForm";

const categories = [
  "Fashion and Home Textiles",
  "Industrial Goods",
  "Value Added Services",
];

const ContactUs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showScheduleIframe, setShowScheduleIframe] = useState(false);
  const [smallscreenwidth, setSmallscreenwidth] = useState(false);

  const updateStyles = useCallback(
    debounce(() => {
      if (window.innerWidth < 768) {
        setSmallscreenwidth(true);
      } else {
        setSmallscreenwidth(false);
      }
    }, 300),
    []
  );
  const handleScheduleCallClick = () => {
    setShowScheduleIframe(true);
  };

  useEffect(() => {
    updateStyles();
    window.addEventListener("resize", updateStyles);
    return () => window.removeEventListener("resize", updateStyles);
  }, []);

  const filteredContacts = useMemo(() => {
    if (selectedCategory === "All") {
      return contacts.reduce((acc, contact) => {
        contact.categories.forEach((category) => {
          if (!acc[category]) acc[category] = [];
          acc[category].push(contact);
        });
        return acc;
      }, {});
    }
    return {
      [selectedCategory]: contacts.filter((contact) =>
        contact.categories?.includes(selectedCategory)
      ),
    };
  }, [selectedCategory]);

  const renderContactCards = (contactsArray) =>
    contactsArray.map((contact) => (
      <ContactCard
        key={contact.name}
        name={contact.name}
        email={contact.email}
        linkedinUrl={contact.linkedinUrl}
        cardImage={contact.cardImage}
        country={contact.country}
        nameStyles={contact.nameStyles}
        countryFlags={contact.countryFlags}
      />
    ));

  const breadcrumbItems = [
    { text: "Home", url: "/" },
    { text: "Contact Us", url: "/contact-us" },
  ];

  return (
    <main>
      <div css={ContactUsStyles}>
        {/* Background and Header Section */}
        <div
          className="w-full mx-auto pt-10 pb-24 md:pb-24 xs:pb-4 ssm:pb-24"
          style={{
            background:
              "linear-gradient(90deg, #856ACF 20.11%, #8469CE 21.66%, #61429F 73.87%, #53338D 100%)",
            height: "50",
            width: "100%",
          }}
        >
          <div className=" w-[85%] m-auto relative top-[1rem] md:left-[-4rem] xs:left-[-1rem]">
            <Breadcrumb
              items={breadcrumbItems}
              color="#FFFFFF"
              activeColor="#ffffff"
            />
          </div>
          <div className="w-full mx-auto flex flex-col justify-center items-center text-center mt-4 xs:mt-8">
            <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-[white] title mt-0">
              Meet Our Category Experts
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-[white] -mt-4 fontDesc">
              Get in touch to discuss your needs and let us answer any questions
              you may have.
            </p>
          </div>
        </div>
        <div
          className={`w-full ${
            smallscreenwidth
              ? "mt-4 "
              : "md:w-[46%] md:absolute md:left-[57%] md:top-[12%]"
          } bg-[white] shadow-lg rounded-lg md:p-8 xs:p-4 xs:w-[88%]`}
          style={!smallscreenwidth ? { transform: "scale(0.65)" } : {}}
        >
          <h2 className="font-bold text-xl sm:text-xl lg:text-2xl text-[#4A3587] mb-6 title text-center">
            Let’s Get In Touch!
          </h2>
          <Suspense fallback={<div>Loading...</div>}>
            <EnquriyForm
              categories={[
                { id: 1, name: `Fashion & Home Textiles` },
                { id: 2, name: `Industrial Goods` },
              ]}
              fromPage="All"
            />
          </Suspense>
          {/* <div className="flex flex-col items-center mt-10">
            <button
              className="px-7 py-4 bg-[#4A3587] text-primaryWhite rounded-[28px] font-bold hover:bg-[#3C2A70] text-center uppercase text-lg border-none "
              onClick={handleScheduleCallClick}
            >
              Schedule a Call
            </button>
          </div> */}
          <div className="w-full mt-6 h-full">
            {showScheduleIframe && (
              <div className="w-full mt-6">
                <iframe
                  src="https://outlook.office365.com/owa/calendar/rivexa2@rivexa.com/bookings/"
                  title="Schedule a Call"
                  width="100%"
                  height="900"
                  style={{
                    border: "none",
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}
                ></iframe>
              </div>
            )}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-start mt-6 space-x-4 md:mx-14 xs:mt-10 xs:mr-6 xs:ml-4 ssm:m-12">
          {["All", ...categories].map((category) => (
            <button
              key={category}
              className="px-2 py-2 rounded-[20px] font-bold cursor-pointer"
              style={{
                backgroundColor:
                  selectedCategory === category ? "#4A3587" : "#fff",
                color: selectedCategory === category ? "white" : "#8D8D8D",
                border:
                  selectedCategory === category ? "none" : "2px solid #8D8D8D",
              }}
              onClick={() =>
                setSelectedCategory((prev) =>
                  prev === category ? "All" : category
                )
              }
            >
              {category}
            </button>
          ))}
        </div>

        {/* Contact Cards */}
        <div className="w-full mx-auto lg:w-[90%] xs:w-[88%] flex flex-col gap-8 mt-8">
          {Object.entries(filteredContacts).map(([category, contacts]) => (
            <div key={category}>
              {selectedCategory === "All" && (
                <h2 className="text-xl font-bold mb-4 text-[#8D8D8D] title">
                  {category}
                </h2>
              )}
              <div className=" flex flex-wrap xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-1 ssm:flex ssm:flex-wrap gap-8">
                {renderContactCards(contacts)}
              </div>
            </div>
          ))}
        </div>

        {/* Enquiry Form */}

        {/* Address and Map Section */}
        <div
          className=" w-full m-auto justify-center items-center text-center align-middle mt-8"
          style={{ backgroundColor: "#5D459C" }}
        >
          <div className="w-[90%] m-auto flex flex-row xs:flex-col sm:flex-col ssm:flex-row md:flex-row lg:flex-row xl:flex-row justify-between items-center text-primaryWhite">
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
    </main>
  );
};

export default ContactUs;

/** @jsxImportSource @emotion/react */
/* eslint-disable react/prop-types */
"use client";
import Image from "next/image";
import PropTypes from "prop-types";
import React, { useState, useRef, useEffect, Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import HeaderStyles from "./HeaderStyles";
import Logo from "@/assets/CategoryPage/Header/rivexa-logo.svg";
import MenuImg from "@/assets/CategoryPage/IG/menu.svg";
import HeaderLinkedIn from "@/assets/CategoryPage/Header/header_linkedin.svg";
import HeaderYoutube from "@/assets/CategoryPage/Header/header_youtube.svg";
import HeaderFacebook from "@/assets/CategoryPage/Header/header_fb.svg";
import HeaderInstra from "@/assets/CategoryPage/Header/instra.svg";
import HeaderArrow from "@/assets/CategoryPage/Header/login-arrow.svg";
import HeaderPlus from "@/assets/CategoryPage/Header/header-plus.svg";
import UserIconBlack from "@/assets/CategoryPage/Header/UserIconBlack.png";

const Header = ({
  headerLogo = Logo,
  userIcon = UserIconBlack,
  bgColor = "white",
  textColor = "black",
}) => {
  const [getOpenMobileShowMenu, setOpenMobileShowMenu] = useState(false);
  const [getShowMenu, setShowMenu] = useState(false);
  const [getEventShowMenu, setEventShowMenu] = useState(false);
  const [getLoginMenu, setLoginMenu] = useState(false);
  const [getRegistrationMenu, setRegistrationMenu] = useState(false);
  const [getMobileMenu, setMobileMenu] = useState(false);
  const [index, setIndex] = React.useState(0);
  const openMobileShowMenu = () => {
    setOpenMobileShowMenu(!getOpenMobileShowMenu);
    setShowMenu(false);
    setEventShowMenu(false);
    setLoginMenu(false);
    setRegistrationMenu(false);
  };
  const openShowMenu = () => {
    setShowMenu(!getShowMenu);
    setEventShowMenu(false);
    setLoginMenu(false);
    setRegistrationMenu(false);
    setOpenMobileShowMenu(false);
  };
  const openEventShowMenu = () => {
    setEventShowMenu(!getEventShowMenu);
    setRegistrationMenu(false);
    setLoginMenu(false);
    setShowMenu(false);
    setOpenMobileShowMenu(false);
  };
  const openRegistrationMenu = () => {
    setEventShowMenu(false);
    setRegistrationMenu(!getRegistrationMenu);
    setLoginMenu(false);
    setShowMenu(false);
    setOpenMobileShowMenu(false);
  };
  const openLoginMenu = () => {
    setEventShowMenu(false);
    setLoginMenu(!getLoginMenu);
    setRegistrationMenu(false);
    setShowMenu(false);
    setOpenMobileShowMenu(false);
  };
  const openMobileMenu = () => {
    setEventShowMenu(false);
    setMobileMenu(!getMobileMenu);
    setLoginMenu(false);
    setRegistrationMenu(false);
    setShowMenu(false);
    setOpenMobileShowMenu(false);
  };
  const socialData = [
    {
      id: 1,
      name: "HeaderLinkedIn",
      image: HeaderLinkedIn,
      link: "https://www.linkedin.com/showcase/rivexabymjunction/",
    },
    {
      id: 2,
      name: "HeaderInstra",
      image: HeaderInstra,
      link: "https://instagram.com/rivexa_by_mjunction?igshid=MzRlODBiNWFlZA==",
    },
    {
      id: 3,
      name: "HeaderYoutube",
      image: HeaderYoutube,
      link: "https://www.youtube.com/@rivexa",
    },
    {
      id: 4,
      name: "HeaderFacebook",
      image: HeaderFacebook,
      link: "https://www.facebook.com/rivexabymjunction",
    },
  ];
  const [backgroundColor, setBackgroundColor] = useState(bgColor);
  const [getTextColor, setTextColor] = useState(textColor);
  const [getHeaderLogo, setHeaderLogo] = useState(headerLogo);
  const [getUserIcon, setUserIcon] = useState(userIcon);
  const [activeTab, setActiveTab] = useState("home");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  const tabStyle = (tabName) => ({
    color: activeTab === tabName ? "white" : getTextColor,
    backgroundColor:
      activeTab === tabName ? "rgba(34, 186, 162, 1) " : "transparent",
    padding: "4px 10px",
    borderRadius: "2rem",
    textDecoration: "none",
  });

  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/") setActiveTab("home");
    else if (
      path.includes("/industrial-goods") ||
      path.includes("/fashion-and-textiles")
    ) {
      setActiveTab("product-categories");
    } else if (path === "/value-added-services")
      setActiveTab("value-added-services");
    else if (path.includes("/resources")) setActiveTab("resources");
    else if (path === "/faq") setActiveTab("faq");
    else if (path === "/contact-us") setActiveTab("contact-us");
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Adjust the scroll position threshold as needed
      const threshold = window.innerWidth < 768 ? 600 : 700;
      if (scrollPosition > threshold) {
        setBackgroundColor("white");
        setTextColor("black");
        setHeaderLogo(Logo);
        setUserIcon(UserIconBlack);
      } else {
        setBackgroundColor(bgColor);
        setTextColor(textColor);
        setHeaderLogo(headerLogo);
        setUserIcon(userIcon);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuCategoryRef = useRef(null);
  const menuEventRef = useRef(null);
  const menuLoginRef = useRef(null);
  const menuRegisterRef = useRef(null);
  const menuMobileRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menus = [
        { ref: menuLoginRef, setState: setLoginMenu },
        { ref: menuRegisterRef, setState: setRegistrationMenu },
        { ref: menuCategoryRef, setState: setShowMenu },
        { ref: menuEventRef, setState: setEventShowMenu },
        { ref: menuMobileRef, setState: setOpenMobileShowMenu },
      ];

      menus.forEach(({ ref, setState }) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setState(false);
        }
      });
    };

    if (
      getLoginMenu ||
      getRegistrationMenu ||
      getShowMenu ||
      getEventShowMenu ||
      getOpenMobileShowMenu
    ) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [
    getLoginMenu,
    getRegistrationMenu,
    getShowMenu,
    getEventShowMenu,
    getOpenMobileShowMenu,
  ]);

  const [loadRightMenu, setLoadRightMenu] = useState(false);
  useEffect(() => {
    setLoadRightMenu(true);
  }, [1000]);

  return (
    <div
      css={HeaderStyles}
      className="flex w-full m-auto justify-center items-center text-center align-middle z-50 focus:outline-none"
    >
      <div
        style={{ backgroundColor, zIndex: 100 }}
        className="w-full header-section fixed top-0 bg-white z-50 focus:outline-none"
      >
        <div className=" w-[98%] m-auto sm:hidden xs:hidden ssm:hidden md:hidden lg:block">
          <div
            style={{ color: getTextColor }}
            className="flex flex-row gap-[3rem] py-[.5rem] text-md"
          >
            <div className="flex-shrink-0 flex justify-center items-center align-middle">
              <a
                href={`${process.env.NEXT_PUBLIC_APP_ROOT_URL}`}
                className="no-underline cursor-pointer"
              >
                <div className="z-10">
                  <Image
                    alt="MenuImg"
                    src={getHeaderLogo}
                    className=" w-[162px] h-[43px]"
                    width={100}
                    height={100}
                    priority
                  />
                </div>
              </a>
            </div>
            <div className="flex flex-row justify-center items-center align-middle  -ml-[30px]">
              <div className="font-semibold mentitemtext">
                <a
                  href="/"
                  style={tabStyle("home")}
                  className="no-underline"
                  onClick={() => handleTabClick("home")}
                >
                  Home
                </a>
              </div>
              <Menu as="div" className="relative ml-3" ref={menuCategoryRef}>
                <div>
                  <Menu.Button
                    onClick={openShowMenu}
                    style={{
                      ...tabStyle("product-categories"),
                      color:
                        activeTab === "product-categories"
                          ? "white"
                          : getTextColor,
                    }}
                    className="relative bg-transparent flex rounded-full cursor-pointer border-none text-sm"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <div className="flex justify-center items-center align-middle">
                      <div
                        style={{
                          color:
                            activeTab === "product-categories"
                              ? "white"
                              : getTextColor,
                        }}
                        className="font-semibold mentitemtext"
                      >
                        Product Categories
                      </div>
                      <ExpandMoreIcon
                        style={{
                          color:
                            activeTab === "product-categories"
                              ? "white"
                              : getTextColor,
                        }}
                      />
                    </div>
                  </Menu.Button>
                </div>
                {loadRightMenu && (
                  <Transition
                    show={getShowMenu}
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute left-0 xs:-left-[17px] space-y-[1rem] sm:-left-[15px] md:left-0 lg:left-0 mt-4 w-52 origin-top-right rounded-md bg-[#fff] px-4 py-6 shadow-lg z-[110]">
                      <div className="font-semibold mentitemtext text-left">
                        <a
                          href="/industrial-goods"
                          className=" no-underline text-[#21272a]"
                        >
                          Industrial Goods
                        </a>
                      </div>
                      <div className="font-semibold mentitemtext text-left">
                        <a
                          href="/fashion-and-textiles"
                          className=" no-underline text-[#21272a]"
                        >
                          Fashion & Home Textiles
                        </a>
                      </div>
                    </Menu.Items>
                  </Transition>
                )}
              </Menu>
              <div className="font-semibold mentitemtext">
                <a
                  href="/value-added-services"
                  style={tabStyle("value-added-services")}
                  className="no-underline"
                  onClick={() => handleTabClick("value-added-services")}
                >
                  Value Added Services
                </a>
              </div>
           <div className="font-semibold mentitemtext">
                <Menu as="div" className="relative ml-3" ref={menuEventRef}>
                  <div>
                    <Menu.Button
                      onClick={openEventShowMenu}
                      style={{
                        ...tabStyle('Resources'),
                        color:
                          activeTab === 'Resources' ? 'white' : getTextColor,
                      }}
                      className="relative bg-transparent flex rounded-full cursor-pointer border-none text-sm"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <div className="flex justify-center items-center align-middle">
                        <div
                          style={{
                            color:
                              activeTab === 'Resources'
                                ? 'white'
                                : getTextColor,
                          }}
                          className="font-semibold mentitemtext"
                        >
                          Resources
                        </div>
                        <ExpandMoreIcon
                          style={{
                            color:
                              activeTab === 'Resources'
                                ? 'white'
                                : getTextColor,
                          }}
                        />
                      </div>
                    </Menu.Button>
                  </div>
                  {loadRightMenu && (
                    <Transition
                      show={getEventShowMenu}
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute left-0 xs:-left-[17px] space-y-[1rem] sm:-left-[15px] md:left-0 lg:left-0 mt-4 w-52 origin-top-right rounded-md bg-[#fff] px-4 py-6 shadow-lg z-[110]">
                        <div className="font-semibold mentitemtext text-left">
                          <a
                            href="/resources"
                            className=" no-underline text-[#21272a]"
                          >
                            Blogs
                          </a>
                        </div>
                        <div className="font-semibold mentitemtext text-left">
                          <a
                            href="/news"
                            className=" no-underline text-[#21272a]"
                          >
                            News Room
                          </a>
                        </div>
                        {/* <div className="font-semibold mentitemtext text-left">
                          <a
                            href="/events"
                            className=" no-underline text-[#21272a]"
                          >
                            Events
                          </a>
                        </div> */}
                      </Menu.Items>
                    </Transition>
                  )}
                </Menu>
              </div>
              <div className="font-semibold mentitemtext">
                <a
                  href="/faq"
                  style={tabStyle("faq")}
                  className="no-underline"
                  onClick={() => handleTabClick("faq")}
                >
                  FAQ
                </a>
              </div>
              <div className="font-semibold mentitemtext">
                <a
                  href="/contact-us"
                  style={tabStyle("contact-us")}
                  className="no-underline"
                  onClick={() => handleTabClick("contact-us")}
                >
                  Contact us
                </a>
              </div>
            </div>
            <div className="flex-1 w-full flex flex-row justify-end -mr-[50px]">
              <Menu as="div" className="relative">
                <div className="bg-transparent">
                  <Menu.Button
                    onClick={openLoginMenu}
                    className="relative flex ring-0 border-0 cursor-pointer text-sm bg-transparent"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <p className="headerloginbtn text-left inline-flex justify-start bg-primaryWhite w-[6.25rem]">
                      Login
                      <Image
                        alt="HeaderArrow"
                        className="flex justify-center"
                        src={HeaderArrow}
                      />
                    </p>
                  </Menu.Button>
                </div>
                {loadRightMenu && (
                  <Transition
                    show={getLoginMenu}
                    as={Fragment}
                    enter="menu-items-transition"
                    enterFrom="menu-items-hidden"
                    enterTo="menu-items-visible"
                    leave="menu-items-transition"
                    leaveFrom="menu-items-visible"
                    leaveTo="menu-items-hidden"
                  >
                    <Menu.Items className="absolute left-0 w-28 h-20 origin-top-right rounded-md px-4 py-2 shadow-lg bg-[#fff] z-[110]">
                      <div className="text-left text-[15px] font-semibold">
                        <a
                          className="headerdropdown no-underline text-primaryBlack"
                          href={`${process.env.NEXT_PUBLIC_APP_CUSTOMER_ROOT_URL}buyer-login`}
                        >
                          Login as Buyer
                        </a>
                      </div>
                      <div className="text-left text-[15px] mt-3 font-semibold">
                        <a
                          className="headerdropdown no-underline text-primaryBlack"
                          href={`${process.env.NEXT_PUBLIC_APP_CUSTOMER_ROOT_URL}seller-login`}
                        >
                          Login as Seller
                        </a>
                      </div>
                    </Menu.Items>
                  </Transition>
                )}
              </Menu>
              <Menu as="div" className="relative">
                <div>
                  <Menu.Button
                    onClick={openRegistrationMenu}
                    className="relative flex ring-0 border-0 cursor-pointer text-sm bg-transparent"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <p className="headerregistration inline-flex relative right-[3rem]">
                      Sign up for free
                      <Image
                        alt="HeaderPlus"
                        className="flex justify-center"
                        src={HeaderPlus}
                      />
                    </p>
                  </Menu.Button>
                </div>
                {loadRightMenu && (
                  <Transition
                    show={getRegistrationMenu}
                    as={Fragment}
                    enter="menu-items-transition"
                    enterFrom="menu-items-hidden"
                    enterTo="menu-items-visible"
                    leave="menu-items-transition"
                    leaveFrom="menu-items-visible"
                    leaveTo="menu-items-hidden"
                  >
                    <Menu.Items className="absolute right-[4rem] w-30 h-25 origin-top-right rounded-md px-4 py-2 shadow-lg bg-[#fff] z-[110]">
                      <div className="text-left text-[15px] font-semibold">
                        <a
                          className="headerdropdown no-underline text-primaryBlack"
                          href={`${process.env.NEXT_PUBLIC_APP_CUSTOMER_ROOT_URL}register-buyer`}
                        >
                          Sign up as Buyer
                        </a>
                      </div>
                      <div className="text-left text-[15px] mt-3 font-semibold">
                        <a
                          className="headerdropdown no-underline text-primaryBlack"
                          href={`${process.env.NEXT_PUBLIC_APP_CUSTOMER_ROOT_URL}register-seller`}
                        >
                          Sign up as Seller
                        </a>
                      </div>
                    </Menu.Items>
                  </Transition>
                )}
              </Menu>
            </div>
          </div>
        </div>
        <div>
          <style>
            {`
          @media (max-width: 1024px) {
            .fixed-bar {
              display: none;
            }
          }
        `}
          </style>
          <div
            className="fixed-bar"
            style={{
              position: "fixed",
              top: "88px",
              left: 0,
              right: 0,
              zIndex: 101,
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow below the line
            }}
          >
            <div style={{ display: "flex", width: "100%", height: "2px" }}>
              <div
                style={{ flex: 1, backgroundColor: "rgba(27, 171, 226, 1)" }}
              />
              <div
                style={{ flex: 1, backgroundColor: "rgba(255, 184, 46, 1)" }}
              />
              <div
                style={{ flex: 1, backgroundColor: "rgba(32, 175, 152, 1)" }}
              />
              <div
                style={{ flex: 1, backgroundColor: "rgba(219, 120, 161, 1)" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* for mobile */}
      <div
        style={{ backgroundColor, zIndex: 9999 }}
        className="w-full fixed top-0 focus:outline-none hidden xs:block sm:block ssm:block md:block lg:hidden"
      >
        <div className=" grid grid-cols-3">
          <div className="ml-3 mt-[5px] flex items-center">
            <Menu as="div" className="relative" ref={menuMobileRef}>
              <div>
                <Menu.Button
                  onClick={openMobileShowMenu}
                  className="relative flex rounded-full cursor-pointer outline-none focus:outline-none text-sm bg-[#fff]"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <Image
                    alt={`MenuImg`}
                    className={`rounded-full w-full h-full mt-[2px] py-[1px]`}
                    src={MenuImg}
                  />
                </Menu.Button>
              </div>
              <Transition
                show={getOpenMobileShowMenu}
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute -left-1 z-50 mt-4 w-96 xs:w-72 sm:w-72 md:w-96 lg:w-96 origin-top-right rounded-md bg-[#fff] px-8 py-6 shadow-lg">
                  <div className=" grid grid-cols-2 gap-5">
                    <div className=" text-left">
                      <div className="mt-7 font-semibold mentitemtext">
                        <a
                          href="/"
                          target="_blank"
                          rel="noreferrer"
                          className=" no-underline text-[#21272a]"
                        >
                          Home
                        </a>
                      </div>
                      <div className="mt-7 font-semibold mentitemtext">
                        <a
                          href="https://www.mjunction.in/about-us/"
                          target="_blank"
                          rel="noreferrer"
                          className=" no-underline text-[#21272a]"
                        >
                          About Us
                        </a>
                      </div>
                      <div className="mt-7 font-semibold mentitemtext">
                        <AccordionGroup className="w-full">
                          <Accordion
                            expanded={index === 1}
                            onChange={(event, expanded) => {
                              setIndex(expanded ? 1 : null);
                            }}
                          >
                            <AccordionSummary className="mentitemtext font-[17px]">
                              Categories
                            </AccordionSummary>
                            <AccordionDetails>
                              <div className="mb-1.5">
                                <a
                                  href="/industrial-goods"
                                  className=" no-underline text-[#21272a]"
                                >
                                  Industrial Goods
                                </a>
                              </div>
                              <div className="mb-1.5">
                                <a
                                  href="/fashion-and-textiles"
                                  className=" no-underline text-[#21272a]"
                                >
                                  Fashion & Home Textiles
                                </a>
                              </div>
                            </AccordionDetails>
                          </Accordion>
                        </AccordionGroup>
                      </div>
                      <div className="mt-7 font-semibold mentitemtext">
                        <a href="/faq" className=" no-underline text-[#21272a]">
                          FAQ
                        </a>
                      </div>
                      <div className="mt-7 font-semibold mentitemtext">
                        <a
                          href="/contact-us"
                          className=" no-underline text-[#21272a]"
                        >
                          Contact Us
                        </a>
                      </div>
                    </div>
                    <div className=" text-left">
                      <div className="mt-7 font-semibold mentitemtext">
                        <a
                          href="/value-added-services"
                          className=" no-underline text-[#21272a]"
                        >
                          Value Added Services
                        </a>
                      </div>
                      <div className="mt-7 font-semibold mentitemtext">
                        <a
                          href="/resources"
                          className=" no-underline text-[#21272a]"
                        >
                          Resources
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className=" grid grid-cols-1 mt-14 justify-start items-start text-left">
                    <div className=" font-bold">Join Us</div>
                    <div className="w-full mt-5">
                      <div className=" flex flex-row gap-3">
                        {socialData.map((item) => (
                          <a
                            key={item.id}
                            href={item.link}
                            target="_blank"
                            className=" no-underline border-0"
                            rel="noreferrer"
                          >
                            <Image alt={item.name} src={item.image} />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <div className="flex justify-center items-center">
            <a
              href={`${process.env.NEXT_PUBLIC_APP_ROOT_URL}`}
              className=" no-underline cursor-pointer"
            >
              <Image
                alt={`Logo`}
                className={`h-14 z-10`}
                src={getHeaderLogo}
                priority
              />
            </a>
          </div>
          <div className="flex justify-end items-center">
            <Menu as="div" className=" relative -right-[40px]">
              <div>
                <Menu.Button
                  onClick={openMobileMenu}
                  className="relative usermenuicon ring-0 border-0 cursor-pointer text-sm"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <Image
                    alt={`UserIcon`}
                    className={`w-1/5 h-1/5 right-0`}
                    src={getUserIcon}
                  />
                </Menu.Button>
              </div>
              <Transition
                show={getMobileMenu}
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-[50px] top-11 w-52 origin-top-right rounded-md pl-4 pr-3 py-2 shadow-lg bg-[#fff]">
                  <div className=" text-left font-semibold">
                    <AccordionGroup className="w-full">
                      <Accordion
                        expanded={index === 3}
                        onChange={(event, expanded) => {
                          setIndex(expanded ? 3 : null);
                        }}
                      >
                        <AccordionSummary className="mentitemtext">
                          Login
                        </AccordionSummary>
                        <AccordionDetails>
                          <a
                            className=" no-underline text-primaryBlack"
                            href={`${process.env.NEXT_PUBLIC_APP_CUSTOMER_ROOT_URL}buyer-login`}
                          >
                            Buyer
                          </a>
                        </AccordionDetails>
                        <AccordionDetails>
                          <a
                            className=" no-underline text-primaryBlack"
                            href={`${process.env.NEXT_PUBLIC_APP_CUSTOMER_ROOT_URL}seller-login`}
                          >
                            Seller
                          </a>
                        </AccordionDetails>
                      </Accordion>
                    </AccordionGroup>
                  </div>
                  <div className=" text-left font-semibold">
                    <AccordionGroup className="w-full">
                      <Accordion
                        expanded={index === 4}
                        onChange={(event, expanded) => {
                          setIndex(expanded ? 4 : null);
                        }}
                      >
                        <AccordionSummary className="mentitemtext">
                          Sign up for free
                        </AccordionSummary>
                        <AccordionDetails>
                          <a
                            className=" no-underline text-primaryBlack"
                            href={`${process.env.NEXT_PUBLIC_APP_CUSTOMER_ROOT_URL}register-buyer`}
                          >
                            Buyer
                          </a>
                        </AccordionDetails>
                        <AccordionDetails>
                          <a
                            className=" no-underline text-primaryBlack"
                            href={`${process.env.NEXT_PUBLIC_APP_CUSTOMER_ROOT_URL}register-seller`}
                          >
                            Seller
                          </a>
                        </AccordionDetails>
                      </Accordion>
                    </AccordionGroup>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  headerLogo: PropTypes.string,
  userIcon: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;

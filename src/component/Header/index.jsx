/** @jsxImportSource @emotion/react */
/* eslint-disable react/prop-types */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HeaderLogo from "@/assets/CategoryPage/Header/rivexa-logo.svg";
import BarIcon from "@/assets/Header/toggle.png";
import CloseIcon from "@/assets/Header/close-icon.svg";
import DropdownButton from "@/component/DropdownButton";
import HeaderStyles from "./HeaderStyles";
import MenuArrow from "@/assets/Home/menu-arrow.png";

const FlyoutLink = ({ children, isActive }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="group relative h-fit w-fit inline-flex justify-center items-center align-middle gap-1"
    >
      <div className={`relative ${open ? "text-[#856acf]" : ""}`}>
        {children}
        <span
          style={{ transform: open ? "scaleX(1)" : "scaleX(0)" }}
          className="absolute -bottom-2 -left-1 -right-1 w-[85%] m-auto h-[.2rem] origin-left rounded-full bg-[#856ACF] transition-transform duration-300 ease-out "
        />
        {isActive && (
          <span className="absolute -bottom-2 -left-1 -right-1 w-[85%] m-auto h-[.2rem] rounded-full bg-[#856ACF]" />
        )}
      </div>
      {children === "Product Categories" && (
        <Image
          src={MenuArrow}
          alt="MenuArrow"
          className={`${
            open || isActive
              ? "transform transition-transform duration-300 rotate-180"
              : ""
          }`}
        />
      )}
      {children === "Resources" && (
        <Image
          src={MenuArrow}
          alt="MenuArrow"
          className={`${
            open || isActive
              ? "transform transition-transform duration-300 rotate-180"
              : ""
          }`}
        />
      )}
    </div>
  );
};

const Header = () => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);

  // Function to toggle menu for mobile
  const toggleMenu = (menu) => {
    console.log(menu);
    setOpenMenu(openMenu === menu ? null : menu);
  };
  const [openbaricon, setOpenBarIcon] = useState(false);
  const mobilemenutoggle = () => {
    setOpenBarIcon(!openbaricon);
  };
  return (
    <div css={HeaderStyles}>
      <header className="bg-primaryWhite fixed top-0 w-full z-[9999] borderbutton h-auto">
        <div id="headercontainer" className="container">
          <div className="header_left">
            <Link className="logo" href="/" prefetch={true} replace>
              <Image src={HeaderLogo} quality={10} alt="logo" />
            </Link>
          </div>
          <div className="header_right">
            <label
              htmlFor="menuTrigger"
              className="nav_ico !flex sm:!flex xs:!flex ssm:!hidden md:!hidden lg:!hidden xl:!hidden justify-center place-items-center align-middle items-center"
              onClick={() => {
                mobilemenutoggle();
              }}
            >
              {!openbaricon && <Image src={BarIcon} alt="BarIcon" />}
              {openbaricon && <Image src={CloseIcon} alt="CloseIcon" />}
            </label>
            <input id="menuTrigger" type="checkbox" name="" />
            <nav className="main_nav">
              <ul className=" flex sm:flex-col xs:flex-col ssm:flex-row md:flex-row lg:flex-row xl:flex-row justify-start items-start align-middle place-items-start">
                <li>
                  <Link
                    href="/"
                    prefetch={true}
                    replace
                    className={` no-underline ${
                      pathname === "/" ? "activemenu" : "menuitemtext"
                    } `}
                    onClick={() => {
                      setOpenBarIcon(false);
                      document.getElementById("menuTrigger").checked = false;
                    }}
                  >
                    <FlyoutLink children={"Home"} isActive={pathname === "/"} />
                  </Link>
                </li>
                <li>
                  <label
                    className={` no-underline cursor-pointer ${
                      pathname === "/industrial-goods" ||
                      pathname.includes("/industrial-goods") ||
                      pathname === "/fashion-and-textiles" ||
                      pathname.includes("/fashion-and-textiles")
                        ? "activemenu"
                        : "menuitemtext"
                    } `}
                  >
                    <FlyoutLink
                      children={"Product Categories"}
                      isActive={
                        pathname === "/industrial-goods" ||
                        pathname.includes("/industrial-goods") ||
                        pathname === "/fashion-and-textiles" ||
                        pathname.includes("/fashion-and-textiles")
                      }
                    />
                  </label>
                  <ul className="z-[9999] shadow-2xl sm:shadow-none xs:shadow-none ssm:shadow-none md:shadow-2xl shadow-[#4a3587] !p-[10px] sm:!p-0 xs:!p-0 ssm:!p-[10px] md:!p-[10px] firstmenu">
                    <li>
                      <div className=" flex w-full flex-row items-center gap-[2rem]">
                        <Link
                          href="/industrial-goods"
                          prefetch={true}
                          replace
                          className="no-underline menuitemtext"
                          onClick={() => {
                            setOpenBarIcon(false);
                            document.getElementById(
                              "menuTrigger"
                            ).checked = false;
                          }}
                        >
                          Industrial Goods
                        </Link>
                        <Image
                          src={MenuArrow}
                          onClick={() => toggleMenu("industrial-goods")}
                          alt="MenuArrow"
                          className={`max-h-full max-w-full !hidden sm:!block xs:!block md:!hidden lg:!hidden xl:!hidden `}
                        />
                      </div>
                      <ul className="!bg-[#856ACF] sm:!bg-[#fff] xs:!bg-[#fff] ssm:!bg-[#856ACF] md:!bg-[#856ACF] rounded-xl z-[9999] shadow-2xl sm:shadow-none xs:shadow-none ssm:shadow-none md:shadow-2xl shadow-[#4a3587] !p-[10px] sm:!p-0 xs:!p-0 ssm:!p-[10px] md:!p-[10px] firstmenu">
                        <li>
                          <div className=" flex w-full flex-row items-center gap-[2rem]">
                            <Link
                              href="/industrial-goods/casting"
                              prefetch={true}
                              replace
                              className="no-underline menuitemtext !bg-[#856ACF] sm:!bg-[#fff] xs:!bg-[#fff] ssm:!bg-[#856ACF] md:!bg-[#856ACF] !text-primaryWhite sm:!text-primaryBlack xs:!text-primaryBlack ssm:!text-primaryBlack md:!text-primaryWhite"
                              onClick={() => {
                                setOpenBarIcon(false);
                                document.getElementById(
                                  "menuTrigger"
                                ).checked = false;
                              }}
                            >
                              Casting
                            </Link>
                            <Image
                              src={MenuArrow}
                              onClick={() => toggleMenu("casting")}
                              alt="MenuArrow"
                              className={`max-h-full max-w-full !hidden sm:!block xs:!block md:!hidden lg:!hidden xl:!hidden `}
                            />
                          </div>
                          <ul className="!bg-[#856ACF] sm:!bg-[#fff] xs:!bg-[#fff] ssm:!bg-[#856ACF] md:!bg-[#856ACF] rounded-xl z-[9999] shadow-2xl sm:shadow-none xs:shadow-none ssm:shadow-none md:shadow-2xl shadow-[#4a3587] !p-[10px] sm:!p-0 xs:!p-0 ssm:!p-[10px] md:!p-[10px] firstmenu">
                            <li>
                              <Link
                                href="/industrial-goods/casting/aluminium-die-casting"
                                prefetch={true}
                                replace
                                className="no-underline menuitemtext !bg-[#856ACF] sm:!bg-[#fff] xs:!bg-[#fff] ssm:!bg-[#856ACF] md:!bg-[#856ACF] !text-primaryWhite sm:!text-primaryBlack xs:!text-primaryBlack ssm:!text-primaryBlack md:!text-primaryWhite"
                                onClick={() => {
                                  setOpenBarIcon(false);
                                  document.getElementById(
                                    "menuTrigger"
                                  ).checked = false;
                                }}
                              >
                                Aluminium Die Casting
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/industrial-goods/casting/sand-casting"
                                prefetch={true}
                                replace
                                className="no-underline menuitemtext !bg-[#856ACF] sm:!bg-[#fff] xs:!bg-[#fff] ssm:!bg-[#856ACF] md:!bg-[#856ACF] !text-primaryWhite sm:!text-primaryBlack xs:!text-primaryBlack ssm:!text-primaryBlack md:!text-primaryWhite"
                                onClick={() => {
                                  setOpenBarIcon(false);
                                  document.getElementById(
                                    "menuTrigger"
                                  ).checked = false;
                                }}
                              >
                                Sand Casting
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/industrial-goods/casting/investment-casting"
                                className="no-underline menuitemtext !bg-[#856ACF] sm:!bg-[#fff] xs:!bg-[#fff] ssm:!bg-[#856ACF] md:!bg-[#856ACF] !text-primaryWhite sm:!text-primaryBlack xs:!text-primaryBlack ssm:!text-primaryBlack md:!text-primaryWhite"
                                onClick={() => {
                                  setOpenBarIcon(false);
                                  document.getElementById(
                                    "menuTrigger"
                                  ).checked = false;
                                }}
                              >
                                Investment Casting
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link
                            href="/industrial-goods/extrusion/aluminium-extrusion"
                            prefetch={true}
                            replace
                            className="no-underline menuitemtext !bg-[#856ACF] sm:!bg-[#fff] xs:!bg-[#fff] ssm:!bg-[#856ACF] md:!bg-[#856ACF] !text-primaryWhite sm:!text-primaryBlack xs:!text-primaryBlack ssm:!text-primaryBlack md:!text-primaryWhite"
                            onClick={() => {
                              setOpenBarIcon(false);
                              document.getElementById(
                                "menuTrigger"
                              ).checked = false;
                            }}
                          >
                            Extrusion
                          </Link>
                        </li>
                        <li>
                          <div className=" flex w-full flex-row items-center gap-[2rem]">
                            <Link
                              href="/industrial-goods/fabrication"
                              prefetch={true}
                              replace
                              className="no-underline menuitemtext !bg-[#856ACF] sm:!bg-[#fff] xs:!bg-[#fff] ssm:!bg-[#856ACF] md:!bg-[#856ACF] !text-primaryWhite sm:!text-primaryBlack xs:!text-primaryBlack ssm:!text-primaryBlack md:!text-primaryWhite"
                              onClick={() => {
                                setOpenBarIcon(false);
                                document.getElementById(
                                  "menuTrigger"
                                ).checked = false;
                              }}
                            >
                              Fabrication
                            </Link>
                            <Image
                              src={MenuArrow}
                              onClick={() => toggleMenu("casting")}
                              alt="MenuArrow"
                              className={`max-h-full max-w-full !hidden sm:!block xs:!block md:!hidden lg:!hidden xl:!hidden `}
                            />
                          </div>
                          <ul className="!bg-[#856ACF] sm:!bg-[#fff] xs:!bg-[#fff] ssm:!bg-[#856ACF] md:!bg-[#856ACF] rounded-xl z-[9999] shadow-2xl sm:shadow-none xs:shadow-none ssm:shadow-none md:shadow-2xl shadow-[#4a3587] !p-[10px] sm:!p-0 xs:!p-0 ssm:!p-[10px] md:!p-[10px] firstmenu">
                            <li>
                              <Link
                                href="/industrial-goods/fabrication/equipment-fabrication"
                                prefetch={true}
                                replace
                                className="no-underline menuitemtext !bg-[#856ACF] sm:!bg-[#fff] xs:!bg-[#fff] ssm:!bg-[#856ACF] md:!bg-[#856ACF] !text-primaryWhite sm:!text-primaryBlack xs:!text-primaryBlack ssm:!text-primaryBlack md:!text-primaryWhite"
                                onClick={() => {
                                  setOpenBarIcon(false);
                                  document.getElementById(
                                    "menuTrigger"
                                  ).checked = false;
                                }}
                              >
                                Equipment Fabrication
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/industrial-goods/fabrication/sheet-metal-fabrication"
                                prefetch={true}
                                replace
                                className="no-underline menuitemtext !bg-[#856ACF] sm:!bg-[#fff] xs:!bg-[#fff] ssm:!bg-[#856ACF] md:!bg-[#856ACF] !text-primaryWhite sm:!text-primaryBlack xs:!text-primaryBlack ssm:!text-primaryBlack md:!text-primaryWhite"
                                onClick={() => {
                                  setOpenBarIcon(false);
                                  document.getElementById(
                                    "menuTrigger"
                                  ).checked = false;
                                }}
                              >
                                Sheet Metal Fabrication
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/industrial-goods/fabrication/structural-fabrication"
                                prefetch={true}
                                replace
                                className="no-underline menuitemtext !bg-[#856ACF] sm:!bg-[#fff] xs:!bg-[#fff] ssm:!bg-[#856ACF] md:!bg-[#856ACF] !text-primaryWhite sm:!text-primaryBlack xs:!text-primaryBlack ssm:!text-primaryBlack md:!text-primaryWhite"
                                onClick={() => {
                                  setOpenBarIcon(false);
                                  document.getElementById(
                                    "menuTrigger"
                                  ).checked = false;
                                }}
                              >
                                Structural Fabrication
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div className=" flex w-full flex-row items-center gap-[2rem]">
                            <Link
                              href="/industrial-goods/forging"
                              prefetch={true}
                              replace
                              className="no-underline menuitemtext !bg-[#856ACF] sm:!bg-[#fff] xs:!bg-[#fff] ssm:!bg-[#856ACF] md:!bg-[#856ACF] !text-primaryWhite sm:!text-primaryBlack xs:!text-primaryBlack ssm:!text-primaryBlack md:!text-primaryWhite"
                              onClick={() => {
                                setOpenBarIcon(false);
                                document.getElementById(
                                  "menuTrigger"
                                ).checked = false;
                              }}
                            >
                              Forging
                            </Link>
                            <Image
                              src={MenuArrow}
                              onClick={() => toggleMenu("casting")}
                              alt="MenuArrow"
                              className={`max-h-full max-w-full !hidden sm:!block xs:!block md:!hidden lg:!hidden xl:!hidden `}
                            />
                          </div>
                          <ul className="!bg-[#856ACF] sm:!bg-[#fff] xs:!bg-[#fff] ssm:!bg-[#856ACF] md:!bg-[#856ACF] rounded-xl z-[9999] shadow-2xl sm:shadow-none xs:shadow-none ssm:shadow-none md:shadow-2xl shadow-[#4a3587] !p-[10px] sm:!p-0 xs:!p-0 ssm:!p-[10px] md:!p-[10px] firstmenu">
                            <li>
                              <Link
                                href="/industrial-goods/forging/open-die-forging"
                                prefetch={true}
                                replace
                                className="no-underline menuitemtext !bg-[#856ACF] sm:!bg-[#fff] xs:!bg-[#fff] ssm:!bg-[#856ACF] md:!bg-[#856ACF] !text-primaryWhite sm:!text-primaryBlack xs:!text-primaryBlack ssm:!text-primaryBlack md:!text-primaryWhite"
                                onClick={() => {
                                  setOpenBarIcon(false);
                                  document.getElementById(
                                    "menuTrigger"
                                  ).checked = false;
                                }}
                              >
                                Open Die Forging
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/industrial-goods/forging/closed-die-forging"
                                prefetch={true}
                                replace
                                className="no-underline menuitemtext !bg-[#856ACF] sm:!bg-[#fff] xs:!bg-[#fff] ssm:!bg-[#856ACF] md:!bg-[#856ACF] !text-primaryWhite sm:!text-primaryBlack xs:!text-primaryBlack ssm:!text-primaryBlack md:!text-primaryWhite"
                                onClick={() => {
                                  setOpenBarIcon(false);
                                  document.getElementById(
                                    "menuTrigger"
                                  ).checked = false;
                                }}
                              >
                                Closed Die Forging
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link
                            href="/industrial-goods/molding/injection-molding"
                            prefetch={true}
                            replace
                            className="no-underline menuitemtext !bg-[#856ACF] sm:!bg-[#fff] xs:!bg-[#fff] ssm:!bg-[#856ACF] md:!bg-[#856ACF] !text-primaryWhite sm:!text-primaryBlack xs:!text-primaryBlack ssm:!text-primaryBlack md:!text-primaryWhite"
                            onClick={() => {
                              setOpenBarIcon(false);
                              document.getElementById(
                                "menuTrigger"
                              ).checked = false;
                            }}
                          >
                            Injection Molding
                          </Link>
                        </li>
                        <li>
                          <div className=" flex w-full flex-row items-center gap-[2rem]">
                            <Link
                              href="/industrial-goods/machining"
                              prefetch={true}
                              replace
                              className="no-underline menuitemtext !bg-[#856ACF] sm:!bg-[#fff] xs:!bg-[#fff] ssm:!bg-[#856ACF] md:!bg-[#856ACF] !text-primaryWhite sm:!text-primaryBlack xs:!text-primaryBlack ssm:!text-primaryBlack md:!text-primaryWhite"
                              onClick={() => {
                                setOpenBarIcon(false);
                                document.getElementById(
                                  "menuTrigger"
                                ).checked = false;
                              }}
                            >
                              Machining
                            </Link>
                            <Image
                              src={MenuArrow}
                              onClick={() => toggleMenu("casting")}
                              alt="MenuArrow"
                              className={`max-h-full max-w-full !hidden sm:!block xs:!block md:!hidden lg:!hidden xl:!hidden `}
                            />
                          </div>
                          <ul className="!bg-[#856ACF] sm:!bg-[#fff] xs:!bg-[#fff] ssm:!bg-[#856ACF] md:!bg-[#856ACF] rounded-xl z-[9999] shadow-2xl sm:shadow-none xs:shadow-none ssm:shadow-none md:shadow-2xl shadow-[#4a3587] !p-[10px] sm:!p-0 xs:!p-0 ssm:!p-[10px] md:!p-[10px] firstmenu">
                            <li>
                              <Link
                                href="/industrial-goods/machining/cnc-machining"
                                prefetch={true}
                                replace
                                className="no-underline menuitemtext !bg-[#856ACF] sm:!bg-[#fff] xs:!bg-[#fff] ssm:!bg-[#856ACF] md:!bg-[#856ACF] !text-primaryWhite sm:!text-primaryBlack xs:!text-primaryBlack ssm:!text-primaryBlack md:!text-primaryWhite"
                                onClick={() => {
                                  setOpenBarIcon(false);
                                  document.getElementById(
                                    "menuTrigger"
                                  ).checked = false;
                                }}
                              >
                                CNC Machining
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/industrial-goods/machining/conventional-machining"
                                prefetch={true}
                                replace
                                className="no-underline menuitemtext !bg-[#856ACF] sm:!bg-[#fff] xs:!bg-[#fff] ssm:!bg-[#856ACF] md:!bg-[#856ACF] !text-primaryWhite sm:!text-primaryBlack xs:!text-primaryBlack ssm:!text-primaryBlack md:!text-primaryWhite"
                                onClick={() => {
                                  setOpenBarIcon(false);
                                  document.getElementById(
                                    "menuTrigger"
                                  ).checked = false;
                                }}
                              >
                                Conventional Machining
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className=" flex w-full flex-row items-center gap-[2rem]">
                        <Link
                          href="/fashion-and-textiles"
                          prefetch={true}
                          replace
                          className="no-underline menuitemtext"
                          onClick={() => {
                            setOpenBarIcon(false);
                            document.getElementById(
                              "menuTrigger"
                            ).checked = false;
                          }}
                        >
                          Fashion & Home Textiles
                        </Link>
                        <Image
                          src={MenuArrow}
                          onClick={() => toggleMenu("fashion-home-textiles")}
                          alt="MenuArrow"
                          className={`max-h-full max-w-full !hidden sm:!block xs:!block md:!hidden lg:!hidden xl:!hidden `}
                        />
                      </div>
                      <ul className="!bg-[#856ACF] sm:!bg-[#fff] xs:!bg-[#fff] ssm:!bg-[#856ACF] md:!bg-[#856ACF] rounded-xl z-[9999] shadow-2xl sm:shadow-none xs:shadow-none ssm:shadow-none md:shadow-2xl shadow-[#4a3587] !p-[10px] sm:!p-0 xs:!p-0 ssm:!p-[10px] md:!p-[10px] firstmenu">
                        <li>
                          <Link
                            href="/fashion-and-textiles/uniform-and-work-wear"
                            className="no-underline menuitemtext !bg-[#856ACF] sm:!bg-[#fff] xs:!bg-[#fff] ssm:!bg-[#856ACF] md:!bg-[#856ACF] !text-primaryWhite sm:!text-primaryBlack xs:!text-primaryBlack ssm:!text-primaryBlack md:!text-primaryWhite"
                            onClick={() => {
                              setOpenBarIcon(false);
                              document.getElementById(
                                "menuTrigger"
                              ).checked = false;
                            }}
                          >
                            Uniforms
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/fashion-and-textiles/mens-apparel"
                            prefetch={true}
                            replace
                            className="no-underline menuitemtext !bg-[#856ACF] sm:!bg-[#fff] xs:!bg-[#fff] ssm:!bg-[#856ACF] md:!bg-[#856ACF] !text-primaryWhite sm:!text-primaryBlack xs:!text-primaryBlack ssm:!text-primaryBlack md:!text-primaryWhite"
                            onClick={() => {
                              setOpenBarIcon(false);
                              document.getElementById(
                                "menuTrigger"
                              ).checked = false;
                            }}
                          >
                            Men's Apparel
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/fashion-and-textiles/womens-apparel"
                            prefetch={true}
                            replace
                            className="no-underline menuitemtext !bg-[#856ACF] sm:!bg-[#fff] xs:!bg-[#fff] ssm:!bg-[#856ACF] md:!bg-[#856ACF] !text-primaryWhite sm:!text-primaryBlack xs:!text-primaryBlack ssm:!text-primaryBlack md:!text-primaryWhite"
                            onClick={() => {
                              setOpenBarIcon(false);
                              document.getElementById(
                                "menuTrigger"
                              ).checked = false;
                            }}
                          >
                            Women's Apparel
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/fashion-and-textiles/bags"
                            prefetch={true}
                            replace
                            className="no-underline menuitemtext !bg-[#856ACF] sm:!bg-[#fff] xs:!bg-[#fff] ssm:!bg-[#856ACF] md:!bg-[#856ACF] !text-primaryWhite sm:!text-primaryBlack xs:!text-primaryBlack ssm:!text-primaryBlack md:!text-primaryWhite"
                            onClick={() => {
                              setOpenBarIcon(false);
                              document.getElementById(
                                "menuTrigger"
                              ).checked = false;
                            }}
                          >
                            Bags & Accessories
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/fashion-and-textiles/home-textiles"
                            prefetch={true}
                            replace
                            className="no-underline menuitemtext !bg-[#856ACF] sm:!bg-[#fff] xs:!bg-[#fff] ssm:!bg-[#856ACF] md:!bg-[#856ACF] !text-primaryWhite sm:!text-primaryBlack xs:!text-primaryBlack ssm:!text-primaryBlack md:!text-primaryWhite"
                            onClick={() => {
                              setOpenBarIcon(false);
                              document.getElementById(
                                "menuTrigger"
                              ).checked = false;
                            }}
                          >
                            Home Textiles
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/fashion-and-textiles/footwear"
                            prefetch={true}
                            replace
                            className="no-underline menuitemtext !bg-[#856ACF] sm:!bg-[#fff] xs:!bg-[#fff] ssm:!bg-[#856ACF] md:!bg-[#856ACF] !text-primaryWhite sm:!text-primaryBlack xs:!text-primaryBlack ssm:!text-primaryBlack md:!text-primaryWhite"
                            onClick={() => {
                              setOpenBarIcon(false);
                              document.getElementById(
                                "menuTrigger"
                              ).checked = false;
                            }}
                          >
                            Footwear
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/fashion-and-textiles/leather"
                            prefetch={true}
                            replace
                            className="no-underline menuitemtext !bg-[#856ACF] sm:!bg-[#fff] xs:!bg-[#fff] ssm:!bg-[#856ACF] md:!bg-[#856ACF] !text-primaryWhite sm:!text-primaryBlack xs:!text-primaryBlack ssm:!text-primaryBlack md:!text-primaryWhite"
                            onClick={() => {
                              setOpenBarIcon(false);
                              document.getElementById(
                                "menuTrigger"
                              ).checked = false;
                            }}
                          >
                            Leather
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/fashion-and-textiles/sleep-and-innerwear"
                            prefetch={true}
                            replace
                            className="no-underline menuitemtext !bg-[#856ACF] sm:!bg-[#fff] xs:!bg-[#fff] ssm:!bg-[#856ACF] md:!bg-[#856ACF] !text-primaryWhite sm:!text-primaryBlack xs:!text-primaryBlack ssm:!text-primaryBlack md:!text-primaryWhite"
                            onClick={() => {
                              setOpenBarIcon(false);
                              document.getElementById(
                                "menuTrigger"
                              ).checked = false;
                            }}
                          >
                            Sleep & Innerwear
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    href="/value-added-services"
                    prefetch={true}
                    replace
                    className={` no-underline ${
                      pathname === "/value-added-services"
                        ? "activemenu"
                        : "menuitemtext"
                    } `}
                    onClick={() => {
                      setOpenBarIcon(false);
                      document.getElementById("menuTrigger").checked = false;
                    }}
                  >
                    <FlyoutLink
                      children={"Value Added Services"}
                      isActive={pathname === "/value-added-services"}
                    />
                  </Link>
                </li>
                <li>
                  <label
                    className={` no-underline cursor-pointer ${
                      pathname === "/resources" ||
                      pathname.includes("/resources") ||
                      pathname === "/news" ||
                      pathname.includes("/news")
                        ? "activemenu"
                        : "menuitemtext"
                    } `}
                  >
                    <FlyoutLink
                      children={"Resources"}
                      isActive={
                        pathname === "/resources" ||
                        pathname.includes("/resources") ||
                        pathname === "/news" ||
                        pathname.includes("/news")
                      }
                    />
                  </label>
                  <ul className="z-[9999] shadow-2xl sm:shadow-none xs:shadow-none ssm:shadow-none md:shadow-2xl shadow-[#4a3587] !p-[10px] sm:!p-0 xs:!p-0 ssm:!p-[10px] md:!p-[10px] firstmenu">
                    <li>
                      <Link
                        href="/resources"
                        prefetch={true}
                        replace
                        className="no-underline menuitemtext"
                        onClick={() => {
                          setOpenBarIcon(false);
                          document.getElementById(
                            "menuTrigger"
                          ).checked = false;
                        }}
                      >
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/news"
                        prefetch={true}
                        replace
                        className="no-underline menuitemtext"
                        onClick={() => {
                          setOpenBarIcon(false);
                          document.getElementById(
                            "menuTrigger"
                          ).checked = false;
                        }}
                      >
                        News Room
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/faq"
                        prefetch={true}
                        replace
                        className="no-underline menuitemtext"
                        onClick={() => {
                          setOpenBarIcon(false);
                          document.getElementById(
                            "menuTrigger"
                          ).checked = false;
                        }}
                      >
                        FAQ's
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    prefetch={true}
                    replace
                    className={` no-underline ${
                      pathname === "/contact-us" ? "activemenu" : "menuitemtext"
                    } `}
                    onClick={() => {
                      setOpenBarIcon(false);
                      document.getElementById("menuTrigger").checked = false;
                    }}
                  >
                    <FlyoutLink
                      children={"Contact Us"}
                      isActive={pathname === "/contact-us"}
                    />
                  </Link>
                </li>
                <li className="hidden sm:block xs:block ssm:block md:hidden">
                  <div className="inline-flex flex-row justify-center items-center align-middle place-items-center gap-5 top-0 left-0">
                    <DropdownButton
                      key={`mobile_login_1`}
                      className={`loginbtn shadow-none normal-case cursor-pointer z-[9999]`}
                      title={`Log In`}
                      itemlist={[
                        {
                          title: `Buyer`,
                          link: `${process.env.NEXT_PUBLIC_APP_CUSTOMER_ROOT_URL}buyer-login`,
                        },
                        {
                          title: `Seller`,
                          link: `${process.env.NEXT_PUBLIC_APP_CUSTOMER_ROOT_URL}seller-login`,
                        },
                      ]}
                      width={`w-18`}
                      divwidth={`inline-block`}
                    />
                    <DropdownButton
                      key={`mobile_login_2`}
                      className={`signinicon text-white px-5 py-2 normal-case cursor-pointer z-[9999]`}
                      title={`Sign Up For Free`}
                      itemlist={[
                        {
                          title: `Buyer`,
                          link: `${process.env.NEXT_PUBLIC_APP_CUSTOMER_ROOT_URL}register-buyer`,
                        },
                        {
                          title: `Seller`,
                          link: `${process.env.NEXT_PUBLIC_APP_CUSTOMER_ROOT_URL}register-seller`,
                        },
                      ]}
                      width={`w-[8rem]`}
                      divwidth={`inline-block`}
                    />
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div className="block sm:hidden xs:hidden ssm:hidden md:block">
            <div className=" inline-flex justify-center items-center align-middle place-items-center flex-row gap-5 relative right-4">
              <DropdownButton
                key={`desktop_login_1`}
                className={`loginbtn shadow-none normal-case cursor-pointer z-[9999]`}
                title={`Log In`}
                itemlist={[
                  {
                    title: `Buyer`,
                    link: `${process.env.NEXT_PUBLIC_APP_CUSTOMER_ROOT_URL}buyer-login`,
                  },
                  {
                    title: `Seller`,
                    link: `${process.env.NEXT_PUBLIC_APP_CUSTOMER_ROOT_URL}seller-login`,
                  },
                ]}
                width={`w-18`}
                divwidth={`inline-block`}
              />
              <DropdownButton
                key={`desktop_login_2`}
                className={`signinicon text-white px-5 py-2 normal-case cursor-pointer z-[9999]`}
                title={`Sign Up For Free`}
                itemlist={[
                  {
                    title: `Buyer`,
                    link: `${process.env.NEXT_PUBLIC_APP_CUSTOMER_ROOT_URL}register-buyer`,
                  },
                  {
                    title: `Seller`,
                    link: `${process.env.NEXT_PUBLIC_APP_CUSTOMER_ROOT_URL}register-seller`,
                  },
                ]}
                width={`w-[8rem]`}
                divwidth={`inline-block`}
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

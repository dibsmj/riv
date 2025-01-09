/** @jsxImportSource @emotion/react */
/* eslint-disable react/prop-types */
"use client";
import React from "react";
import Image from "next/image";
import FooterStyles from "./FooterStyles";
import FooterLogo from "@/assets/CategoryPage/Header/rivexa-logo.svg";
import Facebook from "@/assets/Footer/Facebook.webp";
import Instragram from "@/assets/Footer/Instagram.webp";
import LinkedIn from "@/assets/Footer/LinkedIn.webp";
import Youtube from "@/assets/Footer/Youtube.webp";

const Footer = () => {
  const links = [
    { href: "/industrial-goods/casting", text: "Casting" },
    { href: "/industrial-goods/forging", text: "Forging" },
    { href: "/industrial-goods/machining", text: "Machining" },
    { href: "/industrial-goods/fabrication", text: "Fabrication" },
    {
      href: "/industrial-goods/extrusion/aluminium-extrusion",
      text: "Extrusion",
    },
  ];
  const linksFHT = [
    { href: "/fashion-and-textiles/uniform-and-work-wear", text: "Uniforms" },
    { href: "/fashion-and-textiles/mens-apparel", text: "Men's Apparel" },
    { href: "/fashion-and-textiles/womens-apparel", text: "Women's Apparel" },
    { href: "/fashion-and-textiles/bags", text: "Bags & Accessories" },
    { href: "/fashion-and-textiles/home-textiles", text: "Home Textiles" },
    { href: "/fashion-and-textiles/footwear", text: "Footwear" },
    { href: "/fashion-and-textiles/leather", text: "Leather" },
    {
      href: "/fashion-and-textiles/sleep-and-innerwear",
      text: "Sleep & Innerwear",
    },
  ];
  const currentYear = new Date().getFullYear();
  const socialData = [
    {
      id: 1,
      name: "Facebook",
      image: Facebook,
      link: "https://www.facebook.com/rivexabymjunction",
    },
    {
      id: 2,
      name: "Youtube",
      image: Youtube,
      link: "https://www.youtube.com/@rivexa",
    },
    {
      id: 3,
      name: "Instragram",
      image: Instragram,
      link: "https://instagram.com/rivexa_by_mjunction?igshid=MzRlODBiNWFlZA==",
    },
    {
      id: 4,
      name: "LinkedIn",
      image: LinkedIn,
      link: "https://www.linkedin.com/showcase/rivexabymjunction/",
    },
  ];
  return (
    <div
      id="footerlayout"
      css={FooterStyles}
      className="mb-[1.5rem] mt-[1.5rem] w-full m-auto"
    >
      <footer>
        <div className="flex flex-row xs:flex-col sm:flex-col ssm:flex-row md:flex-row w-[85%] mx-auto p-6 gap-[10rem] xs:gap-10 sm:gap-10 ssm:gap-10 md:gap-[10rem]">
          <div className=" flex-shrink-0">
            <div className=" inline-flex gap-0 sm:gap-[2rem] xs:gap-[2rem] ssm:gap-[2rem] md:gap-0">
              <Image
                src={FooterLogo}
                quality={20}
                priority={false}
                alt="Footer Logo"
                className=" max-w-full max-h-full"
              />
              <div className=" hidden justify-end items-end gap-3 sm:flex xs:flex ssm:flex md:hidden ">
                {socialData.map((item) => (
                  <a
                    href={item.link}
                    target="_blank"
                    className=" no-underline border-0"
                    rel="noreferrer"
                    key={item.id}
                  >
                    <Image
                      quality={20}
                      priority={false}
                      src={item.image}
                      alt={item.name}
                      className=" w-full h-full"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-4 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5">
              <div className="inline-flex xs:inline-block sm:inline-block md:inline-flex lg:inline-flex justify-start items-start text-right">
                <div className=" text-left">
                  <div className="footermenutext mb-5">
                    <a
                      href="/"
                      className=" footermenutext no-underline border-0 hover:font-bold hover:text-primaryBlack"
                    >
                      Home
                    </a>
                  </div>
                  <div className="footermenutext mb-5">
                    <a
                      href="/value-added-services"
                      className=" footermenutext no-underline border-0 hover:font-bold hover:text-primaryBlack"
                    >
                      Value Added Services
                    </a>
                  </div>
                  <div className="footermenutext mb-5">
                    <a
                      href="/resources"
                      className="footermenutext no-underline border-0 hover:font-bold hover:text-primaryBlack"
                    >
                      Resources
                    </a>
                  </div>
                  <div className="footermenutext mb-5">
                    <a
                      href="/faq"
                      className="footermenutext no-underline border-0 hover:font-bold hover:text-primaryBlack"
                    >
                      FAQ
                    </a>
                  </div>
                  <div className="footermenutext mb-5">
                    <a
                      href="/contact-us"
                      className=" footermenutext no-underline border-0 hover:font-bold hover:text-primaryBlack"
                    >
                      Contact us
                    </a>
                  </div>
                </div>
              </div>
              <div className="inline-flex xs:inline-block sm:inline-block md:inline-flex lg:inline-flex justify-start items-start text-right">
                <div className=" text-left">
                  <div className="footermenutext mb-5">
                    <a
                      href={"/"}
                      className="footermenutext no-underline border-0 hover:font-bold hover:text-primaryBlack"
                    >
                      Industrial Goods
                    </a>
                  </div>
                  <div className="ml-0">
                    {links.map((link, index) => (
                      <div className="footermenutext mb-5" key={link.text}>
                        <a
                          href={link.href}
                          className="footermenutext no-underline border-0 hover:font-bold hover:text-primaryBlack"
                        >
                          {link.text}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="inline-flex xs:inline-block sm:inline-block md:inline-flex lg:inline-flex justify-start items-start text-right">
                <div className=" text-left">
                  <div className="footermenutext mb-5">
                    <a
                      href={"/"}
                      className="footermenutext no-underline border-0 hover:font-bold hover:text-primaryBlack"
                    >
                      Fashion & Home Textiles
                    </a>
                  </div>
                  <div className="ml-0">
                    {linksFHT.map((link, index) => (
                      <div className="footermenutext mb-5" key={link.text}>
                        <a
                          href={link.href}
                          className="footermenutext no-underline border-0 hover:font-bold hover:text-primaryBlack"
                        >
                          {link.text}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="inline-flex xs:inline-block sm:inline-block md:inline-flex lg:inline-flex justify-start items-start text-right">
                <div className=" text-left">
                  <div className="footermenutext mb-5">
                    <a
                      href="https://www.mjunction.in/about-us/"
                      target="_blank"
                      rel="noreferrer"
                      className="footermenutext no-underline border-0 hover:font-bold hover:text-primaryBlack"
                    >
                      About mjunction
                    </a>
                  </div>
                  <div className="footermenutext mb-5">
                    <a
                      href="/privacy-policy"
                      // target="_blank"
                      // // rel="noreferrer"
                      className="footermenutext no-underline border-0 hover:font-bold hover:text-primaryBlack"
                    >
                      Privacy Policy
                    </a>
                  </div>
                  <div className="footermenutext mb-5">
                    <a
                      href="/terms-and-conditions"
                      className="footermenutext no-underline border-0 hover:font-bold hover:text-primaryBlack"
                    >
                      Terms & Conditions
                    </a>
                  </div>
                  <div className="footermenutext mb-5">
                    <a
                      href="/code-of-conduct"
                      // target="_blank"
                      // rel="noreferrer"
                      className="footermenutext no-underline border-0 hover:font-bold hover:text-primaryBlack"
                    >
                      Code of Conduct
                    </a>
                  </div>
                  <div className="footermenutext mb-5">
                    <a
                      href="/sitemap"
                      rel="noreferrer"
                      className="footermenutext no-underline border-0 hover:font-bold hover:text-primaryBlack"
                    >
                      Sitemap
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 mb-0 sm:mb-[4rem] xs:mb-[4rem] ssm:mb-0 md:mb-0 sm:grid-cols-1 xs:grid-cols-1 ssm:grid-cols-1 md:grid-cols-2 borderline w-[90%] mx-auto py-3">
          <div className="copyright text-left xs:text-center sm:text-center ssm:text-center md:text-left">
            © All rights reserved by rivexa {currentYear}
          </div>
          <div className=" flex justify-end items-end gap-3 sm:hidden xs:hidden ssm:hidden md:flex ">
            {socialData.map((item) => (
              <a
                href={item.link}
                target="_blank"
                className=" no-underline border-0"
                rel="noreferrer"
                key={item.id}
              >
                <Image
                  src={item.image}
                  quality={20}
                  priority={false}
                  alt={item.name}
                  className=" w-full h-full"
                />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

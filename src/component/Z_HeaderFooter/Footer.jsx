/** @jsxImportSource @emotion/react */
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import FooterStyles from "./FooterStyles";
import FooterUpper from "@/assets/CategoryPage/Footer/footer_upper.svg";
import FooterLogo from "@/assets/CategoryPage/Footer/rivexa-logo.png";
import Facebook from "@/assets/CategoryPage/Footer/fb.svg";
import Instragram from "@/assets/CategoryPage/Footer/instra.svg";
import LinkedIn from "@/assets/CategoryPage/Footer/linkedin.svg";
import BackToTop from "@/assets/homepage/back-to-top.svg";
import Youtube from "@/assets/CategoryPage/Footer/footer_youtube.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialData = [
    {
      id: 1,
      name: "LinkedIn",
      image: LinkedIn,
      link: "https://www.linkedin.com/showcase/rivexabymjunction/",
    },
    {
      id: 2,
      name: "Instragram",
      image: Instragram,
      link: "https://instagram.com/rivexa_by_mjunction?igshid=MzRlODBiNWFlZA==",
    },
    {
      id: 3,
      name: "Youtube",
      image: Youtube,
      link: "https://www.youtube.com/@rivexa",
    },
    {
      id: 4,
      name: "Facebook",
      image: Facebook,
      link: "https://www.facebook.com/rivexabymjunction",
    },
  ];
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Smooth scrolling animation
    });
  };

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
    { href: "/fashion-and-textiles/mens-apparel", text: "Men's Apparel" },
    { href: "/fashion-and-textiles/womens-apparel", text: "Women's Apparel" },
    { href: "/fashion-and-textiles/bags", text: "Bags & Accessories" },
    { href: "/fashion-and-textiles/uniform-and-work-wear", text: "Uniforms" },
    { href: "/fashion-and-textiles/footwear", text: "Footwear" },
  ];
  return (
    <div
      css={FooterStyles}
      className="w-full m-auto justify-center items-center text-center align-middle"
    >
      <div>
        <Image
          src={FooterUpper}
          alt={"FooterUpper"}
          className=" w-full justify-center items-center -mb-1"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <div className="footerbody h-auto pb-10 mb-0 xs:mb-20 sm:mb-20 ssm:mb-0 md:mb-0 lg:mb-0 xl:mb-0">
        <div className="w-[92%] m-auto justify-center items-center text-center align-middle">
          <div className="flex xs:grid sm:grid md:flex lg:flex gap-5">
            <div className="w-full xs:w-full sm:w-full md:w-1/5 lg:w-1/5">
              <Image src={FooterLogo} alt="Footerlog" />
            </div>
            <div className="w-full">
              <div className="grid grid-cols-4 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5">
                <div className="inline-flex xs:inline-block sm:inline-block md:inline-flex lg:inline-flex justify-start items-start text-right">
                  <div className=" text-left">
                    <div className="font-semibold text-[1.25rem] text-['Chillax Semibold'] mb-3">
                      Industrial Goods
                    </div>
                    <div className="ml-3 xs:ml-0 sm:ml-0 ssm:ml-3 md:ml-3 lg:ml-3">
                      {links.map((link, index) => (
                        <div className="footerlink mb-3" key={link.text}>
                          <a
                            href={link.href}
                            className="footerlink no-underline border-0"
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
                    <div className="font-semibold text-[1.25rem] text-['Chillax Semibold'] mb-3">
                      Fashion & Home Textiles
                    </div>
                    <div className="ml-3 xs:ml-0 sm:ml-0 ssm:ml-3 md:ml-3 lg:ml-3">
                      {linksFHT.map((link, index) => (
                        <div className="footerlink mb-3" key={link.text}>
                          <a
                            href={link.href}
                            className="footerlink no-underline border-0"
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
                    <div className="footerlink mb-3">
                      <a
                        href="/privacy-policy"
                        // target="_blank"
                        // // rel="noreferrer"
                        className="footerlink no-underline border-0"
                      >
                        Privacy Policy
                      </a>
                    </div>
                    <div className="footerlink mb-3">
                      <a
                        href="/terms-and-conditions"
                        className="footerlink no-underline border-0"
                      >
                        Terms & Conditions
                      </a>
                    </div>
                    <div className="footerlink mb-3">
                      <a
                        href="/code-of-conduct"
                        // target="_blank"
                        // rel="noreferrer"
                        className="footerlink no-underline border-0"
                      >
                        Code of Conduct
                      </a>
                    </div>
                  </div>
                </div>
                <div className="inline-flex xs:inline-block sm:inline-block md:inline-flex lg:inline-flex justify-start items-start text-right">
                  <div className=" text-left">
                    <div className="footerlink mb-3">
                      <a
                        href="/contact-us"
                        className=" footerlink no-underline border-0"
                      >
                        Contact us
                      </a>
                    </div>
                    <div className="footerlink mb-3">
                      <a
                        href="https://www.mjunction.in/about-us/"
                        target="_blank"
                        rel="noreferrer"
                        className="footerlink no-underline border-0"
                      >
                        About mjunction
                      </a>
                    </div>
                    <div className="footerlink mb-3">
                      <a
                        href="/resources"
                        className="footerlink no-underline border-0"
                      >
                        Resources
                      </a>
                    </div>
                    <div className="footerlink mb-3">
                      <a
                        href="/sitemap"
                        rel="noreferrer"
                        className="footerlink no-underline border-0"
                      >
                        Sitemap
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[85%] m-auto mt-20">
          <div className="flex flex-row xs:flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row gap-5">
            <div className="copyright w-full xs:w-full sm:w-full md:w-1/2 lg:w-1/2 text-left xs:text-center sm:text-center md:text-right lg:text-left">
              © All rights reserved by rivexa {currentYear}
            </div>
            <div className="w-full xs:w-full sm:w-full md:w-1/2 lg:w-1/2 text-right xs:text-center sm:text-center md:text-right lg:text-right">
              <div className=" flex xs:inline-flex sm:inline-flex md:flex lg:flex flex-row-reverse gap-3">
                {socialData.map((item) => (
                  <a
                    href={item.link}
                    target="_blank"
                    className=" no-underline border-0"
                    rel="noreferrer"
                    key={item.id}
                  >
                    <Image
                      key={item.id}
                      src={item.image}
                      alt={item.name}
                      className=" w-full h-full"
                      width={100}
                      height={100}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isVisible && (
        <button type="button" className="back-to-top" onClick={scrollToTop}>
          <Image
            src={BackToTop}
            alt="Back to top"
            style={{ width: "auto", height: "auto" }}
          />
        </button>
      )}
    </div>
  );
};

export default Footer;

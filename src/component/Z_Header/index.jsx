/** @jsxImportSource @emotion/react */
/* eslint-disable react/prop-types */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import DropdownButton from "@/component/DropdownButton";
import HeaderLogo from "@/assets/Header/header-logo.png";
import HeaderStyles from "./HeaderStyles";

const nestedIGMenuItems = [
  {
    title: "Casting",
    link: "/industrial-goods/casting",
  },
  {
    title: "Forging",
    link: "/industrial-goods/forging",
  },
  {
    title: "Machining",
    link: "/industrial-goods/machining",
  },
  {
    title: "Fabrication",
    link: "/industrial-goods/fabrication",
  },
  {
    title: "Extrusion",
    link: "/industrial-goods/extrusion/aluminium-extrusion",
  },
];

const nestedFHTMenuItems = [
  {
    title: "Uniforms",
    link: "/fashion-and-textiles/uniform-and-work-wear",
  },
  {
    title: "Men's Apparel",
    link: "/fashion-and-textiles/mens-apparel",
  },
  {
    title: "Women's Appare",
    link: "/fashion-and-textiles/womens-apparel",
  },
  {
    title: "Bags & Accessories",
    link: "/fashion-and-textiles/bags",
  },
  {
    title: "Footwear",
    link: "/fashion-and-textiles/footwear",
  },
  {
    title: "Leather",
    link: "/fashion-and-textiles/leather",
  },
  {
    title: "Sleep & Innerwear",
    link: "/fashion-and-textiles/sleep-and-innerwear",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openIGNestedMenu, setopenIGNestedMenu] = React.useState(false);
  const [openFHTNestedMenu, setopenFHTNestedMenu] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [openIGCastingNestedMenu, setopenIGCastingNestedMenu] =
    React.useState(false);
  const [openIGForgingNestedMenu, setopenIGForgingNestedMenu] =
    React.useState(false);
  const [openIGMachiningNestedMenu, setopenIGMachiningNestedMenu] =
    React.useState(false);
  const [openIGFabricationNestedMenu, setopenIGFabricationNestedMenu] =
    React.useState(false);
  const renderIGItems = nestedIGMenuItems.map(({ link, title }, key) => (
    <Typography
      as="a"
      href={link}
      className=" no-underline hover:border-none"
      key={key}
    >
      <MenuItem className=" border-none bg-transparent no-underline hover:!border-none !font-['Chillax'] !text-[#FFFFFF]">
        {title}
      </MenuItem>
    </Typography>
  ));

  const renderFHTItems = nestedFHTMenuItems.map(({ link, title }, key) => (
    <Typography
      as="a"
      href={link}
      className="menuitemtext no-underline"
      key={key}
    >
      <MenuItem className=" border-none bg-transparent no-underline hover:!border-none !font-['Chillax'] !text-[#FFFFFF]">
        {title}
      </MenuItem>
    </Typography>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            as="div"
            variant="small"
            className="menuitemtext no-underline"
          >
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <FlyoutLink children={"Product Categories"} />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden space-y-3 mt-3 bg-primaryWhite lg:block">
          <Menu
            placement="right-start"
            allowHover
            offset={15}
            open={openIGNestedMenu}
            handler={setopenIGNestedMenu}
          >
            <MenuHandler className="flex items-center justify-between border-none bg-transparent">
              <MenuItem>
                <Typography
                  as="a"
                  href="/industrial-goods"
                  className="!font-['Chillax Variable'] !text-[#3f3f3f] no-underline"
                >
                  Industrial Goods
                </Typography>
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="bg-[#856ACF] space-y-3 w-auto">
              <Menu
                placement="right-start"
                allowHover
                offset={15}
                open={openIGCastingNestedMenu}
                handler={setopenIGCastingNestedMenu}
              >
                <MenuHandler className="flex items-center justify-between border-none bg-transparent">
                  <MenuItem className="flex text-left justify-start items-center gap-4 border-none bg-transparent no-underline hover:!border-none ">
                    <Typography
                      as="a"
                      href={"/industrial-goods/casting"}
                      className="w-4/5 no-underline hover:!border-none !font-['Chillax'] !text-[#FFFFFF]"
                    >
                      Casting
                    </Typography>
                    <ChevronUpIcon
                      strokeWidth={2.5}
                      className={`h-3.5 w-3.5 transition-transform text-primaryWhite ${
                        isMenuOpen ? "rotate-90" : ""
                      }`}
                    />
                  </MenuItem>
                </MenuHandler>
                <MenuList className="bg-[#856ACF] space-y-3 w-auto">
                  <MenuItem className="border-none bg-transparent no-underline hover:!border-none ">
                    <Typography
                      as="a"
                      href={"/industrial-goods/casting/aluminium-die-casting"}
                      className="no-underline hover:!border-none !font-['Chillax'] !text-[#FFFFFF]"
                    >
                      Aluminium Die Casting
                    </Typography>
                  </MenuItem>
                  <MenuItem className="border-none bg-transparent no-underline hover:!border-none ">
                    <Typography
                      as="a"
                      href={"/industrial-goods/casting/sand-casting"}
                      className="no-underline hover:!border-none !font-['Chillax'] !text-[#FFFFFF]"
                    >
                      Sand Casting
                    </Typography>
                  </MenuItem>
                  <MenuItem className="border-none bg-transparent no-underline hover:!border-none ">
                    <Typography
                      as="a"
                      href={"/industrial-goods/casting/investment-casting"}
                      className="no-underline hover:!border-none !font-['Chillax'] !text-[#FFFFFF]"
                    >
                      Investment Casting
                    </Typography>
                  </MenuItem>
                </MenuList>
              </Menu>

              <Menu
                placement="right-start"
                allowHover
                offset={15}
                open={openIGForgingNestedMenu}
                handler={setopenIGForgingNestedMenu}
              >
                <MenuHandler className="flex items-center justify-between border-none bg-transparent">
                  <MenuItem className="flex text-left justify-start items-center gap-4 border-none bg-transparent no-underline hover:!border-none ">
                    <Typography
                      as="a"
                      href={"/industrial-goods/forging"}
                      className="w-4/5 no-underline hover:!border-none !font-['Chillax'] !text-[#FFFFFF]"
                    >
                      Forging
                    </Typography>
                    <ChevronUpIcon
                      strokeWidth={2.5}
                      className={`h-3.5 w-3.5 transition-transform text-primaryWhite ${
                        isMenuOpen ? "rotate-90" : ""
                      }`}
                    />
                  </MenuItem>
                </MenuHandler>
                <MenuList className="bg-[#856ACF] space-y-3 w-auto">
                  <MenuItem className="border-none bg-transparent no-underline hover:!border-none ">
                    <Typography
                      as="a"
                      href={"/industrial-goods/forging/open-die-forging"}
                      className="no-underline hover:!border-none !font-['Chillax'] !text-[#FFFFFF]"
                    >
                      Open Die Forging
                    </Typography>
                  </MenuItem>
                  <MenuItem className="border-none bg-transparent no-underline hover:!border-none ">
                    <Typography
                      as="a"
                      href={"/industrial-goods/forging/closed-die-forging"}
                      className="no-underline hover:!border-none !font-['Chillax'] !text-[#FFFFFF]"
                    >
                      Closed Die Forging
                    </Typography>
                  </MenuItem>
                </MenuList>
              </Menu>

              <Menu
                placement="right-start"
                allowHover
                offset={15}
                open={openIGMachiningNestedMenu}
                handler={setopenIGMachiningNestedMenu}
              >
                <MenuHandler className="flex items-center justify-between border-none bg-transparent">
                  <MenuItem className="flex text-left justify-start items-center gap-4 border-none bg-transparent no-underline hover:!border-none ">
                    <Typography
                      as="a"
                      href={"/industrial-goods/machining"}
                      className="w-4/5 no-underline hover:!border-none !font-['Chillax'] !text-[#FFFFFF]"
                    >
                      Machining
                    </Typography>
                    <ChevronUpIcon
                      strokeWidth={2.5}
                      className={`h-3.5 w-3.5 transition-transform text-primaryWhite ${
                        isMenuOpen ? "rotate-90" : ""
                      }`}
                    />
                  </MenuItem>
                </MenuHandler>
                <MenuList className="bg-[#856ACF] space-y-3 w-auto">
                  <MenuItem className="border-none bg-transparent no-underline hover:!border-none ">
                    <Typography
                      as="a"
                      href={"/industrial-goods/machining/cnc-machining"}
                      className="no-underline hover:!border-none !font-['Chillax'] !text-[#FFFFFF]"
                    >
                      CNC Machining
                    </Typography>
                  </MenuItem>
                  <MenuItem className="border-none bg-transparent no-underline hover:!border-none ">
                    <Typography
                      as="a"
                      href={
                        "/industrial-goods/machining/conventional-machining"
                      }
                      className="no-underline hover:!border-none !font-['Chillax'] !text-[#FFFFFF]"
                    >
                      Conventional Machining
                    </Typography>
                  </MenuItem>
                </MenuList>
              </Menu>

              <Menu
                placement="right-start"
                allowHover
                offset={15}
                open={openIGFabricationNestedMenu}
                handler={setopenIGFabricationNestedMenu}
              >
                <MenuHandler className="flex items-center justify-between border-none bg-transparent">
                  <MenuItem className="flex text-left justify-start items-center gap-4 border-none bg-transparent no-underline hover:!border-none ">
                    <Typography
                      as="a"
                      href={"/industrial-goods/fabrication"}
                      className="w-4/5 no-underline hover:!border-none !font-['Chillax'] !text-[#FFFFFF]"
                    >
                      Fabrication
                    </Typography>
                    <ChevronUpIcon
                      strokeWidth={2.5}
                      className={`h-3.5 w-3.5 transition-transform text-primaryWhite ${
                        isMenuOpen ? "rotate-90" : ""
                      }`}
                    />
                  </MenuItem>
                </MenuHandler>
                <MenuList className="bg-[#856ACF] space-y-3 w-auto">
                  <MenuItem className="border-none bg-transparent no-underline hover:!border-none ">
                    <Typography
                      as="a"
                      href={
                        "/industrial-goods/fabrication/equipment-fabrication"
                      }
                      className="no-underline hover:!border-none !font-['Chillax'] !text-[#FFFFFF]"
                    >
                      Equipment Fabrication
                    </Typography>
                  </MenuItem>
                  <MenuItem className="border-none bg-transparent no-underline hover:!border-none ">
                    <Typography
                      as="a"
                      href={
                        "/industrial-goods/fabrication/sheet-metal-fabrication"
                      }
                      className="no-underline hover:!border-none !font-['Chillax'] !text-[#FFFFFF]"
                    >
                      Sheet Metal Fabrication
                    </Typography>
                  </MenuItem>
                  <MenuItem className="border-none bg-transparent no-underline hover:!border-none ">
                    <Typography
                      as="a"
                      href={
                        "/industrial-goods/fabrication/structural-fabrication"
                      }
                      className="no-underline hover:!border-none !font-['Chillax'] !text-[#FFFFFF]"
                    >
                      Structural Fabrication
                    </Typography>
                  </MenuItem>
                </MenuList>
              </Menu>

              <MenuItem className=" border-none bg-transparent no-underline hover:!border-none ">
                <Typography
                  as="a"
                  href={"/industrial-goods/extrusion/aluminium-extrusion"}
                  className="w-4/5 no-underline hover:!border-none !font-['Chillax'] !text-[#FFFFFF]"
                >
                  Extrusion
                </Typography>
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu
            placement="right-start"
            allowHover
            offset={15}
            open={openFHTNestedMenu}
            handler={setopenFHTNestedMenu}
          >
            <MenuHandler className="flex items-center justify-between border-none bg-transparent menuitemtext">
              <MenuItem>
                <Typography
                  as="a"
                  href="/fashion-and-textiles"
                  className="!font-['Chillax Variable'] !text-[#3f3f3f] no-underline"
                >
                  Fashion & Home Textiles
                </Typography>
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="bg-[#856ACF] space-y-3">
              <MenuItem className=" border-none bg-transparent no-underline hover:!border-none ">
                <Typography
                  as="a"
                  href={"/fashion-and-textiles/uniform-and-work-wear"}
                  className="no-underline hover:!border-none !font-['Chillax'] !text-[#FFFFFF]"
                >
                  Uniforms
                </Typography>
              </MenuItem>
              <MenuItem className=" border-none bg-transparent no-underline hover:!border-none ">
                <Typography
                  as="a"
                  href={"/fashion-and-textiles/mens-apparel"}
                  className="no-underline hover:!border-none !font-['Chillax'] !text-[#FFFFFF]"
                >
                  Men's Apparel
                </Typography>
              </MenuItem>
              <MenuItem className=" border-none bg-transparent no-underline hover:!border-none ">
                <Typography
                  as="a"
                  href={"/fashion-and-textiles/womens-apparel"}
                  className="no-underline hover:!border-none !font-['Chillax'] !text-[#FFFFFF]"
                >
                  Women's Apparel
                </Typography>
              </MenuItem>
              <MenuItem className=" border-none bg-transparent no-underline hover:!border-none ">
                <Typography
                  as="a"
                  href={"/fashion-and-textiles/bags"}
                  className="no-underline hover:!border-none !font-['Chillax'] !text-[#FFFFFF]"
                >
                  Bags & Accessories
                </Typography>
              </MenuItem>
              <MenuItem className=" border-none bg-transparent no-underline hover:!border-none ">
                <Typography
                  as="a"
                  href={"/fashion-and-textiles/home-textiles"}
                  className="w-4/5 no-underline hover:!border-none !font-['Chillax'] !text-[#FFFFFF]"
                >
                  Home Textiles
                </Typography>
              </MenuItem>
              <MenuItem className=" border-none bg-transparent no-underline hover:!border-none ">
                <Typography
                  as="a"
                  href={"/fashion-and-textiles/footwear"}
                  className="w-4/5 no-underline hover:!border-none !font-['Chillax'] !text-[#FFFFFF]"
                >
                  Footwear
                </Typography>
              </MenuItem>
              <MenuItem className=" border-none bg-transparent no-underline hover:!border-none ">
                <Typography
                  as="a"
                  href={"/fashion-and-textiles/leather"}
                  className="no-underline hover:!border-none !font-['Chillax'] !text-[#FFFFFF]"
                >
                  Leather
                </Typography>
              </MenuItem>
              <MenuItem className=" border-none bg-transparent no-underline hover:!border-none ">
                <Typography
                  as="a"
                  href={"/fashion-and-textiles/sleep-and-innerwear"}
                  className="no-underline hover:!border-none !font-['Chillax'] !text-[#FFFFFF]"
                >
                  Sleep & Innerwear
                </Typography>
              </MenuItem>
            </MenuList>
          </Menu>
        </MenuList>
      </Menu>
      <div className="block pl-3 w-[90%] lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          <Menu
            placement="bottom"
            allowHover
            offset={6}
            open={openIGNestedMenu}
            handler={setopenIGNestedMenu}
          >
            <MenuHandler className="flex items-center justify-between border-none bg-transparent">
              <MenuItem>
                <Typography
                  as="a"
                  href="/industrial-goods"
                  className="!font-['Chillax Variable'] !text-[#3f3f3f] no-underline"
                >
                  Industrial Goods
                </Typography>
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="block lg:hidden bg-[#856ACF] space-y-3 right-2 w-[80%]">
              {renderIGItems}
            </MenuList>
          </Menu>
          <Menu
            placement="bottom"
            allowHover
            offset={6}
            open={openFHTNestedMenu}
            handler={setopenFHTNestedMenu}
          >
            <MenuHandler className="flex items-center justify-between border-none bg-transparent">
              <MenuItem>
                <Typography
                  as="a"
                  href="/industrial-goods"
                  className="!font-['Chillax Variable'] !text-[#3f3f3f] no-underline"
                >
                  Fashion & Home Textiles
                </Typography>
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="block lg:hidden bg-[#856ACF] space-y-3 right-2 w-[80%]">
              {renderFHTItems}
            </MenuList>
          </Menu>
        </Collapse>
      </div>
    </React.Fragment>
  );
}

const FlyoutLink = ({ children, isActive }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="group relative h-fit w-fit"
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
    </div>
  );
};

function NavList() {
  const pathname = usePathname();
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="/"
        className={` no-underline ${
          pathname === "/" ? "activemenu" : "menuitemtext"
        } `}
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <FlyoutLink children={"Home"} isActive={pathname === "/"} />
        </ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="/value-added-services"
        className={` no-underline ${
          pathname === "/value-added-services" ? "activemenu" : "menuitemtext"
        } `}
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <FlyoutLink
            children={"Value Added Services"}
            isActive={pathname === "/value-added-services"}
          />
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="/resources"
        className={` no-underline ${
          pathname === "/resources" ? "activemenu" : "menuitemtext"
        } `}
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <FlyoutLink
            children={"Resources"}
            isActive={pathname === "/resources"}
          />
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="/faq"
        className={` no-underline ${
          pathname === "/faq" ? "activemenu" : "menuitemtext"
        } `}
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <FlyoutLink children={"FAQ"} isActive={pathname === "/faq"} />
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="/contact-us"
        className={` no-underline ${
          pathname === "/contact-us" ? "activemenu" : "menuitemtext"
        } `}
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <FlyoutLink
            children={"Contact Us"}
            isActive={pathname === "/contact-us"}
          />
        </ListItem>
      </Typography>
    </List>
  );
}

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div css={HeaderStyles}>
      <header className="bg-primaryWhite fixed top-0 w-full z-[9999] borderbutton h-auto">
        <Navbar className="mx-auto max-w-screen-xl px-4 py-2">
          <div className="flex items-center justify-between text-blue-gray-900">
            <Image className="cursor-pointer" src={HeaderLogo} alt="Logo" />
            <div className="hidden lg:block">
              <NavList />
            </div>
            <div className="hidden gap-2 lg:flex relative -left-5">
              <DropdownButton
                className={`loginbtn shadow-none normal-case cursor-pointer`}
                title={`Log in`}
                itemlist={[
                  { title: `Buyer`, link: `` },
                  { title: `Seller`, link: `` },
                ]}
              />
              <DropdownButton
                className={`signinicon text-white px-5 py-2 normal-case cursor-pointer`}
                title={`Sign in`}
                itemlist={[
                  { title: `Buyer`, link: `` },
                  { title: `Seller`, link: `` },
                ]}
              />
            </div>
            <IconButton
              variant="text"
              className="lg:hidden relative !-left-7 border-none bg-transparent"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
              ) : (
                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
              )}
            </IconButton>
          </div>
          <Collapse open={openNav}>
            <NavList />
            <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
              <DropdownButton
                className={`loginbtn shadow-none normal-case cursor-pointer`}
                title={`Log in`}
                itemlist={[
                  { title: `Buyer`, link: `` },
                  { title: `Seller`, link: `` },
                ]}
              />
              <DropdownButton
                className={`signinicon text-white px-5 py-2 normal-case cursor-pointer`}
                title={`Sign in`}
                itemlist={[
                  { title: `Buyer`, link: `` },
                  { title: `Seller`, link: `` },
                ]}
              />
            </div>
          </Collapse>
        </Navbar>
      </header>
    </div>
  );
};

export default Header;

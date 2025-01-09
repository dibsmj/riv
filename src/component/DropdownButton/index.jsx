/** @jsxImportSource @emotion/react */
/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect, Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";

const DropdownButton = ({ className, title, itemlist, width, divwidth }) => {
  const [getShowMenu, setShowMenu] = useState(false);
  const menuEventRef = useRef(null);

  const openShowMenu = () => {
    setShowMenu(true);
  };

  const closeShowMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuEventRef.current &&
        !menuEventRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    if (getShowMenu) {
      window.addEventListener("click", handleClickOutside);
    }
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [getShowMenu]);

  return (
    <Menu as="div" className="relative" ref={menuEventRef}>
      <div
        onMouseEnter={openShowMenu}
        onMouseLeave={closeShowMenu}
        className={divwidth}
      >
        <Menu.Button className={`${className} cursor-pointer`}>
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          <div>{title}</div>
        </Menu.Button>

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
          <Menu.Items
            className={`absolute mt-2 left-0 ${width} origin-top-right rounded-md bg-primaryWhite space-y-2 shadow-2xl shadow-[#4a3587] px-4 py-2 z-[110]`}
          >
            {itemlist.map((item, index) => (
              <div
                key={`${item.title}-${width}`}
                className="font-semibold mentitemtext text-left"
              >
                <a
                  href={item.link}
                  className="!font-['Chillax Variable'] no-underline"
                >
                  {item.title}
                </a>
              </div>
            ))}
          </Menu.Items>
        </Transition>
      </div>
    </Menu>
  );
};

export default DropdownButton;

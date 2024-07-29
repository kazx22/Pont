"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../img/PONT-Logo-High-Res-1-1024x376.jpeg";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaCaretDown,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Navbar = () => {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const mainNavItem = [
    { name: "Home", href: "/" },
    { name: "Contact Us", href: "#" },
    { name: "Who We Are", href: "#" },
    { name: "What We Do", href: "/wwd", hasDropdown: true },
    { name: "Get Involved", href: "#" },
    { name: "Stories", href: "#" },
    { name: "Visits", href: "#" },
  ];

  const subNavItem = [
    { name: "Ambulance", href: "/wwd/ambulance" },
    { name: "Community Health", href: "/wwd/community" },
    { name: "Education", href: "/wwd/education" },
  ];

  const handleDropdownToggle = (e) => {
    e.preventDefault();
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="sticky top-0 z-50 bg-white shadow">
      <div className="min-h-6 text-white bg-summer-org px-40 py-1 font-roboto">
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <div className="flex gap-2 items-center">
              <FaPhone />
              <a href="tel:+441443402309">+44 1443 402309</a>
            </div>
            <div className="flex gap-2 items-center">
              <FaEnvelope />
              <a href="mailto:contact@pont-mbale.org.uk">
                contact@pont-mbale.org.uk
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <FaFacebook className="hover:scale-x-[-1] transform transition duration-300" />
            <BsTwitterX className="hover:scale-x-[-1] transform transition duration-300" />
            <FaInstagram className="hover:scale-x-[-1] transform transition duration-300" />
          </div>
        </div>
      </div>

      <div className="bg-white px-40 py-3 font-roboto">
        <div className="flex justify-between items-center">
          <div className="flex-col items-center gap-4">
            <Image
              src={logo}
              alt="Changing lives in Wales and Uganda"
              width={194}
              height={71}
              className="ml-10"
            />
            <h3 className="text-black font-bold mt-2">
              Changing lives in Wales and Uganda
            </h3>
          </div>
          <div className="flex gap-8 text-black font-bold relative">
            {mainNavItem.map((item) => (
              <div
                key={item.name}
                className="relative flex items-center"
                ref={item.hasDropdown ? dropdownRef : null}
              >
                {item.hasDropdown ? (
                  <>
                    <Link
                      href={item.href}
                      className={
                        pathname === item.href
                          ? "text-summer-org flex items-center gap-2"
                          : "hover:text-green-700 flex items-center gap-2"
                      }
                    >
                      {item.name}
                    </Link>
                    <button
                      onClick={handleDropdownToggle}
                      className="text-summer-org flex items-center gap-2 ml-2"
                    >
                      <FaCaretDown className="text-sm" />
                    </button>
                    {dropdownOpen && (
                      <div className="absolute left-0 mt-[150px] w-48 bg-white shadow-lg rounded-lg z-50">
                        {subNavItem.map((sItem) => (
                          <Link
                            key={sItem.name}
                            href={sItem.href}
                            className={
                              pathname === sItem.href
                                ? "block px-4 py-2 text-summer-org"
                                : "block px-4 py-2 hover:text-green-700"
                            }
                          >
                            {sItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={
                      pathname === item.href
                        ? "text-summer-org"
                        : "hover:text-green-700"
                    }
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

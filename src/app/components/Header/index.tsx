"use client";

import React, { useState } from "react";
import logo from "../../../../public/Group.svg";
import unselected_search from "../../../../public/Search-unselected.svg";
import SimpleButton from "../SharedUI/Buttons/SimpleButton";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import SideBar from "../SideBar";
import Bell from "../../../../public/Bell.svg";
import Avatar from "../../../../public/user-avatar.svg";

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false); // State for login/logout

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleLogin = () => {
    setIsLogin((prevState) => !prevState); // Toggle between login states
  };

  return (
    <>
      <nav className="bg-black text-white h-[79px] flex items-center justify-between lg:px-10 md:px-6 px-3">
        {/* Mobile View: Menu and Logo */}
        <div className="lg:hidden relative flex flex-1 gap-4 items-center">
          <button
            className="lg:hidden flex"
            onClick={toggleSidebar}
            aria-label="Toggle Menu"
          >
            <MenuIcon />
          </button>
          <Image
            className="pb-2 lg:pb-0"
            src={logo}
            width={100}
            height={100}
            alt="logo"
          />
          <li className="flex gap-[9px] text-[#BBBBBB]">
            <div className="relative">
              <input
                type="text"
                className="bg-black text-white border-2 border-none px-8 sm:px-6 py-2 sm:py-1 rounded-md focus:outline-none w-[180px] sm:w-[140px]"
                placeholder="Search"
              />
              <Image
                className="absolute left-3 md:left-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
                src={unselected_search}
                width={20}
                height={20}
                alt="Search-Logo"
              />
            </div>
          </li>
        </div>

        {/* Desktop Logo */}
        <Image
          className="hidden lg:flex"
          src={logo}
          width={100}
          height={100}
          alt="logo"
        />

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center lg:gap-5 md:gap-3 font-normal text-[#BBBBBB]">
          <li>Home</li>
          <li>About us</li>
          <li>How it works</li>
          <li>Why use Swoop</li>
          <li>Our Mission</li>
          <li className="flex gap-[9px] text-[#BBBBBB]">
            <div className="relative flex items-center justify-center">
              <input
                type="text"
                className="bg-black text-white border-2 border-none px-10 py-2 rounded-md focus:outline-none w-[240px]"
                placeholder="Free Search"
              />
              <Image
                className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                src={unselected_search}
                width={20}
                height={20}
                alt="Search-Logo"
              />
            </div>
          </li>
        </ul>

        {/* Action Buttons */}
        <div className="flex gap-4">
          {!isLogin ? (
            <>
              <SimpleButton
                onClick={toggleLogin} // Call toggleLogin to set isLogin true
                text="Log in"
                color="white"
                textColor="black"
              />
              <SimpleButton
                onClick={toggleLogin} // Call toggleLogin for Sign up as well
                text="Sign up"
                color="yellow"
                textColor="black"
              />
            </>
          ) : (
            <>
                <Image width={24} height={24} src={Bell} alt="Bell" />
                <Image className="cursor-pointer"  onClick={toggleLogin} width={40} height={30} src={Avatar} alt="Avatar" />
            </>
          )}
        </div>
      </nav>

      {/* Sidebar Component */}
      {isSidebarOpen && <SideBar closeSidebar={toggleSidebar} />}
    </>
  );
};

export default Header;

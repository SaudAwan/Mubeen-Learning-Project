"use client";

import React, { useState } from "react";
import logo from "@/../public/Group.svg"
import unselected_search from "@/../public/Search-unselected.svg"
import MenuIcon from "@mui/icons-material/Menu";
import SideBar from "@/components/SideBar"
import Bell from "@/../public/Bell.svg"
import Avatar from "@/../public/user-avatar.svg"
import Image  from "next/image";

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
          <Image className="pb-2 lg:pb-0" src={logo} width={100} height={100} alt="logo" />
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
        <Image className="hidden lg:flex" src={logo} width={100} height={100} alt="logo" />

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center lg:gap-7 md:gap-5 font-normal text-[#BBBBBB]">
          <li>Home</li>
          <li>Dashboard</li>
          <li>Market Place</li>
          <li>FBO Flights</li>
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
                  <Image src={Bell} alt={"Bell" } width={24 } height={29.25 } />
                  <Image src={Avatar } alt={"Avatar" } width={37 } height={29.25 } />
        </div>
      </nav>

      {/* Sidebar Component */}
      {isSidebarOpen && <SideBar closeSidebar={toggleSidebar} />}
    </>
  );
};

export default Header;

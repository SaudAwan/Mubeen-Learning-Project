import React from "react";
import Image from "next/image";
import profileImage from "../../../../public/user-avatar.svg"; // Replace with your image
import {
  Home,
  Dashboard,
  ShoppingCart,
  AirplanemodeActive,
  Login,
  PersonAdd,
} from "@mui/icons-material";

interface SideBarProps {
  closeSidebar: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ closeSidebar }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50">
      <div className="h-full w-[70%] sm:w-[50%] bg-black text-white relative flex flex-col shadow-lg">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white text-2xl"
          onClick={closeSidebar}
        >
          &times;
        </button>

        {/* User Profile Section */}
        <div className="flex items-center gap-4 p-6">
          <Image
            src={profileImage}
            alt="Profile"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <h3 className="text-lg font-semibold">Oliver Blake</h3>
            <p className="text-gray-400 text-sm">United States</p>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="mt-8 space-y-6 px-6 flex-grow">
          <li className="flex items-center gap-4 cursor-pointer hover:text-gray-400">
            <Home /> Home
          </li>
          <li className="flex items-center gap-4 cursor-pointer hover:text-gray-400">
            <Dashboard /> Dashboard
          </li>
          <li className="flex items-center gap-4 cursor-pointer hover:text-gray-400">
            <ShoppingCart /> Market Place
          </li>
          <li className="flex items-center gap-4 cursor-pointer hover:text-gray-400">
            <AirplanemodeActive /> FBO Flights
          </li>
        </ul>

        {/* Login and Sign Up at the Bottom */}
        <ul className="mt-auto px-6 pb-6 space-y-6">
          <li className="flex items-center gap-4 cursor-pointer hover:text-gray-400">
            <Login /> Log in
          </li>
          <li className="flex items-center gap-4 cursor-pointer hover:text-gray-400">
            <PersonAdd /> Sign up
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

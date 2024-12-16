"use client"

import React from "react";
import i from "@/../public/i.svg";
import InputField from "../SharedUI/InputField";
import MultipleInputFields from "../SharedUI/MultipleInputFields";
import Image from "next/image";

interface SearchBarProps {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ toggle, setToggle }) => {
  return (
    <div className="bg-white w-[150%] p-[24px] rounded-[7px] lg:mt-[12px] md:mt-[7px]">
      <div className="flex justify-between mt-[10px]">
        <div className="inline-flex gap-2">
          <p className="font-medium text-base">Find a Flight Now!</p>
          <Image src={i} alt="Information" />
        </div>
        <div className="inline-flex gap-4 items-center">
          <p>Advanced Search</p>
          <div
            onClick={() => setToggle(!toggle)}
            className={`relative w-[40px] h-[20px] rounded-full transition-colors cursor-pointer ${
              toggle ? "bg-[#FED130] ring-white" : "bg-black ring-white"
            }`}
          >
            <div
              className={`absolute top-0 left-0 h-5 w-5 rounded-full bg-white border transition-transform ${
                toggle ? "translate-x-[20px]" : "translate-x-0"
              }`}
            ></div>
          </div>
        </div>
      </div>
      {/* Conditional Rendering of Input Fields */}
      {toggle ? <MultipleInputFields /> : <InputField />}
    </div>
  );
};

export default SearchBar;

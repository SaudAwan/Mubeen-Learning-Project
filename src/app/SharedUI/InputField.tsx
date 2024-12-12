import React from "react";
import Search from "../../../public/Search-selected.svg"
import Image from "next/image";

const InputField: React.FC = () => {
  return (
    <div className="mt-[15px] flex">
      <input
        className="w-full py-[12px] px-[16px] rounded-[2px] border-black border-[1px]"
        type="text"
        placeholder="Departing From"
      />
      <button className="bg-black w-[52px] flex items-center justify-center">
        <Image width={24} height={24} src={Search} alt="Search Icon" />
      </button>
    </div>
  );
};

export default InputField;

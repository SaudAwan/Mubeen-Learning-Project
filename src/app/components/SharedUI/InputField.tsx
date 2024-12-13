import React from "react";
import Search from "../../../../public/Search-selected.svg";
import Image from "next/image";

const InputField: React.FC = () => {
  return (
    <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-0">
      <input
        className="w-full py-2 sm:py-3 md:py-4 px-3 md:px-4 rounded-md border border-black text-sm sm:text-base md:text-lg"
        type="text"
        placeholder="Departing From"
      />
      <button className="bg-black w-full sm:w-[52px] h-[44px] sm:h-auto flex items-center justify-center rounded-md sm:rounded-l-none text-white">
        <Image
          width={24}
          height={24}
          src={Search}
          alt="Search Icon"
        />
      </button>
    </div>
  );
};

export default InputField;

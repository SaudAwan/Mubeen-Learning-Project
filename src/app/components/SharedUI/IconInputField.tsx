import React from "react";
import Image from "next/image";

interface IconInputfieldProps {
  icon: string;
  text: string;
}

const IconInputfield: React.FC<IconInputfieldProps> = ({ icon, text }) => {
  return (
    <div className="relative w-[90%]">
      <input
        className="w-full py-[12px] px-[40px] rounded-[7px] border-[#BBBBBB] border-[1px] outline-none"
        type="text"
        placeholder={text}
      />
      <Image
        src={icon}
        alt={`${text} icon`} // Alt text should be more descriptive, using 'text' instead of 'icon'
        className="absolute top-1/2 left-[12px] transform -translate-y-1/2 w-[20px] h-[20px]"
      />
    </div>
  );
};

export default IconInputfield;

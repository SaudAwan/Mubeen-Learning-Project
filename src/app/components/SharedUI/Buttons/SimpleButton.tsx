import React from "react";

// Define an interface for the component props
interface SimpleButtonProps {
  color: "yellow" | "white" | "black"; // Limit options to specific color values
  text: string;
  textColor: "white" | "black" | "gray"; // Limit options to specific text color values
}

const SimpleButton: React.FC<SimpleButtonProps> = ({ color, text, textColor }) => {
  const bgColor = {
    yellow: "bg-[#FED130]",
    white: "bg-white",
    black: "bg-black",
  }[color];

  const textClass = {
    white: "text-white",
    black: "text-black",
    gray: "text-[#BBBBBB]",
  }[textColor];

  return (
    <button
      className={`${bgColor} ${textClass} py-[14px] px-[24px] rounded-[6px] hidden md:flex`}
    >
      {text}
    </button>
  );
};

export default SimpleButton;

import React from "react";

// Define an interface for the component props
interface SimpleButtonProps {
  color: "yellow" | "white" | "black"; // Limit options to specific color values
  text: string;
  textColor: "white" | "black" | "gray"; // Limit options to specific text color values
  onClick: VoidFunction;
}

const SimpleButton: React.FC<SimpleButtonProps> = ({
  color,
  text,
  textColor,
  onClick,
}) => {
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
      onClick={onClick}
      className={`${bgColor} ${textClass} md:py-[14px] py-[10px] md:px-[24px] px-[20px] md:text-base text-sm md:rounded-[6px] flex`}
    >
      {text}
    </button>
  );
};

export default SimpleButton;

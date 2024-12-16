import React from "react";

interface Heading2Props {
  text: string;
}

const Heading2: React.FC<Heading2Props> = ({ text }) => {
  return (
    <h2 className="text-white font-light text-[14px] sm:text-[16px] md:text-base lg:text-[20px] text-center sm:leading-snug md:leading-normal lg:leading-relaxed">
      {text}
    </h2>
  );
};

export default Heading2;

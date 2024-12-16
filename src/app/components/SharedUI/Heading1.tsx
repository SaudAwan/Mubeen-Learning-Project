import React from "react";

interface Heading1Props {
  text: string;
}

const Heading1: React.FC<Heading1Props> = ({ text }) => {
  return (
    <h1 className="text-white font-bold text-[24px] sm:text-[14px] md:text-2xl lg:text-[40px] leading-snug sm:leading-normal md:leading-relaxed text-center">
      {text}
    </h1>
  );
};

export default Heading1;

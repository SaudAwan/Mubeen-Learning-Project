import React from "react";

interface Heading1Props {
  text: string;
}

const Heading1: React.FC<Heading1Props> = ({ text }) => {
  return <h1 className="text-white font-bold lg:text-[40px] md:text-[30px]">{text}</h1>;
};

export default Heading1;

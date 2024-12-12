import React from "react";

interface Heading2Props {
  text: string;
}

const Heading2: React.FC<Heading2Props> = ({ text }) => {
  return <h2 className="text-white font-light">{text}</h2>;
};

export default Heading2;

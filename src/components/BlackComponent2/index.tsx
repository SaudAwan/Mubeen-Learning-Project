"use client"

import Heading1 from "../SharedUI/Heading1";
import Heading2 from "../SharedUI/Heading2";

type Props = {};

const BlackComponent2 = (props: Props) => {
  return (
    <div className="bg-black flex items-center justify-center flex-col text-white lg:px-[18%] sm:px-[10%] px-4 text-center h-full py-5 gap-y-2">
      <Heading1 text={"Our Mission"} additionalClass="lg:text-4xl md:text-3xl sm:text-2xl text-xl" />
      <Heading2 
        text={"Increase the number of people who can afford to fly privately from 1% to at least 17% of the population."} 
        additionalClass="lg:text-base md:text-sm sm:text-xs text-xs mt-4"
      />
      <div className="lg:w-[80%] sm:w-[60%]">
        <Heading2 
          text={"Decrease the number of Private planes flying that are emitting 10 times the pollutants into our atmosphere than commercial flights, by filling every seat on every private plane."} 
          additionalClass="lg:text-base md:text-sm sm:text-xs text-xs mt-4"
        />
      </div>
      <Heading2 
        text={"Saving the environment one seat at a time."} 
        additionalClass="lg:text-base md:text-sm sm:text-xs text-xs mt-4"
      />
    </div>
  );
};

export default BlackComponent2;

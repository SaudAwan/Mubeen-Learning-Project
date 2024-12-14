import React from "react";
import Search from "../../../../public/Search-white.svg"
import Plane from "../../../../public/Plane.svg"
import Departure from "../../../../public/DepartureDate.svg"
import Return from "../../../../public/ReturnDate.svg"
import Passenger from "../../../../public/Passenger.svg"
import Class from "../../../../public/Class.svg"
import IconInputfield from "./IconInputField"
import Image from "next/image";

interface MultipleInputFieldsProps {
  // Define any props if necessary
}

const MultipleInputFields: React.FC<MultipleInputFieldsProps> = () => {
  return (
    <>
      <div className="lg:mt-[15px] md:mt-[5px] grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-y-3">
        <IconInputfield text={"From"} icon={Plane} />
        <IconInputfield text={"To"} icon={Plane} />
        <IconInputfield text={"Departure Date"} icon={Departure} />
        <IconInputfield text={"Return Date"} icon={Return} />
        <IconInputfield text={"Passenger"} icon={Passenger} />
        <IconInputfield text={"Class"} icon={Class} />
      </div>
      <div className="flex items-center mt-4 gap-2">
        <input
          className="w-[20px] h-[20px] rounded-[4px] border-[1px] border-[#DEE2E6] cursor-pointer"
          type="checkbox"
        />
        <p className="text-base font-light">
          Check box if interested in plane picking you up at your nearest
          airport for an extra fee
        </p>
      </div>
      <button className="bg-black w-auto flex items-center justify-center mt-5 px-5 py-3 rounded-[12px] text-white text-base gap-2">
        <Image width={16} height={16} src={Search} alt="Search Icon" />
        <span>Search</span>
      </button>
    </>
  );
};

export default MultipleInputFields;

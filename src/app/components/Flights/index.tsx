"use client";

import Card from "../Card";
import Plane1 from "../../../../public/Plane 1.svg";
import DepartureDate from "../../../../public/DepartureDateBlack.svg";
import Chair from "../../../../public/ChairBlack.svg";
import PlaneBlack from "../../../../public/PlaneBlack.svg";
import Map from "../../../../public/Map.svg";
import Map2 from "../../../../public/MapMobile.svg";
import Image from "next/image";

type Props = {};

const Flights = (props: Props) => {
  const flightDetails = [
    {
      iconSrc: DepartureDate,
      label: "Departure Date",
      value: "Jan/25/2024",
    },
    {
      iconSrc: Chair,
      label: "Seats Available",
      value: "03",
    },
    {
      iconSrc: PlaneBlack,
      label: "Aircraft",
      value: "Light Jet",
    },
    {
      iconSrc: Chair,
      label: "Seat Price",
      value: "$3000",
    },
  ];

  return (
    <div className="flex flex-col px-[10%]">
      {/* Cards Section */}
      <div className="flex flex-wrap justify-center items-center gap-6 py-20 md:gap-4 md:py-12">
        <Card
          imageSrc={Plane1}
          title={"Los Angeles to San Francisco"}
          details={flightDetails}
        />
        <Card
          imageSrc={Plane1}
          title={"Los Angeles to San Francisco"}
          details={flightDetails}
        />
        <Card
          imageSrc={Plane1}
          title={"Los Angeles to San Francisco"}
          details={flightDetails}
        />
      </div>
      {/* Map Section */}
      <div className="md:flex justify-center md:px-4 hidden">
        <Image
          src={Map}
          width={1240}
          height={340}
          alt="Map"
          className="w-full md:max-w-[90%] md:h-auto"
        />
      </div>
      <div className="sm:flex justify-center md:px-4 px-0 md:hidden">
        <Image
          src={Map2}
          width={1240}
          height={340}
          alt="Map"
          className="w-full md:max-w-[90%] md:h-auto"
        />
      </div>
    </div>
  );
};

export default Flights;

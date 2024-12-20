"use client";

import Avatar from "@/../public/user-avatar.svg";
import Image from "next/image";
import DepartureDate from "@/../public/DepratureDateBlack2.svg";
import DepartureTime from "@/../public/Time.svg";
import DepartureAirport from "@/../public/DepartureAirport.svg";
import DepartureFBO from "@/../public/Departure FBO.svg";
import DestinationAirport from "@/../public/Destination Airport.svg";
import DestinationFBO from "@/../public/Departure FBO.svg";
import AircraftType from "@/../public/Aircraft Type.svg";
import AircraftModel from "@/../public/Aircraft Model.svg";
import AircraftYear from "@/../public/Aircraft Year.svg";
import SeatCapacity from "@/../public/ChairBlack.svg";
import AvailableSeat from "@/../public/Available Seats.svg";
import FlightSection from "@/../public/Flight Section.svg";
import Passenger from "@/../public/PassengerGRAY.svg";
import AdditionalServices from "@/../public/Additional Services.svg";
import Confirmation from "@/../public/Confirmation.svg";
import IconInputfield from "@/components/SharedUI/IconInputField";
import PassengerImg from "@/../public/PassengerBlack.svg";
import SimpleButton from "@/components/SharedUI/Buttons/SimpleButton";

const BookingCard = () => {
  const doNothing = () => {};
  return (
    <div className="bg-white flex flex-col p-[2%] gap-5 rounded-md">
      <div>
        <h1 className="font-semibold text-xl">
          Islamabad, Pakistan TO Karachi, Pakistan
        </h1>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center justify-center">
          <Image src={Avatar} width={0} height={0} alt="Profile-Pic" />
          <div className="flex flex-col">
            <p className="font-semibold">Guy Hawkins</p>
            <p className="text-xs">United States</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-xs">Seat Price</p>
          <p className="font-semibold text-xl">$3000</p>
        </div>
      </div>
      <div className="flex gap-x-[5%] gap-y-5 flex-wrap items-center">
        <div className="flex flex-col  items-start">
          <div className="flex gap-2">
            <Image
              src={DepartureDate}
              width={0}
              height={0}
              alt="Departure Date"
            />
            <p className="font-semibold">Departure Date</p>
          </div>
          <p className="text-xs">Jan/25/2024</p>
        </div>
        <div className="flex flex-col  items-start">
          <div className="flex gap-2">
            <Image
              src={DepartureTime}
              width={0}
              height={0}
              alt="Departure Time"
            />
            <p className="font-semibold">Departure Time</p>
          </div>
          <p className="text-xs">12:25 AM</p>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex gap-2 items-center justify-center">
            <Image
              src={DepartureAirport}
              width={0}
              height={0}
              alt="DepartureAirport"
            />
            <p className="font-semibold">Departure Airport</p>
          </div>
          <p className="text-xs">Islamabad International Airforce</p>
        </div>
        <div className="flex flex-col  items-start">
          <div className="flex gap-2">
            <Image
              src={DepartureFBO}
              width={0}
              height={0}
              alt="Departure Date"
            />
            <p className="font-semibold">Departure FBO</p>
          </div>
          <p className="text-xs">SHSGJAHS</p>
        </div>
        <div className="flex flex-col  items-start">
          <div className="flex gap-2">
            <Image
              src={DestinationAirport}
              width={0}
              height={0}
              alt="Departure Airport"
            />
            <p className="font-semibold">Destination Airport</p>
          </div>
          <p className="text-xs">Karachi International Airport</p>
        </div>
        <div className="flex flex-col  items-start">
          <div className="flex gap-2">
            <Image
              src={DestinationFBO}
              width={0}
              height={0}
              alt="DepartureFBO"
            />
            <p className="font-semibold">Destination FBO</p>
          </div>
          <p className="text-xs">SAHGAJHSGJ</p>
        </div>
        <div className="flex flex-col  items-start">
          <div className="flex gap-2">
            <Image
              src={AircraftType}
              width={0}
              height={0}
              alt="Aircraft Type"
            />
            <p className="font-semibold">Aicraft Type</p>
          </div>
          <p className="text-xs">Very Light</p>
        </div>
        <div className="flex flex-col  items-start">
          <div className="flex gap-2">
            <Image
              src={AircraftModel}
              width={0}
              height={0}
              alt="Aircraft Model"
            />
            <p className="font-semibold">Aircraft Model</p>
          </div>
          <p className="text-xs">Cessna</p>
        </div>
        <div className="flex flex-col  items-start">
          <div className="flex gap-2">
            <Image src={AircraftYear} width={0} height={0} alt="AirCraftYear" />
            <p className="font-semibold">Aircraft Year</p>
          </div>
          <p className="text-xs">2021</p>
        </div>
        <div className="flex flex-col  items-start">
          <div className="flex gap-2">
            <Image
              src={SeatCapacity}
              width={0}
              height={0}
              alt="Seat Capacity"
            />
            <p className="font-semibold">Seat Capacity</p>
          </div>
          <p className="text-xs">20</p>
        </div>
        <div className="flex flex-col  items-start">
          <div className="flex gap-2">
            <Image
              src={AvailableSeat}
              width={0}
              height={0}
              alt="Available Seats"
            />
            <p className="font-semibold">Available Seats</p>
          </div>
          <p className="text-xs">$2000</p>
        </div>
      </div>
      <div className="flex items-center px-[25%]">
        <div className="flex flex-col items-center w-full gap-y-2">
          <Image src={FlightSection} height={0} width={0} alt="FlightSection" />
          <h1 className="text-xs font-normal text-nowrap">Flight Section</h1>
        </div>
        <div className="border-t-2 w-full items-center justify-center border-[#FED130]" />
        <div className="flex flex-col items-center w-full gap-y-2">
          <Image src={Passenger} height={0} width={0} alt="Passenger" />
          <h1 className="text-xs text-nowrap">Passenger</h1>
        </div>
        <div className="border-t-2 w-full items-center justify-center border-[#DEE2E6]" />
        <div className="flex flex-col items-center w-full gap-y-2 justify-center">
          <Image
            src={AdditionalServices}
            height={0}
            width={0}
            alt="Additional Services"
          />
          <h1 className="text-xs text-nowrap">Additional Services</h1>
        </div>
        <div className="border-t-2 w-full items-center justify-center border-[#DEE2E6]" />
        <div className="flex flex-col items-center gap-y-2 w-full justify-center">
          <Image src={Confirmation} width={0} height={0} alt="Confirmation" />
          <h1 className="text-xs text-nowrap">Confirmation</h1>
        </div>
      </div>

      <div className="border-b-2 w-full items-center justify-center border-black" />

      <div className="flex flex-col gap-3">
        <h1 className="font-semibold text-xl">Flight Details</h1>
        <div className="flex gap-5">
          <IconInputfield
            text={"Islamabad, Pakistan"}
            icon={DepartureAirport}
          />
          <IconInputfield
            text={"Islamabad, Pakistan"}
            icon={DepartureAirport}
          />
          <IconInputfield text={"3"} icon={PassengerImg} />
        </div>
      </div>
      <div className="flex items-center gap-3 w-full">
        <div className="flex flex-col w-full">
          <h1 className="font-semibold">Passenger 1</h1>
          <input
            type="number"
            className="p-2 w-full border-[1px] border-[#DEE2E6] rounded-md outline-none"
            placeholder="Adult-18"
          />
        </div>
        <div className="flex flex-col w-full">
          <h1 className="font-semibold">Passenger 3</h1>
          <input
            type="number"
            className="p-2 w-full border-[1px] border-[#DEE2E6] rounded-md outline-none"
            placeholder="Adult-25"
          />
        </div>
        <div className="flex flex-col w-full">
          <h1 className="font-semibold">Passenger 3</h1>
          <input
            type="number"
            className="p-2 w-full border-[1px] border-[#DEE2E6] rounded-md outline-none"
            placeholder="Child-10"
          />
        </div>
      </div>
      <div className="flex w-full justify-end">
        <SimpleButton
          color={"yellow"}
          text={"Next"}
          textColor={"black"}
          onClick={doNothing}
        />
      </div>
    </div>
  );
};

export default BookingCard;

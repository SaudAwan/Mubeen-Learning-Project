import React from "react";
import Image from "next/image";
import DeetImage from "@/../public/Rectangle 306.svg";
import DepartureDate from "@/../public/DepartureDateBlack.svg";
import Chair from "@/../public/ChairBlack.svg";
import Circle from "@/../public/Vector.svg";
import Plane from "@/../public/PlaneBlack.svg";
import Tick from "@/../public/Tick.svg";
import SimpleButton from "@/components/SharedUI/Buttons/SimpleButton";
import DeetImage2 from "@/../public/DeetImage.svg";

const FlightDetailCard = () => {
  const Function = () => {};
  return (
    <div className="flex md:flex-row flex-col items-center gap-x-4 md:p-5 p-3 border-[1px] border-[#DEE2E6] rounded-lg">
      <div className="md:flex flex-row items-center hidden">
        <Image
          src={DeetImage}
          width={0}
          height={0}
          alt="Rectangle"
          className="w-[250px]"
        />
      </div>
      <div className="flex md:flex-row flex-col w-full ">
        <div className="flex md:flex-col w-full gap-y-4">
          <div className="flex md:flex-row md:items-center md:gap-0 gap-4">
            <div className="sm:flex md:flex-row flex-col items-center md:hidden">
              <Image
                src={DeetImage2}
                width={0}
                height={0}
                alt="Rectangle"
                className="w-[200px]"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="font-semibold md:text-xl text-xs text-center">
                Islamabad, Pakistan TO Karachi, Pakistan
              </h1>
              <div className="lg:w-[60%] md:w-[90%] md:px-[2%] lg:px-0 items-center justify-between grid grid-cols-2 gap-x-4 gap-y-1 md:mt-0 md:hidden">
                <div className="flex flex-col  items-center justify-center">
                  <div className="flex gap-2">
                    <Image
                      src={DepartureDate}
                      width={13.33}
                      height={13.33}
                      alt="Calender"
                    />
                    <p className="font-semibold lg:text-base md:text-sm text-xs">
                      Departure Date
                    </p>
                  </div>
                  <p className="font-normal text-xs text-center">Jan 25/2024</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex gap-2">
                    <Image
                      src={Chair}
                      width={13.33}
                      height={13.33}
                      alt="Seat"
                    />
                    <p className="font-semibold lg:text-base md:text-sm text-xs">
                      Seats Available
                    </p>
                  </div>
                  <p className="font-normal text-xs text-center">08 Seats</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex gap-2">
                    <Image
                      src={Plane}
                      width={13.33}
                      height={13.33}
                      alt="Plane"
                    />
                    <p className="font-semibold lg:text-base md:text-sm text-xs">
                      Aircraft Type
                    </p>
                  </div>
                  <p className="font-normal text-xs text-center">
                    Very Light Jet
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex gap-2">
                    <Image
                      src={Circle}
                      width={13.33}
                      height={13.33}
                      alt="Circle"
                    />
                    <p className="font-semibold lg:text-base md:text-sm text-xs">
                      Number of Stops
                    </p>
                  </div>
                  <p className="font-normal text-xs text-center">
                    0 stops - LHE to MUX
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col justify-between">
            <div className="md:flex lg:w-[60%] md:w-[90%] md:px-[2%] lg:px-0 items-center justify-between grid-cols-2 gap-1 hidden">
              <div className="flex flex-col  items-center justify-center">
                <div className="flex gap-2">
                  <Image
                    src={DepartureDate}
                    width={13.33}
                    height={13.33}
                    alt="Calender"
                  />
                  <p className="font-semibold lg:text-base md:text-sm text-xs">
                    Departure Date
                  </p>
                </div>
                <p className="font-normal text-xs">Jan 25/2024</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex gap-2">
                  <Image src={Chair} width={13.33} height={13.33} alt="Seat" />
                  <p className="font-semibold lg:text-base md:text-sm text-xs">
                    Seats Available
                  </p>
                </div>
                <p className="font-normal text-xs">08 Seats</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex gap-2">
                  <Image src={Plane} width={13.33} height={13.33} alt="Plane" />
                  <p className="font-semibold lg:text-base md:text-sm text-xs">
                    Aircraft Type
                  </p>
                </div>
                <p className="font-normal text-xs">Very Light Jet</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex gap-2">
                  <Image
                    src={Circle}
                    width={13.33}
                    height={13.33}
                    alt="Circle"
                  />
                  <p className="font-semibold lg:text-base md:text-sm text-xs">
                    Number of Stops
                  </p>
                </div>
                <p className="font-normal text-xs">0 stops - LHE to MUX</p>
              </div>
            </div>
            <div className="md:flex flex-col justify-center items-center hidden">
              <p className="font-normal text-sm">Seat Price</p>
              <p className="font-medium text-xl">$1800</p>
            </div>
          </div>

          <div className="md:flex justify-between hidden">
            <div className="flex flex-row gap-2 items-center">
              <Image src={Tick} width={16} height={16} alt="Tick" />
              <p className="font-light text-base">
                picking you up at your nearest airport for an extra fee
              </p>
            </div>
            <div className="md:flex hidden">
              <SimpleButton
                textColor="black"
                color="yellow"
                text="View Details"
                onClick={Function}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-[#DEE2E6] mt-2 w-full md:hidden">
        <div className="flex mt-2 flex-col gap-y-3 justify-between md:hidden">
          <div className="flex flex-row gap-2 items-center">
            <Image src={Tick} width={16} height={16} alt="Tick" />
            <p className="font-light text-xs">
              picking you up at your nearest airport for an extra fee
            </p>
          </div>
          <div className="flex justify-between md:hidden">
            <SimpleButton
              textColor="black"
              color="yellow"
              text="View Details"
              onClick={Function}
            />
            <div className="md:flex flex-col justify-center items-center">
              <p className="md:font-normal md:text-sm text-xs">Seat Price</p>
              <p className="font-medium md:text-xl text-lg">$1800</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightDetailCard;

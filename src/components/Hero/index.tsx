"use client";

import React from "react";
import Image from "next/image";
import Image1 from "@/../public/image 10.svg";
import Image2 from "@/../public/image 11.svg";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="grid grid-cols-1">
      {/* First Section */}
      <div className="flex items-center justify-center flex-col sm:flex-row md:p-[0] py-[10%]">
        <div className="flex flex-col lg:gap-y-10 md:gap-y-4 gap-y-4 items-center justify-center lg:w-[50%] md:w-[45%] lg:px-[10%] md:px-[3%] px-[5%] md:py-[0] pb-[8%]">
          <p className="font-normal lg:text-base md:text-sm text-sm">
            The Swoop members, non-members, and flight initiators are all
            screened and preferences are defined upfront so that the jet
            charterer and the seat purchasers are compatible. We don't want a
            jet charterer who likes to sleep on the plane matched up with
            someone who likes to crank the music and drink alcohol.
          </p>
          <p className="font-normal lg:text-base md:text-sm text-sm">
            The swoop member or non-member logs on to Swoop and finds a flight
            that they would like to take. Click on “book now” and you are on
            your way.
          </p>
          <p className="font-normal lg:text-base md:text-sm text-sm">
            Drive to the departure private airport 30 minutes before departure,
            valet your car, walk to your jet and grab a seat. No crowds, no
            security lines. Just a non-invasive security screening to ensure
            your safety and other passengers.
          </p>
        </div>
        <div className="sm:w-[50%] flex justify-center">
          <Image
            src={Image1}
            width={0}
            height={0}
            alt="Interior"
            className="lg:w-[750px] lg:h-[574px] md:w-[600px] md:h-[400px] sm:w-[90%] sm:h-auto sm:pb-[20px] lg:pb-0"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="flex items-center justify-center flex-col-reverse sm:flex-row ">
        <div className="sm:w-[50%] flex justify-center">
          <Image
            src={Image2}
            width={0}
            height={0}
            alt="Business Class"
            className="lg:w-[760px] lg:h-[700px] md:w-[560px] md:h-[450px] sm:w-[90%] sm:h-auto"
          />
        </div>
        <div className="flex flex-col items-start justify-center lg:w-[50%] md:w-[45%] lg:px-[10%] md:px-[3%] px-[5%] md:pb-0 pb-[8%] lg:gap-y-4 md:gap-y-2 gap-y-3">
          <h2 className="lg:text-2xl font-semibold md:text-base sm:text-xl ml-2">
            Why Use Swoop for your private jet travel?
          </h2>
          <p className="lg:text-base lg:font-normal md:text-xs text-sm">
            Most jets fly only at 25% passenger capacity. Most jet charterers
            like this concept because of the following:
          </p>

          <h2 className="lg:text-2xl font-semibold md:text-base md:font-semibold sm:text-xl ml-2">
            &#183; They feel guilty flying with empty seats
          </h2>
          <p className="lg:text-base lg:font-normal md:text-xs text-sm">
            After speaking with many jet charterers, they explained that they
            feel bad that they fly with empty seats but, they have to, until
            now.
          </p>

          <h2 className="lg:text-2xl font-semibold md:text-base md:font-semibold sm:text-xl ml-2">
            &#183; They can offset the cost of the jet charter
          </h2>
          <p className="lg:text-base lg:font-normal md:text-xs text-sm">
            No matter how much money you have, we all like to save money.
          </p>

          <h2 className="lg:text-2xl font-semibold md:text-base md:font-semibold sm:text-xl ml-2">
            &#183; Less of a carbon footprint by filling every seat
          </h2>
          <p className="lg:text-base lg:font-normal md:text-xs text-sm">
            41% of private flights are empty, 59% of private flights average
            only 4 passengers. Because of this, flying private is the least
            fuel-efficient means of transportation.
          </p>

          <h2 className="lg:text-2xl font-semibold md:text-base md:font-semibold sm:text-xl ml-2">
            &#183; Meeting new people
          </h2>
          <p className="lg:text-base lg:font-normal md:text-xs text-sm">
            41% of private flights are empty, 59% of private flights average
            only 4 passengers. Because of this, flying private is the least
            fuel-efficient means of transportation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

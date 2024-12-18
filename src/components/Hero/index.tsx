"use client";

import React from "react";
import Image from "next/image";
import Image1 from "@/../public/image 10.svg";
import Image2 from "@/../public/image 11.svg";
import Image3 from "@/../public/Image3.svg"

const Hero = () => {
  return (
    <div id="Hero" className="grid grid-cols-1">
      {/* First Section */}
      <div className="flex items-center justify-center flex-col sm:flex-row md:flex-row md:p-0 py-[10%]">
        <div className="flex flex-col gap-y-8 lg:w-[50%] md:w-[50%] lg:px-[2%] md:px-[2%] px-[5%] md:py-[1%] pb-[8%]">
          <p className="font-normal lg:text-base md:text-sm text-sm">
            The Swoop members, non-members, and flight initiators are all
            screened and preferences are defined upfront so that the jet
            charterer and the seat purchasers are compatible. We don&apos;t
            want a jet charterer who likes to sleep on the plane matched up with
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
        <div className="sm:w-[50%] md:w-[50%] h-full flex justify-center items-center">
          <div className="w-full h-full">
            <Image
              src={Image1}
              alt="Interior"
              
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex items-center justify-center flex-col-reverse sm:flex-row md:flex-row">
        <div className="sm:w-[50%] md:w-[50%] h-full flex justify-center items-center">
          <div className="w-full h-full">
            <Image
              src={Image2}
              alt="Business Class"
              objectFit="cover"
              className="w-full h-full lg:block md:hidden sm:hidden"
            />
             <Image
              src={Image3}
              alt="Business Class"
              objectFit="cover"
              className="w-full h-full md:block lg:hidden hidden"
            />
          </div>
        </div>
        <div className="flex flex-col lg:w-[50%] md:w-[50%] lg:px-[5%] md:px-[1%] px-[5%] md:pb-0 pb-[8%] gap-y-4">
          <h2 className="lg:text-2xl md:text-xl font-semibold sm:text-xl">
            Why Use Swoop for your private jet travel?
          </h2>
          <p className="lg:text-base md:text-sm text-sm">
            Most jets fly only at 25% passenger capacity. Most jet charterers
            like this concept because of the following:
          </p>

          <h2 className="lg:text-xl md:text-lg font-semibold sm:text-lg">
            &#183; They feel guilty flying with empty seats
          </h2>
          <p className="lg:text-base md:text-sm text-sm">
            After speaking with many jet charterers, they explained that they
            feel bad that they fly with empty seats but, they have to, until
            now.
          </p>

          <h2 className="lg:text-xl md:text-lg font-semibold sm:text-lg">
            &#183; They can offset the cost of the jet charter
          </h2>
          <p className="lg:text-base md:text-sm text-sm">
            No matter how much money you have, we all like to save money.
          </p>

          <h2 className="lg:text-xl md:text-lg font-semibold sm:text-lg">
            &#183; Less of a carbon footprint by filling every seat
          </h2>
          <p className="lg:text-base md:text-sm text-sm">
            41% of private flights are empty, 59% of private flights average
            only 4 passengers. Because of this, flying private is the least
            fuel-efficient means of transportation.
          </p>

          <h2 className="lg:text-xl md:text-lg font-semibold sm:text-lg">
            &#183; Meeting new people
          </h2>
          <p className="lg:text-base md:text-sm text-sm">
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

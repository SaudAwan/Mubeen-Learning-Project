import React from "react";

type Props = {};

const Leader = (props: Props) => {
  return (
    <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col gap-10 justify-center items-center my-[60px] px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center sm:items-start">
        <h1 className="lg:text-4xl lg:font-bold md:text-3xl md:font-bold sm:text-2xl text-xl font-bold text-center sm:text-left">
          THE LEADER IN
        </h1>
        <h1 className="lg:text-4xl lg:font-bold md:text-3xl md:font-bold sm:text-2xl text-xl font-bold text-center sm:text-left">
          PRIVATE AVIATION
        </h1>
        <h2 className="lg:text-base lg:font-light md:text-sm md:font-light sm:text-xs text-xs font-light text-center sm:text-left mt-2">
          FLY PRIVATE WITH CONFIDENCE
        </h2>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center items-center sm:items-start lg:w-[42%] md:w-[50%] w-full gap-y-6">
        <p className="lg:font-medium lg:text-base md:font-normal md:text-sm text-sm text-center sm:text-left">
          Swoop is an innovative Marketplace in the private jet travel industry.
          Swoop is a completely new and common-sense business model based on the
          wants & needs of private jet charter customers. Swoop allows customers
          to initiate a private jet travel trip with departure city, destination
          city, and date of travel.
        </p>

        <p className="lg:font-medium lg:text-base md:font-normal md:text-sm text-sm text-center sm:text-left">
          Swoops innovated engine connects customers who have signed up to be
          able to book seats on a private jet. If a customer finds an initiated
          flight that they would like to purchase seats for, they will simply
          tap on the seats they want to book on that jet and click confirm.
          That’s it. You have now been swooped.
        </p>

        <p className="lg:font-medium lg:text-base md:font-normal md:text-sm text-sm text-center sm:text-left">
          Swoop offers private jet travel to Americans in the top 17 percent of
          income earners. Currently, only 0.1% of Americans can afford to fly
          privately on a regular basis. Swoop is a Marketplace for people who
          want to fly on a private jet but, either.
        </p>

        <ul className="lg:font-medium lg:text-base md:font-normal md:text-sm text-sm text-center sm:text-left gap-y-1 ml-4">
          <li>&#x2022; Can’t afford the high cost of private jet travel</li>
          <li>&#x2022; Don’t have the time to find and book a private jet</li>
          <li>
            &#x2022; Are conscious of the carbon footprint effect from private
            jets
          </li>
          <li>&#x2022; Like to be social</li>
          <li>&#x2022; Like saving/making money</li>
        </ul>
      </div>
    </div>
  );
};

export default Leader;

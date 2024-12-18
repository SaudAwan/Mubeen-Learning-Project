import React, { useState } from "react";
import JetDetailsCard from "../JetDetailsCard";
import Image from "next/image";
import Map from "@/../public/Map.svg";
import Charterer from "../Charterer";
import Testimonials from "../Testimonials";
import PaginationRounded from "../SharedUi/PaginationRounded";
import MobileMap from "@/../public/MapMobile.svg";
import AboutInitiator from "@/components/Pages/User/HomePage/CharterDetails/AboutInitiator";

const JetDetails = () => {
  // State to track which section is active
  const [activeSection, setActiveSection] = useState<"jet" | "initiator">("jet");

  return (
    <div className="p-[6%] flex flex-col gap-y-10 bg-gray-100">
      {/* Section Toggle Headings */}
      <div className="flex gap-5 cursor-pointer">
        <h1
          className={`font-semibold text-xl ${
            activeSection === "jet" ? "text-black" : "text-[#BBBBBB]"
          }`}
          onClick={() => setActiveSection("jet")}
        >
          Jet Images
        </h1>
        <h1
          className={`font-semibold text-xl ${
            activeSection === "initiator" ? "text-black" : "text-[#BBBBBB]"
          }`}
          onClick={() => setActiveSection("initiator")}
        >
          About Initiator
        </h1>
      </div>

      {/* Conditionally Render Content */}
      {activeSection === "jet" ? <JetDetailsCard /> : <AboutInitiator />}

      {/* Map Section */}
      <div>
        <Image
          className="w-full md:block hidden"
          src={Map}
          width={0}
          height={0}
          alt="Map"
        />
        <Image
          className="w-full block md:hidden"
          src={MobileMap}
          width={0}
          height={0}
          alt="Map"
        />
      </div>

      <div>
        <Charterer />
      </div>
      <Testimonials />
      <div className="flex justify-end">
        <PaginationRounded />
      </div>
    </div>
  );
};

export default JetDetails;

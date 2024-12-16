"use client";

import React from "react";
import FlightDetails from "./components/FlightsDetails";
import Header from "./components/Header";
import FindFlight from "../components/FindFlight";
import SkyBound from "./components/SkyBound";
import Footer from "../components/Footer";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Header />
      <FindFlight />
      <FlightDetails />
      <SkyBound />
      <Footer />
    </div>
  );
};

export default page;
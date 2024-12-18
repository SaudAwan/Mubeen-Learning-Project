"use client";

import React from "react";
import FlightDetails from "@/components/Pages/User/HomePage/SearchResults/FlightsDetails";
import Header from "@/components/Header";
import FindFlight from "@/components/FindFlight";
import SkyBound from "@/components/Pages/User/HomePage/SearchResults/SkyBound";
import Footer from "@/components/Footer";

const page = () => {
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

"use client";
import FindFlight from "@/components/FindFlight";
import Leader from "@/components/Leader";
import BlackComponent from "@/components/BlackComponent";
import Hero from "@/components/Hero";
import BlackComponent2 from "@/components/BlackComponent2";
import FAA from "@/components/FAA";
import Footer from "@/components/Footer";
import Flights from "@/components/Flights";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <FindFlight />
      <Flights />
      <Leader />
      <BlackComponent />
      <Hero />
      <BlackComponent2 />
      <FAA />
      <Footer />
    </div>
  );
}

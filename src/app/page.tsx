"use client";
import FindFlight from "./components/FindFlight/index";
import Leader from "./components/Leader/index";
import BlackComponent from "./components/BlackComponent/index";
import Hero from "./components/Hero/index";
import BlackComponent2 from "./components/BlackComponent2/index";
import FAA from "./components/FAA/index";
import Footer from "./components/Footer/index";
import Flights from "./components/Flights/index";
import TabletHeader from "./components/TabletHeader/index";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <TabletHeader />
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

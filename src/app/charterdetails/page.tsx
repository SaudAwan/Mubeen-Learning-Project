import Header from "@/components/Header";
import FindFlight from "@/components/FindFlight";
import JetDetails from "@/components/Pages/User/HomePage/CharterDetails/JetDetails"
import SkyBound from "@/components/Pages/User/HomePage/SearchResults/SkyBound"
import Footer from "@/components/Footer";

const page = (props: Props) => {
  return (
    <div>
      <Header />
      <FindFlight />
      <JetDetails />
      <SkyBound />
      <Footer />
    </div>
  );
};

export default page;

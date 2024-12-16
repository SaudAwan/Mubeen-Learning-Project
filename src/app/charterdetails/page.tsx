import Header from "../searchresult/components/Header";
import FindFlight from "../components/FindFlight";
import JetDetails from "./components/JetDetails";
import SkyBound from "../searchresult/components/SkyBound";
import Footer from "../components/Footer";

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

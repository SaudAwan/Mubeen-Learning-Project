import JetDetailsCard from "../JetDetailsCard";
import Image from "next/image";
import Map from "@/../public/Map.svg";
import Charterer from "../Charterer";
import Testimonials from "../Testimonials";
import PaginationRounded from "../SharedUi/PaginationRounded";

const JetDetails = () => {
  return (
    <div className="p-[6%] flex flex-col gap-y-10 bg-gray-100">
      <div className="flex gap-5">
        <h1 className="font-semibold text-xl">Jet Images</h1>
        <h1 className="font-semibold text-xl text-[#BBBBBB]">
          About Initiator
        </h1>
      </div>
      <JetDetailsCard />
      <div>
        <Image className="w-full" src={Map} width={0} height={0} alt="Map" />
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

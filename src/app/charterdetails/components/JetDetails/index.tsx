import JetDetailsCard from "../JetDetailsCard";
import Image from "next/image";
import Map from "../../../../../public/Map.svg";
import Testimonials from "../Testimonials";

const JetDetails = (props: Props) => {
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
        <Testimonials />
      </div>
    </div>
  );
};

export default JetDetails;

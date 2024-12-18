import Image from "next/image";
import Interior from "@/../public/Interior.svg";

const JetDetailsCard = () => {
  return (
    <div className="flex flex-col p-8 border-none rounded-md bg-white shadow-2xl">
      <div className="flex flex-col gap-y-6">
        {/* Navigation Tabs */}
        <div className="flex">
          <ul className="flex gap-4 text-sm md:text-base">
            <li className="font-bold">Exterior</li>
            <li className="text-[#BBBBBB] cursor-pointer">Gallery</li>
            <li className="text-[#BBBBBB] cursor-pointer">Interior</li>
            <li className="text-[#BBBBBB] cursor-pointer">Cockpit</li>
            <li className="text-[#BBBBBB] cursor-pointer">Lavatory</li>
          </ul>
        </div>

        {/* Details Section */}
        <div className="flex flex-nowrap gap-6">
          <div className="flex flex-col">
            <h1 className="font-semibold text-sm md:text-base">Aircraft</h1>
            <p className="font-normal text-sm text-[#000000]">
              1989 Hawker 800A
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold text-sm md:text-base">Aircraft Type</h1>
            <p className="font-normal text-sm text-[#000000]">Light Jet</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold text-sm md:text-base">Capacity</h1>
            <p className="font-normal text-sm text-[#000000]">08</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold text-sm md:text-base">
              Max Takeoff Weight
            </h1>
            <p className="font-normal text-sm text-[#000000]">40kg</p>
          </div>
        </div>

        {/* Image Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array(12)
            .fill(0)
            .map((_, index) => (
              <Image
                key={index}
                src={Interior}
                width={282}
                height={160}
                alt="interior"
                className="rounded-lg"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default JetDetailsCard;

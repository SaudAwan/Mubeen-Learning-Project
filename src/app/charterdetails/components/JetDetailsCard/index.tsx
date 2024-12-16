import Image from "next/image";
import Interior from "../../../../../public/Interior.svg";

const JetDetailsCard = (props: Props) => {
  return (
    <div className="flex flex-col p-8 border-none rounded-md bg-white shadow-wxl">
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center">
          <ul className="flex gap-4 items-center">
            <li className="font-bold">Exterior</li>
            <li className="text-[#BBBBBB]">Gallery</li>
            <li className="text-[#BBBBBB]">Interior</li>
            <li className="text-[#BBBBBB]">Cockpit</li>
            <li className="text-[#BBBBBB]">Lavatory</li>
          </ul>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col">
            <h1 className="font-semibold">Aircraft</h1>
            <p className="font-normal text-sm text-[#000000]">
              1989 Hawker 800A
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold">Aircraft Type</h1>
            <p className="font-normal text-sm text-[#000000]">Light Jet</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold">Capacity</h1>
            <p className="font-normal text-sm text-[#000000]">08</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold">Make Takeoff Weight</h1>
            <p className="font-normal text-sm text-[#000000]">40kg</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6">
          <Image src={Interior} width={282} height={160} alt="interior" />
          <Image src={Interior} width={282} height={160} alt="interior" />
          <Image src={Interior} width={282} height={160} alt="interior" />
          <Image src={Interior} width={282} height={160} alt="interior" />
          <Image src={Interior} width={282} height={160} alt="interior" />
          <Image src={Interior} width={282} height={160} alt="interior" />
          <Image src={Interior} width={282} height={160} alt="interior" />
          <Image src={Interior} width={282} height={160} alt="interior" />
          <Image src={Interior} width={282} height={160} alt="interior" />
          <Image src={Interior} width={282} height={160} alt="interior" />
          <Image src={Interior} width={282} height={160} alt="interior" />
          <Image src={Interior} width={282} height={160} alt="interior" />
        </div>
      </div>
    </div>
  );
};

export default JetDetailsCard;

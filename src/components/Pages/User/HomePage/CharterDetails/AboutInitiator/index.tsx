import TickMark from "@/../public/TickMark.svg";
import Image from "next/image";
import Drink from "@/../public/Drink.svg";
import Music from "@/../public/Music.svg";
import TV from "@/../public/TV.png";
import Sleep from "@/../public/Sleep.svg";
import Work from "@/../public/Work.svg";
import Eat from "@/../public/Eat.svg";

const AboutInitiator = () => {
  return (
    <div className="flex flex-col p-6 sm:p-8 border-none rounded-md bg-white shadow-2xl">
      <div className="flex flex-col gap-y-6">
        {/* Title and Paragraph */}
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-lg sm:text-xl">About Flight Initiator</h1>
          <div>
            <p className="text-xs sm:text-sm leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry&apos;s standard dummy text ever since the 1500s.
            </p>
          </div>
        </div>

        {/* Personal Info */}
        <div className="flex flex-wrap md:flex-nowrap gap-5">
          <div className="flex flex-col w-1/2 md:w-auto">
            <h1 className="font-bold">Age</h1>
            <p className="font-light text-sm">26</p>
          </div>
          <div className="flex flex-col w-1/2 md:w-auto">
            <h1 className="font-bold">Marital Status</h1>
            <p className="font-light text-sm">Married</p>
          </div>
          <div className="flex flex-col w-1/2 md:w-auto">
            <h1 className="font-bold">Children</h1>
            <p className="font-light text-sm">02</p>
          </div>
        </div>

        {/* Business and TSA */}
        <div className="flex gap-4 md:flex-row flex-col">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Own Your Business"
              className=" p-2 border-2 border-gray-300 rounded-sm"
            />
            <button className="bg-[#26AE03] p-4">
              <Image src={TickMark} alt="TickMark" width={16} height={16} />
            </button>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="TSA Approved"
              className=" p-2 border-2 border-gray-300 rounded-sm"
            />
            <button className="bg-[#26AE03] p-4">
              <Image src={TickMark} alt="TickMark" width={16} height={16} />
            </button>
          </div>
        </div>

        {/* Travelling Purpose */}
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-sm sm:text-base">Travelling Purpose?</h1>
          <p className="text-xs sm:text-sm">Business Related</p>
        </div>

        {/* Preferences on a Plane */}
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-sm sm:text-base">
            What do you like to do on a plane while flying?
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            <div className="flex items-center gap-2">
              <Image src={Drink} width={20} height={20} alt="Drink" />
              <p className="font-light text-xs sm:text-sm">Drink Alcohol</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={Music} width={20} height={20} alt="Music" />
              <p className="font-light text-xs sm:text-sm">Listen to Music</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={TV} width={20} height={20} alt="TV" />
              <p className="font-light text-xs sm:text-sm">Watch TV</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={Sleep} width={20} height={20} alt="Sleep" />
              <p className="font-light text-xs sm:text-sm">Sleep</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={Work} width={20} height={20} alt="Work" />
              <p className="font-light text-xs sm:text-sm">Work</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={Eat} width={20} height={20} alt="Eat" />
              <p className="font-light text-xs sm:text-sm">Eat</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInitiator;

import Image from "next/image";
import ProfilePic from "@/../public/Charterer.svg";
import StarRateIcon from "@mui/icons-material/StarRate";
import Bar from "@/../public/Bar.svg";

const Charterer = () => {
  return (
    <div className="flex gap-10  ">
      <div className="flex flex-col gap-5">
        <div className="flex">
          <h1 className="font-bold text-xl">Meet Your Charterer</h1>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <Image src={ProfilePic} width={0} height={0} alt="Profile-Pic" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-medium text-3xl">Mark Bartlett</p>
            <div className="flex gap-4 items-center justify-center">
              <p className="font-semibold text-xl">4.6</p>
              <div className="bg-[#FED130] flex items-center justify-center gap-2 p-1 text-white">
                <StarRateIcon />
                <p className="text-xl">Top Rated</p>
              </div>
            </div>
            <div className="flex">
              <StarRateIcon className="text-[#FED130]" />
              <StarRateIcon className="text-[#FED130]" />
              <StarRateIcon className="text-[#FED130]" />
              <StarRateIcon className="text-[#FED130]" />
              <StarRateIcon className="hover:text-[#FED130] text-[#D9D9D9]" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-r-2 border-[#00000080]" />
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="flex gap-3">
            <StarRateIcon className="text-[#FED130]" />
            <StarRateIcon className="text-[#FED130]" />
            <StarRateIcon className="text-[#FED130]" />
            <StarRateIcon className="text-[#FED130]" />
            <StarRateIcon className="text-[#FED130]" />
          </div>
          <div>
            <Image src={Bar} width={0} height={0} alt="Progress-Bar" />
          </div>
          <div>
            <p className="font-semibold">80</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-3">
            <StarRateIcon className="text-[#FED130]" />
            <StarRateIcon className="text-[#FED130]" />
            <StarRateIcon className="text-[#FED130]" />
            <StarRateIcon className="text-[#FED130]" />
            <StarRateIcon className="text-[#FED130]" />
          </div>
          <div>
            <Image src={Bar} width={0} height={0} alt="Progress-Bar" />
          </div>
          <div>
            <p className="font-semibold">80</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-3">
            <StarRateIcon className="text-[#FED130]" />
            <StarRateIcon className="text-[#FED130]" />
            <StarRateIcon className="text-[#FED130]" />
            <StarRateIcon className="text-[#FED130]" />
            <StarRateIcon className="text-[#FED130]" />
          </div>
          <div>
            <Image src={Bar} width={0} height={0} alt="Progress-Bar" />
          </div>
          <div>
            <p className="font-semibold">80</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-3">
            <StarRateIcon className="text-[#FED130]" />
            <StarRateIcon className="text-[#FED130]" />
            <StarRateIcon className="text-[#FED130]" />
            <StarRateIcon className="text-[#FED130]" />
            <StarRateIcon className="text-[#FED130]" />
          </div>
          <div>
            <Image src={Bar} width={0} height={0} alt="Progress-Bar" />
          </div>
          <div>
            <p className="font-semibold">80</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-3">
            <StarRateIcon className="text-[#FED130]" />
            <StarRateIcon className="text-[#FED130]" />
            <StarRateIcon className="text-[#FED130]" />
            <StarRateIcon className="text-[#FED130]" />
            <StarRateIcon className="text-[#FED130]" />
          </div>
          <div>
            <Image src={Bar} width={0} height={0} alt="Progress-Bar" />
          </div>
          <div>
            <p className="font-semibold">80</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charterer;

import Avatar1 from "@/../public/user-avatar.svg"
import Image from "next/image";
import Flag from "@/../public/Flag.svg"
import Avatar2 from "@/../public/user-avatar1.svg";
import RatingSmall from "../SharedUi/TextRating/RatingSmall";

const Testimonials = () => {
  return (
    <div className="flex-col">
      <div className="flex gap-2 pt-4 justify-between">
        <div className="flex items-center gap-2">
          <Image src={Avatar1} width={38} height={0} alt="Avatar" />
          <div className="flex flex-col ">
          <h1 className="font-semibold">Courtney Henry</h1>
          <div className="flex gap-2 items-center">
            <Image src={Flag} width={0} height={0} alt="Flag" />
            <p className="text-xs">United States</p>
          </div>
        </div>
        </div>
        
        <div className="flex items-center">
          <div className="flex gap-3 items-center">
          <RatingSmall />
            <p className="mr-4">5</p>
            </div>
          <div className="border-l-[1px] border-black h-[70%]"></div>
          <div className="ml-4">
            <p className="text-[#888888]">1-19-2024</p>
          </div>
        </div>
      </div>
      <div className="flex pt-3">
        <p className="font-light">
          Flying with Swoop was beyond my expectations. The cabin was luxurious,
          and every detail was thoughtfully considered to make the flight smooth
          & comfortable. I felt like a VIP from the moment I arrived. Highly
          recommend this service for anyone looking for a top-notch private
          flying experience!
        </p>
      </div>
      <div className="border-b-2 border-[#DEE2E6] pt-4" />
      <div className="flex gap-2 pt-4 justify-between">
        <div className="flex items-center gap-2">
          <Image src={Avatar2} width={38} height={0} alt="Avatar" />
          <div className="flex flex-col ">
          <h1 className="font-semibold">Courtney Henry</h1>
          <div className="flex gap-2 items-center">
            <Image src={Flag} width={0} height={0} alt="Flag" />
            <p className="text-xs">United States</p>
          </div>
        </div>
        </div>
        
        <div className="flex items-center">
          <div className="flex gap-3 items-center">
          <RatingSmall />
            <p className="mr-4">5</p>
            </div>
          <div className="border-l-[1px] border-black h-[70%]"></div>
          <div className="ml-4">
            <p className="text-[#888888]">1-19-2024</p>
          </div>
        </div>
      </div>
      <div className="flex pt-3">
        <p className="font-light">
          My experience with Skyview Airlines was absolutely fantastic. The
          staff was incredibly attentive, the food was exquisite, and the
          overall ambiance was delightful. I would definitely fly with them
          again!
        </p>
      </div>
      <div className="border-b-2 border-[#DEE2E6] pt-4" />
      <div className="flex gap-2 pt-4 justify-between">
        <div className="flex items-center gap-2">
          <Image src={Avatar1} width={38} height={0} alt="Avatar" />
          <div className="flex flex-col ">
          <h1 className="font-semibold">Courtney Henry</h1>
          <div className="flex gap-2 items-center">
            <Image src={Flag} width={0} height={0} alt="Flag" />
            <p className="text-xs">United States</p>
          </div>
        </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
          <RatingSmall />
              <p>5</p>
              
          </div>
          <div className="border-l-[1px] border-black h-[70%]"></div>
          <div className="">
            <p className="text-[#888888]">1-19-2024</p>
          </div>
        </div>
      </div>
      <div className="flex pt-3">
        <p className="font-light">
          Flying with Swoop was beyond my expectations. The cabin was luxurious,
          and every detail was thoughtfully considered to make the flight smooth
          & comfortable. I felt like a VIP from the moment I arrived. Highly
          recommend this service for anyone looking for a top-notch private
          flying experience!
        </p>
      </div>
      <div className="border-b-2 border-[#DEE2E6] pt-4" />
      <div className="flex gap-2 pt-4 justify-between">
        <div className="flex items-center gap-2">
          <Image src={Avatar2} width={38} height={0} alt="Avatar" />
          <div className="flex flex-col ">
          <h1 className="font-semibold">Courtney Henry</h1>
          <div className="flex gap-2 items-center">
            <Image src={Flag} width={0} height={0} alt="Flag" />
            <p className="text-xs">United States</p>
          </div>
        </div>
        </div>
        
        <div className="flex items-center">
          <div className="flex gap-3 items-center">
          <RatingSmall />
            <p className="mr-4">5</p>
            </div>
          <div className="border-l-[1px] border-black h-[70%]"></div>
          <div className="ml-4">
            <p className="text-[#888888]">1-19-2024</p>
          </div>
        </div>
      </div>
      <div className="flex pt-3">
        <p className="font-light">
          My experience with Skyview Airlines was absolutely fantastic. The
          staff was incredibly attentive, the food was exquisite, and the
          overall ambiance was delightful. I would definitely fly with them
          again!
        </p>
      </div>
      <div className="border-b-2 border-[#DEE2E6] pt-4" />
    </div>
  );
};

export default Testimonials;

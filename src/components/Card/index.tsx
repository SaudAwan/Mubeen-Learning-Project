"use client";

import Image from "next/image";
import SimpleButton from "../SharedUI/Buttons/SimpleButton";

type Props = {
  imageSrc: string; // Source for the main image
  title: string; // Title text
  details: {
    iconSrc: string; // Icon source
    label: string; // Label text
    value: string; // Value text
  }[]; // Array of details
};

const Card = ({ imageSrc, title, details }: Props) => {
  const doNothing = () => {};

  return (
    <div className="flex items-center justify-center">
      <div className="border border-gray-300 flex flex-col items-start p-6 rounded-lg w-[320px] bg-white shadow-md">
        {/* Image */}
        <div className="w-full mb-4">
          <Image
            src={imageSrc}
            alt="Plane"
            width={320}
            height={180}
            className="rounded-md object-cover"
          />
        </div>

        {/* Title */}
        <h2 className="md:text-base lg:font-semibold lg:text-xl text-black mb-4 text-center w-full">
          {title}
        </h2>

        {/* Details */}
        <div className="w-full space-y-3">
          {details.map((detail, index) => (
            <div key={index} className="flex items-center gap-3">
              <Image
                src={detail.iconSrc}
                alt={detail.label}
                width={20}
                height={20}
              />
              <p className="font-semibold text-black flex-1 lg:text-base md:text-sm">
                {detail.label}:
              </p>
              <p className="text-black lg:text-base md:text-sm font-light">
                {detail.value}
              </p>
            </div>
          ))}
          <div className="flex items-center justify-center flex-col gap-y-5 pt-3">
            <div className="border-b-2 border-[#DEE2E6] w-[100%]" />
            <SimpleButton
              text={"Reserve Seat"}
              color={"yellow"}
              textColor={"black"}
              onClick={doNothing}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

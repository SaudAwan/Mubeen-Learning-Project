import Women from "@/../public/Women.svg";
import Image from "next/image";
import SimpleButton from "@/components/SharedUI/Buttons/SimpleButton";

const SkyBound = () => {
  const Function = () => {};
  return (
    <div className="relative">
      <Image
        className="md:w-full"
        src={Women}
        width={0}
        height={0}
        alt="Sky-Bound"
      />
      <div className="absolute flex flex-col justify-start top-[10%] left-[10%] md:gap-y-0 gap-y-2">
        <h1 className="text-white font-bold lg:text-2xl md:text-xl text-lg">
          Fly Green, Fly Full With Us
        </h1>
        <h1 className="text-white font-black lg:text-[150px] md:text-8xl text-3xl">
          Skybound with Swoop
        </h1>
        <div>
          <SimpleButton
            text="Book a Chapter"
            color="yellow"
            textColor="black"
            onClick={Function}
          />
        </div>
      </div>
    </div>
  );
};

export default SkyBound;

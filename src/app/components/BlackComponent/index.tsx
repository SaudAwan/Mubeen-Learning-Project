import Heading1 from "../SharedUI/Heading1";
import Heading2 from "../SharedUI/Heading2";

type Props = {};

const BlackComponent = (props: Props) => {
  return (
    <div className="bg-black flex items-center justify-center flex-col text-white lg:px-[18%] md:px-[14%] sm:px-8 px-4 text-center h-full py-5">
      <Heading1 
        text={"How it Works"} 
        additionalClass="lg:text-4xl md:text-3xl sm:text-2xl text-xl" 
      />
      <Heading2 
        text={"Swoop is a marketplace that allows a jet charterer or a flight initiator to offer seats for sale to the public. The jet charterer or the flight initiator offers available seats on a jet allowing Swoop members and Non-members to purchase a seat or seats on a given flight."} 
        additionalClass="lg:text-base md:text-sm sm:text-xs text-xs mt-4"
      />
    </div>
  );
};

export default BlackComponent;

import FlightDetailCard from "../FlightDetailsCard";

type Props = {};

const FlightDetails = (props: Props) => {
  return (
    <div className="md:py-10 md:px-[7%] px-[3%] py-8 flex flex-col md:gap-y-8 gap-y-8">
      <FlightDetailCard />
      <FlightDetailCard />
      <FlightDetailCard />
      <FlightDetailCard />
      <FlightDetailCard />
      <FlightDetailCard />
    </div>
  );
};

export default FlightDetails;

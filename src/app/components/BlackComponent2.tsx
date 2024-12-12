import Heading1 from "../SharedUI/Heading1"
import Heading2 from "../SharedUI/Heading2"
type Props = {}

const BlackComponent2 = (props: Props) => {
  return (
      <div className="bg-black flex items-center justify-center flex-col px-[18%] text-center h-full py-5 gap-y-2">
          <Heading1 text={"Our Mission"} />
          <Heading2 text={"Increase the number of people who can afford to fly privately from 1% to at least 17% of the population."}/>
          <div className="w-[60%]">
          <Heading2 text={"Decrease the number of Private planes flying that are emitting 10 times the pollutants into our atmosphere than commercial flights, by filling every seat on every private plane."} />
          </div>
          <Heading2 text={"Saving the environment one seat at a time." } />
    </div>
  )
}

export default BlackComponent2
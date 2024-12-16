import Image from "next/image";
import ProfilePic from "../../../../../public/Charterer.svg";
import StarRateIcon from "@mui/icons-material/StarRate";

const Testimonials = (props: Props) => {
  return (
    <div>
      <div>
        <h1>Meet Your Charterer</h1>
      </div>
      <div>
        <div>
          <Image src={ProfilePic} width={0} height={0} alt="Profile-Pic" />
        </div>
        <div>
          <p>Mark Bartlett</p>
          <div>
            <p>4.6</p>
            <p>Top Rated</p>
          </div>
        </div>
        <div>
          <StarRateIcon className="hover:text-[#FED130]" />
          <StarRateIcon className="hover:text-[#FED130]" />
          <StarRateIcon className="hover:text-[#FED130]" />
          <StarRateIcon className="hover:text-[#FED130]" />
          <StarRateIcon className="hover:text-[#FED130]" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

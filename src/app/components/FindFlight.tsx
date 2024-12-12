import React, { useState } from "react";
import WomenImg from "../../../public/Women.svg";
import logo from "../../../public/Group.svg";
import Heading1 from "../SharedUI/Heading1";
import Heading2 from "../SharedUI/Heading2";
import SearchBar from "../components/SearchBar";
import Image from "next/image";

const FindFlight: React.FC = () => {
  const [isSearchBarToggled, setIsSearchBarToggled] = useState<boolean>(false); // State to track toggle

  return (
    <section>
      <div className="relative">
        <Image className="w-full object-cover" src={WomenImg} alt="Woman" />
        <div
          className={`absolute ${
            isSearchBarToggled ? "md:top-1" : "lg:top-20 md:top-1"
          } left-1/2 transform -translate-x-1/2 flex items-center justify-center flex-col`}
        >
          {/* Render SearchBar exclusively for medium screens when toggled */}
          {isSearchBarToggled ? (
            <div className="w-full flex justify-center">
              <SearchBar
                toggle={isSearchBarToggled}
                setToggle={setIsSearchBarToggled}
              />
            </div>
          ) : (
            <>
              {/* Render Logo and Headings when not toggled */}
              <Image
                width={214}
                height={214}
                src={logo}
                alt="Logo"
                className="lg:w-[214px] md:w-[114px]"
              />
              <Heading1 text="Fly Green, Fly Full With" />
              <Heading2 text="Save Money, Save Time, Save Our Environment" />
              <SearchBar
                toggle={isSearchBarToggled}
                setToggle={setIsSearchBarToggled}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default FindFlight;

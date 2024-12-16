import React from 'react'
import Image from 'next/image'
import Home from "@/../public/Home.svg"
import Dashboard from "@/../public/Dashboard.svg"
import MarketPlace from "@/../public/MarketPlace.svg"
import FBO from "@/../public/BlackPlane.svg"

type Props = {}

const TabletHeader = (props: Props) => {
  return (
    // Make it hidden on small and large screens, visible on medium screens
    <div className='hidden sm:block lg:hidden md:flex bg-black text-white justify-between items-center px-[7%] py-[10px] gap-4'>
      <button className='px-[30px] py-[10px]  flex items-center justify-center gap-2 text-sm font-normal'>
        <Image src={Home} width={16.3} height={16.35} alt="Home" /> Home
      </button>
      <button className='px-[30px] py-[10px]  flex items-center justify-center gap-2 text-sm font-normal'>
        <Image src={Dashboard} width={16.3} height={16.3} alt="Dashboard"/> Dashboard
      </button>
      <button className='px-[30px] py-[10px]  flex items-center justify-center gap-2 text-sm font-normal'>
        <Image src={MarketPlace} width={16.3} height={16.3} alt="Market Place" /> Market Place
      </button>
      <button className='px-[30px] py-[10px]  flex items-center justify-center gap-2 text-sm font-normal'>
        <Image src={FBO} width={16.3} height={16.3} alt="FBO"/>FBO Flights
      </button>
    </div>
  )
}

export default TabletHeader

"use client"

import React from 'react'
import Image from 'next/image'
import Image1 from "../../../public/image 10.svg"
import Image2 from "../../../public/image 11.svg"

type Props = {}

const Hero = (props: Props) => {
  return (
      <div className='grid grid-cols-1'>
          <div className='flex items-center justify-center'>
              <div className='flex flex-col gap-y-10 items-center justify-center w-[50%] px-[10%]'>
                  <p className='font-normal lg:text-base md:text-xs'>
                  The Swoop members, non-members, and flight initiators are all screened and preferences are defined upfront so that the jet charterer and the seat purchasers are compatible. We don't want a jet charterer who likes to sleep on the plane matched up with someone who likes to crank the music and drink alcohol.
                  </p>
                  <p className='font-normal lg:text-base md:text-xs'>
                  The swoop member or non-member logs on to Swoop and finds a flight that they would like to take. Click on “book now” and you are on your way.
                  </p>
                  <p className='font-normal lg:text-base md:text-xs'>
                  Drive to the departure private airport 30 minutes before departure, valet your car, walk to your jet and grab a seat. No crowds, no security lines. Just a non-invasive security screening to insure your safety and other passengers.
                  </p>
              </div>
              <div>
                  <Image src={Image1 } width={0} height={0} alt="Interior" className='lg:w-[750px] lg:h-[574px] md:w-[600] md:h-[400]' />
              </div>
          </div>
          <div className='flex items-center justify-center'>
              <div>
                  <Image src={Image2 } width={0} height={0} alt="BusinessClass" className='lg:w-[760px] lg:h-[600px] md:w-[560px] md:h-[450px]' />
              </div>
              <div className='flex flex-col items-start justify-center w-[50%] lg:px-[10%] md:px-[5%] gap-y-4 p:mr-[10px]'>
                  <h2 className='lg:text-2xl font-semibold md:text-base md:font-semibold'>Why Use Swoop for your private jet travel?</h2>
                  <p className='lg:text-base lg:font-normal md:text-sm'>Most jets fly only at 25% passenger capacity. Most jet charterers like this concept because of the following:</p>
                  <h2 className='lg:text-2xl font-semibold md:text-base md:font-semibold ml-2'>&#x2022; They feel guilty flying with empty seats</h2>
                  <p className='lg:text-base lg:font-normal md:text-sm'>After speaking with many jet charterers, they explained that they feel bad that they fly with empty seats but, they have to, until now.</p>
                  <h2 className='lg:text-2xl font-semibold md:text-base md:font-semibold ml-2'>&#x2022; They can offset the cost of the jet charter</h2>
                  <p className='lg:text-base lg:font-normal md:text-sm '>No matter how much money you have, we all like to save money.</p>
                  <h2 className='lg:text-2xl font-semibold md:text-base md:font-semibold ml-2'>&#x2022; Less of a carbon footprint by filling every seat</h2>
                  <p className='lg:text-base lg:font-normal md:text-sm'>41% of private flights are empty, 59% of private flights avg only 4 passengers. Because of this, flying private is the least fuel efficient means of transportation</p>
                  <h2 className='lg:text-2xl font-semibold md:text-base md:font-semibold ml-2'>&#x2022; Meeting new people</h2>
                  <p className='lg:text-base lg:font-normal md:text-sm'>41% of private flights are empty, 59% of private flights avg only 4 passengers. Because of this, flying private is the least fuel efficient means of transportation</p>
              </div>
          </div>
    </div>
  )
}

export default Hero
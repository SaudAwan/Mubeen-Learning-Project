import React from 'react'
import Image from 'next/image'
import Logo from "@/../public/Group.svg"

const Footer = () => {
  return (
      <div className='bg-black text-white flex md:flex-row flex-col md:px-[0] px-4 justify-between items-center py-8 md:gap-y-0 gap-y-4'>
          <div className='flex flex-col md:w-[30%] w-full md:px-[1%] px-[0] md:ml-20 justify-center items-start gap-y-5'>
              <Image src={Logo} width={100} height={80} alt="Logo" />
              <p className='lg:text-base lg:font-medium md:text-sm md:font-normal text-sm'>Every empty seat has its price on the environment and you. Stop the waste and join Swoop on their mission to not only make private travel more affordable but to have a big part in
                  saving our environment for years to come.</p>
          </div>
          <div className='flex flex-row gap-10 mr-12'>
              <ul className='flex flex-col gap-y-5 mr-2 lg:text-base lg:font-medium  md:text-sm md:font-normal text-xs'>
                  <li className='lg:text-lg lg:font-semibold md:text-sm md:font-semibold font-bold text-lg'>About Us</li>
                  <li >About Us</li>
                  <li >How it Works</li>
                  <li>FAQs</li>
                  <li>Contact</li>
              </ul>
              <ul className='flex flex-col gap-y-5 mr-12 lg:text-base lg:font-medium md:text-sm md:font-normal text-xs'>
              <li className='font-bold text-lg'>Get Started</li>
                  <li>Private Jet</li>
                  <li>Register</li>
              </ul>
              
          </div>
    </div>
  )
}

export default Footer
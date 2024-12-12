import React from 'react'
import Image from 'next/image'
import Logo from "../../../public/Group.svg"

type Props = {}

const Footer = (props: Props) => {
  return (
      <div className='bg-black text-white flex justify-between items-center py-8'>
          <div className='flex flex-col w-[30%] px-[1%] ml-20 justify-center items-start gap-y-5'>
              <Image src={Logo} width={100} height={80} alt="Logo" />
              <p>Every empty seat has its price on the environment and you. Stop the waste and join Swoop on their mission to not only make private travel more affordable but to have a big part in
                  saving our environment for years to come.</p>
          </div>
          <div className='flex flex-row gap-10 mr-12'>
              <ul className='flex flex-col gap-y-5 mr-2'>
                  <li className='font-semibold'>About Us</li>
                  <li >About Us</li>
                  <li >How it Works</li>
                  <li>FAQs</li>
                  <li>Contact</li>
              </ul>
              <ul className='flex flex-col gap-y-5 mr-12'>
              <li className='font-semibold'>Get Started</li>
                  <li>Private Jet</li>
                  <li>Register</li>
              </ul>
              
          </div>
    </div>
  )
}

export default Footer
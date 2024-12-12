import React from 'react'
import Image from 'next/image'
import Image3 from "../../../public/image 12.svg"

type Props = {}

const FAA = (props: Props) => {
  return (
      <div className='flex items-center justify-between'>
          <div className='flex flex-col w-[50%] gap-y-5 px-[8%] font-light text-base'>
              <p>One out of every six flights that the <a className='font-bold' href="https://simpleflying.com/tag/faa/" target='_blank'> Federal Aviation Administration (FAA) </a>
                  handles are flown by private jets.</p>
              <p>Private jets emit at least 10 times more pollutants than commercial planes per passenger</p>
              <p>The reason being is commercial flights are at 80% filled to capacity while private flights are at 23% filled to capacity. If Swoop can change the private jet travel capacity filled rates to 80%, we would be saving the pollutant</p>
          </div>
          <div>
              <Image src={Image3 } alt="Alpines" width={700} height={350} />
          </div>
    </div>
  )
}

export default FAA
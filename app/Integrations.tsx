import { integrationsData } from '@/public/data'
import Image from 'next/image'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa6'

export default function Integrations() {
  return (
    <div className='grid grid-cols-1 p-10 lg:grid-cols-12 bg-background-main lg:p-20 xl:p-32'>
      <div className='flex flex-col items-center justify-center col-span-12 gap-10 lg:col-span-10 lg:col-start-2 lg:gap-20'>
        <div className='flex flex-col items-center'>
          <h2>Over 300+ integrations</h2>
          <p>
            Expand the capabilities of <span className='font-bold'>Roooby</span>{' '}
            with hundreds of apps and integrations
          </p>
        </div>
        <div className='grid grid-cols-2 gap-2 grid-rows-auto sm:grid-cols-7 md:grid-cols-7 lg:grid-cols-7 xl:grid-cols-11'>
          {integrationsData.map((integration, i) => (
            <div
              key={i}
              className={`w-full h-full  bg-white flex justify-center rounded-2xl  p-2 md:p-5 `}
              style={{ gridColumn: `span ${integration.span}` }}
            >
              <Image src={integration.logo} alt={`logo-${i + 1}`} />
            </div>
          ))}
        </div>

        <div>
          <button className='flex items-center p-4 text-lg sm:text-xl md:text-2xl hover:bg-white rounded-xl'>
            See all apps and extensions
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  )
}

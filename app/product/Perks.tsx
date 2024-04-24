import { perksData } from '@/public/data'
import Image from 'next/image'
import React from 'react'
import { FaCheck } from 'react-icons/fa6'
import Container from '../ui/Container'

export default function Perks() {
  return (
    // <div className='grid grid-cols-1 lg:grid-cols-12'>
    <Container>
      {perksData.map((perk, i) => (
        <div
          key={i}
          className={`col-span-12 lg:col-span-10 lg:col-start-2  flex flex-col 
        border-t   border-p-el py-5  md:p-5 md:m-5 gap-10 xl:gap-28 lg:p-10 lg:m-10   items-center justify-between
        
        ${(i + 1) % 2 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
        >
          <div className='flex flex-col  gap-4 md:gap-8  lg:w-[50vw]'>
            <div className='flex flex-col gap-3 '>
              <h6 className='p-2 rounded-lg bg-secondary w-max'>
                {perk.tag.toUpperCase()}
              </h6>
              <h2>{perk.title}</h2>
            </div>
            <p>{perk.content.main}</p>
            <div className='flex flex-col gap-5 '>
              {perk.content.checks.map((check, i) => (
                <div key={i} className='flex items-center gap-4 md:gap-8'>
                  <FaCheck className='text-f-banner-3' size={20} />
                  <p>{check}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Image
              src={perk.image}
              alt={perk.title}
              className='w-full h-full hover:cursor-pointer'
              width={700}
              height={700}
            />
          </div>
        </div>
      ))}
    </Container>
    // </div>
  )
}

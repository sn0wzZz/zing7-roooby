import { perksData } from '@/public/data'
import Image from 'next/image'
import React from 'react'
import { FaCheck } from 'react-icons/fa6'
import Container from '../ui/Container'
import ButtonMore from '../ui/ButtonMore'

export default function Perks() {
  return (
    <Container>
      {perksData.map((perk, i) => (
        <div
          key={i}
          className={`col-span-12 lg:col-span-10 lg:col-start-2 grid grid-cols-1 xl:grid-cols-2 border-t border-p-el py-5 md:p-5 md:m-5 gap-10 xl:gap-28 lg:p-10 lg:m-10 items-center justify-between`}
        >
          <div
            className={`flex flex-col gap-4 md:gap-8 ${
              i % 2 === 0 ? 'xl:col-start-1' : 'xl:col-start-2'
            }`}
          >
            <div className='flex flex-col gap-3'>
              <h6 className='p-2 rounded-lg bg-secondary w-max tag'>
                {perk.tag.toUpperCase()}
              </h6>
              <h2>{perk.title}</h2>
            </div>
            <p>{perk.content.main}</p>
            <div className='flex flex-col gap-5'>
              {perk.content.checks.map((check, j) => (
                <div key={j} className='flex items-center gap-4 md:gap-8'>
                  <FaCheck className='text-f-banner-3 w-6 h-6' />{' '}
                  {/* Set width and height to 6 units */}
                  <p className='w-full'>{check}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            className={` relative flex justify-center ${
              i % 2 === 0 ? 'xl:col-start-2' : 'xl:col-start-1'
            } row-start-1`}
          >
            {perk.image && (
              <Image
                src={perk.image}
                alt={perk.title}
                className='w-full h-full hover:cursor-pointer max-w-[700px]'
                width={700}
                height={700}
              />
            )}
            {perk.imageButton && (
              <div className='relative w-full h-full max-w-[700px]'>
                <Image
                  src={perk.imageButton.image}
                  alt={perk.title}
                  className=' hover:cursor-pointer w-full h-full '
                  width={700}
                  height={700}
                />
                <div className='absolute z-10 flex flex-col md:flex-row items-center md:justify-between gap-5 p-3 bg-primary rounded-xl left-[10%]  right-[10%] bottom-[5%]'>
                  <p className='mx-5 font-bold text-white text-center md:text-start text-base'>
                    {perk.imageButton.message}
                  </p>
                  <ButtonMore variant3 noArr>
                    {perk.imageButton.label}
                  </ButtonMore>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </Container>
  )
}

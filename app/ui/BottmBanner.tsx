import React from 'react'
import { BsChevronRight } from 'react-icons/bs'
import Container from './Container'

export default function BottmBanner() {
  return (
      
    <div className='h-[500px] bg-f-banner-1 col-span-12 relative overflow-hidden z-0'>
      <div className='absolute w-[200vw] h-[20vh] md:w-[45vw] md:h-[45vw] bg-f-banner-2  -right-36 bottom-0 md:top-0'></div>
      <div className='absolute w-[70vh] h-[70vh] sm:w-[90vh] sm:h-[90vh] md:w-[50vw] md:h-[50vw] bg-f-banner-3 rounded-full -right-32 top-72  md:top-24   '></div>
      <div className='absolute z-30 flex flex-col items-center justify-around w-full h-full md:flex-row'>
        <div className='flex flex-col gap-5 m-10 text-white lg:gap-10'>
          <h1 className=''>
            Ready to supercharge
            <br />
            your business?
          </h1>
          <p className='text-base font-semibold text-f-text lg:text-xl'>
            Ask about <span className='font-extrabold'>Roooby</span> products,
            pricing, implementation, or anything <br />
            else. Our highly trained reps are standing by, ready to help.
          </p>
        </div>
        <div className='flex flex-col items-center justify-center gap-5 mx-10 text-center lg:translate-x-16 xl:translate-x-48 '>
          <button className='flex items-center p-4 text-base button-secondary sm:text-lg md:text-xl md:p-6 '>
            Try for Free
            <BsChevronRight />
          </button>
          <p className='text-white'>Full access. No credit card required.</p>
        </div>

        <div></div>
      </div>
    </div>
  )
}

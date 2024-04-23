import React from 'react'
import { BsChevronRight } from 'react-icons/bs'

export default function BottmBanner() {
  return (
    <div className='h-[500px] bg-f-banner-1 col-span-12 relative overflow-hidden z-0'>
      <div className='absolute w-[200vw] h-[20vh] md:w-[45vw] md:h-[45vw] bg-f-banner-2  -right-36 bottom-0 md:top-0'></div>
      <div className='absolute w-[70vh] h-[70vh] sm:w-[90vh] sm:h-[90vh] md:w-[50vw] md:h-[50vw] bg-f-banner-3 rounded-full -right-32 top-72  md:top-24   '></div>
      <div className=' absolute z-30 w-full h-full flex flex-col md:flex-row justify-around items-center'>
        <div className='flex flex-col text-white gap-5 lg:gap-10 m-10'>
          <h1 className=''>
            Ready to supercharge
            <br />
            your business?
          </h1>
          <p className='text-f-text lg:text-xl text-base font-semibold'>
            Ask about <span className='font-extrabold'>Roooby</span> products,
            pricing, implementation, or anything <br />
            else. Our highly trained reps are standing by, ready to help.
          </p>
        </div>
        <div className='flex flex-col justify-center items-center gap-5  mx-10 lg:translate-x-20  xl:translate-x-48 2xl:translate-x-80'>
          <button className='button-secondary flex items-center text-xl p-6 '>
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

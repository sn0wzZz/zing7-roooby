import React from 'react'
import { BsChevronRight } from 'react-icons/bs'
import Container from './Container'

export default function BottmBanner() {
  return (
    <div className='w-[100vw] bg-f-banner-1 z-0 relative overflow-hidden'>
      <div className='absolute w-[200vw] h-[20vh] md:w-[45vw] md:h-[100vw] bg-f-banner-2 md:-right-[5%]   xl:w-[600px] ultrawide-md:right-[0%] full ultrawide-lg:right-[5%] ultrawide-xl:right-[10%]  xl:-right-[5%]  2xl:-right-[5%] bottom-0 md:top-0'></div>

      <div className='absolute w-[70vh] h-[70vh] sm:w-[90vh] sm:h-[90vh] md:w-[50vw] md:h-[100vw] md:-right-[5%] md:top-36  xl:w-[900px] bg-f-banner-3 rounded-full xl:-right-[5%]  2xl:-right-[5%] top-72 ultrawide-xl:right-[10%]   ultrawide-md:-right-[5%] ultrawide-lg:right-[5%]  '></div>

      <div className='container relative mx-auto px-5 '>
        <div className='h-[500px] col-span-12'>
          <div className='absolute z-30 flex flex-col items-center justify-around w-full h-full md:flex-row'>
            <div className='flex flex-col gap-5 text-white lg:gap-10'>
              <h1 className=''>
                Ready to supercharge
                <br />
                your business?
              </h1>
              <p className='text-base font-semibold text-f-text lg:text-xl'>
                Ask about <span className='font-extrabold'>Roooby</span>{' '}
                products, pricing, implementation, or anything <br />
                else. Our highly trained reps are standing by, ready to help.
              </p>
            </div>
            <div className='flex flex-col items-center justify-center gap-5 mx-10 text-center lg:translate-x-16 xl:translate-x-22 2xl:translate-x-36'>
              <button className='flex items-center p-4 text-base button-secondary sm:text-lg md:text-xl md:p-6 '>
                Try for Free
                <BsChevronRight />
              </button>
              <p className='text-white'>
                Full access. No credit card required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

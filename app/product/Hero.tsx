'use client'
import React, { useEffect, useState } from 'react'
import Product from '@/public/product.svg'
import Image from 'next/image'

import { partnersData } from '@/public/data'
import toast from 'react-hot-toast'
import { isValidEmail } from '../utils/helpers'


export default function Hero() {
  const [input, setInput] = useState('')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setError(null)
  }, [input])

  const notify = () => {
    try {
      if (isValidEmail(input)) {
        toast.success('Check your email!', {
          duration: 2000,
        })
      } else {
        throw new Error("Make sure you've entered a valid email!")
      }
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <div className='grid grid-cols-12 mx-auto bg-background-main'>
      <div className='container flex-col col-span-12 p-5 mx-auto lex m xl:col-span-12 md:p-10'>
        <div className='flex flex-col w-full md:flex-row'>
          {/* Left side */}
          <div>
            <div className='flex flex-col gap-5'>
              <h1 className='text-primary'>
                Bringing companies and customers together,
                anywhere
              </h1>
              <p className='text-p-secondary'>
                An awesome & powefull tools for your business, increase business{' '}
                <br />
                revenue with enterprise-grade links built to acquire and engage{' '}
                <br />
                cutomers. <br />
              </p>
            </div>
            <div className='flex mt-5 mb-2 md:mt-10 lg:mt-20 2xl:mt-32 flex-nowrap'>
              <div
                className={`flex items-center bg-white rounded-xl p-1 border ${
                  error ? ' border-red-500' : ' border-white'
                }`}
              >
                <input
                  onChange={(e) => setInput(e.target.value)}
                  className=' p-3 w-[12rem] xl:w-auto xl:p-4 xl:text-xl outline-none  border-none bg bg-transparent'
                  type='text'
                  placeholder='Enter your email'
                />
                <button onClick={notify} className='h-full button-primary'>
                  Try for free
                </button>
              </div>
            </div>
            {error ? (
              <span className='text-red-500'>{error}</span>
            ) : (
              <span className='mt-3 font-base text-p-secondary '>
                Full access. No credit card required.
              </span>
            )}
          </div>
          {/* Right side */}

          <div className='relative w-full md:w-[50vw] h-[300px] md:h-[500px] lg:h-[500px] '>
            <Image
              src={Product}
              alt='banner'
              className='absolute top-0 -right-[25vw] md:-right-[15vw] lg:-right-[10vw] xl:-right-[10vw] 2xl:-right-[25vw]  h-full w-full '
            />
          </div>
        </div>

        <div className='flex flex-col items-center gap-5 my-4 lg:flex-row lg:gap-20 lg:my-20'>
          <p className='w-full font-bold lg:w-auto text-p-secondary'>
            Trusted by 1,000+ customers
          </p>
          <div className='grid justify-center grid-cols-3 gap-5 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-5 md:gap-16 xl:gap-20'>
            {partnersData.map((partner, i) => (
              <div key={i} className='flex justify-center '>
                <Image src={partner} alt='logo' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

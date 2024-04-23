'use client'
import { benefitsData } from '@/public/data'
import Image from 'next/image'
import React, { useState } from 'react'
import Container from './ui/Container'

export default function Benefits() {
  const [isHovering, setIsHovering] = useState<number | null>(null)
  const handleHover = (i: number | null) => setIsHovering(i)

  console.log(isHovering)

  return (
    // <div className='bg-primary grid gridn lg:grid-cols-12 p-5 lg: py-20 '>
    //   <div className=' lg:flex-row lg:col-span-10 lg:col-start-2'>
    <Container bgColor='bg-primary'>
      <div className='flex flex-col lg:flex-row justify-between lg:items-end gap-5 lg:gap-10 p-5 lg:mb-20  '>
        <h2 className='text-white'>
          Here&apos;s how Roooby can benefit your business
        </h2>
        <p className='text-white'>
          Build more meaningful and lasting relationships — better understand
          their needs, identify new opportunities to help, address any problems
          faster.
        </p>
      </div>
      <div className='flex flex-col md:flex-row  gap-5'>
        {benefitsData.map((benefit, i) => (
          <div
            key={i}
            onMouseEnter={() => handleHover(i)}
            onMouseLeave={() => handleHover(null)}
            className={`p-5  lg:px-10 lg:py-20  hover:cursor-pointer rounded-xl transition-colors duration-200 ease-linear ${
              isHovering === i
                ? 'text-black bg-secondary '
                : 'text-white bg-primary-active'
            }  `}
          >
            <div>
              <Image
                className={`pb-5 lg:pb-20 ${isHovering === i ? 'invert' : ''}`}
                height={80}
                src={benefit.icon}
                alt={benefit.title}
              />
            </div>
            <div
              className={`border-t py-5   ${
                isHovering === i ? 'border-black' : ''
              } `}
            >
              <h3 className='mb-5'>{benefit.title}</h3>
              <p>{benefit.content}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
    //   </div>
    // </div>
  )
}

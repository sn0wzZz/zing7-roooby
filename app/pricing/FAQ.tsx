'use client'
import React, { useState } from 'react'
import Container from '../ui/Container'
import { faqData } from '@/public/data'

export default function FAQ() {
  const [active, setActive] = useState<null | number>(null)

  const handleAccord = (i: number | null) => setActive(active === i ? null : i)

  return (
    <Container>
      <h1>
        Frequently asked
        <br /> questions
      </h1>
      <div className='flex justify-end'>
        <div className='xl:w-3/4 float-right'>
          {faqData.map((el, i) => (
            <div
              key={i}
              className='p-5 lg:p-10 border-t border-p-el flex flex-col gap-10'
            >
              <div className='flex justify-between items-start md:items-center gap-5'>
                <p className='text-xl sm:text-2xl md:text-3xl font-medium '>{el.question}</p>
                <button onClick={() => handleAccord(i)}>
                  <svg
                    className={`w-8 h-8 transition-transform duration-300 ${
                      active === i ? '' : 'transform rotate-45'
                    }`}
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d={active === i ? 'M4  12h16M4 ' : 'M6 18L18 6M6 6l12 12'}
                    />
                  </svg>
                </button>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-linear ${
                  active === i ? 'h-full' : 'h-0'
                }`}
              >
                <p>{el.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

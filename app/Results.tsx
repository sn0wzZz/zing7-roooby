import React from 'react'
import Container from './ui/Container'
import { resultsData } from '@/public/data'
import Image from 'next/image'
import Avatar from './ui/Avatar'
import Statement from './ui/Statement'

export default function Results() {
  return (
    <Container>
      <div className='flex flex-col gap-5'>
        <h2>Real-life results and revenue</h2>
        <p className=' text-p-el'>
          See how companies like yours have smashed their sales success goals
        </p>
      </div>
      <div className='flex flex-col md:flex-row lg:flex-col gap-5 md:gap-10'>
        {resultsData.map(({ statement, growth, publisher }, i) => (
          <div
            key={i}
            className='flex flex-col lg:flex-row border-t gap-10 border-p-el py-10 lg:py-20'
          >
            <div className=' text-nowrap lg:w-1/3'>
              <p className='font-bold text-8xl'>{growth.value}</p>
              <p className='font-bold'>{growth.type}</p>
            </div>
            <div className='lg:w-2/3 flex flex-col gap-8'>
              <Statement>{statement}</Statement>
              <Avatar publisher={publisher} />
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

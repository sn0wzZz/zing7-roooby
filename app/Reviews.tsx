import React from 'react'
import Container from './ui/Container'
import ButtonMore from './ui/ButtonMore'
import { reviewsData } from '@/public/data'
import Avatar from './ui/Avatar'
import Statement from './ui/Statement'

export default function Reviews() {
  return (
    <Container bgColor='bg-background-main'>
      <div className='flex justify-between items-start md:items-end'>
        <h2>
          We love our Customers <br /> and They love us too
        </h2>
        <ButtonMore variant2 />
      </div>
      <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {reviewsData.map((review, i) => (
            <div key={i} className='relative pt-16 flex flex-col gap-5'>
              <p className='text-f-banner-3 text-9xl absolute top-0'>“</p>
              <div className='border-t border-p-el'></div>
              <Statement>{review.statement}</Statement>
              <div className='mt-5'>

              <Avatar publisher={review.publisher} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

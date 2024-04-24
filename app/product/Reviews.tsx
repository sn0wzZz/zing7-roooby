import React from 'react'
import Container from '../ui/Container'
import ButtonMore from '../ui/ButtonMore'
import { reviewsData } from '@/public/data'
import Avatar from '../ui/Avatar'
import Statement from '../ui/Statement'

export default function Reviews() {
  return (
    <Container bgColor='bg-background-main'>
      <div className='flex items-start justify-between md:items-end'>
        <h2>
          We love our Customers <br /> and They love us too
        </h2>
        <ButtonMore variant2 />
      </div>
      <div>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
          {reviewsData.map((review, i) => (
            <div key={i} className='relative flex flex-col gap-5 pt-16 '>
              <p className='absolute top-0 text-f-banner-3 text-9xl'>“</p>
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

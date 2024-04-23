import React from 'react'
import Container from './ui/Container'
import ButtonMore from './ui/ButtonMore'
import { newsData } from '@/public/data'
import Image from 'next/image'
import { formatDate } from './utils/helpers'

export default function News() {
  return (
    <Container>
      <div className='flex justify-between  items-start'>
        <h1>What’s new at Roooby?</h1>
        <ButtonMore />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2  gap-10'>
        {newsData.map((article, i) => (
          <div key={i} className='flex flex-col gap-5 hover:cursor-pointer '>
            <p className=' text-p-el w-max font-bold text-lg'>
              {article.tag.toUpperCase()}
            </p>
            <div className='border-t-2 border-p-el'></div>
            <Image
              className='w-full h-full'
              src={article.image}
              alt={article.title}
            />
            <h4 className='h-full'>{article.title}</h4>
            <p>
              {formatDate(article.date)}
              <span className='text-base text-p-el'>
                , by {article.publisher}
              </span>
            </p>
          </div>
        ))}
      </div>
    </Container>
  )
}

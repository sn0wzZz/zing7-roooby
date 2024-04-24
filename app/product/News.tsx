import React from 'react'

import { newsData } from '@/public/data'
import Image from 'next/image'
import Container from '../ui/Container'
import ButtonMore from '../ui/ButtonMore'
import { formatDate } from '../utils/helpers'


export default function News() {
  return (
    <Container>
      <div className='flex items-start justify-between'>
        <h1>What’s new at Roooby?</h1>
        <ButtonMore />
      </div>
      <div className='grid grid-cols-1 gap-10 sm:grid-cols-2'>
        {newsData.map((article, i) => (
          <div key={i} className='flex flex-col gap-5 hover:cursor-pointer '>
            <p className='text-lg font-bold text-p-el w-max'>
              {article.tag.toUpperCase()}
            </p>
            <div className='border-t border-p-el'></div>
            <Image
              className='w-full h-full'
              src={article.image}
              alt={article.title}
            />
            <h4 className='h-full'>{article.title}</h4>
            <p>
              {formatDate(article.date)},{' '}
              <span className='text-base text-p-el'>
                by {article.publisher}
              </span>
            </p>
          </div>
        ))}
      </div>
    </Container>
  )
}

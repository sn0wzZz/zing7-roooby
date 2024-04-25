import React from 'react'

import { newsData2 } from '@/public/data'

import Container from '../ui/Container'
import ButtonMore from '../ui/ButtonMore'

import Articles from '../ui/Articles'

export default function News() {
  return (
    <Container>
      <div className='flex items-start justify-between'>
        <h1>What’s new at Roooby?</h1>
        <ButtonMore />
      </div>
      <Articles articlesData={newsData2} latest />
    </Container>
  )
}

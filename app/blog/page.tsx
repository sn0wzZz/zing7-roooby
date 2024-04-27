import React from 'react'

import Header, { HeaderSub } from '../ui/Header'
import Filter from '../ui/Filter'
import { filterData, newsData2 } from '@/public/data'
import Articles from '../ui/Articles'
import Container from '../ui/Container'
import BottmBanner from '../ui/BottmBanner'

export default function page() {
  return (
    <>
      <Header bgColor='bg-background-main py-6 md:py-16'>
        News and insights <br /> <HeaderSub>from our experts</HeaderSub>{' '}
      </Header>
      <Filter filterData={filterData} />
      <Container>
        <Articles articlesData={newsData2} />
      </Container>
      <BottmBanner />
    </>
  )
}

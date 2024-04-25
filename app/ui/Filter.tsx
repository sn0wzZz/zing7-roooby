'use client'
import React, { useState } from 'react'
import Container from './Container'
import { capitalizeFirstLetter } from '../utils/helpers'
import { useFilterContext } from '../contexts/FilterContext'

export default function Filter({ filterData }: any) {
  const {filterValue, setFilterValue} = useFilterContext()
  const handleFilter = (value: string) => {
    setFilterValue(value)
  }
  return (
    <Container bgColor='bg-background-main' noPadding>
      <div className='flex gap-4 overflow-scroll '>
        {filterData.map(({ value, label }: any, i: number) => (
          <button
            onClick={() => handleFilter(value ? value : label)}
            key={i}
            className={`py-4 border-b-4  font-medium border-transparnent text-nowrap hover:border-f-banner-3 ${
              filterValue === label ||
              (filterValue === '*' && label === 'All Articles')
                ? 'filter-active'
                : 'text-p-inactive'
            }`}
          >
            {capitalizeFirstLetter(label)}
          </button>
        ))}
      </div>
    </Container>
  )
}

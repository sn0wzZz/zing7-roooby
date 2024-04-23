import React from 'react'
import { FaChevronRight } from 'react-icons/fa6'

export default function ButtonMore({ children, onClick, variant2 }: any) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center text-xl text-black ${variant2? 'hover:bg-white':'hover:bg-background-main'} p-5 rounded-lg w-max  text-nowrap flex-nowrap`}
    >
      {children || 'See all'}
      <FaChevronRight className='text-f-banner-3' />
    </button>
  )
}

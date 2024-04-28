import React from 'react'
import { FaCheck } from 'react-icons/fa6'

export default function Feature({ feature, excluded }: any) {
  return (
    <div className={` flex items-center gap-4 ${excluded && 'opacity-50'} `}>
      <FaCheck className='text-f-banner-3  ' />
      <p className={` ${excluded && 'line-through'} `}>{feature}</p>
    </div>
  )
}

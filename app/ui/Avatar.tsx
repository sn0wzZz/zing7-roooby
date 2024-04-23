import Image from 'next/image'
import React from 'react'

export default function Avatar({publisher}:any) {
  return (
    <div className='flex gap-4'>
      <Image
        className='w-max h-max'
        src={publisher.avatar}
        alt={publisher.name}
        width={700}
        height={700}
      />
      <div>
        <p className='font-bold'>{publisher.name}</p>
        <p className='text-p-main'>{publisher.position}</p>
      </div>
    </div>
  )
}

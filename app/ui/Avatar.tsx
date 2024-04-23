import Image from 'next/image'
import React from 'react'

export default function Avatar({ publisher }: any) {
  return (
    <div className='flex items-center gap-4'>
      <Image
        className='rounded-full'
        src={publisher.avatar}
        alt={publisher.name}
        width={50}
      />
      <div>
        <p className='font-bold'>{publisher.name}</p>
        <p className='text-p-main'>{publisher.position}</p>
      </div>
    </div>
  )
}

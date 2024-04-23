import React from 'react'

export default function Container({children, bgColor}: any) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-12 ${bgColor}`}>
      <div className='lg:col-span-10  lg:col-start-2  p-5 py-10 lg:py-20 xl:py-32 flex  flex-col gap-10 lg:gap-20'>
        {children}
      </div>
    </div>
  )
}

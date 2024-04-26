import React from 'react'

export default function Container({ children, bgColor, noPadding }: any) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-12 ${bgColor}  `}
    >
      <div
        className={`container flex flex-col gap-10 px-5  mx-auto lg:col-span-10 lg:col-start-2 ${
          noPadding ? '' : 'py-10    lg:py-20 p-5 xl:py-32 lg:gap-20 relative '
        } `}
      >
        {children}
      </div>
    </div>
  )
}

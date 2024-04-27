import React from 'react'
import Container from './Container'

export default function Header({ children, bgColor }: any) {
  return (
    <Container bgColor={bgColor} noPadding>
      <h1>{children}</h1>
    </Container>
  )
}

export const HeaderSub = ({ children }: any) => {
  return <span className='text-p-el'>{children}</span>
}

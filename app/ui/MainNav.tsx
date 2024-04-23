'use client'
import React, { useState } from 'react'
import Logo from '@/public/Roooby.svg'
import Image from 'next/image'
import Link from 'next/link'
import { capitalizeFirstLetter } from '@/app/utils/helpers'

const navLinks = ['product', 'pricing', 'company', 'resources', 'contact']

export default function MainNav() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [active, setActive] = useState('/')

  const handleMenu = () => {

    setMenuIsOpen((cur) => !cur)
  }

  const handleLinkClick =(link:any)=>{
    setActive(link)
  }

  return (
    <nav
      className={` sticky top-0 z-20 w-[100vw] px-4 py-3 flex justify-between bg-background-main items-center lg:justify-around col-span-12 lg:px-32`}
    >
      {/* Logo */}
      <div>
        <Image src={Logo} alt='logo' />
      </div>

      <button onClick={handleMenu} className='z-40 lg:hidden'>
        {/* Menu Icon */}
        {menuIsOpen ? (
          <svg
            className='w-12 h-12 text-paragraph'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        ) : (
          <svg
            className='w-12 h-12 text-paragraph'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16m-7 6h7'
            />
          </svg>
        )}
      </button>

      <div
        className={`h-[100vh] w-[60vw] bg-background-main
        fixed top-0 right-0   duration-200 z-10 flex items-center justify-center  shadow-2xl flex-col
        ${
          menuIsOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-all duration-200 ease-linear
        lg:translate-x-0 lg:bg-transparent lg:shadow-none lg:h-auto lg:top-none lg:right-none lg:flex-row lg:items-center lg:relative lg:w-[72vw] lg:justify-between
        `}
      >
        <ul className=' h-[50vh]  flex flex-col  justify-evenly lg:flex-row lg:items-center  lg:h-auto lg:justify-normal '>
          {navLinks.map((link, i) => (
            <li key={i}>
              <Link
                onClick={()=>handleLinkClick(link)}
                className={`link ${active===link ? 'link-active' : ''}`}
                href={`/${link !== 'product' ? link : ''}`}
              >
                {capitalizeFirstLetter(link)}
              </Link>
            </li>
          ))}
        </ul>

        <div className='mt-10 flex flex-col gap-2 lg:flex-row lg:mt-0 '>
          <button className='button-secondary w-full md:w-auto'>Log in</button>
          <button className='button-primary'>Try for Free</button>
        </div>
      </div>
    </nav>
  )
}

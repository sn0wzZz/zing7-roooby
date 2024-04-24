'use client'
import React, { useState } from 'react'
import Logo from '@/public/Roooby.svg'
import Image from 'next/image'
import Link from 'next/link'
import { capitalizeFirstLetter } from '@/app/utils/helpers'
import { usePathname } from 'next/navigation'
import Container from './Container'

const navLinks = ['product', 'pricing', 'company', 'resources', 'contact']

export default function MainNav() {
  const pathname = usePathname()
  console.log(pathname)
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [active, setActive] = useState(
    pathname === '/' ? pathname : pathname.replace('/', '')
  )

  console.log('active', active)

  const handleMenu = () => {
    setMenuIsOpen((cur) => !cur)
  }

  const handleLinkClick = (link: any) => {
    handleMenu()
    if (link === 'product') return setActive('/')
    setActive(link)
  }

  return (
    <nav className='sticky top-0 w-[100vw] z-40 bg-background-main'>
      <div
        className={`container mx-auto  w-full px-4 py-1 md:py-3 flex justify-between  items-center lg:justify-around col-span-12 `}
      >
        {/* Logo */}
        <div>
          <Image src={Logo} alt='logo' />
        </div>

        <button onClick={handleMenu} className='relative z-40 lg:hidden group'>
          <div className='relative flex overflow-hidden items-center justify-center  w-[52px] h-[52px] transform transition-all  duration-200'>
            <div className='flex flex-col justify-between w-[21px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden'>
              <div
                className={`bg-black h-[2px] w-7 transform transition-all duration-300 rounded-full origin-left ${
                  menuIsOpen && 'rotate-[42deg]'
                }`}
              ></div>
              <div
                className={`bg-black h-[2px] w-1/2 transform transition-all rounded-full duration-300 ${
                  menuIsOpen && '-translate-x-10'
                }`}
              ></div>
              <div
                className={`bg-black h-[2px] w-7 transform transition-all duration-300 rounded-full  origin-left ${
                  menuIsOpen && '-rotate-[42deg]'
                }`}
              ></div>
            </div>
          </div>
        </button>
        <div
          className={`h-[100vh] w-[70vw] bg-background-main
        fixed top-0 right-0   duration-200 z-10 flex items-center justify-center  shadow-2xl flex-col
        ${
          menuIsOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-all duration-200 ease-linear
        lg:translate-x-0 lg:bg-transparent lg:shadow-none lg:h-auto lg:top-none lg:right-none lg:flex-row lg:items-center lg:relative lg:w-[60vw]  lg:justify-between   
        `}
        >
          <ul className=' h-[50vh]  flex flex-col  justify-evenly lg:flex-row lg:items-center  lg:h-auto lg:justify-normal '>
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link
                  onClick={() => handleLinkClick(link)}
                  className={`link ${active === link ? 'link-active' : ''} ${
                    active === '/' && link === 'product' && 'link-active'
                  }`}
                  href={`/${link !== 'product' ? link : ''}`}
                >
                  {capitalizeFirstLetter(link)}
                </Link>
              </li>
            ))}
          </ul>

          <div className='flex flex-col gap-2 mt-10 lg:flex-row lg:mt-0 '>
            <button className='w-full button-secondary md:w-auto'>
              Log in
            </button>
            <button className='w-full button-primary md:w-auto'>
              Try for Free
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

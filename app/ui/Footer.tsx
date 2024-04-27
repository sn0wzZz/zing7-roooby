'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '@/public/Roooby.svg'
import {
  FaChevronRight,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6'
import { capitalizeFirstLetter } from '../utils/helpers'
import { BsGlobe } from 'react-icons/bs'
import Links from './Links'

const company = [
  {
    name: 'company',
    links: ['about', 'pricing', 'jobs', 'blog', 'careers'],
  },
  {
    name: 'product',
    links: [
      'sale software',
      'features',
      'privacy and sequrity',
      'marketplace',
      'status',
      'API',
    ],
  },
  {
    name: 'discover',
    links: [
      'partner Program',
      'get our newsletter',
      'sales Principle Course',
      'what is CRM?',
      'CRM Comparison',
      'resources',
    ],
  },
  {
    name: 'Help Cneter',
    links: ['community', 'knowledge Base', 'academy', 'support'],
  },
]

export default function Footer() {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('English') // Default language

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen((prevIsLanguageMenuOpen) => !prevIsLanguageMenuOpen)
  }

  const changeLanguage = (language:any) => {
    setSelectedLanguage(language)
    toggleLanguageMenu()
  }

  return (
    <footer className='grid grid-cols-1 col-span-12 p-10 xl:grid-cols-12'>
      <div className='container max-w-[1440px] grid grid-cols-2 col-span-12 gap-5 mx-auto mb-5 md:grid-cols-4 lg:grid-cols-6 grid-rows-auto md:mb-10 lg:mb-32 xl:col-span-10 xl:col-start-2'>
        <div className='flex flex-col col-span-2 row-start-3 gap-5 lg:row-start-1'>
          <Image src={Logo} alt='logo' />
          <p>
            We built an elegant solution.
            <br />
            Our team created a fully integrated
            <br />
            sales and marketing solution for SMBs
          </p>
          <Links />
        </div>

        {company.map((tab, i) => (
          <div key={i} className='flex flex-col gap-5 '>
            <span className='text-base font-extrabold'>
              {capitalizeFirstLetter(tab.name)}
            </span>
            <div className='flex flex-col items-start gap-2'>
              {tab.links.map((link, i) => (
                <a key={i} href='#' className=''>
                  {capitalizeFirstLetter(link)}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className='flex flex-col-reverse items-center justify-between col-span-12 gap-3 p-2 border-t md:flex-row md: xl:col-span-10 xl:col-start-2 text-p-secondary'>
        <span>© Cospanyright 2024</span>
        <div className='flex gap-3'>
          <a href='#'>Terms of service</a>
          <a href='#'>Privacy Policy</a>
          <a href='#'>Cookies</a>
        </div>

        <div className='relative inline-block text-left'>
          <div>
            <button
              type='button'
              onClick={toggleLanguageMenu} // Add onClick handler to toggle menu
              className='inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold   '
              id='menu-button'
              aria-expanded='true'
              aria-haspopup='true'
            >
              <div className='flex items-center gap-2'>
                <BsGlobe />
                <span>{selectedLanguage}</span>
                <FaChevronRight size={12} />
              </div>
            </button>
          </div>

          {/* Conditional rendering for language options menu */}
          {isLanguageMenuOpen && (
            <div
              className='absolute right-0 w-56 mt-2 origin-top-right bg-background-main rounded-md  -top-24 ring-1 ring-black ring-opacity-5 focus:outline-none'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='menu-button'
            >
              <div className='py-1' role='none'>
                <a
                  className='block px-4 py-2 text-sm text-gray-700'
                  role='menuitem'
                  id='menu-item-0'
                  onClick={() => changeLanguage('English')} // Change language to English
                >
                  English
                </a>
                <a
                  className='block px-4 py-2 text-sm text-gray-700'
                  role='menuitem'
                  id='menu-item-1'
                  onClick={() => changeLanguage('Bulgarian')} // Change language to Bulgarian
                >
                  Bulgarian
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}

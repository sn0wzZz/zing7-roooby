import Image from 'next/image'
import React from 'react'

import Logo from '@/public/Roooby.svg'
import {
  FaChevronRight,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6'
import { capitalizeFirstLetter } from '../utils/helpers'
import { BsGlobe } from 'react-icons/bs'

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
  return (
    <footer className='grid grid-cols-1 col-span-12 p-10 xl:grid-cols-12'>
      <div className='container grid grid-cols-2 col-span-12 gap-5 mx-auto mb-5 md:grid-cols-4 lg:grid-cols-6 grid-rows-auto md:mb-10 lg:mb-32 xl:col-span-10 xl:col-start-2'>
        <div className='flex flex-col col-span-2 row-start-3 gap-5 lg:row-start-1'>
          <Image src={Logo} alt='logo' />
          <p>
            We built an elegant solution.
            <br />
            Our team created a fully integrated
            <br />
            sales and marketing solution for SMBs
          </p>
          <div className='flex gap-6'>
            <button className='button-social bg-twitter'>
              <FaXTwitter className='size-6 lg:size-5' />
            </button>
            <button className='button-social bg-facebook'>
              <FaFacebookF className='size-6 lg:size-5' />
            </button>
            <button className='button-social bg-linkedin'>
              <FaLinkedinIn className='size-6 lg:size-5' />
            </button>
          </div>
        </div>

        {company.map((tab, i) => (
          <div key={i} className='flex flex-col gap-5 '>
            <span className='text-base font-extrabold'>
              {capitalizeFirstLetter(tab.name)}
            </span>
            <div className='flex flex-col gap-2'>
              {tab.links.map((link, i) => (
                <a key={i} href='#'>
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
        <div className='flex items-center gap-2'>
          <BsGlobe />
          <div className='flex items-center'>
            <span>English</span>
            <FaChevronRight size={12} />
          </div>
        </div>
      </div>
    </footer>
  )
}

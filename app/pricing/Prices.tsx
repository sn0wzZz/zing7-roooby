import React from 'react'
import Container from '../ui/Container'
import { plansData } from '@/public/data'
import { formatCurrency } from '../utils/helpers'
import { FaCheck } from 'react-icons/fa6'
import Feature from './Feature'

export default function Prices() {
  return (
    <Container bgColor='bg-background-main'>
      <div>
        <div className='flex flex-col xl:flex-row gap-5 justify-between xl:items-end'>
          <h1>
            Choose the right plan
            <br /> <span className='text-p-el'>for your business</span>
          </h1>
          <p>
            Built with love for growing businesses. Check out the Roooby CRM{' '}
            <br />
            pricing grid below. Switch between plans at any time.
          </p>
        </div>
        <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-5  py-5 md:py-10 lg:py-32'>
          {plansData.map(
            ({ description, price, tag, features, name, offer }, i) => (
              <div
                key={i}
                className='p-5 xl:p-10 bg-white rounded-2xl flex flex-col gap-5 lg:gap-10'
              >
                <h4 className='flex items-center font-bold'>
                  {name}{' '}
                  {tag && (
                    <span className='text-base lg:text-xs p-1 ml-2 bg-green-200 text-green-500 rounded-md'>
                      {tag.toUpperCase()}
                    </span>
                  )}
                </h4>
                <p className='h-full'>{description}</p>
                <p className='text-6xl lg:text-6xl font-bold w-max text-nowrap'>
                  {formatCurrency(price.value)}{' '}
                  <span className='text-3xl lg:text-3xl text-p-el'>
                    /{price.type}
                  </span>
                </p>
                <div className='flex flex-col gap-5 text-center'>
                  <button className='button-price'>Try for Free</button>
                  <p className='text-p-el text-sm'>{offer}</p>
                </div>
                <div className='border border-p-el'></div>
                <div className='flex flex-col gap-5'>
                  {features.included.map((feature, i) => (
                    <Feature key={i} feature={feature} />
                  ))}
                  {features.excluded &&
                    features.excluded.map((feature, i) => (
                      <Feature key={i} feature={feature} excluded />
                    ))}
                </div>
              </div>
            )
          )}
        </div>
        <div className='p-10 xl:p-20 flex flex-col xl:flex-row gap-10 justify-around items-center border-t border-p-el'>
          <h2 className='text-3xl'>Need help choosing the right plan?</h2>
          <div className='flex gap-5 flex-col sm:flex-row sm:gap-10'>
            <button className='button-secondary text-lg'>Contact sales</button>
            <button className='button-primary text-lg'>Compare plans</button>
          </div>
        </div>
      </div>
    </Container>
  )
}

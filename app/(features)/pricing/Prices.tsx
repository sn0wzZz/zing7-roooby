import React from 'react'
import Container from '../../ui/Container'
import { plansData } from '@/public/data'
import { formatCurrency } from '../../utils/helpers'
import { FaCheck } from 'react-icons/fa6'
import Feature from './Feature'

export default function Prices() {
  return (
    <Container bgColor='bg-background-main'>
      <div>
        <div className='flex flex-col justify-between gap-5 xl:flex-row xl:items-end'>
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
        <div className='grid gap-5 py-5 sm:grid-cols-2 xl:grid-cols-3 md:py-10 lg:py-32'>
          {plansData.map(
            ({ description, price, tag, features, name, offer }, i) => (
              <div
                key={i}
                className='flex flex-col gap-5 p-5 bg-white xl:p-10 rounded-2xl lg:gap-10'
              >
                <h4 className='flex items-center font-bold'>
                  {name}{' '}
                  {tag && (
                    <span className='p-1 ml-2 text-base text-green-500 bg-green-200 rounded-md lg:text-xs tag'>
                      {tag.toUpperCase()}
                    </span>
                  )}
                </h4>
                <p className='h-full'>{description}</p>
                <p className='text-4xl font-bold lg:text-5xl '>
                  {formatCurrency(price.value)}{' '}
                  <span className='text-2xl lg:text-3xl text-p-el'>
                    /{price.type}
                  </span>
                </p>
                <div className='flex flex-col gap-5 text-center'>
                  <button className='button-price'>Try for Free</button>
                  <p className='text-sm text-p-el'>{offer}</p>
                </div>
                <div className='border-t border-p-el'></div>
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
        <div className='flex flex-col items-center gap-10 p-5 border-t md:p-10 xl:p-20 lg:flex-row md:justify-around border-p-el'>
          <h2 className='text-3xl'>Need help choosing the right plan?</h2>
          <div className='flex gap-5 sm:gap-10'>
            <button className='text-lg button-secondary'>Contact sales</button>
            <button className='text-lg button-primary'>Compare plans</button>
          </div>
        </div>
      </div>
    </Container>
  )
}

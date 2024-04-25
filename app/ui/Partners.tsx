import { partnersData } from '@/public/data'
import Image from 'next/image'
import Container from './Container'

export default function Partners({noPadding, bgColor}:any) {
  return (
    <Container noPadding={noPadding} bgColor={bgColor}>
      <div className='flex flex-col items-center gap-5 p-5 my-4 lg:p-0 md lg:flex-row lg:gap-20 lg:my-20'>
        <p className='w-full font-bold lg:w-auto text-p-secondary'>
          Trusted by 1,000+ customers
        </p>
        <div className='grid justify-center grid-cols-3 gap-5 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-5 md:gap-16 xl:gap-20'>
          {partnersData.map((partner, i) => (
            <div key={i} className='flex justify-center '>
              <Image src={partner} alt='logo' />
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

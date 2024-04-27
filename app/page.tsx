import Benefits from './product/Benefits'
import Hero from './product/Hero'
import Integrations from './product/Integrations'
import News from './product/News'
import Perks from './product/Perks'
import Results from './product/Results'
import Reviews from './product/Reviews'
import BottmBanner from './ui/BottmBanner'
import Partners from './ui/Partners'

export default function Home() {
  return (
    <div className='overflow-hidden '>
      <Hero />
      <Partners noPadding bgColor='bg-background-main' />
      <Benefits />
      <Perks />
      <Integrations />
      <News />
      <Results />
      <Reviews />
      <BottmBanner />
    </div>
  )
}

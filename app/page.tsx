import Benefits from './(features)/product/Benefits'
import Hero from './(features)/product/Hero'
import Integrations from './(features)/product/Integrations'
import News from './(features)/product/News'
import Perks from './(features)/product/Perks'
import Results from './(features)/product/Results'
import Reviews from './(features)/product/Reviews'
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

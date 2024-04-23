import Benefits from './Benefits'
import Hero from './Hero'
import Integrations from './Integrations'
import News from './News'
import Perks from './Perks'
import Results from './Results'
import Reviews from './Reviews'

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Benefits />
      <Perks />
      <Integrations />
      <News />
      <Results />
      <Reviews />
    </div>
  )
}

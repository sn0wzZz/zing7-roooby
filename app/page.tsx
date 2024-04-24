import Benefits from './product/Benefits';
import Hero from './product/Hero';
import Integrations from './product/Integrations';
import News from './product/News';
import Perks from './product/Perks';
import Results from './product/Results';
import Reviews from './product/Reviews';

export default function Home() {
  return (
    <div className='overflow-hidden '>
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

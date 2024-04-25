import Container from '../ui/Container'
import Form from './Form'
import MapBox from './MapBox'


export default function Contact() {
  return (
    <Container bgColor='bg-background-main pb-20' noPadding>
      <div className='grid grid-cols-1 gap-5 md:gap-10 lg:gap-28 lg:grid-cols-2'>
        <MapBox />
        <Form />
      </div>
    </Container>
  )
}
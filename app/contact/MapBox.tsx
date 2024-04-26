import TextDetail from '../ui/TextDetail'
import MapComponent from '../ui/MapComponent'

export default function MapBox() {
  return (
    <div>
      <TextDetail
        text1={'Roooby Technologies'}
        text2={'Plovdiv, Bulgaria, bul Vasil Levski 96'}
      />

      <div className='w-full '>
        {/* <MapComponent  /> */}
      </div>

      <div className='flex justify-between'>
        <TextDetail text1={'General'} text2={'hello@me.com'} variant={2} />
        <TextDetail text1={'Support'} text2={'support@me.com'} variant={2} />
      </div>
    </div>
  )
}

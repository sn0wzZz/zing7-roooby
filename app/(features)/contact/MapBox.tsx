import { useMemo } from 'react'
import TextDetail from '../../ui/TextDetail'
import dynamic from 'next/dynamic'

export default function MapBox() {
  const Map = useMemo(
    () =>
      dynamic(() => import('@/app/ui/MapComponent'), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  )

  return (
    <div>
      <TextDetail
        text1={'Roooby Technologies'}
        text2={'Plovdiv, Bulgaria, bul Vasil Levski 96'}
      />

      <div className='w-full'>
        <Map />
      </div>

      <div className='flex justify-between'>
        <TextDetail text1={'General'} text2={'hello@me.com'} variant={2} />
        <TextDetail text1={'Support'} text2={'support@me.com'} variant={2} />
      </div>
    </div>
  )
}

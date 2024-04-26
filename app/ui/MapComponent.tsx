'use client'
import { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css' 
import * as L from 'leaflet'
import 'leaflet-defaulticon-compatibility'

import Pin from '@/public/Pin.png'



const PinIcon = new L.Icon({
  iconUrl: Pin.src,
  iconSize: [70, 70], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
})

export default function MapComponent() {
  const [center, setCenter] = useState<[number, number] | undefined>(undefined)

  useEffect(() => {
    const getCurrentLocation = async () => {
      try {
        const position = await new Promise<GeolocationPosition>(
          (resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject)
          }
        )

        const { latitude, longitude } = position.coords
        setCenter([latitude, longitude])
      } catch (error) {
        console.error('Error retrieving current location:', error)
      }
    }

    getCurrentLocation()
  }, [])

  console.log(center)

  return (
    <div style={{ height: '400px' }}>
      {center ? (
        <MapContainer
          center={center}
          zoom={17}
          scrollWheelZoom={false}
          style={{ height: '100%', zIndex:0 }}
        >
          <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
          <Marker position={center} icon={PinIcon}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      ) : (
        <div>Loading map...</div>
      )}
    </div>
  )
}
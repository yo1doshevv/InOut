import React from 'react'
import Location from '../Location/Location'
import Reklama from '../Reklama/Reklama'
import VideoSlide from '../VideoSlide/VideoSlide'
import Nimaqilolamiz from '../Nimaqilolamiz/Nimaqilolamiz'
import Conaction from '../Conaction/Conaction'
import Mijozlar from '../Mijozlar/Mijozlar'
import Numbers1 from '../Numbers1/Numbers1'
import Numbers2 from '../Numbers2/Numbers2'
import Jamoa from '../Jamoa/Jamoa'
import SHarh from '../SHarh/SHarh'

const Home = () => {
  return (
    <div>
      <Reklama/>
        <Location/>
        <VideoSlide/>
        <Numbers1/>
        <Nimaqilolamiz/>
        <Jamoa/>
        <Mijozlar/>
        <Conaction/>
        <Numbers2/>
        <SHarh/>
    </div>
  )
}

export default Home
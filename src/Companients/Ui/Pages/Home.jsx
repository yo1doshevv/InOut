import React from 'react'
import Location from '../Location/Location'
import Reklama from '../Reklama/Reklama'
import VideoSlide from '../VideoSlide/VideoSlide'
import Nimaqilolamiz from '../Nimaqilolamiz/Nimaqilolamiz'
import Conaction from '../Conaction/Conaction'

const Home = () => {
  return (
    <div>
      <Reklama/>
        <Location/>
        <VideoSlide/>
        <Nimaqilolamiz/>
        <Conaction/>
    </div>
  )
}

export default Home
import React from 'react'
import "./Bottom.scss"

const Bottom = () => {
  return (
    <div className='bottom'>
      <div className="bottom_wrapper">
        <div className="bottom_img">
          <img src="Img/bottom.png" alt="" />
        </div>
        <div className="bottom_about">
            <div className="bottom_left">
            <img src="Img/InOut.png" alt="" />
            <p>InOut Jamosi</p>
            </div>
            <div className="bottom_right">
              Mualliflik © huquqi2014-2024 barcha huquqlar himoyalangan
            </div>
        </div>
      </div>
    </div>
  )
}

export default Bottom
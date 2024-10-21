import React from "react";
import "./Nimaqilolamiz.scss";
import { NavLink } from "react-router-dom";

const Nimaqilolamiz = () => {
  return (
    <div className="niam">
      <div className="nima_wrapper">
        <div className="nima_title">
          <h1>Biz Nimaqilolamiz</h1>
        </div>
        <div className="nima_items">
          <div className="nima_box">
            <img
              src="https://admin.inoutads.uz/uploads/images/service/4/preview-64c4b901ac4a7.png"
              alt=""
            />
            <div className="nima_boxtit">
              <h1>salom dunyo</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Saepe asperiores exercitationem <br />
                
              </p>

             <NavLink className="link" to="/cervices">Koproq</NavLink>
            </div>
          </div>
          <div className="nima_box">
            <img
              src="https://admin.inoutads.uz/uploads/images/service/1/preview-64ddb6f13a162.jpeg"
              alt=""
            />
            <div className="nima_boxtit">
              <h1>salom dunyo</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Saepe asperiores exercitationem <br />
                
              </p>
             <NavLink className="link" to="/cervices">Koproq</NavLink>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Nimaqilolamiz;

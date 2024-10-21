import React from "react";
import "./Reklama.scss";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";


const Reklama = () => {
  const settings2 = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="reklama">
      <div className="reklama_bacground">
        <img
          src="https://admin.inoutads.uz/uploads/images/banner/2/64ef346137d6b.jpg"
          alt=""
        />
      </div>
      <div className="reklama_wrapper">
        <div className="slider-container slider-left">
        <div>
              <div className="reklama_title">
                <h1>
                  Xizmatlarimiz bilan <br /> to'liq tanishmas <br /> ekansiz....
                </h1>
                <div className="reklama_btn">
                  <button className="transparent-button"><NavLink  className="nava" to="/contact">Konsultatsiya Olish</NavLink></button>
                </div>
              </div>
            </div>
            <div>
              
            </div>
        </div>
            
        <div className="slider-container slider-right">
          <Slider {...settings2}>
            <div className="reklama_right">
              <img
              className="slic"
                src="https://kirdchiqdi.netlify.app/assets/hog-Zfj9bul5.jpeg"
                alt=""
              />
            </div>
            <div className="reklama_right">
              <img className="slic"
                src="https://admin.inoutads.uz/uploads/images/video/1/preview-64d70ef7e76b7.jpg"
                alt=""
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Reklama;

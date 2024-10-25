import React, { useEffect, useRef, useState } from "react";
import "./Reklama.scss";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';


const Reklama = () => {

  const typedElement = useRef(null); 
  const typedInstance = useRef(null); 
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const { t, i18n } = useTranslation(); // Tarjima funksiyasini olish
  const [language, setLan] = useState("");

  const handleLan = (e) => {
    const selectedLanguage = e.target.value;
    setLan(selectedLanguage);
    i18n.changeLanguage(selectedLanguage); // i18next da tilni o'zgartirish
  }

  useEffect(() => {
    console.log(language); // Til o'zgarishini kuzatish
  }, [language]);


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
      <div>
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
                 {t("reklama")}
                </h1>
                <div className="reklama_btn">
                  <button className="transparent-button"><NavLink  className="nava" to="/contact">{t("konsul")}</NavLink></button>
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
    </div>
  );
};

export default Reklama;

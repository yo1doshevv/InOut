import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "./VideoSlide.scss";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const VideoSlide = () => {

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
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="video">
      <div className="video_wrapper">
        <div className="video_title">
          <h1>{t("video")}</h1>
          <NavLink to="/cervices">{t("bvideo")}</NavLink>
        </div>
        <div className="video_vid">
          <Slider {...settings2}>
            <div className="video_vid1">
            <img
              src="https://kirdchiqdi.netlify.app/assets/hog-Zfj9bul5.jpeg"
              alt=""
            />
            </div>
            <div className="video_vid2">
            <img
              src="https://admin.inoutads.uz/uploads/images/video/1/preview-64d70ef7e76b7.jpg"
              alt=""
            />
            </div>
            <div className="video_vid1">
            <img
              src="https://kirdchiqdi.netlify.app/assets/hog-Zfj9bul5.jpeg"
              alt=""
            />
            </div>
           <div className="video_vid2">
           <img
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

export default VideoSlide;

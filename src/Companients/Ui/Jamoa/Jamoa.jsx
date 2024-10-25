import React, { useEffect, useRef, useState } from "react";
import "./Jamoa.scss";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Jamoa = () => {

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
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="jamoa">
      <div className="jamoa_wrapper">
        <div className="jamoa_title">
          <div className="jamoa_left">
            <h1>
              {t("bizning")} <span style={{ color: "#3c88e5" }}>{t("jamo")}</span>
            </h1>
            <p>
             {t("text")}{" "}
              <span style={{ color: "#3c88e5" }}>{t("sifat")}</span>,{" "}
              <span style={{ color: "#3c88e5" }}>{t("ishonch")}</span> {t("va")}{" "}
              <span style={{ color: "#3c88e5" }}>{t("xavfsiz")}</span>
            </p>
          </div>
          <div className="jamoa_right">
            <NavLink to="/sharhlar">{t("baholash")}</NavLink>
          </div>
        </div>
        <div className="jamoa_aboutus">
          <Slider {...settings} className="box">
            <div className="jamoa_cards">
              <h3 >
                {" "}
                <img 
                  src="https://admin.inoutads.uz/uploads/images/team/2/preview-64c895c9f3f5a.jpg"
                  alt="Mira"
                />
              </h3>

              <h2>Mira</h2>
              <p>{t("dasturchi")}</p>

              <h2>
                {" "}
                <img src="/Img/insta.png" alt="Instagram" />
                <img src="/Img/telegram.png" alt="Telegram" />
                <img src="/Img/youtube.png" alt="YouTube" />
              </h2><br />
              <div className="jamoa_right btn">
           <NavLink to="/sharhlar">{t("baholash")}</NavLink>
          </div>
            </div>
            <div className="jamoa_cards">
              <h3>
                {" "}
                <img
                  src="https://admin.inoutads.uz/uploads/images/team/1/preview-6502ee5e6af53.jpg"
                  alt="Mira"
                />
              </h3>

              <h2>Mira</h2>
              <p>Android dasturchi</p>

              <h2>
                {" "}
                <img src="/Img/insta.png" alt="Instagram" />
                <img src="/Img/telegram.png" alt="Telegram" />
                <img src="/Img/youtube.png" alt="YouTube" />
              </h2>
              <br />
              <div className="jamoa_right btn">
            <NavLink to="/sharhlar">{t("baholash")}</NavLink>
          </div>
            </div>
            <div className="jamoa_cards">
              <h3>
                {" "}
                <img
                  src="https://admin.inoutads.uz/uploads/images/team/5/preview-64c49eb20856f.png"
                  alt="Mira"
                />
              </h3>

              <h2>Mira</h2>
              <p>Android dasturchi</p>

              <h2>
                {" "}
                <img src="/Img/insta.png" alt="Instagram" />
                <img src="/Img/telegram.png" alt="Telegram" />
                <img src="/Img/youtube.png" alt="YouTube" />
              </h2>
              <br />
              <div className="jamoa_right btn">
            <NavLink to="/sharhlar">{t("baholash")}</NavLink>
          </div>
            </div>
            <div className="jamoa_cards">
              <h3>
                {" "}
                <img
                  src="https://admin.inoutads.uz/uploads/images/team/6/preview-64c49ebfa48bb.png"
                  alt="Mira"
                />
              </h3>

              <h2>Mira</h2>
              <p>Android dasturchi</p>

              <h2>
                {" "}
                <img src="/Img/insta.png" alt="Instagram" />
                <img src="/Img/telegram.png" alt="Telegram" />
                <img src="/Img/youtube.png" alt="YouTube" />
              </h2>
              <br />
              <div className="jamoa_right btn">
            <NavLink to="/sharhlar">{t("baholash")}</NavLink>
          </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Jamoa;

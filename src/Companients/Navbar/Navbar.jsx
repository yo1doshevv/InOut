import React, { useEffect, useRef, useState } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import AccessTimeTwoToneIcon from "@mui/icons-material/AccessTimeTwoTone";
import LocalPhoneTwoToneIcon from "@mui/icons-material/LocalPhoneTwoTone";
import WbSunnyTwoToneIcon from "@mui/icons-material/WbSunnyTwoTone";
import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import NightlightIcon from '@mui/icons-material/Nightlight';

import Typed from 'typed.js';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const typedElement = useRef(null); 
  const typedInstance = useRef(null); 
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);


  const { t, i18n } = useTranslation(); // Tarjima funksiyasini olish
  const [language, setLan] = useState("");

  const handleLan = (e) => {
    const selectedLanguage = e.target.value;
    setLan(selectedLanguage);
    i18n.changeLanguage(selectedLanguage); // i18next da tilni o'zgartirish
  }

  // Toggle function
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    console.log(language); // Til o'zgarishini kuzatish
  }, [language]);


  useEffect(() => {
    typedInstance.current = new Typed(typedElement.current, {
      strings: ['Binolarda reklama', 'Avtobuslarda reklama', 'Led ekranlarda reklama'], 
      typeSpeed: 50, // Yozish tezligi
      backSpeed: 50, // O'chirish tezligi
      backDelay: 30, // Yozuv tugagandan keyin o'chirishni boshlash uchun kutish vaqti
      loop: true, // Takrorlanishni yoqish
      fadeOut: false // Yozuvni bir vaqtda o'chirishni o'chirib qo'yish
    });

    // Komponent tozalanganda typed obyektni tozalash
    return () => {
      typedInstance.current.destroy();
    };
  }, []);

  const handleFocus = () => {
    setIsFocused(true);
    setInputValue(''); // Input qiymatini tozalash
    if (typedInstance.current) {
      typedInstance.current.stop(); // Foydalanuvchi yozishni boshlaganda Typed.js to'xtaydi
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (typedInstance.current) {
      typedInstance.current.start(); // Foydalanuvchi yozishni tugatgandan keyin Typed.js qayta boshlanadi
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value); // Foydalanuvchi inputni o'zgartirganda qiymatni yangilash
  };

  return (
    <div className="navbar">
      <div>
      <div className="navbar_wrapper">
        <div className="navbar_nav">
          <NavLink to="/">{t("asosiy")}</NavLink>
          <NavLink to="/cervices">{t("xizmatlar")}</NavLink>
          <NavLink to="/about">{t("haqimizda")}</NavLink>
          <NavLink to="/contact">{t("aloqa")}</NavLink>
          <NavLink to="/vakansiya">{t("vakansiya")}</NavLink>
          <NavLink to="/sharhlar">{t("sharhlar")}</NavLink>
        </div>
        <div className="navbar_input">
          <p><SearchTwoToneIcon sx={{ color: 'white' }}/></p>
          <input
            type="text"
            placeholder=""
            value={inputValue} // Input qiymatini bog'lash
            onFocus={handleFocus} // Foydalanuvchi inputni bosganda
            onBlur={handleBlur} // Foydalanuvchi inputdan chiqqanda
            onChange={handleChange} // Foydalanuvchi yozuvni o'zgartirganda
            ref={typedElement}
          />
        </div>
        <div className="navbar_contakt">
          <div className="navbar_time">
            <AccessTimeTwoToneIcon sx={{ color: 'rgb(206, 206, 206)' }}/>
            <p>9:00-17:00 du-ju</p>
          </div>
          <div className="navbar_tel">
            <LocalPhoneTwoToneIcon sx={{ color: 'rgb(206, 206, 206)',  }}/>
            <p>+998 55 201 90 10</p>
          </div>
        </div>
        <div className="navbar_darli">
        
         
        </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;

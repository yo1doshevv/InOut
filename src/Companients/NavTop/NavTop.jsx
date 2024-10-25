import React, { useEffect, useRef, useState } from "react";
import "./NavTop.scss";
import TelegramIcon from '@mui/icons-material/Telegram';
import TextsmsTwoToneIcon from '@mui/icons-material/TextsmsTwoTone';
import DownloadTwoToneIcon from '@mui/icons-material/DownloadTwoTone';
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const NavTop = () => {
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

  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle function
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    console.log(language); // Til o'zgarishini kuzatish
  }, [language]);

  return (
    <div className="navtop">
      <div  >
      <div className="navtop_wrapper">
        <div className="navtop_img">
          <img src="/Img/InOut.png" alt="InOut logo" />
        </div>
        <div className="navtop_button">
          <p>
            <TelegramIcon sx={{ color: 'white' }} />
          </p>
          <a className="animated-gradient" href="https://t.me/My_VALLEY">{t("telegram")}</a>
          <p>
            <DownloadTwoToneIcon sx={{ color: 'white' }} />
          </p>
          <a className="animated-gradient" href="">{t("presentation")}(34mb)</a>
          <p>
            <TextsmsTwoToneIcon sx={{ color: 'white' }} />
          </p>
         <NavLink className="animated-gradient" to="/contact">{t("submit")}</NavLink>
        </div>
        <div className="navtop_language">
        <select onChange={handleLan} className='navbar_languages' name="Languages" id="">
          <option className='navbar_lang' value="uz">Uz</option>
          <option className='navbar_lang' value="en">En</option>
          <option className='navbar_lang' value="ru">Ru</option>
        </select>
        </div>
        </div>
      </div>
    </div>
  );
};

export default NavTop;

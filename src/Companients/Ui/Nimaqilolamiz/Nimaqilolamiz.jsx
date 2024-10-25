import React, { useEffect, useRef, useState } from "react";
import "./Nimaqilolamiz.scss";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Nimaqilolamiz = () => {

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
  return (
    <div className="niam">
      <div className="nima_wrapper">
        <div className="nima_title">
          <h1>{t("nimaqil")}</h1>
        </div>
        <div className="nima_items">
          <div className="nima_box">
            <img
              src="https://admin.inoutads.uz/uploads/images/service/4/preview-64c4b901ac4a7.png"
              alt=""
            />
            <div className="nima_boxtit">
              <h1>{t("rxizmati")}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Saepe asperiores exercitationem <br />
                
              </p>

             <NavLink className="link" to="/cervices">{t("koproq")}</NavLink>
            </div>
          </div>
          <div className="nima_box">
            <img
              src="https://admin.inoutads.uz/uploads/images/service/1/preview-64ddb6f13a162.jpeg"
              alt=""
            />
            <div className="nima_boxtit">
              <h1>{t("rxizmati")}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Saepe asperiores exercitationem <br />
                
              </p>
             <NavLink className="link" to="/cervices">{t("koproq")}</NavLink>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Nimaqilolamiz;

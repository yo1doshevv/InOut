import React, { useEffect, useRef, useState } from "react";
import "./More.scss";
import CheckIcon from "@mui/icons-material/Check";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const More = () => {
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
    <div className="more">
      <div className="more_wrapper">
        <div className="more_title">
          <h1>{t("ish")}</h1>
        </div>
        <div className="more_cards">
          <div className="more_card1">
            <h2>{t("qongiroq")}</h2>
            <h4>{t("kerakli")}</h4>
            <p>
              <CheckIcon /> {t("nike")}
            </p>
            <NavLink className="link" to="/about">{t("koproq")}</NavLink>{" "}
          </div>
          <div className="more_card1">
            <h2>{t("qongiroq")}</h2>
            <h4>{t("kerakli")}</h4>
            <p>
              <CheckIcon /> {t("nike")}
            </p>
            <NavLink className="link" to="/about">{t("koproq")}</NavLink>{" "}
          </div>
          <div className="more_card1">
            <h2>{t("qongiroq")}</h2>
            <h4>{t("kerakli")}</h4>
            <p>
              <CheckIcon /> {t("nike")}
            </p>
            <NavLink className="link" to="/about">{t("koproq")}</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;

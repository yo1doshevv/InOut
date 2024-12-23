import React, { useEffect, useRef, useState } from "react";
import "./Location.scss";
import { blue } from "@mui/material/colors";
import { useTranslation } from 'react-i18next';

const Location = () => {
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
    <div className="loc">
      <div></div>
      <div className="loc_wrapper">
        <div className="loc_title">
          <h1>
           {t("local")}
            <span className="loc_span" style={{color: blue}}> {t("joy")}</span>...
          </h1>
        </div>
        <div className="loc_location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.221052227804!2d144.96316091571738!3d-37.81421774274388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43c29f5f3d%3A0xc08a1e5902cbfd9b!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1632739477317!5m2!1sen!2sau"
            width="1365"
            height="700"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="loc_btn">
          <button><img className="card1" src="https://admin.inoutads.uz/uploads/images/category-map/8/64c49dd3547d2.png"  alt="" />{t("btn")}</button>
          <button><img className="card2" src="https://admin.inoutads.uz/uploads/images/category-map/8/64c49dd3547d2.png"  alt="" />{t("btn")}</button>
          <button><img className="card3" src="https://admin.inoutads.uz/uploads/images/category-map/8/64c49dd3547d2.png"  alt="" />{t("btn")}</button>
          <button><img className="card4" src="https://admin.inoutads.uz/uploads/images/category-map/8/64c49dd3547d2.png"  alt="" />{t("btn")}</button>
          <button><img className="card5" src="https://admin.inoutads.uz/uploads/images/category-map/8/64c49dd3547d2.png"  alt="" />{t("btn")}</button>
          <button><img className="card6" src="https://admin.inoutads.uz/uploads/images/category-map/8/64c49dd3547d2.png"  alt="" />{t("btn")}</button>
          <button><img className="card7" src="https://admin.inoutads.uz/uploads/images/category-map/8/64c49dd3547d2.png"  alt="" />{t("btn")}</button>
          <button><img className="card8" src="https://admin.inoutads.uz/uploads/images/category-map/8/64c49dd3547d2.png"  alt="" />{t("btn")}</button>
          <button><img className="card9" src="https://admin.inoutads.uz/uploads/images/category-map/8/64c49dd3547d2.png"  alt="" />{t("btn")}</button>
          <button><img className="card10" src="https://admin.inoutads.uz/uploads/images/category-map/8/64c49dd3547d2.png" alt="" />{t("btn")}</button>
          <button><img className="card11" src="https://admin.inoutads.uz/uploads/images/category-map/8/64c49dd3547d2.png" alt="" />{t("btn")}</button>
        </div>
      </div>
    </div>
  );
};

export default Location;

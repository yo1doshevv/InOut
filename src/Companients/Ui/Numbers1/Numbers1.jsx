import React, { useEffect, useRef, useState } from "react";
import "./Numbers1.scss";
import CountUp from "react-countup";
import { useTranslation } from 'react-i18next';

const Numbers1 = () => {
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
    <div className="num">
      <div className="num_wrapper">
        <div className="num_title">
          <h1>
           {t("bizda")}{" "}
            <span style={{ color: "rgb(24, 125, 226)" }}>{t("mavjud")}</span>
          </h1>
        </div>
        <div className="num_count">
          <div className="num_box">
            <div className="num_countup">
              <CountUp className="num_up" start={0} end={20} duration={1} once={false} />
              <p className="num_p">+</p>
            </div>
            <p className="num_tit">{t("xodimlar")}</p>
          </div>
          <div className="num_box">
            <div className="num_countup">
              <CountUp className="num_up" start={0} end={1672} duration={1} once={false} />
              <p className="num_p">+</p>
            </div>
            <p className="num_tit">{t("reklamas")}</p>
          </div>
          <div className="num_box">
            <div className="num_countup">
              <CountUp className="num_up" start={0} end={1660} duration={1} once={false} />
              <p className="num_p">+</p>
            </div>
            <p className="num_tit">{t("muvafaqiyat")}</p>
          </div>
          <div className="num_box">
            <img src="https://admin.inoutads.uz/uploads/images/team/1/64cb721128093.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers1;

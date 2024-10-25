import React, { useEffect, useRef, useState } from "react";
import "./Number.scss";
import CountUp from "react-countup";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Numbers2 = () => {
  const typedElement = useRef(null);
  const typedInstance = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const { t, i18n } = useTranslation(); // Tarjima funksiyasini olish
  const [language, setLan] = useState("");

  const handleLan = (e) => {
    const selectedLanguage = e.target.value;
    setLan(selectedLanguage);
    i18n.changeLanguage(selectedLanguage); // i18next da tilni o'zgartirish
  };

  useEffect(() => {
    console.log(language); // Til o'zgarishini kuzatish
  }, [language]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [value, setValue] = useState(0);

  return (
    <div className="num1">
      <div className="num1_wrapper">
        <div class="image-container">
          <img
            src="https://admin.inoutads.uz/uploads/images/banner/1/64c4b7fa506b5.png"
            alt=""
          />
        </div>
        <div className="num1_cunter">
          <div className="num1_hed">
            <h1>
              {t("biz")} <span className="num1_span">{t("haqimizda")}</span>
            </h1>
            <NavLink className="hed" to="/about">
              {t("batafsil")}
            </NavLink>
          </div>
          <div className="num1_coup">
            <div className="num1_box">
              <h1>
                {" "}
                <CountUp start={0} end={3} duration={2} />
                <span style={{ color: "#1877dd" }}>+</span>
              </h1>
              <p>{t("xodimlar")}</p>
              <p>{t("3+")}</p>
            </div>
            <div className="num1_box">
              <h1>
                {" "}
                <CountUp start={0} end={24} duration={2} />
                <span style={{ color: "#1877dd" }}>+</span>
              </h1>
              <p>{t("jamiyatlar")}</p>
              <p>{t("24+")}</p>
            </div>
            <div className="num1_box">
              <h1>
                {" "}
                <CountUp start={0} end={138} duration={2} />
                <span style={{ color: "#1877dd" }}>+</span>
              </h1>
              <p>{t("sayt")}</p>
              <p>{t("138")}</p>
            </div>
            <div className="num1_box">
              <h1>
                {" "}
                <CountUp start={0} end={338} duration={2} />
                <span style={{ color: "#1877dd" }}>+</span>
              </h1>
              <p>{t("jamiyatlar")}</p>
              <p>{t("338")} </p>
            </div>
            <div className="num1_box">
              <h1>
                {" "}
                <CountUp start={0} end={53} duration={2} />
                <span style={{ color: "#1877dd" }}>+</span>
              </h1>
              <p>{t("grafana")}</p>
              <p>{t("53")}</p>
            </div>
            <div className="num1_box">
              <h1>
                {" "}
                <CountUp start={0} end={218} duration={2} />
                <span style={{ color: "#1877dd" }}>+</span>
              </h1>
              <p>{t("yil")}</p>
              <p>{t("218")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers2;

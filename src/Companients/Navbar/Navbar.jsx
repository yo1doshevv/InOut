import React, { useEffect, useRef, useState } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import AccessTimeTwoToneIcon from "@mui/icons-material/AccessTimeTwoTone";
import LocalPhoneTwoToneIcon from "@mui/icons-material/LocalPhoneTwoTone";
import WbSunnyTwoToneIcon from "@mui/icons-material/WbSunnyTwoTone";
import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import Typed from 'typed.js';

const Navbar = () => {
  const typedElement = useRef(null); 
  const typedInstance = useRef(null); 
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

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
      <div className="navbar_wrapper">
        <div className="navbar_nav">
          <NavLink to="/">Asosiy</NavLink>
          <NavLink to="/cervices">Xizmatlar</NavLink>
          <NavLink to="/about">Biz Haqimizda</NavLink>
          <NavLink to="/contact">Aloqa</NavLink>
          <NavLink to="/vakansiya">Vakansiya</NavLink>
          <NavLink to="/sharhlar">Sharhlar</NavLink>
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
          <button>
            <WbSunnyTwoToneIcon sx={{color: 'rgb(255, 255, 255)'}}/>
          </button>
          <button>
            <FavoriteBorderTwoToneIcon sx={{color: 'rgb(255, 255, 255)'}}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

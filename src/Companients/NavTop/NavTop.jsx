import React from "react";
import "./NavTop.scss";
import TelegramIcon from '@mui/icons-material/Telegram';
import TextsmsTwoToneIcon from '@mui/icons-material/TextsmsTwoTone';
import DownloadTwoToneIcon from '@mui/icons-material/DownloadTwoTone';
import { NavLink } from "react-router-dom";

const NavTop = () => {
  return (
    <div className="navtop">
      <div className="navtop_wrapper">
        <div className="navtop_img">
          <img src="/Img/InOut.png" alt="InOut logo" />
        </div>
        <div className="navtop_button">
          <p>
            <TelegramIcon sx={{ color: 'white' }} />
          </p>
          <a className="animated-gradient" href="https://t.me/My_VALLEY">Telegram</a>
          <p>
            <DownloadTwoToneIcon sx={{ color: 'white' }} />
          </p>
          <a className="animated-gradient" href="">Taqdimot(34mb)</a>
          <p>
            <TextsmsTwoToneIcon sx={{ color: 'white' }} />
          </p>
         <NavLink className="animated-gradient" to="/contact">Arizangizni Yuboring</NavLink>
        </div>
        <div className="navtop_language">
          <div className="navtop_uz">
            <img src="/Img/uz.png" alt="uzb" />
            <p>UZ</p>
          </div>
          <div className="navtop_en">
            <img src="/Img/en.png" alt="uzb" />
            <p>EN</p>
          </div>
          <div className="navtop_ru">
            <img src="/Img/ru.png" alt="uzb" />
            <p>RU</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavTop;

import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import AccessTimeTwoToneIcon from "@mui/icons-material/AccessTimeTwoTone";
import LocalPhoneTwoToneIcon from "@mui/icons-material/LocalPhoneTwoTone";
import WbSunnyTwoToneIcon from "@mui/icons-material/WbSunnyTwoTone";
import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_wrapper">
        <div className="navbar_nav">
          <NavLink to="/">Asosiy</NavLink>
          <NavLink to="/cervices">Xizmatlar</NavLink>
          <NavLink to="/about">Biz Haqimizda</NavLink>
          <NavLink to="/cervis">Xizmat</NavLink>
          <NavLink to="/vakansiya">Vakansiya</NavLink>
          <NavLink to="/sharhlar">Sharhlar</NavLink>
        </div>
        <div className="navbar_input">
          <p><SearchTwoToneIcon sx={{ color: 'white' }}/></p>
          <input type="text" placeholder="LED ekranlar reklamasi" />
        </div>
        <div className="navbar_contakt">
          <div className="navbar_time">
            <AccessTimeTwoToneIcon sx={{ color: 'rgb(206, 206, 206)' }}/>
            <p>9:00-17:00 du-ju</p>
          </div>
          <div className="navbar_tel">
            <LocalPhoneTwoToneIcon sx={{ color: 'rgb(206, 206, 206)' }}/>
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
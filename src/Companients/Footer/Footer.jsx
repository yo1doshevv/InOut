import React from "react";
import "./Footer.scss"
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_wrapper">
        <div className="footer_img">
          <img src="Img/InOut.png" alt="" />
        </div>
        <div className="footer_loc">
          <div className="footer_data">
            <CalendarMonthTwoToneIcon />
            <p>9:00-17:00 du-ju</p>
          </div>
          <div className="footer_data">
            <LocationOnTwoToneIcon />
            <p>O'zbekiston Barcha Hududlarida</p>
          </div>
          <div className="footer_data">
            <EmailTwoToneIcon />
            <p>
              mail info@inoutgroup.uz <br /> <br />inoutadsagency@gmail.com
            </p>
          </div>
        </div>
        <div className="footer_ijtimoiy">
          <p>Bizning Ijtimoiy Tarmoqlarimiz</p>
          <div className="footer_imgs">
            <a href="https://t.me/inout_group"><img src="/Img/telegram.png" alt="" /></a>
            <a href="https://www.whatsapp.com/"><img src="/Img/whatsup.png" alt="" /></a>
            <a href="https://www.facebook.com/"><img src="/Img/facebook.png" alt="" /></a>
            <a href="https://www.instagram.com/"><img src="/Img/insta.png" alt="" /></a>
            <a href="https://youtube.com"><img src="/Img/youtube.img" alt="" /></a>
            <a href="https://dicord.com"><img src="/Img/dis.png" alt="" /></a>
            <a href="http://wikipedia.com/"><img src="/Img/wiki.png" alt="" /></a>
          </div>
          <div className="footer_tel">
            <p>+998 94 001 00 10</p>
            <p>+998 94 001 00 10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

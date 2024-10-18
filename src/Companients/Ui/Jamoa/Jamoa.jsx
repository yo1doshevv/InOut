import React from "react";
import "./Jamoa.scss";
import Slider from "react-slick";

const Jamoa = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="jamoa">
      <div className="jamoa_wrapper">
        <div className="jamoa_title">
          <div className="jamoa_left">
            <h1>
              Bizning <span style={{ color: "#3c88e5" }}>Jamoamiz</span>
            </h1>
            <p>
              Bu sizning buyurtmangizni bajaradigan jamoa{" "}
              <span style={{ color: "#3c88e5" }}>sifatli</span>,{" "}
              <span style={{ color: "#3c88e5" }}>ishonchli</span> va{" "}
              <span style={{ color: "#3c88e5" }}>xavfsiz</span>
            </p>
          </div>
          <div className="jamoa_right">
            <a href="">To'liq ro'yxatni ko'ring</a>
          </div>
        </div>
        <div className="jamoa_aboutus">
          {/* <Slider {...settings} className="box">
            <div className="jamoa_cards">
                <div className="jamoa_img">
                  <img
                    src="https://admin.inoutads.uz/uploads/images/team/2/preview-64c895c9f3f5a.jpg"
                    alt="Mira"
                  />
                </div>
                <h2>Mira</h2>
                <p>Android dasturchi</p>
                <div className="jamoa_ijt">
                  <img src="/Img/insta.png" alt="Instagram" />
                  <img src="/Img/telegram.png" alt="Telegram" />
                  <img src="/Img/youtube.png" alt="YouTube" />
                </div>
              
                <div className="jamoa_img">
                  <img
                    src="https://admin.inoutads.uz/uploads/images/team/2/preview-64c895c9f3f5a.jpg"
                    alt="Mira"
                  />
                </div>
                <h2>Mira</h2>
                <p>Android dasturchi</p>
                <div className="jamoa_ijt">
                  <img src="/Img/insta.png" alt="Instagram" />
                  <img src="/Img/telegram.png" alt="Telegram" />
                  <img src="/Img/youtube.png" alt="YouTube" />
                </div>
              
                <div className="jamoa_img">
                  <img
                    src="https://admin.inoutads.uz/uploads/images/team/2/preview-64c895c9f3f5a.jpg"
                    alt="Mira"
                  />
                </div>
                <h2>Mira</h2>
                <p>Android dasturchi</p>
                <div className="jamoa_ijt">
                  <img src="/Img/insta.png" alt="Instagram" />
                  <img src="/Img/telegram.png" alt="Telegram" />
                  <img src="/Img/youtube.png" alt="YouTube" />
                </div>
              
                <div className="jamoa_img">
                  <img
                    src="https://admin.inoutads.uz/uploads/images/team/2/preview-64c895c9f3f5a.jpg"
                    alt="Mira"
                  />
                </div>
                <h2>Mira</h2>
                <p>Android dasturchi</p>
                <div className="jamoa_ijt">
                  <img src="/Img/insta.png" alt="Instagram" />
                  <img src="/Img/telegram.png" alt="Telegram" />
                  <img src="/Img/youtube.png" alt="YouTube" />
              
              </div>
             
            </div>
          </Slider> */}
        </div>
      </div>
    </div>
  );
};

export default Jamoa;

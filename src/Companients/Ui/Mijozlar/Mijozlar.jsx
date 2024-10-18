import React from "react";
import "./Mijozlar.scss";
import Slider from "react-slick";

const Mijozlar = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Avtomatik slayd qilishni yoqish
    autoplaySpeed: 2000, // Har 3 soniyada slayd almashadi
  };

  return (
    <div className="mijoz">
      <div className="mijoz_wrapper">
        <div className="mijoz_heder">
          <div className="mijoz_title">
            <h1>Ishonchli mijozlar</h1>
            <div className="mijoz_text">
              <p>Davom etilmoqda... Sizning logoingiz uchun ham joy mavjud</p>
            </div>
          </div>
          <div className="mijoz_btn">
            <button>Mijoz bolish</button>
          </div>
        </div>
        <div className="mijoz_box">
          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <h3>
                  <h3>
                    <img
                      src="https://admin.inoutads.uz/uploads/images/trust/10/preview-64d9ceaf11e21.png"
                      alt=""
                    />
                  </h3>
                </h3>
              </div>
              <div>
                <h3>
                  {" "}
                  <h3>
                    <img
                      src="https://admin.inoutads.uz/uploads/images/trust/11/preview-64d9cf1ef26c1.png"
                      alt=""
                    />
                  </h3>
                </h3>
              </div>
              <div>
                <h3>
                  {" "}
                  <h3>
                    <img
                      src="https://admin.inoutads.uz/uploads/images/trust/12/preview-64d9cf4bbd002.jpeg"
                      alt=""
                    />
                  </h3>
                </h3>
              </div>
              <div>
                <h3>
                  {" "}
                  <h3>
                    <img
                      src="https://admin.inoutads.uz/uploads/images/trust/13/preview-64d9cfa75eaf1.png"
                      alt=""
                    />
                  </h3>
                </h3>
              </div>
              <div>
                <h3>
                  {" "}
                  <h3>
                    <img
                      src="https://admin.inoutads.uz/uploads/images/trust/9/preview-64c4a18c2b5af.png"
                      alt=""
                    />
                  </h3>
                </h3>
              </div>
              <div>
                <h3>
                  {" "}
                  <h3>
                    <img
                      src="https://admin.inoutads.uz/uploads/images/trust/7/preview-64c4a505346e0.jpg"
                      alt=""
                    />
                  </h3>
                </h3>
              </div>
              <div>
                <h3>
                  {" "}
                  <h3>
                    <img
                      src="https://admin.inoutads.uz/uploads/images/trust/6/preview-64c4a447d88fa.png"
                      alt=""
                    />
                  </h3>
                </h3>
              </div>
              <div>
                <h3>
                  {" "}
                  <h3>
                    <img
                      src="https://admin.inoutads.uz/uploads/images/trust/5/preview-64c4a29eec27c.png"
                      alt=""
                    />
                  </h3>
                </h3>
              </div>
              <div>
                <h3>
                  {" "}
                  <h3>
                    <img
                      src="https://admin.inoutads.uz/uploads/images/trust/4/preview-64c4a535d9cfa.jpg"
                      alt=""
                    />
                  </h3>
                </h3>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mijozlar;

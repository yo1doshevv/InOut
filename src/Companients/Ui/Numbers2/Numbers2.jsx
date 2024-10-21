import React from "react";
import "./Number.scss";
import CountUp from "react-countup";
import { NavLink } from "react-router-dom";

const Numbers2 = () => {
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
            <h1>Biz <span className="num1_span">Haqimizda</span></h1>
            <NavLink className="hed" to="/about">Batafsil malumot olish</NavLink>
          </div>
          <div className="num1_coup">
            <div className="num1_box">
              <h1>
                {" "}
                <CountUp start={0} end={3} duration={2} /><span style={{color:"#1877dd"}}>+</span>
              </h1>
              <p>Xodimlar</p>
              <p>Bizning kompaniyamizda ishlash</p>
            </div>
            <div className="num1_box">
              <h1>
                {" "}
                <CountUp start={0} end={24} duration={2} /><span style={{color:"#1877dd"}}>+</span>
              </h1>
              <p>Jamiyatlar</p>
              <p>Ijtimoiy tarmoqlarda targ'ib qilingan

</p>
            </div>
            <div className="num1_box">
              <h1>
                {" "}
                <CountUp start={0} end={138} duration={2} /><span style={{color:"#1877dd"}}>+</span>
              </h1>
              <p>Sayt</p>
              <p>Ishlab chiqilgan va ishga tushirilgan</p>
            </div>
            <div className="num1_box">
              <h1>
                {" "}
                <CountUp start={0} end={338} duration={2} /><span style={{color:"#1877dd"}}>+</span>
              </h1>
              <p>Jamiyatlar</p>
              <p>Ijtimoiy tarmoqlarda targ'ib </p>
            </div>
            <div className="num1_box">
              <h1>
                {" "}
                <CountUp start={0} end={53} duration={2} /><span style={{color:"#1877dd"}}>+</span>
              </h1>
              <p>grafana</p>
              <p>grafanadagi mahsulotlar</p>
            </div>
            <div className="num1_box">
              <h1>
                {" "}
                <CountUp start={0} end={218} duration={2} /><span style={{color:"#1877dd"}}>+</span>
              </h1>
              <p>Yil</p>
              <p>Muvaffaqiyatli jamoaviy ish</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers2;

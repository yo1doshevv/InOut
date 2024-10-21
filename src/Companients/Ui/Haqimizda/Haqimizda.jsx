import React from "react";
import "./Haqimizda.scss";
import CountUp from "react-countup";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from "react-router-dom";

const Haqimizda = () => {
  return (
    <div className="haqi">
      <div className="haqi_wrapper">
        <div className="haqi_img">
          <div className="haqi_btn">
            <NavLink to="/">Orqaga</NavLink>
            <LogoutIcon sx={{ color: "red", fontSize: 30 }} />
          </div>
         
          <div class="image">
            <img
              src="https://admin.inoutads.uz/uploads/images/banner/1/64c4b7fa506b5.png"
              alt=""
            />
          </div>
          
        </div>
        <div className="haqi_haqimizda">
          <div className="haqi_title">
            <h1>
              Biz <span className="num1_span">Haqimizda</span>
            </h1>
          </div>
          <div className="haqi_text">
            <p>
              InOut reklama joylashtirish xizmatlarining keng assortimentini
              taklif etadi, eng ko'p talab qilinadigani Toshkentdagi tashqi
              reklamadir. Siz buyurtma berishingiz va reklamalarni LED
              ekranlarga, shuningdek, laytboks va bannerlarga joylashtirishingiz
              mumkin. Reklama imkon qadar tezroq, kafolatli va hamyonbop narxda
              amalga oshiriladi. ANIQ FOYDA Tashqi reklama maqsadli auditoriyani
              kerakli ma'lumotlar bilan ta'minlashning arzon va juda samarali
              usulidir. Dastlabki ma'lumotlarni taqdim etish uchun tashrif
              qog'ozidan foydalanish maqsadli auditoriyangizning e'tiborini jalb
              qilish imkonini beradi. LED ekranlardan tashqi reklama sifatida
              foydalanish eng istiqbolli formatlardan biri bo'lib, ayni paytda
              o'z tovarlarini (xizmatlarini) reklama qiluvchi kompaniya yoki
              tashkilotning yuqori maqomini ko'rsatadi.
            </p>
          </div>
        </div>
        <div className="haqi_count">
          <div className="num1_hed">
            <h1>
              Biz <span className="num1_span">Haqimizda</span>
            </h1>
          </div>
          <div className="num1_coup">
            <div className="num1_box">
              <h1>
                {" "}
                <CountUp start={0} end={3} duration={2} />
                <span style={{ color: "#1877dd" }}>+</span>
              </h1>
              <p>Xodimlar</p>
              <p>Bizning kompaniyamizda ishlash</p>
            </div>
            <div className="num1_box">
              <h1>
                {" "}
                <CountUp start={0} end={24} duration={2} />
                <span style={{ color: "#1877dd" }}>+</span>
              </h1>
              <p>Jamiyatlar</p>
              <p>Ijtimoiy tarmoqlarda targ'ib qilingan</p>
            </div>
            <div className="num1_box">
              <h1>
                {" "}
                <CountUp start={0} end={138} duration={2} />
                <span style={{ color: "#1877dd" }}>+</span>
              </h1>
              <p>Sayt</p>
              <p>Ishlab chiqilgan va ishga tushirilgan</p>
            </div>
            <div className="num1_box">
              <h1>
                {" "}
                <CountUp start={0} end={338} duration={2} />
                <span style={{ color: "#1877dd" }}>+</span>
              </h1>
              <p>Jamiyatlar</p>
              <p>Ijtimoiy tarmoqlarda targ'ib </p>
            </div>
            <div className="num1_box">
              <h1>
                {" "}
                <CountUp start={0} end={53} duration={2} />
                <span style={{ color: "#1877dd" }}>+</span>
              </h1>
              <p>grafana</p>
              <p>grafanadagi mahsulotlar</p>
            </div>
            <div className="num1_box">
              <h1>
                {" "}
                <CountUp start={0} end={218} duration={2} />
                <span style={{ color: "#1877dd" }}>+</span>
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

export default Haqimizda;

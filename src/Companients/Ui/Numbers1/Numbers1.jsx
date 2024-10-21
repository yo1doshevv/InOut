import React from "react";
import "./Numbers1.scss";
import CountUp from "react-countup";

const Numbers1 = () => {
  return (
    <div className="num">
      <div className="num_wrapper">
        <div className="num_title">
          <h1>
            Bizda{" "}
            <span style={{ color: "rgb(24, 125, 226)" }}>Raqamlar Mavjud</span>
          </h1>
        </div>
        <div className="num_count">
          <div className="num_box">
            <div className="num_countup">
              <CountUp className="num_up" start={0} end={20} duration={1} once={false} />
              <p className="num_p">+</p>
            </div>
            <p className="num_tit">xodimlar soni</p>
          </div>
          <div className="num_box">
            <div className="num_countup">
              <CountUp className="num_up" start={0} end={1672} duration={1} once={false} />
              <p className="num_p">+</p>
            </div>
            <p className="num_tit">reklama kampaniyalarini <br /> boshladi</p>
          </div>
          <div className="num_box">
            <div className="num_countup">
              <CountUp className="num_up" start={0} end={1660} duration={1} once={false} />
              <p className="num_p">+</p>
            </div>
            <p className="num_tit">muvaffaqiyatli holatlar</p>
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

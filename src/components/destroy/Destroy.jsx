import React from "react";
import "./destroy.css";
import img1 from "./images/1.svg";
import img2 from "./images/2.svg";
import img3 from "./images/3.svg";
import img4 from "./images/4.svg";

function Destroy() {
  return (
    <div className="destroy">
      <div className="tittle">
        <h2 className="destroy__container-tittle">Мы уничтожаем:</h2>
        <div className="destroy__container-line"></div>
      </div>
      <div className="destroy__container">
        <div className="destroy__box">
          <div className="destroy__box-item">
            <img src={img1} alt="" />
          </div>
          <div className="destroy__box-item">
            <img src={img2} alt="" />
          </div>
          <div className="destroy__box-item">
            <img src={img3} alt="" />
          </div>
          <div className="destroy__box-item">
            <img src={img4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destroy;

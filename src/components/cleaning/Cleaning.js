import React from "react";
import first from "./images/first.svg";
import second from "./images/second.jpeg";
import three from "./images/three.svg";
import "./cleaning.css";
function Cleaning() {
  return (
    <div className="cleaning">
      <h1 className="cleaning__container-tittle">Химчистка бишкек</h1>
      <div className="cleaning__container">
        <div className="cleaning__container-subtittle">
          <p>
            В своей работе мы используем только профессиональное оборудование
            высокого качества, изготовленное ведущими производителями. Для
            чистки мебели, матрасов и ковров применяются специальные средства,
            которые не содержат в своем составе и не выделяют вредные для
            окружающей среды и здоровья человека материалы. Кроме того, они не
            вызывают аллергических реакций.
          </p>
        </div>
        <div className="cleaning__container-item">
          <h2 className="cleaning__container-items">
            Химчистка мебели в Бишкеке
          </h2>
          <img src={first} alt="" />
          <a href="https://wa.me/996559167474">
            <button>Заказать</button>
          </a>
        </div>
        <div className="cleaning__container-item">
          <h2 className="cleaning__container-items">
            Химчистка авто в Бишкеке
          </h2>
          <img src={second} alt="" />
          <a href="https://wa.me/996559167474">
            <button>Заказать</button>
          </a>
        </div>
        <div className="cleaning__container-item">
          <h2 className="cleaning__container-items">Чистим мебель в Бишкеке</h2>
          <img src={three} alt="" />
          <a href="https://wa.me/996559167474">
            <button>Заказать</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cleaning;

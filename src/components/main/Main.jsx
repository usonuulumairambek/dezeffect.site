import React from "react";
import "./main.css";
import mainimg from "./mainimg.svg";
function Main() {
  return (
    <div className="main">
      <div className="main__content">
        <div className="main__content-info">
          <h1>
            ПОЛНОЕ <span>УНИЧТОЖЕНИЕ</span> <br /> НАСЕКОМЫХ <br /> И ГРЫЗУНОВ
            ЛЮБОЕ УДОБНОЕ <br /> ДЛЯ ВАС <span> ВРЕМЯ</span>
          </h1>
          <p>
            Избавим вас от всех вредителей и насекомых <br /> в жилых домах уже
            сегодня за 1 час. Раз и на всю <br /> жизнь всесте с гарантией на 3
            года
          </p>
          <a href="https://wa.me/996559167474" target="_blank">
            <button>Заказать дезинфекцию</button>
          </a>
        </div>
        <div className="main__content-img">
          <img src={mainimg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Main;

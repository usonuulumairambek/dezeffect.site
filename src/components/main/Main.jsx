import React from "react";
import "./main.css";
import mainimg from "./mainimg.svg";
import Destroy from "../destroy/Destroy";
import Benefits from "../benefits/Benefits";
import Form from "../form/Form";
import Cleaning from "../cleaning/Cleaning";
import Sliders from "../slider/Sliders";
function Main() {
  return (
    <div>
      <div className="main">
        <div className="main__content">
          <div className="main__content-info">
            <h1>
              Полное <span>уничтожение</span> <br />
              насекомых <br />и грызунов любое удобное <br /> для вас{" "}
              <span> время</span>
            </h1>
            <p>
              Избавим вас от всех вредителей и насекомых <br /> в жилых домах
              уже сегодня за 1 час. Раз и на всю <br /> жизнь вместе с гарантией
              на 12 месяцев
            </p>
            <a
              href="https://wa.me/996559167474"
              target="_blank"
              rel="noreferrer"
            >
              <button>Заказать дезинфекцию в Бишкеке</button>
            </a>
          </div>
          <div className="main__content-img">
            <img src={mainimg} alt="" />
          </div>
        </div>
      </div>
      <Sliders />
      <Destroy />
      <Cleaning />
      <h2 className="app__benefits">Наши преимущества:</h2>
      <Benefits />
      <Form />
      <div className="to__price">
        <div className="to__price-container"></div>
      </div>
    </div>
  );
}

export default Main;

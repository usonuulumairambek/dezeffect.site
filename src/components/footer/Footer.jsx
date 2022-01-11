import React from "react";
import "./footer.css";
import ins from "./images/wh.svg";
import fb from "./images/ins.svg";
import wh from "./images/fb.svg";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container-item">
          <h2>О Компании</h2>
          <p>
            Компания «МСД» оказывает услуги по дезинсекции, дератизации и
            дезинфекции в Москве и Московской области, направленных на
            абсолютное уничтожение вредителей досаждающих человеку в быту и
            повседневной жизни, а именно микробов и бактерий, вредных насекомых,
            грызунов и сопровождающих их неприятных запахов.
          </p>
        </div>
        <div className="footer__container-item">
          <h2>Адрес</h2>
          <p>г.Бишкек ул.Тоголок Молдо, 55а</p>
        </div>
        <div className="footer__container-item">
          <h2>Контакты</h2>
          <a href="tel:996504114488">+996-504-11-44-88</a>
          <a href="tel:996709167474">+996-709-16-74-74</a>
          <div>
            <img src={wh} alt="" />
            <img src={fb} alt="" />
            <img src={ins} alt="" />
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom-container">
          <p> © Все права защищены © dezeffect, 2012-2021</p>
          <p>
            Developed by{" "}
            <a href="https://www.instagram.com/favorit.devs">Favorit studio</a>{" "}
            2021
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

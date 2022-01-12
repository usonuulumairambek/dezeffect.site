import React, { useState } from "react";
import Burger from "./Burger";
import "./header.css";
import logo from "./logo.svg";
function Header() {
  const [bugeractive, setbugeractive] = useState(false)
  return (
    <div className="header">
      <div className="header__content">
        <div className="logo">
          <img src={logo} alt="" />
          <div> </div>
          <p className="logo-text">
            Дезинфекция <br /> Бишкек
          </p>
        </div>
        <div className="navbar">
          <ul className="navbar__nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Главная
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Химчистка
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                График
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Услуги
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Контакты
              </a>
            </li>
          </ul>
          <Burger active={bugeractive} btn={setbugeractive} />
        </div>
      </div>
    </div>
  );
}

export default Header;

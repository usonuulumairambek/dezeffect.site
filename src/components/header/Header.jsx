import React from "react";
import "./header.css";
import logo from "./logo.svg";
import burger from "./menu.png"
function Header() {
  return (
    <div className="header">
      <div className="header__content">
        <div className="logo">
          <img src={logo} alt="" />
          <div> </div>
          <p className="logo-text" >
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
          <img className="menu" src={burger} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;

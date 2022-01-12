import React from "react";
import { NavLink } from "react-router-dom";

function Navlinks() {
  return (
    <ul className="navbar__nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/home">
          Главная
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/cleaning">
          Химчистка
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/schedule">
          График
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/services">
          Услуги
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contacts">
          Контакты
        </NavLink>
      </li>
    </ul>
  );
}

export default Navlinks;

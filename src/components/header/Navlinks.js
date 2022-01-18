import React from "react";
import { NavLink } from "react-router-dom";

function Navlinks(props) {
  let navlinkData = [
    {
      url: "/home",
      text: "Главная",
    },
    {
      url: "/cleaning",
      text: "Химчистка",
    },
    {
      url: "/schedule",
      text: "График",
    },
    {
      url: "/services",
      text: "Услуги",
    },
    {
      url: "/contacts",
      text: "Контакты",
    },
  ];
  return (
    <ul className="navbar__nav">
      {navlinkData.map((text) => {
        return (
          <li
            className="nav-item"
            onClick={() => props.isMobal && props.clouseMobileMenu()}
          >
            <NavLink className="nav-link" to={text.url}>
              {text.text}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default Navlinks;

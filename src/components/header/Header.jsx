import React from "react";
import "./header.css";
import logo from "./logo.svg";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import Navlinks from "./Navlinks";
function Header() {
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
          <Navigation />
          <MobileNavigation />
        </div>
      </div>
    </div>
  );
}

export default Header;

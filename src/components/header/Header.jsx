import React from "react";
import "./header.css"
function Header() {
  return (
    <div className="header">
      <div className="header__content">
        <div className="logo">
          <img src="" alt="" />
        </div>
        <div className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;

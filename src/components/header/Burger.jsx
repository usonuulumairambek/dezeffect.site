import React from "react";
import burger from "./menu.png";
import "./burger.css";
function Burger(props) {
  let active = props.active;
  console.log(active);
  let Handle =()=>{
      active ? props.btn(false) :   props.btn(true)


  }
  debugger
  return (
    <div className="burger">
      <div className="burger__content">
        <img className="menu" onClick={Handle} src={burger} alt="" />
      </div>
      <div className={active ? "burger__menu" : "dsd"}>
          
      </div>
    </div>
  );
}

export default Burger;

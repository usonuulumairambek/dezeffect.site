import React, { useState } from "react";
import "./form.css";
function Form() {
  let text;
  let link = `https://wa.me/996559167474?text=${text}`;
  return (
    <div className="form">
      <div className="form__content">
        <form className="form__content-number">
          <input type="text" />
          <a href={link} target="_blank">
            <span>Заказать звонок</span>
          </a>
        </form>
      </div>
    </div>
  );
}

export default Form;

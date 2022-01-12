import React from "react";
import "./form.css";
function Form() {
  let text;
  let link = `https://wa.me/996559167474?text=${text}`;
  return (
    <div className="form">
      <div className="form__content">
        <div className="form__content-number">
          <div>
            <input type="text" placeholder="0509 909 443" />
          </div>
          <div className="form__content-link">
            <a href={link} target="_blank" rel="noreferrer">
              Заказать звонок
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;

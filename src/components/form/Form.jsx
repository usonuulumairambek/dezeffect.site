import React from "react";
import "./form.css";
function Form() {
  return (
    <div className="form">
      <div className="form__content">
        <form className="form__content-number" action="/post/123">
          <input type="text" />
          <button>Заказать звонок</button>
        </form>
      </div>
    </div>
  );
}

export default Form;

import React from "react";
import "./benefits.css";
import virus from "./virus.svg";
function Benefits() {
  return (
    <div className="benefits">
      <div className="benefits__container">
        <div className="benefits__container-img">
          <img src={virus} alt="" />
        </div>
        <div className="benefits__container-line">
          <div></div>
        </div>
        <div className="benefits__container-info">
          <div className="benefits__container-tittle">
            Современное оборудование и <br /> качественные препараты{" "}
          </div>
          <div className="benefits__container-subtittle">
            В нашей работе используется современные оборудования, генераторы
            холодного и горячего тумана, Качественные препараты имеющее все
            необходимые сертификаты.{" "}
          </div>
          <div className="benefits__container-tittle">
            Квалифицированные специалисты{" "}
          </div>
          <div className="benefits__container-subtittle">
            Наши специалисты имеют высшее профессиональное образование, и
            высокую квалификацию.{" "}
          </div>
          <div className="benefits__container-tittle">
            Бесплатное консультация{" "}
          </div>
          <div className="benefits__container-subtittle">
            Оперативное реагирование на заявку. В нашей организации клиенты
            могут получать бесплатную консультацию по дезинфекции, дезинсекции и
            дератизации. А также разрабатывает индивидуальные методы или
            программы по борьбе с насекомыми, грызунами и вирусами.{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;

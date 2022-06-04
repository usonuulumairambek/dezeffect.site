import React from "react";
import "./price.css";
import Form from "./../form/Form";
function Price() {
  const priceData = [
    {
      src: "https://www.gmed.ru/services/dezinfektsiya2.jpg",
      tittle: "Дезинфекция склада в Бишкеке",
      benefits: "Для заказа напишите нам по номеру +996-559-16-74-74",
      price: "3200 сом",
    },
    {
      src: "http://znaed.ru/wp-content/uploads/2021/03/about-2.jpg",
      tittle: "Дезинфекция офиса в Бишкеке",
      benefits: "Для заказа напишите нам по номеру +996-559-16-74-74",
      price: "4500 сом",
    },
    {
      src: "https://www.gmed.ru/services/dezinfektsiya2.jpg",
      tittle: "Дезинфекция дома в Бишкеке",
      benefits: "Для заказа напишите нам по номеру +996-559-16-74-74",
      price: "5100 сом",
    },
    {
      src: "http://znaed.ru/wp-content/uploads/2021/03/about-2.jpg",
      tittle: "Дезинфекция помещение в Бишкеке",
      benefits: "Для заказа напишите нам по номеру +996-559-16-74-74",
      price: "по акции 1000 сом",
    },
  ];
  return (
    <div>
      <div className="price">
        <div className="price-container">
          <div className="price__navbar">
            <div className="price__navbar-items">
              <button className="price__navbar-item">Химчистка</button>
              <button className="price__navbar-item">Дезинфекция</button>
              <button className="price__navbar-item">Уборка</button>
            </div>
          </div>
          <h1>
            На стоимость влияет: размер, площадь, особенности и характеристики
            объекта
          </h1>
          <div className="table">
            <table className="table table-bordered cena-table first-color">
              <thead>
                <tr>
                  <th>
                    <p className="text-center">Площадь помещения (кв.м.)</p>
                  </th>
                  <th>
                    <p className="text-center">
                      Профилактическая обработка (сом/м)
                    </p>
                  </th>
                  <th>
                    <p className="text-center">
                      Истребительная обработка (сом/м)
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text_left">
                    <p className="text-center ">до 100</p>
                  </td>
                  <td>
                    <p className="text-center">от 30</p>
                  </td>
                  <td>
                    <p className="text-center">от 40</p>
                  </td>
                </tr>
                <tr>
                  <td className="text_left">
                    <p className="text-center">от 100 до 300</p>
                  </td>
                  <td>
                    <p className="text-center">от 25</p>
                  </td>
                  <td>
                    <p className="text-center">от 35</p>
                  </td>
                </tr>
                <tr>
                  <td className="text_left">
                    <p className="text-center">от 300 до 500</p>
                  </td>
                  <td>
                    <p className="text-center">от 22</p>
                  </td>
                  <td>
                    <p className="text-center">от 30</p>
                  </td>
                </tr>
                <tr>
                  <td className="text_left">
                    <p className="text-center">от 500 до 1000</p>
                  </td>
                  <td>
                    <p className="text-center">от 20</p>
                  </td>
                  <td>
                    <p className="text-center">от 25</p>
                  </td>
                </tr>
                <tr>
                  <td className="text_left">
                    <p className="text-center">от 1000 до 2500</p>
                  </td>
                  <td>
                    <p className="text-center">от 12</p>
                  </td>
                  <td>
                    <p className="text-center">от 20</p>
                  </td>
                </tr>
                <tr>
                  <td className="text_left">
                    <p className="text-center">свыше 2500</p>
                  </td>
                  <td>
                    <p className="text-center">договорная</p>
                  </td>
                  <td>
                    <p className="text-center">договорная</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="price__content">
            <div className="price__content-items">
              {priceData.map((props) => {
                return (
                  <div className="price__news">
                    <div className="price__news-tittle">
                      <h2 className="price__content-item">{props.tittle}</h2>
                    </div>
                    <img style={{ width: "250px" }} src={props.src} alt="" />
                    <h3>{props.benefits}</h3>
                    <p>{props.price}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Form />
    </div>
  );
}

export default Price;

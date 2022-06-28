import React from "react";
import "./slider.css";
import Slider from "react-slick";
// icons
import arrowleft from "./images/arrowleft.svg";
import arrowright from "./images/arrowright.svg";

// Banners
import FirstBanner from "./images/firstbanner.jpg";
function Sliders() {
  const SliderData = [
    {
      class: "slider__container-link",
      href: "https://wa.me/996559167474",
      imgSrc: FirstBanner,
      imgAlt: "Скидка дезинфекцию в Бишкеке",
    },

    {
      class: "slider__container-link",
      href: "https://wa.me/996559167474",
      imgSrc: FirstBanner,
      imgAlt: "Скидка дезинфекцию в Бишкеке",
    },

    {
      class: "slider__container-link",
      href: "https://wa.me/996559167474",
      imgSrc: FirstBanner,
      imgAlt: "Скидка дезинфекцию в Бишкеке",
    },
  ];
  return (
    <div>
      <div>
        {/* <h2 className="clider_tittle">Наши акции</h2> */}
        <Slider
          autoplay={true}
          autoplaySpeed={3000}
          prevArrow={<img style={{ width: 20 }} src={arrowleft}></img>}
          nextArrow={<img style={{ width: 20 }} src={arrowright}></img>}
        >
          {SliderData.map((i) => {
            return (
              <div>
                <a className={i.class} href={i.href}>
                  <img src={i.imgSrc} alt={i.imgAlt} />
                </a>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Sliders;

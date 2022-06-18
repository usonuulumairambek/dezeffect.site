import React from "react";
import "./slider.css";
import Slider from "react-slick";
// icons
import arrowleft from "./images/arrowleft.svg";
import arrowright from "./images/arrowright.svg";

// Banners
import FirstBanner from "./images/firstbanner.jpg";
function Sliders() {
  const Settings = {};
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
          <div>
            <a className="slider__container-link" href="#">
              <img src={FirstBanner} alt="" />
            </a>
          </div>
          <div>
            <a className="slider__container-link" href="#">
              <img src={FirstBanner} alt="" />
            </a>
          </div>
          <div>
            <a className="slider__container-link" href="#">
              <img src={FirstBanner} alt="" />
            </a>
          </div>
          <div>
            <a className="slider__container-link" href="#">
              <img src={FirstBanner} alt="" />
            </a>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Sliders;

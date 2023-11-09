import React from "react";
import "./Residencie.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/sliderSettings";

const Residencie = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText" id="res-title"> Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
          {/* <SliderButtons/> */}
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className=" flexColStart r-card">
                <img src={card.image} alt="home" />
                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencie;

// const SliderButtons = () => {
//   const swiper = useSwiper();

//   return (
//     <div className="flexCenter r-button">
//       <button onClick={()=>swiper.slidePrev()}>&lt;</button>
//       <button onClick={()=>swiper.slideNext()}>&gt;</button>
//     </div>
//   );
// };

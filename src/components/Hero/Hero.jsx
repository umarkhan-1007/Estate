import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import "./Hero.css";

const Hero = () => {
  return (
    <section className=" hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover
              <br /> Most Suitable <br />
              Property
            </h1>
          </div>
          <div className="flexColStart secondaryText hero-des">
            <span>
              Find a Variety of properties tlhat suti you very essilty
            </span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" placeholder="Enter Your Location" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={8999} duration={3} />+
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1900} end={1999} duration={3} />+
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={20} end={28} duration={2} />+
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>

        </div>
        {/* Right side*/}
        <div className=" flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="hero" width={500} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

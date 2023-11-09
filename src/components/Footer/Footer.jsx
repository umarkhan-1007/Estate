import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth f-container">
        {/* right side */}
        <div className="f-right flexColStart ">
          <img src="./logo2.png" alt="footer logo" />
          <p className="secondaryText">
            Our vision is to make all people <br /> the best place to live for
            them.
          </p>
        </div>
        {/* left side */}
        <div className="f-left">
          <h1 className="primaryText">Information</h1>
          <p className="secondaryText">Beed, Malalgoan, 431131, MH</p>
          <div className="innerWidth flexStart social-icons">
            <a href="">Propety</a>
            <a href="">Services</a>
            <a href="">Product</a>
            <a href="" >About Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

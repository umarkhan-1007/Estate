import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill, BsFillChatSquareTextFill } from "react-icons/bs";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings flexCenter innerWidth c-contanier">
        {/* left side */}
        <div className="c-left">
          <div className="flexColStart flexColCenter c-head">
            <span className="orangeText">Our Contact Us</span>
            <span className="primaryText">Easy to contact us</span>
            <span className="secondaryText" id="paragraph">
              we always to help to providing the best servies for you. we
              beleive a good blace to live can make your life better.
            </span>

            <div className="flexColStart contactModes">
              {/* first line */}
              <div className="flexStart row">
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <MdCall size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Call</span>
                      <span className="secondaryText">91+ 9975102049</span>
                    </div>
                  </div>
                  <div className="flexCenter button"> Call Now</div>
                </div>
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <BsFillChatDotsFill size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Chat</span>
                      <span className="secondaryText">91+ 9975102049</span>
                    </div>
                  </div>
                  <div className="flexCenter button"> Chat Now</div>
                </div>
              </div>
              {/* second line */}
              <div className="flexStart row">
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <MdCall size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Video Call</span>
                      <span className="secondaryText">91+ 9975102049</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Video Call Now</div>
                </div>
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <BsFillChatSquareTextFill size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Massages</span>
                      <span className="secondaryText">91+ 9975102049</span>
                    </div>
                  </div>
                  <div className="flexCenter button"> Massages Now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="image-container c-right">
          <img src="./contact.jpg" alt="" width={500} height={500} />
        </div>
      </div>
    </section>
  );
};

export default Contact;

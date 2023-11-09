import React, { Fragment, useState } from "react";
import {FiPhoneCall} from "react-icons/fi"
import {BiMenuAltRight} from
"react-icons/bi"
import "./Header.css"
import OutsideClickHandler from "react-outside-click-handler"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const getMenuStyles = (menuOpen) => {
    if(document.documentElement.clientWidth <= 800)
    {
      return {right : !menuOpen && "-100%"}
    }
  }

  return (
    <Fragment>
      <section className="h-wrapper">
        <div className="flexCenter padddings innerWidth h-container">
          <img src="./logo.png" alt="logo" width={100} />

          <OutsideClickHandler onOutsideClick={()=>setMenuOpen(false)}>

          <div className="flexCenter h-menu" style={getMenuStyles(menuOpen)}>
            <a href=""> Residencies</a>
            <a href="">Our Value</a>
            <a href="">Contact Us</a>
            <a href="" id="/getStart">Get Started</a>
            <button className="button">
            <a href="">Contact
            <FiPhoneCall/>
            </a>
            </button>
          </div>

          </OutsideClickHandler>

          <div className="menu-icon" onClick={()=>setMenuOpen((prev)=>!prev)}>
            <BiMenuAltRight size={30}/>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Header;

import React, { Fragment } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css"
import Companie from "./components/Companies/Companie";
import Residencie from "./components/Residencies/Residencie";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import GetStart from "./components/getStart/GetStart";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Fragment>
      <div className="app">
        <div>
          <div className="white-gradient"/>
          <Header />
          <Hero />
        </div>
        <Companie/>
        <Residencie/>
        <Value/>
        <Contact/>
        <GetStart id={"/getStart"}/>
        <Footer/>
      </div>
    </Fragment>
  );
};

export default App;

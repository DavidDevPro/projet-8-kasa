import React from "react";
import logo from "../assets/img/logoHeader.svg";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo du site kasa" />
      <Navigation />
    </header>
  );
};

export default Header;

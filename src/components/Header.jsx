import React from "react";
import logo from "../assets/img/logoHeader.svg";
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo du site kasa" />
      <div className="navigation">
      <ul>
        <li>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            A propos
          </NavLink>
        </li>
      </ul>
    </div>
    </header>
  );
};

export default Header;

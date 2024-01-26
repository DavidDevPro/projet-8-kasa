import React from "react";
import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="pageError404">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/">
        <a>Retourner sur la page d'accueil</a>
      </NavLink>
    </div>
  );
};

export default Error404;

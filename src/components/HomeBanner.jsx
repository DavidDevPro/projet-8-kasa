import React from "react";
import homeBanner from "../assets/img/homeBanner.png";

const HomeBanner = () => {
  return (
    <div className="homeBanner">
      <img src={homeBanner} alt="bannière accueil" />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
};

export default HomeBanner;

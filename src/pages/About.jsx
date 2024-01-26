import React from "react";
import AboutBanner from "../components/AboutBanner";
import colapsJson from "../data/colaps.json";

const About = () => {
  console.log(colapsJson);
  return (
    <div className="aboutPage">
      <AboutBanner />
    </div>
  );
};

export default About;

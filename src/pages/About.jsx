import React from "react";
import AboutBanner from "../components/AboutBanner";
import DropList from "../components/DropList";
import dataDropList from "../data/dropList.json";

const About = () => {
  return (
    <div className="aboutPage">
      <AboutBanner />
      {dataDropList.map((dataList, index) => (
        <DropList key={index} index={index} title={dataList.title}></DropList>
      ))}
    </div>
  );
};

export default About;

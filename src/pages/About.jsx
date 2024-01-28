import React from "react";
import AboutBanner from "../components/AboutBanner";
import DropList from "../components/DropList";
import dataDropList from "../data/dropList.json";

const About = () => {
  return (
    <div className="aboutPage">
      <AboutBanner />
      {dataDropList.map((dataList, data) => (
        <DropList key={data} data={data} title={dataList.title}></DropList>
      ))}
    </div>
  );
};

export default About;

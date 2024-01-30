import React from "react";
import AboutBanner from "../components/AboutBanner";
import DropList from "../components/DropList";
import dropListData from "../data/dropList.json";

const About = () => {
  return (
    <div className="aboutPage">
      <AboutBanner />
      {dropListData.map((dataItem, index) => (
        <DropList key={index} title={dataItem.title}>
          {dataItem.text}
        </DropList>
      ))}
    </div>
  );
};

export default About;

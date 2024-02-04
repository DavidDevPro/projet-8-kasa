import React from "react";
import AboutBanner from "../components/AboutBanner";
import DropList from "../components/DropList";
import itemsData from "../data/dropList.json";

const About = () => {
  return (
    <div className="aboutPage">
      <AboutBanner />
      {itemsData.map((Item) => (
        <DropList key={Item.id} title={Item.title}>
          {Item.text}
        </DropList>
      ))}
    </div>
  );
};

export default About;

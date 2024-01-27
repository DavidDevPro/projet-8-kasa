import React from "react";
import CardLocation from "./CardLocation";
import locations from "../data/locations.json";

const Gallery = () => {
  console.log(locations);
  return (
    <div className="gallery">
      <CardLocation />
    </div>
  );
};

export default Gallery;

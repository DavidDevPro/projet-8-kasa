import React from "react";

const CardLocation = ({ locations }) => {
  return (
    <>
      {locations.map((location) => (
        <div key={location.description} className="cardLocation">
          <img src={location.cover}></img>
          <h2 key={location.description}>{location.title}</h2>
        </div>
      ))}
    </>
  );
};

export default CardLocation;

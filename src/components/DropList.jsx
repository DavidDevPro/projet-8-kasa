import React from "react";
import arrowSvg from "../assets/img/arrow.svg";

const DropList = (props) => {
  return (
    <div className="dropListContainer">
      <div className="dropListHead">
        <h3>{props.title}</h3>
        <img className="arrowStatic" src={arrowSvg} alt="fléche drop list" />
      </div>
    </div>
  );
};

export default DropList;

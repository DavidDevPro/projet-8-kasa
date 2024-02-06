import { useState } from "react";
import propTypes from "prop-types";
import arrowIcon from "../assets/img/arrow.svg";

const DropList = ({ title, children }) => {
  const [clicked, setClicked] = useState(false);

  const HandleToggle = () => {
    setClicked(!clicked);
  };

  return (
    <div className="dropListContent">
      <div className="headDropList" onClick={HandleToggle}>
        <h3>{title}</h3>
        <img
          src={arrowIcon}
          alt="flèche"
          className={`arrow ${clicked ? "turn" : ""}`}
        />
      </div>
      <div className={`content ${clicked ? "open" : ""}`}>{children}</div>
    </div>
  );
};

DropList.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};

export default DropList;

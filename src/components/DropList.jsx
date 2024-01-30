import { useState } from "react";
import pt from "prop-types";
import arrowIcon from "../assets/img/arrow.svg";

const DropList = ({ title, children }) => {
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <div className={`dropListContainer ${visible ? "visible" : ""}`}>
      <div className="dropListHead" onClick={toggle}>
        <h3>{title}</h3>
        <img
          src={arrowIcon}
          alt="flèche"
          className={`arrow ${visible ? "down" : ""}`}
        />
      </div>
      <div className={`content ${visible ? "animate" : ""}`}>{children}</div>
    </div>
  );
};

DropList.propTypes = {
  title: pt.string.isRequired,
  children: pt.node.isRequired,
};

export default DropList;

import React from "react";
import { useParams } from "react-router-dom";
import locations from "../data/locations.json";
import Caroussel from "./Caroussel.jsx";
import Tags from "./Tags.jsx";
import Rating from "./rating.jsx";
import DropList from "./DropList.jsx";

const CustomerCard = () => {
  const { id } = useParams();
  const location = locations.find((item) => item.id === id);

  console.log(id);
  return (
    <>
      <div className="locationContent">
        <Caroussel slides={location.pictures} />
        <div className="topContainer">
          <div className="leftContainer">
            <h2>{location.title}</h2>
            <h3>{location.location}</h3>
            <div className="tagContainer">
              {location.tags.map((tag, index) => (
                <Tags key={index} text={tag} />
              ))}
            </div>
          </div>
          <div className="rightContainer">
            <div className="pictureContainer">
              <h3>{location.host.name}</h3>
              <img
                src={location.host.picture}
                alt={"photo de" + location.host.name}
              />
            </div>
            <div className="rating">
              <Rating rating={parseInt(location.rating)} />
            </div>
          </div>
        </div>
        <div className="botomContainer">
          <DropList title="Déscription">{location.description}</DropList>
          <DropList title="équipement">
            <ul>
              {location.equipements.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ul>
          </DropList>
        </div>
      </div>
    </>
  );
};

export default CustomerCard;

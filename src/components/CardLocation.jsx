import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const CardLocation = ({ locations }) => {
  return (
    <>
      {locations.map((location) => (
        <div key={location.id} className="cardLocation">
          <NavLink to={`/locations`}>
            <img src={location.cover} alt={`picture ${location.title}`} />
            <h2>{location.title}</h2>
          </NavLink>
        </div>
      ))}
    </>
  );
};
CardLocation.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CardLocation;

import PropTypes from "prop-types";
import { useState } from "react";
import arrowRight from "../assets/img/arrowRight.svg";
import arrowLeft from "../assets/img/arrowLeft.svg";

const Caroussel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlide = slides[currentIndex];
  const numSlides = slides.length;

  const updateIndex = (increment) => {
    setCurrentIndex((lastIndex) => {
      let newIndex = lastIndex + increment;

      if (newIndex >= numSlides) {
        newIndex = 0;
      } else if (newIndex < 0) {
        newIndex = numSlides - 1;
      }
      return newIndex;
    });
  };

  const shouldShowArrows = numSlides > 1;
  const shouldShowIndicator = numSlides > 1;

  return (
    <div className="caroussel">
      <img
        className="slider"
        src={currentSlide}
        alt={`Slide ${currentIndex + 1}`}
      />
      {shouldShowArrows && (
        <>
          <img
            className="arrowRight"
            src={arrowRight}
            alt="Flèche Droite"
            onClick={() => updateIndex(1)}
          />
          <img
            className="arrowLeft"
            src={arrowLeft}
            alt="Flèche Gauche"
            onClick={() => updateIndex(-1)}
          />
        </>
      )}
      {shouldShowIndicator && (
        <div className="slide-indicator">{`${
          currentIndex + 1
        }/${numSlides}`}</div>
      )}
    </div>
  );
};

Caroussel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Caroussel;

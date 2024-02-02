import React, { useState } from "react";
import arrowRight from "../assets/img/arrowRight.svg";
import arrowLeft from "../assets/img/arrowLeft.svg";

const Caroussel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlide = slides[currentIndex];
  const numSlides = slides.length;

  const handleIndexChange = (increment) => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + increment + numSlides) % numSlides
    );
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
            onClick={() => handleIndexChange(1)}
          />
          <img
            className="arrowLeft"
            src={arrowLeft}
            alt="Flèche Gauche"
            onClick={() => handleIndexChange(-1)}
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

export default Caroussel;

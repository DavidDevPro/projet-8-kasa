import { FaStar } from "react-icons/fa6";

const Rating = ({ rating }) => {
  const globalStars = 5;
  const starsFull = Array.from({ length: rating }, (unused, index) => (
    <FaStar key={index} className="redStar" />
  ));
  const starsEmpty = Array.from(
    { length: globalStars - rating },
    (unused, index) => <FaStar key={index} className="originStar" />
  );

  return (
    <>
      {starsFull}
      {starsEmpty}
    </>
  );
};

export default Rating;

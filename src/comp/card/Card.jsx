import React, { useState } from "react";
import "./card.css";
import { BsArrowDownLeftCircle, BsArrowDownRightCircle } from "react-icons/bs";

const Card = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  return (
    <div className="hero2-container">
      <div>
        <button onClick={handlePrevClick} className="hero2-btn">
          <BsArrowDownLeftCircle style={{ fontSize: "50px" }} />
        </button>
      </div>
      <div className="card">
        <img src={images[currentIndex]} alt="" className="card-image" />
      </div>
      <div>
        <button onClick={handleNextClick} className="hero2-btn">
          <BsArrowDownRightCircle style={{ fontSize: "50px" }} />
        </button>
      </div>
    </div>
  );
};

export default Card;

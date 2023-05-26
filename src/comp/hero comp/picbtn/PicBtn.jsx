import React, { useState } from "react";
import "./picbtn.css";
import { BsArrowUpRight } from "react-icons/bs";

const PicBtn = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setPosition({ x: clientX, y: clientY });
  };

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div className="picbtn-cont">
      <div
        className="picbtn-img-cont"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`button ${isVisible ? "visible" : ""}`}
          style={{ left: position.x, top: position.y }}
        >
          <BsArrowUpRight style={{ fontSize: "45px", color: "#ececec" }} />
        </div>
        <img src="/ass/picbtn.jpg" alt="gg" className="picbtn-img" />
      </div>
      <div className="picbtn-text">
        <p>FEATURED PRODUCT</p>
        <p>BIOMINERALS</p>
        <p>DESIGN STRATEGY UI/UX</p>
      </div>
    </div>
  );
};

export default PicBtn;

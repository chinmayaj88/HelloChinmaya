import React from "react";
import "./card2.css";

const CardTwo = ({ item }) => {
  return (
    <div className="ggggc2-cont">
      <div className="ggggslider-cont">
        <div className="ggggslider-item">
          <img src={item.link} alt="gg" className="gggg" />
        </div>
      </div>
      <div className="ggggslider-meta">
        <div className="ggggmeta-item">
          <p>{item.p1}</p>
          <p>&nbsp; &nbsp; &nbsp;&nbsp;{item.p2}</p>
        </div>
      </div>
    </div>
  );
};

export default CardTwo;

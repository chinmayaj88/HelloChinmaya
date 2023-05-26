import React from "react";
import "./marquee.css";

const Marquee = () => {
  return (
    <div className="marquee-container">
      <h1 className="marquee">
        <div className="t3 marquee-title">
          <span
            className="marquee-line"
            style={{ transform: "translateX(-100%)" }}
          >
            Chinmaya's Design Group&nbsp;
          </span>
          <span
            className="marquee-line"
            style={{ transform: "translateX(-100%)" }}
          >
            Chinmaya's Design Group.
          </span>
        </div>
      </h1>
    </div>
  );
};

export default Marquee;


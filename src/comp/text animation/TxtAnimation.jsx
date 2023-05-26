import React, { useState, useEffect } from "react";
import "./txt.css";
const TxtAnimation = ({text}) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const mass = Math.min(20, 1 + 0.005 * window.scrollY);
      setScale(mass);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="body">
      <div id="expandable" style={{ transform: `scale(${scale})`,}}>
       {text}
      </div>
    </div>
  );
};

export default TxtAnimation;

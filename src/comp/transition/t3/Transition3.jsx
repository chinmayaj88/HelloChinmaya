import React, { useEffect, useState } from "react";
import "./t3.css";

const Transition3 = () => {
  const [isAnimationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const cubeeElement = document.querySelector(".cubee");

    cubeeElement.classList.add("scale-down-center");

    const onAnimationEnd = () => {
      cubeeElement.classList.remove("scale-down-center");

      setAnimationComplete(true);
    };
    cubeeElement.addEventListener("animationend", onAnimationEnd);

    return () => {
      cubeeElement.removeEventListener("animationend", onAnimationEnd);
    };
  }, []);

  return (
    <div className={`cubee-cont ${isAnimationComplete ? "hide" : ""}`}>
      <div className="cubee">
        <h1 className="cubee-h1">C/</h1>
      </div>
    </div>
  );
};

export default Transition3;

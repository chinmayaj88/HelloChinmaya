import React, { useState, useEffect } from "react";
import "./scran2.css";

const Scran2 = () => {
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [curtainOpacity, setCurtainOpacity] = useState(0);

  useEffect(() => {
    let requestId;
    const animateCurtain = (timestamp) => {
      const timeElapsed = timestamp - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const newCurtainOpacity = progress ** 2;
      setCurtainOpacity(newCurtainOpacity);

      if (progress < 1) {
        requestId = requestAnimationFrame(animateCurtain);
      }
    };

    const startTime = performance.now();
    const duration = 1000;

    requestId = requestAnimationFrame(animateCurtain);

    return () => cancelAnimationFrame(requestId);
  }, []);

  useEffect(() => {
    setBackgroundColor(`rgba(38, 37, 35, ${curtainOpacity})`);
  }, [curtainOpacity]);

  return (
    <>
      <div
        style={{
          background: `linear-gradient(to bottom, ${backgroundColor} 0%, rgba(38, 37, 35, 1) 100%)`,
          transition: "background-color 0.5s ease-in-out",
          minHeight: "100vh",
        }}
      >
        {/* Your component's content here */}
      </div>
    </>
  );
};

export default Scran2;

// style={{}}
// color: #262523;

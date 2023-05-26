import React, { useState, useEffect } from "react";
import "./black.css";
const BlackScreenWithText = () => {
  const [showText, setShowText] = useState(false);
  const [showScreen, setShowScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScreen(false);
      setShowText(true);
    }, 2000); // adjust this value to control the duration of the animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div>
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100%",
            backgroundColor: "black",
            zIndex: 1,
            transform: showScreen ? "translateY(-100%)" : "none",
            transition: "transform 1s ease-in-out",
          }}
        />
        {showText && (
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 101,
              textAlign: "center",
              fontSize: "2rem",
              fontWeight: "bold",
              color: "white",
              opacity: 0,
              animation: "fade-in 10s forwards",
            }}
          >
            Creating logos and icons that need to be displayed at different
            sizes
          </div>
        )}
      </div>
    </>
  );
};

export default BlackScreenWithText;

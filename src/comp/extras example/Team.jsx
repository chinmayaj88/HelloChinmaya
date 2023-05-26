import React, { useEffect, useState } from "react";
import "./team.css";

const Team = () => {
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowTransition(true);
    }, 2000); // Adjust the delay (in milliseconds) to your preference

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="team-cont">
      <div className={`transition-wrapper ${showTransition ? "show" : ""}`}>
        <div className="element1">transition</div>
      </div>
    </div>
  );
};

export default Team;


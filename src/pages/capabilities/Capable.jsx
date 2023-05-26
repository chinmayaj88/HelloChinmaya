import React, { useEffect, useState } from "react";
import Cube from "../../comp/abilities comp/cube/Cube";
import "./capable.css";
const Capable = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(true);
  }, []);
  return (
    <div className={`capable-container ${isLoaded ? "loaded" : ""}`}>
      <Cube />
    </div>
  );
};

export default Capable;

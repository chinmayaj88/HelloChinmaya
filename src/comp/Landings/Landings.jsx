import React, { useEffect, useRef } from "react";
import "./landings.css";
function Landings({ name, mc, sc }) {
  const helloRef = useRef(null);

  useEffect(() => {
    const helloNode = helloRef.current;
    helloNode.classList.add("animate__animated", "animate__fadeInDown");
  }, []);

  return (
    <div className="hero4">
      <div>
        <h1 ref={helloRef} className="hello" style={{ color: mc }}>
          {name}
        </h1>
        <p className="hero4-p" style={{ color: sc }}>
          WE ARE C/, A DESIGN COMPANY WITH A PASSION TO CREATE.
        </p>
      </div>
    </div>
  );
}

export default Landings;

import React, { useEffect, useState, useRef } from "react";
import "./partners.css";
import { logos } from "./logoimport";

const Partners = () => {
  const [showTransition, setShowTransition] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setShowTransition(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="partner-cont" ref={sectionRef}>
      <div className="team-cont">
        <div className={`transition-wrapper ${showTransition ? "show" : ""}`}>
          <div className="element1">P@RTNERS</div>
        </div>
      </div>
      <div className="logowall">
        {logos.map((logos) => (
          <div key={logos.id}>
            <img src={logos.path} alt="gg" style={{ height: "200px" }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;

import React, { useEffect, useState } from "react";
import "./cube.css";

const Cube = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const texts = ["CHINMAYA", "SUBHRAJIT", "SOUMYASHREE's", "COMPANY"];

  useEffect(() => {
    const handleScroll = () => {
      const scroll =
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
      document.body.style.setProperty("--scroll", scroll);

      // Calculate active index based on scroll position
      const index = Math.floor(scroll * texts.length);
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="cube-container">
      <video src="/ass/particles.mp4" className="video" autoPlay loop></video>
      <video src="/ass/particles.mp4" className="video" autoPlay loop></video>
      <video src="/ass/particles.mp4" className="video" autoPlay loop></video>
      <video src="/ass/particles.mp4" className="video" autoPlay loop></video>
      <video src="/ass/particles.mp4" className="video" autoPlay loop></video>
      <div className="progress"></div>
      <div className="cube-wrap">
        <div className="cube">
          <div className="side top"></div>
          <div className="side bottom"></div>
          <div className="side front"></div>
          <div className="side back"></div>
          <div className="side left"></div>
          <div className="side right"></div>
        </div>
        <div className="text">
          {texts.map((text, index) => (
            <p key={index} className={index === activeIndex ? "active" : ""}>
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cube;

import React, { useState, useEffect } from "react";
import { GiSelfLove, GiCard8Diamonds } from "react-icons/gi";
import { FaBomb, FaMoon } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { GoSmiley } from "react-icons/go";
import "./hero1.css";

const Hero1 = () => {
  const [showIcons, setShowIcons] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIcons(!showIcons);
    }, 1000);

    return () => clearTimeout(timer);
  }, [showIcons]);

  const renderIcon = (letter) => {
    switch (letter) {
      case "E":
        return (
          <GiCard8Diamonds style={{ color: "#e63946", fontSize: "70px" }} />
        );
      case "W":
        return <GiSelfLove style={{ fontSize: "70px" }} />;
      case "C":
        return <FaMoon style={{ color: "#bde0fe", fontSize: "70px" }} />;
      case "I":
        return (
          <AiFillThunderbolt style={{ color: "#ffba08", fontSize: "70px" }} />
        );
      case "O":
        return <FaBomb style={{ fontSize: "70px" }} />;
      case ".":
        return <GoSmiley style={{ color: "#faa307", fontSize: "70px" }} />;
      default:
        return letter;
    }
  };
  return (
    <div className="hero1-container">
      <div className="hero1-sec1">
        <div className="hero1-text1">
          {/* {showIcons ? renderIcon("W") : "W"} */}W
          {showIcons ? renderIcon("E") : "E"}
        </div>
        <div className="hero1-text2">
          {showIcons ? renderIcon("C") : "C"}REATE
        </div>
        <div className="hero1-text3">
          MEM{showIcons ? renderIcon("O") : "O"}RIES
        </div>
        <div className="hero1-text4">
          EXPER{showIcons ? renderIcon("I") : "I"}ENCE
        </div>
        <div className="hero1-text5">
          FOR BRANDS{showIcons ? renderIcon(".") : "."}
        </div>
      </div>
      <div className="hero1-sec2">
        <img src="/ass/stamp.svg" alt="" style={{ height: "300px" }} />
      </div>
    </div>
  );
};

export default Hero1;

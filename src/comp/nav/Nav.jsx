import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./nav.css";
import bgVideo from "./bg.mp4";

const Nav = () => {
  const date = new Date();
  const month = date.getUTCMonth() + 1;
  const [hoveredItem, setHoveredItem] = useState("");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const location = useLocation();

  const handleLinkHover = (event) => {
    const video = document.getElementById("bg-video");
    video.src = bgVideo;
    video.play();
    setIsVideoPlaying(true);
    setHoveredItem(event.target.textContent);
  };

  const handleLinkLeave = () => {
    const video = document.getElementById("bg-video");
    video.pause();
    video.src = "";
    setIsVideoPlaying(false);
    setHoveredItem("");
  };

  const navContainerStyle = {
    color:
      location.pathname === "/contact" || location.pathname === "/capabilities"
        ? "#fff"
        : "",
  };

  return (
    <div className="nav-container" style={navContainerStyle}>
      <video
        id="bg-video"
        className={`bg-video ${isVideoPlaying ? "visible" : ""}`}
        loop
        muted
        style={{ display: isVideoPlaying ? "block" : "none" }}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      <section className="nav-sec1">
        <Link to="/" className="links">
          <h1 style={navContainerStyle}>C/</h1>
        </Link>
      </section>
      <section className="nav-sec2">
        <ul>
          <Link to="/work" className="links" style={navContainerStyle}>
            <li
              onClick={handleLinkLeave}
              className={hoveredItem === "Work" ? "hovered" : ""}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
              id="gg2"
            >
              Work
              {hoveredItem === "Work" && (
                <span className="hovered-content">{hoveredItem}</span>
              )}
            </li>
          </Link>

          <Link to="/company" className="links" style={navContainerStyle}>
            <li
              className={hoveredItem === "Company" ? "hovered" : ""}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
              onClick={handleLinkLeave}
            >
              Company
              {hoveredItem === "Company" && (
                <span className="hovered-content">{hoveredItem}</span>
              )}
            </li>
          </Link>

          <Link to="/capabilities" className="links" style={navContainerStyle}>
            <li
              className={hoveredItem === "Capabilities" ? "hovered" : ""}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
              onClick={handleLinkLeave}
            >
              Capabilities
              {hoveredItem === "Capabilities" && (
                <span className="hovered-content">{hoveredItem}</span>
              )}
            </li>
          </Link>
          <Link to="/contact" className="links" style={navContainerStyle}>
            <li
              className={hoveredItem === "Contact" ? "hovered" : ""}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
              onClick={handleLinkLeave}
            >
              Contact
              {hoveredItem === "Contact" && (
                <span className="hovered-content">{hoveredItem}</span>
              )}
            </li>
          </Link>
        </ul>
        <ul className="nav-info-ul">
          <li>info@chinmaya.com</li>
          <li>
            {date.getUTCDate() + " " + month + " " + date.getUTCFullYear()}
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Nav;

import React, { useState } from "react";
import "./team2.css";

const Team2 = () => {
  const [selectedLink, setSelectedLink] = useState(null);

  const handleLinkHover = (index) => {
    setSelectedLink(index);
  };

  return (
    <div className="container">
      <div className="parent">
        <div className="div1">
          <img
            src="/ass/pr1.jpg"
            alt=""
            className={`ig ${selectedLink === 1 ? "visible" : ""}`}
          />
        </div>
        <div className="div2">
          <img
            src="/ass/pr2.jpg"
            alt=""
            className={`ig ${selectedLink === 2 ? "visible" : ""}`}
          />
        </div>
        <div className="div3">
          <img
            src="/ass/pr3.jpg"
            alt=""
            className={`ig ${selectedLink === 3 ? "visible" : ""}`}
          />
        </div>
        <div className="div4">
          <img
            src="/ass/pr4.jpg"
            alt=""
            className={`ig ${selectedLink === 4 ? "visible" : ""}`}
          />
        </div>
        <div className="div5">
          <img
            src="/ass/pr5.jpg"
            alt=""
            className={`ig ${selectedLink === 5 ? "visible" : ""}`}
          />
        </div>
        <div className="div6">
          <img
            src="/ass/pr1.jpg"
            alt=""
            className={`ig ${selectedLink === 5 ? "visible" : ""}`}
          />
        </div>
        <div className="div7">
          <img
            src="/ass/pr1.jpg"
            alt=""
            className={`ig ${selectedLink === 3 ? "visible" : ""}`}
          />
        </div>
        <div className="div8">
          <img
            src="/ass/pr1.jpg"
            alt=""
            className={`ig ${selectedLink === 1 ? "visible" : ""}`}
          />
        </div>
        <div className="div9">
          <img
            src="/ass/pr1.jpg"
            alt=""
            className={`ig ${selectedLink === 2? "visible" : ""}`}
          />
        </div>
        <div className="div10">
          <img
            src="/ass/pr1.jpg"
            alt=""
            className={`ig ${selectedLink === 4? "visible" : ""}`}
          />
        </div>
        <div className="div11">
          <img
            src="/ass/pr1.jpg"
            alt=""
            className={`ig ${selectedLink === 1? "visible" : ""}`}
          />
        </div>
        <div className="div12">
          <img
            src="/ass/pr1.jpg"
            alt=""
            className={`ig ${selectedLink === 2 ? "visible" : ""}`}
          />
        </div>
        <div className="div13">
          <img
            src="/ass/pr1.jpg"
            alt=""
            className={`ig ${selectedLink === 3 ? "visible" : ""}`}
          />
        </div>
        <div className="div14">
          <img
            src="/ass/pr1.jpg"
            alt=""
            className={`ig ${selectedLink === 4 ? "visible" : ""}`}
          />
        </div>
        <div className="div15">
          <img
            src="/ass/pr1.jpg"
            alt=""
            className={`ig ${selectedLink === 5 ? "visible" : ""}`}
          />
        </div>
        {/* Add more divs for additional images */}
      </div>
      <div className="links-container">
        <div className="links">
          <p
            className="links-p"
            onMouseEnter={() => handleLinkHover(1)}
            onMouseLeave={() => handleLinkHover(null)}
          >
            DESIGN
          </p>
          <p
            className="links-p"
            onMouseEnter={() => handleLinkHover(2)}
            onMouseLeave={() => handleLinkHover(null)}
          >
            STRATEGY
          </p>
          <p
            className="links-p"
            onMouseEnter={() => handleLinkHover(3)}
            onMouseLeave={() => handleLinkHover(null)}
          >
            OPERATIONS
          </p>
          <p
            className="links-p"
            onMouseEnter={() => handleLinkHover(4)}
            onMouseLeave={() => handleLinkHover(null)}
          >
            USER EXPERIENCE
          </p>
          <p
            className="links-p"
            onMouseEnter={() => handleLinkHover(5)}
            onMouseLeave={() => handleLinkHover(null)}
          >
            DEVELOPMENT
          </p>
          {/* Add more p elements for additional links */}
        </div>
      </div>
    </div>
  );
};

export default Team2;

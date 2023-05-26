import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const date = new Date();
  const location = useLocation();

  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="ft-left">
          <ul>
            <li>
              <Link
                to="/work"
                className={`links ${
                  location.pathname === "/work" ? "active" : ""
                }`}
              >
                WORK
              </Link>
            </li>
            <li>
              <Link
                to="/company"
                className={`links ${
                  location.pathname === "/company" ? "active" : ""
                }`}
              >
                COMPANY
              </Link>
            </li>
            <li>
              <Link
                to="/capabilities"
                className={`links ${
                  location.pathname === "/capabilities" ? "active" : ""
                }`}
              >
                CAPABILITIES
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`links ${
                  location.pathname === "/contact" ? "active" : ""
                }`}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
        <div className="ft-right">
          <ul>
            <li>lINKEDIN</li>
            <li>INSTAGRAM</li>
            <li>TWITTER</li>
          </ul>
        </div>
      </div>
      <br />
      <br />
      <div className="footer-bottom">
        <p className="p footer-copyright">
          &#169;{date.getFullYear()}
          <br />
          Chinmaya Design Group
        </p>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Footer;

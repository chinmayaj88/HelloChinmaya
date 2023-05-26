import React, { useEffect, useState } from "react";
import "./contact.css";

const Contact = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div div className="cont-main">
      <div className="contact-top">
        <div className={`bg-block d ${isMounted ? "active" : ""}`}></div>
        <div className={`bg-block g ${isMounted ? "active1" : ""}`}></div>
        <div className={`bg-block r ${isMounted ? "active2" : ""}`}></div>
        <div className={`bg-block r ${isMounted ? "active3" : ""}`}></div>
        <div className={`bg-block r ${isMounted ? "active4" : ""}`}></div>
        <div className={`bg-block r ${isMounted ? "active5" : ""}`}></div>
        <div className={`bg-block r ${isMounted ? "active6" : ""}`}></div>
        <div className={`bg-block r ${isMounted ? "active7" : ""}`}></div>
        <div className={`bg-block r ${isMounted ? "active8" : ""}`}></div>
      </div>
      <div className="contact-bottom" style={{ transform: "translate(0%,0%)" }}>
        <div className="form">
          <div class="form-item">
            <label class="p2 form-title" for="name">
              NAME
            </label>
            <input type="text" className="form-field" />
            <p>*Required</p>
          </div>
          <div class="form-item">
            <label class="p2 form-title" for="name">
              EMAIL
            </label>
            <input type="text" className="form-field" />
            <p>*Required</p>
          </div>
          <div class="form-item">
            <label class="p2 form-title" for="name">
              PHONE
            </label>
            <input type="text" className="form-field" />
            <p>optional</p>
          </div>
          <div class="form-item">
            <label class="p2 form-title" for="name">
              COMPANY
            </label>
            <input type="text" className="form-field" />
            <p>*Required</p>
          </div>
          <div class="form-item">
            <label class="p2 form-title" for="name">
              MESSAGE
            </label>
            <input type="text" className="form-field" />
            <p>*Required</p>
          </div>
          <div className="form-submit">
            <button className="cnt-submit">SUBMIT</button>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Contact;

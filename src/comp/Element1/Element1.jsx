import React from "react";
import "./element1.css";
const Element1= () => {
  return (
    <section className="values">
      <div className="values-content">
        <div className="values-header">
          <p className="p values-subtitle">Our Values</p>
          <h2 className="values-title">
            <strong>
              WE ARE
              <img
                src="/ass/scribble.svg"
                alt=""
                style={{
                  height: "100px",
                  transform: "translateX(-100px)",
                }}
              />
            </strong>
            NOT
          </h2>
        </div>
        <ul className="values-list">
          <li className="values-item">
            <p className="p item-nr">001</p>
            <p className="p2 item-title">Siloed or abrasive</p>
          </li>
          <li className="values-item">
            <p className="p item-nr">002</p>
            <p className="p2 item-title">Wasteful or greedy</p>
          </li>
          <li className="values-item">
            <p className="p item-nr">003</p>
            <p className="p2 item-title">Confrontational or cocky</p>
          </li>
          <li className="values-item">
            <p className="p item-nr">004</p>
            <p className="p2 item-title">Exclusive or phony</p>
          </li>
          <li className="values-item">
            <p className="p item-nr">005</p>
            <p className="p2 item-title">Rigid or ordinary</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Element1;

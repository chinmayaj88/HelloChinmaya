import React from "react";
import Card from "../../card/Card";
import "./hero2.css";
const HeroTwo = () => {
  const images = [
    "/ass/md1.jpg",
    "/ass/md2.jpg",
    "/ass/md3.jpg",
    "/ass/md4.jpg",
    "/ass/md5.jpg",
    "/ass/md6.jpg",
    "/ass/md7.jpg",
    "/ass/md8.jpg",
    "/ass/md9.jpg",
    "/ass/md10.jpg",
  ];

  return (
    <div className="hero2-container">
      <Card images={images} />
    </div>
  );
};

export default HeroTwo;

import React, { useEffect, useState } from "react";
import Hero1 from "../../comp/hero comp/hero/Hero1";
import HeroTwo from "../../comp/hero comp/hero2/HeroTwo";
import Marquee from "../../comp/marquee/Marquee";
import Element2 from "../../comp/Element2/Element2";
import Hero3 from "../../comp/hero comp/hero3/Hero3";
import TxtAnimation from "../../comp/text animation/TxtAnimation";
import PicBtn from "../../comp/hero comp/picbtn/PicBtn";
import "./main.css";

const Main = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(true);
  }, []);

  return (
    <div className={`main-container ${isLoaded ? "loaded" : ""}`}>
      <Hero1 />
      <PicBtn />
      <TxtAnimation text="WORK" />
      <HeroTwo />
      <Hero3 />
      <Marquee />
      <Element2 />
    </div>
  );
};

export default Main;

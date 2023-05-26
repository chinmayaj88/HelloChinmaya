import React, { useEffect } from "react";
import Landings from "../../comp/Landings/Landings";
import Element1 from "../../comp/Element1/Element1";
import Team2 from "../../comp/company comp/Team2";
import Partners from "../../comp/company comp/Partners";
import TxtAnimation from "../../comp/text animation/TxtAnimation";
import Marquee from "../../comp/marquee/Marquee";

const Companypg = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Landings name="COMPANY" />
      <Team2 />
      <TxtAnimation text="COMPANY"  />
      <Partners />
      <Element1 />
      <Marquee />
    </>
  );
};

export default Companypg;

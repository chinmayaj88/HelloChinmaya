import React, { useEffect } from "react";
import Landings from "../../comp/Landings/Landings";
import Element2 from "../../comp/Element2/Element2";
import Trans2 from "../../comp/transition/t2/Trans2";
import CardPage from "../../comp/card2/CardPage";

const Work = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Trans2 content={<Landings name="WORK" mc="#ffff" sc="#ffff" />} />
      <CardPage />
      <Element2 />
    </div>
  );
};

export default Work;

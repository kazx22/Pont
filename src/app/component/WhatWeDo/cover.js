import React from "react";
import CoverImage from "../covImg";
import Heading from "../heading";
import gt from "../../img/amb.jpg";

const Cover = () => {
  const heading1 = [
    "We help 4,000 patients every year get the lifesaving help they need at a health centre or hospital in Mbale region. Our priorities are women in labour or having maternal emergencies, children under 5 often with malaria and people who've had accidents.",
    "We've donated 34 motorbike ambulances, 30 bicycle ambulances and 90 mountain stretchers. We help local health districts with support towards fuel, repairs and co-ordinating the network.",
  ];

  return (
    <div>
      <CoverImage img1={gt} head={"AMBULANCES"} />
      <Heading heading1={heading1[0]} heading2={heading1[1]} />
    </div>
  );
};

export default Cover;

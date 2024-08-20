import React from "react";
import Heading from "../heading";
import CoverImageC from "./covImg";

const CoverC = ({ img, head, m1, m2 }) => {
  // console.log("CoverC props:", { img, head, m1, m2 });

  if (!img || !head) {
    return <div className="text-center mt-5">Data missing</div>;
  }
  return (
    <div>
      <CoverImageC img={img} head={head} />
      <Heading heading1={m1} heading2={m2} />
    </div>
  );
};

export default CoverC;

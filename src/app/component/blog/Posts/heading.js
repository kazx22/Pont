import React from "react";

const Heading = ({ head }) => {
  return (
    <h1 className="font-lora text-[35px] font-bold border-b-4 border-green-700 inline-block">
      {head}
    </h1>
  );
};

export default Heading;

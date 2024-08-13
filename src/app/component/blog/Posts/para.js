import React from "react";

const Para = ({ text }) => {
  const formatText = text.split("\n").map((str, index) => (
    <p key={index} className="mb-4">
      {str.trim()}
    </p>
  ));
  return (
    <div>
      <h4 className="text-[25px] mt-8 pr-6 font-popins">{formatText}</h4>
    </div>
  );
};

export default Para;

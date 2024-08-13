import React from "react";

const SecPara = ({ head, text }) => {
  const formatText = text.split("\n").map((str, index) => (
    <p key={index} className="mb-4">
      {str.trim()}
    </p>
  ));
  return (
    <div className="py-2 mt-10">
      <h1 className="font-lora text-[46px] font-bold border-b-4 border-green-700 inline-block">
        {head}
      </h1>
      <h4 className="text-[25px] mt-8 pr-6 font-popins">{formatText}</h4>
    </div>
  );
};

export default SecPara;

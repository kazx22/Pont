import React from "react";

const Heading = ({ heading1, heading2 }) => {
  return (
    <div>
      <div className="w-[80%] m-auto mt-3 h-[150px] rounded-xl bg-[#66BA61] text-white px-4 py-4 flex items-center justify-center">
        <p className="text-2xl font-bold text-center">{heading1}</p>
      </div>
      <div className="w-[80%] m-auto mt-3 h-[150px] rounded-xl bg-summer-org text-white px-4 py-4 flex items-center justify-center">
        <p className="text-2xl font-bold text-center">{heading2}</p>
      </div>
    </div>
  );
};

export default Heading;

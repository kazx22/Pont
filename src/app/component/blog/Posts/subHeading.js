import React from "react";

const SubHeading = ({ text }) => {
  return (
    <div>
      <h3 className="font-lora text-[35px] font-bold border-b-4 border-summer-org inline-block mt-6">
        {text}
      </h3>
    </div>
  );
};

export default SubHeading;

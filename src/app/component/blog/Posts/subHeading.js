import React from "react";

const SubHeading = ({ text, blog }) => {
  const isBlog = blog ?? false;

  return isBlog ? (
    <div>
      <h3 className="font-lora text-[28px] font-bold border-b-4 border-summer-org inline-block mt-6">
        {text}
      </h3>
    </div>
  ) : (
    <div className="flex justify-between items-center">
      <h1 className="font-lora text-[40px] font-bold border-b-4 border-green-700 inline-block">
        {text}
      </h1>
    </div>
  );
};

export default SubHeading;

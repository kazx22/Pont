import React from "react";

const Impact = ({ approachText, impactText }) => {
  return (
    <div className="w-[80%] mt-20 mx-auto">
      <div className="flex gap-4">
        <div className="w-1/2 h-auto bg-summer-org rounded-md p-12">
          <h1 className="font-lora text-[40px] font-bold border-b-4 border-white-700 inline-block text-white mb-4">
            Our approach
          </h1>
          <p className="ml-2 mt-5 text-white text-xl leading-relaxed">
            {approachText}
          </p>
        </div>

        <div className="w-1/2 h-auto bg-[#6EBC62] rounded-md p-12">
          <h1 className="font-lora text-[40px] font-bold border-b-4 border-white-700 inline-block text-white mb-4">
            Our impact
          </h1>
          <p className="ml-2 mt-5 text-white text-xl leading-relaxed">
            {impactText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Impact;

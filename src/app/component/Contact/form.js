import React from "react";

const Form = () => {
  return (
    <div className="h-auto w-full bg-[#38311E] mt-10 rounded-lg">
      <div className="flex-col justify-center items-center px-10 py-16">
        <div className="flex mt-4 w-full">
          <div className="flex-1 mr-2">
            <h4 className="text-summer-org font-popins text-[15px]">
              Full Name
            </h4>
            <input
              type="text"
              className="mt-2 w-full h-10 bg-[#423C29] px-4 text-[16px] rounded-sm"
              placeholder="Your Full Name"
            />
          </div>
          <div className="flex-1 ml-2">
            <h4 className="text-summer-org font-popins text-[15px]">
              Email Address
            </h4>
            <input
              type="text"
              className="mt-2 w-full h-10 bg-[#423C29] px-4 text-[16px] rounded-sm"
              placeholder="Your Email Address"
            />
          </div>
        </div>

        <div className="mt-8 w-full">
          <h4 className="text-summer-org font-popins text-[15px]">Subject</h4>
          <input
            type="text"
            className="mt-2 w-full h-10 bg-[#423C29] px-4 text-[16px] rounded-sm"
            placeholder="Subject"
          />
        </div>

        <div className="mt-8 w-full">
          <h4 className="text-summer-org font-popins text-[15px]">
            Your Message
          </h4>
          <textarea
            className="mt-2 w-full h-32 bg-[#423C29] px-4 pt-4 text-[16px] rounded-sm"
            placeholder="Your Message"
          ></textarea>
        </div>

        <button className="bg-summer-org hover:bg-green-700 text-white text-[22px] m-auto font-medium px-12 py-4 rounded-full mt-8 flex items-center transition-all duration-500 ease-in-out">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;

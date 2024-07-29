import React from "react";
import Image from "next/image";
import gt3 from "../../img/gt3.jpg";
import gt from "../../img/gt.jpg";

const About = () => {
  return (
    <div>
      <div className="flex py-32 px-64 gap-12 justify-center bg-[#FCF8F9] ">
        <div className=" shrink-0">
          <Image
            src={gt3}
            alt="Changing lives in Wales and Uganda"
            className="rounded-[50px] w-[636px] h-[500px]"
          />
        </div>
        <div className="py-6">
          <h1 className="font-lora text-[46px] font-bold border-b-4 border-green-700 inline-block">
            Who are we?
          </h1>
          <p className="text-[25px] mt-8 pr-32 font-popins">
            PONT is a small charity in Rhondda Cynon Taff, South Wales making a
            big difference in Mbale, Eastern Uganda.
            <br className="mt-10" />
            <br className="mt-10" />
            We’re run by volunteers through direct community links. We support
            Ugandan organisations who have the potential to tackle poverty in
            their towns and villages. Our partnership is based on friendship,
            commitment and respect.
          </p>
        </div>
      </div>

      <div className="flex py-32 px-64 gap-12 justify-center bg-[#FCF8F9]">
        <div className=" shrink-0 order-2">
          <Image
            src={gt}
            alt="Changing lives in Wales and Uganda"
            width={636}
            height={510}
            className="rounded-[50px] w-[636px] h-[500px]"
          />
        </div>
        <div className="py-6 order-1">
          <h1 className="font-lora text-[46px] font-bold border-b-4 border-green-700 inline-block">
            More About Us
          </h1>
          <p className="text-[25px] mt-8 pr-32 font-popins">
            We set up PONT to see what difference we could make in one specific
            area of Africa and one area of Wales. A decade on, people have
            become our friends. Together we’ve built projects that work. We’re
            seeing improvements to health, livelihoods, learning and the
            environment. We’re changing lives. And we want to change more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import Image from "next/image";
import bd1 from "../../img/bd1.png";
import bd2 from "../../img/bd2.png";

const CoverImageC = ({ img, head }) => {
  // console.log(img);
  return (
    <div className="relative h-[400px] w-full bg-[#FCF8F9]">
      <h1 className="absolute inset-0 flex items-center justify-center text-white text-[80px] font-medium z-10">
        {head}
      </h1>
      <img
        src={img}
        alt="Changing lives in Wales and Uganda"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div className="absolute top-[110px] left-0 flex flex-col space-y-2">
        <Image
          src={bd1}
          alt="Small image 2"
          width={100}
          height={1000}
          className="object-cover"
        />
        <Image
          src={bd2}
          alt="Small image 1"
          width={62}
          height={80}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default CoverImageC;

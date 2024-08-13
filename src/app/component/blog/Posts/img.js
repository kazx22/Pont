"use client";
import React, { useState } from "react";
import Image from "next/image";

const Img = ({ text, img }) => {
  const imgArray = [...img];
  let images;
  const [index, setIndex] = useState(0);
  switch (text) {
    case "1":
      const firstImg = imgArray.shift();
      images = (
        <div className="w-full h-full">
          <Image
            src={firstImg.src}
            alt={"Changing lives in Wales and Uganda"}
            width={450}
            height={230}
            className="rounded-[20px] w-[80%] h-auto mx-auto"
          />
        </div>
      );
      break;

    case "2":
      const imgSrc = [];
      imgSrc.push(imgArray.shift());
      imgSrc.push(imgArray.shift());
      images = images = (
        <div className="flex gap-12">
          {imgSrc.map((val, ind) => (
            <div key={ind} className="shrink-0 order-2 text-center">
              <Image
                src={val.src}
                alt={"Changing lives in Wales and Uganda"}
                width={350}
                height={250}
                className="rounded-[50px] w-[450px] h-[300px]"
              />
              <p className="text-center">{val.caption}</p>
            </div>
          ))}
        </div>
      );
      break;

    case "3":
      const imgSrc1 = [];
      imgSrc1.push(imgArray.shift());
      imgSrc1.push(imgArray.shift());
      imgSrc1.push(imgArray.shift());

      images = (
        <div className="flex gap-12">
          {imgSrc1.map((val, ind) => (
            <div key={ind} className="shrink-0 order-2 text-center">
              <Image
                src={val.src}
                alt={"Changing lives in Wales and Uganda"}
                width={350}
                height={250}
                className="rounded-[50px] w-[450px] h-[300px]"
              />
              <p className="text-center">{val.caption}</p>
            </div>
          ))}
        </div>
      );
      break;

    default:
      images = <p>No images to display</p>;
  }

  return <div className="mt-10">{images}</div>;
};

export default Img;

"use client";
import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import s1 from "../../img/1.jpg";
import s2 from "../../img/strecther.jpg";
import s3 from "../../img/2.jpg";
import Video from "../video";

const Center = () => {
  const heading = ["Motorbike Ambulances", "Remotest areas"];
  const para = [
    "The answer was motorbike ambulances. They are designed to carry patients across even the roughest ground on roads and tracks that cars and other vehicles can’t access.",
    "We began with just three ambulances in 2010 and expanded to a fleet of 34 in 2014 thanks to the support of Rotary District 1070.",
    "There are mountainous areas of Mbale that even the motorbike ambulances can’t reach. So we have also commissioned 30 bicycle stretchers, and 90 wheeled hand stretchers. A stretcher can meet the motorbike ambulance at the nearest road.",
  ];
  const ytPara = [
    "Watch: Godfrey is a Community Health Worker and Ambulance Driver– he tells us how his work is lowering maternal mortality rates.",
  ];
  const bulletins = [
    "The bikes have space for a health worker to sit beside the patient to provide care.",
    "A cover provides shade when the sun is hot and shelter when it’s raining.",
    "They’re cheaper and easier to maintain in remote areas than cars.",
    "Each driver is trained in basic mechanics.",
    "They have access to the PONT workshop for more major repairs.",
  ];

  const [currentInd, setCurrentInd] = useState(0);

  const images = [s1, s2, s3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInd((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-[80%] mt-20 mx-auto">
      <div className="flex gap-3">
        <div className="w-[30%] bg-[#DFD8CB] flex flex-col">
          <div className="relative w-full h-0 pb-[56.25%]">
            <Video link="https://www.facebook.com/PONTMbale/videos/1184564891654728/" />
          </div>
          <p className="text-[25px] mx-auto mt-10 px-8 font-popin text-center text-bold">
            {ytPara[0]}
          </p>
          <div className="bg-white mt-10 relative w-full h-2/3 overflow-hidden">
            {images.map((src, ind) => (
              <div
                key={ind}
                className={`absolute inset-0 transition-transform duration-500 ease-in-out transform ${
                  ind === currentInd ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <Image
                  src={src}
                  alt={`Slide ${ind + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 ml-8">
          <div className="flex">
            <div>
              <div className="flex justify-between">
                <h1 className="font-lora text-[40px] font-bold border-b-4 border-green-700 inline-block">
                  {heading[0]}
                </h1>
              </div>
              <p className="text-[20px] mt-8 pr-32 font-popin">{para[0]}</p>
              <ul className="mt-6 ml-6 space-y-4">
                {bulletins.map((item, ind) => (
                  <li
                    key={ind}
                    className="flex items-center bg-gray-100 p-4 rounded-md shadow-md"
                  >
                    <FaCheckCircle className="text-green-500 mr-4" />
                    <span className="text-lg font-medium text-gray-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-[20px] mt-8 pr-32 font-popin">{para[1]}</p>

              <div className="flex justify-between mt-20">
                <h1 className="font-lora text-[40px] font-bold border-b-4 border-green-700 inline-block">
                  {heading[1]}
                </h1>
              </div>
              <p className="text-[20px] mt-8 pr-32 font-popin">{para[2]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Center;

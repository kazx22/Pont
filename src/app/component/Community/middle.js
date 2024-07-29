"use client";
import React from "react";
import Video from "../video";
const Middle = ({ approachText, links }) => {
  const linkEd = [...links];
  return (
    <div className="w-[80%] mt-20 mx-auto">
      <div className="flex gap-28">
        <div className="w-1/2 h-auto bg-summer-org rounded-md p-12">
          <p className="ml-2 mt-5 text-white text-xl leading-relaxed">
            {approachText[0].split("*").map((item, ind) =>
              ind % 2 === 1 ? (
                <a
                  href={linkEd.shift()}
                  className="text-green-700 font-bold"
                  key={ind}
                >
                  {item}
                </a>
              ) : (
                <span key={ind}>{item}</span>
              )
            )}
          </p>
        </div>

        <Video link="https://www.facebook.com/watch/?v=1187365951374622" />
      </div>
    </div>
  );
};

export default Middle;

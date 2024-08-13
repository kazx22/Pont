"use client";
import React, { useState } from "react";
import Image from "next/image";
import gt from "../../img/gt.jpg";
import gt2 from "../../img/gt2.jpg";
import gt3 from "../../img/gt3.jpg";

import SocialPosts from "../socialPosts";

const images = [gt3, gt2, gt];
const youtubeVideos = [
  "https://www.youtube.com/embed/j1duppP7upY",
  "https://www.youtube.com/embed/8aGhZQkoFbQ",
];

const Slider = () => {
  const [actind, setActind] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [isVideo, setIsVideo] = useState(false);

  const goSlide = (index) => {
    setActind(index);
  };

  const tabHead = ["Socials", "News", "Stories"];

  return (
    <div className="relative">
      <button
        className="absolute top-5 right-5 bg-summer-org text-white px-4 py-2 rounded-lg z-30"
        onClick={() => setIsVideo(!isVideo)}
      >
        {isVideo ? "Switch to Slides" : "Switch to Videos"}
      </button>

      {!isVideo && (
        <div className="absolute top-20 right-40 w-[400px] rounded-lg z-30 bg-white bg-opacity-90 shadow-lg">
          <div className="flex justify-center border-b border-gray-200">
            {tabHead.map((tab, index) => (
              <button
                key={index}
                className={`px-6 py-3 text-lg font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? "border-b-4 border-summer-org text-summer-org"
                    : "text-gray-700 hover:text-summer-org"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="overflow-y-scroll h-[400px] rounded-lg p-8 text-gray-800">
            {activeTab === 0 && (
              <div>
                <SocialPosts />
              </div>
            )}
            {activeTab === 1 && (
              <p>
                Aliquam eget justo nec eros scelerisque scelerisque. Curabitur
                nec nulla eros. Fusce convallis, ligula ac pharetra aliquet.
              </p>
            )}
            {activeTab === 2 && (
              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Integer venenatis ut purus ut
                facilisis.
              </p>
            )}
          </div>
        </div>
      )}

      <div className="flex justify-center items-center h-[700px] overflow-hidden relative">
        <div className="absolute inset-0">
          {isVideo
            ? youtubeVideos.map((video, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex justify-center items-center transition-opacity duration-1000 ease-in-out ${
                    actind === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <iframe
                    src={video}
                    title={`YouTube video ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full max-w-screen-lg max-h-screen-lg"
                  />
                </div>
              ))
            : images.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={`Slide ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    actind === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
        </div>
      </div>

      {!isVideo && (
        <div className="absolute top-1/2 left-[120px] transform -translate-y-1/2 pl-8 text-left z-30 text-white w-[650px]">
          <h4 className="font-patrick text-2xl">Raising Hope</h4>
          <h1 className="text-[65px] font-lora font-bold text-white">
            To the People of Wales & Uganda
          </h1>
          {/* <button className="bg-summer-org hover:bg-green-700 text-white text-[22px] font-medium px-12 py-4 rounded-full mt-5 flex items-center transition-all duration-500 ease-in-out">
            Donate Now
            <FontAwesomeIcon
              icon={faArrowRight}
              className="ml-2 h-[20px] w-[20px]"
            />
          </button> */}
        </div>
      )}

      <div className="absolute bottom-0 w-full flex justify-center z-20 mb-4">
        {(isVideo ? youtubeVideos : images).map((_, ind) => (
          <button
            key={ind}
            onClick={() => goSlide(ind)}
            className={`w-4 h-4 mx-2 rounded-full transition-all duration-500 ease-in-out ${
              ind === actind
                ? "bg-summer-org ring-2 ring-white ring-offset-2"
                : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;

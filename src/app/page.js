"use client";
import React, { useState } from "react";
import Slider from "./component/Home/slider";
import About from "./component/Home/aboutUs";
import Card from "./component/Home/card";
import Events from "./component/Home/events";
import Gallery from "./component/Home/gallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";
import Join from "./component/Home/join";
import Stats from "./component/Home/stats";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A8", "#FFBD33"];

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <Slider />
      <About />
      {/* <Gallery /> */}
      <Card />

      <Events />

      <Stats />
      {/* <Card />  S */}

      {/* <button
        className={`fixed top-[500px] left-4 p-2 rounded-full z-50 ${
          !isOpen ? "bg-summer-org text-white" : "text-white bg-green-700"
        }`}
        onClick={toggleDrawer}
      >
        Pallete
      </button> */}

      <div
        className={`fixed top-1/2 left-0 transform -translate-y-1/2 h-1/2 bg-white shadow-md transition-transform ${
          isOpen ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
        style={{ width: "200px" }}
      >
        <div className="p-4">
          <h2 className="text-xl mb-4">Color Palette</h2>
          <div className="flex flex-wrap">
            {colors.map((color, index) => (
              <button
                key={index}
                style={{ backgroundColor: color }}
                className="w-12 h-12 m-2 rounded-full"
              ></button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

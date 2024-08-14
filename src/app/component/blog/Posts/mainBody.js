"use client";
import React, { useState } from "react";
import SubHeading from "./subHeading";
import Para from "./para";
import List from "./list";
import Img from "./img";
import ImgC from "../imgC";

const MainBody = ({ body, blog }) => {
  console.log(body);
  return (
    <div>
      {body.map((item, index) => {
        switch (item.type) {
          case "subheading":
            return <SubHeading key={index} text={item.text} />;
          case "paragraph":
            return <Para key={index} text={item.text} />;
          case "list":
            return <List key={index} text={item.text} />;
          case "img":
            return <ImgC key={index} text={item.text} blog={blog} />;
          case "video":
            return <Para key={index} text={item.text} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default MainBody;

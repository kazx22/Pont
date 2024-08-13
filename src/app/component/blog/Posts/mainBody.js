import React from "react";
import SubHeading from "./subHeading";
import Para from "./para";
import List from "./list";
import Img from "./img";

const MainBody = ({ body, img }) => {
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
            return <Img key={index} text={item.text} img={img} />;
          case "video":
            return <Para key={index} text={item.text} />;
        }
      })}
    </div>
  );
};

export default MainBody;

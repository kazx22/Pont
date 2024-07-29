import React from "react";
import co1 from "../../img/Esther.jpg";
import Post from "../post";
import HeadText from "../headText";
const Hero = () => {
  const heading = ["The Need", "Expert Training Partnership"];
  const para = [
    "Before PONT volunteers visited Uganda, Mbale had no ambulance service at all. There are no doctors in most Ugandan villages. Many people in Mbale region live a long, difficult journey from the hospital or even from the nearest health centre.",
    "A grassroots approach was needed, so Welsh Ambulance Service staff developed training that takes *village health workers* to the level of qualified First Emergency Responders able to administer lifesaving first aid and recognise when further treatment is necessary. But when patients needed treatment at a health centre or hospital, the question was – how to get them there? Mbale is a mountainous area with many villages only accessible by steep paths. Roads are generally poor, especially in the rainy season.",
  ];
  const img = co1;
  const blog = ['"I called for help"'];
  const blogPara = [
    "When Esther’s labour did not go to plan, she was grateful she could call on a motorbike ambulance – read her story.",
  ];
  const links = ["http://localhost:3000/wwd/community"];
  return (
    <div className="w-[80%] mx-auto mt-10">
      <div className="flex gap-3">
        <div className=" flex-1">
          <div className="flex">
            <HeadText
              heading1={heading[0]}
              heading2={heading[1]}
              para1={para[0]}
              para2={para[1]}
              links={links}
            />
          </div>
        </div>
        <Post img={img} blog={blog} blogPara={blogPara} />
      </div>
    </div>
  );
};

export default Hero;

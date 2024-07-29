import React from "react";
import Cover from "@/app/component/WhatWeDo/cover";
import Hero from "@/app/component/WhatWeDo/hero";
import Center from "@/app/component/WhatWeDo/center";
import Impact from "@/app/component/impact";

const Works = () => {
  const approachText =
    "Ours is an integrated approach. As well as training health workers and drivers, our health links co-ordinators have trained staff in health centres to understand the volunteers’ roles and link up with them. Motorbike Ambulance drivers have become respected by health staff, and also by their communities. Many of them, started off as village health team volunteers. They’re people who know and care about their communities, and are keen to be empowered to serve them better.";
  const impactText =
    "PONT’s Ambulance project truly shows the power of partnership. Welsh Ambulance Service staff, PONT engineers and local people in Mbale are all working together and learning from each other, and it’s life-changing.Communities now know that if they have an emergency, there is someone who can help. In 2019 our motorbike ambulances made 4841 journeys: 2977 pregnant mothers, 1264 children and 600 other people. Each journey might have saved the life of someone like Esther.";

  return (
    <>
      <Cover />
      <Hero />
      <Center />
      <Impact approachText={approachText} impactText={impactText} />
    </>
  );
};

export default Works;

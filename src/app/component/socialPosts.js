import React from "react";
import SocialPost from "./socialFace";
import SocialTweet from "./socialTweet";
import ScoialT from "./tweet";

const SocialPosts = () => {
  const posts = [
    "PONT Livelihoods Team @MillStreetQuarter Market, Sat 22nd June,12noon–3pm. Find beautiful hand crafted items from Uganda, and items made locally by members of the team. Activities for the children, and friendly faces to chat with. Discover more at www.pont-mbale.org.uk",
    "Cwmbale WEC is located under the beautiful Wanale Ridge. Hundreds of children and local people visit and learn about wildlife and conservation. Cwmbale adds to the local economy by encouraging tourism and by providing employment.  www.cwmbaleecolodge.com",
    "PONT: Welsh and Ugandan mental health professionals provided specialist training for 80 government and NGO health workers. The health workers are equipped to identify mental illness, reduce stigma and encourage compassionate attitudes in the community. www.pont-mbale.org.uk",
  ];
  const links = [
    "https://www.facebook.com/PONTMbale/videos/1513421309531918/",
    "https://www.facebook.com/PONTMbale/videos/877314850822364/",
    "https://www.facebook.com/PONTMbale/videos/2214684488870070/",
  ];
  return (
    <div>
      {posts.map((item, ind) => (
        <SocialPost key={ind} text={item} link={links.shift()} />
      ))}
      <SocialTweet />
      {/* <ScoialT /> */}
    </div>
  );
};

export default SocialPosts;

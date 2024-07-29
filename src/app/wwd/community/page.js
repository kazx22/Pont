import React from "react";
import CoverImage from "@/app/component/covImg";
import Heading from "@/app/component/heading";
import gt from "../../img/Com.jpg";
import Impact from "@/app/component/impact";
import HeadText from "@/app/component/headText";
import Post from "@/app/component/post";
// import Image from "next/image";
import co1 from "../../img/Musawo.jpg";
import Middle from "@/app/component/Community/middle";
const Community = () => {
  const heading1 = [
    "PONT’s Community Health team train and co-ordinate Community Health Workers – volunteers who educate and empower their neighbours to reduce illnesses, and are also the first to respond to any health emergency.",
    "Since 2005 we’ve recruited over 1200 Community Health volunteers, including over 400 Traditional Birth Referral Attendants. They’re making a huge difference in the villages they serve.",
  ];
  const approachText =
    "Our volunteers help prevent life-threatening diseases by educating their neighbours. They increase the number of people in rural communities who access healthcare and maternity care at health centres. They save lives when people are ill or injured because they’re able to refer them to the place where they’ll get the most suitable help as quickly as possible. We saw this during a cholera epidemic in 2016. Community Health Workers were crucial in educating about Covid-19 during the pandemic, and in encouraging villagers to be immunised against it. The scheme also changes the lives of the men and women who volunteer. Empowered by their training and experience as health workers, some have gone on to be leaders of their communities or to have paid roles as clinical officers in health centres. Inspired by working together, some have set up savings and lending schemes.";
  const impactText =
    "It starts with the people. Volunteers are part of the community – neighbours, but knowledgeable. They are trained by experts, using Ugandan Government Community Health Worker programmes. Due to our close working with the local District Health Office, health centre and hospital staff recognise and value referrals from our volunteers. Motorbike ambulance drivers trained and supported by PONT are all integrated into the system. Community Health Workers receive quarterly update training and feel part of a special team – one that works.";

  const heading = ["The Need", "What we do"];
  const subheading = ["Education", "Access to healthcare"];
  const subPara = [
    "Our health workers become known as the person to go to with a health issue or questions about pregnancy. They also reach out to people who might need help. They encourage as well as educate and help people overcome fears and stigmas. Because of this they increase the number of people accessing healthcare. Since 2014 they’ve been linked in to PONT’s ambulance network of motorbikes and stretchers. They’re trained to give emergency first aid and to decide whether to call for emergency transport. Their training teaches them to make appropriate referrals to health centres or the hospital.",
    "We train and equip local people, chosen by their communities, to be qualified volunteer health workers. These volunteers already have other occupations such as teachers, pastors or farmers, and they agree to provide health care to their village in their spare time. Training with local experts and visitors from Wales empowers them to engage and educate their community on issues such as sanitation and hygiene, nutrition, immunisation, family planning and early detection of serious illnesses. Those that complete further training also do health activities such as immunisations, nutrition activities (like weighing children) and diagnosing and treating common illnesses.  Some will specialise in helping mums and newborn babies.",
  ];
  const para = [
    "Diseases such as diarrhoea, malaria and pneumonia are common in the rural villages of Mbale region. As in many poor areas, infant mortality and maternal mortality rates are high. There is a shortage of medical staff and in remote areas, health centres can be difficult to reach. Many people are not aware of basic health, nutritional and sanitation information that could save lives. Others are reluctant to visit health centres, preferring traditional remedies.",
  ];
  const img = co1;
  const blog = ['"They call me Musawo"'];
  const blogPara = [
    "I continue to be proud to see that my people are healthy, and good sanitation and health-related issues are in place.” Read about Jack’s action during a cholera epidemic",
  ];
  const approach = [
    "Our Trained Birth Referral Attendants identify women from their villages who are expecting a baby, and encourage them to go for antenatal check-ups at a health centre. If women need extra encouragement they go with them to check-ups. When the time comes to give birth, they’re on hand to help and often go with the mother to the health centre. If there’s an emergency or the woman has no other transport they can call for a *motorbike ambulance* in areas that have one.",
  ];
  const links = ["http://localhost:3000/wwd/ambulance"];
  return (
    <div>
      <CoverImage img1={gt} head={"COMMUNITY HEALTH"} />
      <Heading heading1={heading1[0]} heading2={heading1[1]} />
      <div className="w-[80%] mx-auto mt-10">
        <div className="flex gap-3">
          <div className=" flex-1">
            <div className="flex">
              <HeadText
                heading1={heading[0]}
                heading2={heading[1]}
                subHeading1={subheading[0]}
                subHeading2={subheading[1]}
                subPara={subPara}
                para1={para[0]}
              />
            </div>
          </div>
          <Post img={img} blog={blog} blogPara={blogPara} />
        </div>
      </div>
      <div className="w-[80%] mx-auto mt-10">
        <div className="flex gap-3"></div>
      </div>
      <Middle approachText={approach} links={links} />
      <Impact approachText={approachText} impactText={impactText} />
    </div>
  );
};

export default Community;

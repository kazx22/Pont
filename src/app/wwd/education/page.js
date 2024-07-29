import React from "react";
import CoverImage from "@/app/component/covImg";
import Heading from "@/app/component/heading";
import gt from "../../img/Education.jpg";
import Impact from "@/app/component/impact";
import HeadText from "@/app/component/headText";
import Post from "@/app/component/post";
import co1 from "../../img/miss.jpg";
import { FaCheckCircle } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import s1 from "../../img/s1.jpg";
import s2 from "../../img/s2.jpg";
import s3 from "../../img/s3.jpg";
import Stat from "@/app/component/Education/stat";

const Education = () => {
  const images = [s1, s2, s3];
  const heading1 = [
    "PONT’s education team help pupils in Wales and Uganda to learn more about their world. We also provide resources and training to improve education opportunities in Mbale.",
    "We’ve set up school links, school libraries and an IT Hub to support learning and training in the region. We plant trees and provide solar and hydro power. We bring teachers together to learn from each other and we help them support pupils with disabilities.",
  ];
  const impactText =
    "Poor rural African schools face many challenges but being part of the PONT network really gives schools an edge. Rural schools don’t typically produce good academic results but training and resources such as textbooks have gone a long way to improving achievement. Some of the best government primary schools across Mbale region are PONT schools. For example, Bubutu Secondary School achieved the best results in their district in 2016. We’re seeing the power of partnership in action. From 7 schools in 2005 the programme has grown as schools see what richness a partnership can bring to their school life. The educational and cultural learning on both sides has been immeasurable. By creating friendship links between schools, pupils can not only share their experiences across borders, but also learn to respect and embrace other cultures. The project aims to create a new generation of global citizens, which is a small step towards a more equal world.";
  const approachText =
    "PONT’s programme works because we understand the challenges teachers face in Uganda and in Wales. Friendships don’t just happen – it takes time and effort to fit projects into busy school life. But we think the rewards are clear. Our Education Links Co-ordinator Eleanor works tirelessly in Mbale to maintain these links, visiting schools that are struggling or new to the programme, explaining expectations and ironing out issues (such as different communication styles) so partnerships can flourish. Like all PONT projects it’s built around the power of a grassroots network –  teachers and headteachers on the ground identify needs, and we find solutions together and plan for a better future.";

  const heading = ["School links"];

  const para = [
    "We’ve linked over 100 schools in Wales with schools in Mbale region – including nursery, infants, primary, secondary and special schools. Schools send each other letters and pictures and many teachers, headteachers and students have visited each other. Partnerships allow teachers and pupils to learn about and respect each other’s cultures and ways of life. They share ideas and experiences and develop common projects to enhance the curriculum in areas such as literacy, numeracy, geography, sport, music, and sustainable development. Schools build up friendships and this usually leads to Welsh schools helping their Ugandan friends to have basic equipment, better facilities and resources to give them more opportunities. Many schools have provided sports kit and equipment, textbooks and exercise books, and the chance to plant trees to fight climate change.",
  ];
  const img = co1;
  const blog = ['"They call me Musawo"'];
  const blogPara = [
    '"A good friend always finds out what is best for the friend and tries to do something about it by word or action. In the same way, our PONT family constantly find ways of making the friendship more meaningful.”',
  ];
  const para1 = [
    "Some have gone a step further and",
    "In schools with partnership links our extra projects give children extra chances:",
  ];
  const bulletins = [
    "provided latrines, solar power and assistance for science equipment",
    "built a girls’ dormitory",
    "improved school playing fields,",
    "provided electricity",
    "provided perimeter fencing",
    "supplied bikes for teachers to get to school",
  ];
  return (
    <div>
      <CoverImage img1={gt} head={"COMMUNITY HEALTH"} />
      <Heading heading1={heading1[0]} heading2={heading1[1]} />
      <div className="w-[80%] mx-auto mt-10">
        <div className="flex gap-3">
          <div className=" flex-1">
            <div className="flex">
              <HeadText heading1={heading[0]} para1={para[0]} />
            </div>
            <p className="text-[20px] mt-8 pr-32 font-popin">{para1[0]}</p>

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
            <p className="text-[20px] mt-8 pr-32 font-popin">{para1[1]}</p>
          </div>
          <div className="my-auto">
            <Post img={img} blogPara={blogPara} />
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto mt-10">
        <div className="flex flex-wrap gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 flex-grow"
              style={{ flex: "1 1 calc(33.33% - 1rem)" }}
            >
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                layout="responsive"
                width={300}
                height={300}
                objectFit="cover"
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <button className="rounded-full bg-white px-4 py-2 text-black flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="h-[20px] w-[20px] text-summer-org"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
        <Stat />
        <button className="bg-summer-org hover:bg-green-700 text-white text-[25px] mx-auto mt-6 font-medium px-5 py-5 rounded-[10px] flex items-center transition-all duration-500 ease-in-out">
          Support Our Work
        </button>
      </div>
      <Impact approachText={approachText} impactText={impactText} />
    </div>
  );
};

export default Education;

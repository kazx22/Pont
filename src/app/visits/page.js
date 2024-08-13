import React from "react";
import SecPara from "../component/secPara";
import Image from "next/image";
import gt from "../img/1P.png";
import gt2 from "../img/2P.png";
import gt3 from "../img/3P.png";
import gt4 from "../img/4P.png";
import gt5 from "../img/5P.png";
import gt6 from "../img/6P.png";
import gt7 from "../img/7P.png";
import gt8 from "../img/8P.png";
import gt9 from "../img/9P.png";

const Visit = () => {
  const img1 = [
    { name: gt, caption: "Community health workers in training" },
    { name: gt2, caption: "Existing community health workers" },
  ];

  const img2 = [
    { name: gt3, caption: "UK and Ugandan Mental Health Trainers" },
    { name: gt4, caption: "First cohort of train the trainers" },
    { name: gt5, caption: "Mental Health training activities" },
  ];
  const img3 = [
    { name: gt6, caption: "Motorbike Ambulance drivers’ presentation" },
    { name: gt7, caption: "Motorbike Ambulance drivers training" },
  ];

  const img4 = [
    { name: gt8, caption: "Community health workers in training" },
    { name: gt9, caption: "Existing community health workers" },
  ];
  return (
    <div className="mx-auto w-[80%]">
      <SecPara
        head={"February Visit 2023"}
        text={
          "A Partnerships Overseas Networking Trust (PONT) medical team has just returned from Uganda after a most encouraging visit. For 15 years PONT has been building up an effective network of Community Health Workers and a fleet of Motorbike Ambulances which now serve a population of about half a million people in rural areas around Mbale in Eastern Uganda. Over this time, many thousands of lives have been saved due to these programmes working closely with the local government services. "
        }
      />
      <div className="flex justify-center gap-[200px] mx-auto mt-10">
        {img1.map((img, ind) => (
          <div key={ind} className="shrink-0 order-2 text-center">
            <Image
              src={img.name}
              alt="Changing lives in Wales and Uganda"
              width={350}
              height={250}
              className="rounded-[50px] w-[350px] h-[250px]"
            />
            <p className="text-center">{img.caption}</p>
          </div>
        ))}
      </div>
      <SecPara
        head={"Expanding Primary Health Care"}
        text={
          "PONT is excited to announce that the training of an additional 240 new Community Health Workers in the Mbale region of Uganda has begun! This project has been made possible by a generous grant from the Welsh Government through their Wales for Africa programme. \n The 240 new Community Health Workers are selected from rural villages without existing local healthcare and will provide much-needed medical support to 120,000 people. The new Community Health Workers are being trained using the Ugandan Government Community Health Promoter course. They will learn how to diagnose common diseases, promote healthy living environments, recognise and refer patients who need hospital treatment. \nWhilst caring for the whole community their work will have a particular focus on the health of pregnant mothers and young children. In Uganda death rates of mothers and young children remain stubbornly high, but we are confident (from experience of training 1200 health workers) that these wonderful men and women will make a huge difference, becoming lifesavers in their own villages!"
        }
      />
      <div className="flex justify-content gap-52 mt-10">
        {img2.map((img, ind) => (
          <div key={ind} className="shrink-0 order-2">
            <Image
              src={img.name}
              alt="Changing lives in Wales and Uganda"
              width={350}
              height={250}
              className="rounded-[50px] w-[350px] h-[250px]"
            />
            <p className="text-center">{img.caption}</p>
          </div>
        ))}
      </div>
      <SecPara
        head={"Motorbike Ambulances"}
        text={
          "The Motorbike ambulance fleet currently totals 32 in number. Our African partners have asked if we can find funds to purchase 54 more over the next few years, since they are so vital in saving the lives of villagers in remote communities.\n During the February 2023 visit, our team distributed new helmets, gloves, weatherproof jackets/ trousers, and tabards to all our drivers. Funds for this were provided by a generous grant from the Cadbury Foundation. "
        }
      />
      <div className="flex justify-center gap-[200px] mx-auto m-10">
        {img3.map((img, ind) => (
          <div key={ind} className="shrink-0 order-2 text-center">
            <Image
              src={img.name}
              alt="Changing lives in Wales and Uganda"
              width={350}
              height={250}
              className="rounded-[50px] w-[350px] h-[250px]"
            />
            <p className="text-center">{img.caption}</p>
          </div>
        ))}
      </div>
      <SecPara
        head={"Reflections from John Griffiths MS Newport East"}
        text={
          "It was a great privilege to go to Mbale with PONT and be part of the very good work taking place – in health, education and community development. The partnerships and friendships built and sustained over many years are testament to the value and strength of this work. To see communities in Uganda and Wales engaged in mutually beneficial projects is an important part of our country’s international engagement.  In Wales we are fortunate to be part of the relatively secure and prosperous world.  This gives us a moral imperitive to reach out to countries where need is greatest.  As a member of the Senedd I am a huge supporter of our Welsh Government’s Programme for Africa and it is so good to see PONT demonstrating how much can be achieved and sustained with a community to community approach.  I am privileged to have made many new friends in Pont and Mbale.  And to have witnessed the commitment, energy and organisation of all involved. "
        }
      />
      <div className="flex justify-center gap-[200px] mx-auto mt-10">
        {img4.map((img, ind) => (
          <div key={ind} className="shrink-0 order-2 text-center">
            <Image
              src={img.name}
              alt="Changing lives in Wales and Uganda"
              width={350}
              height={250}
              className="rounded-[50px] w-[350px] h-[250px]"
            />
          </div>
        ))}
      </div>
      <h4 className="text-[25px] mt-8 pr-6 font-popins">
        People in Mbale have the power to improve the lives of their
        communities. PONT gives people in Wales the chance to give their time,
        skills, or money to support them, and make a real difference.
        There&apos;s lots of ways you can join in.
      </h4>
    </div>
  );
};

export default Visit;

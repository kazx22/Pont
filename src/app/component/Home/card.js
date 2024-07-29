import React from "react";
import Image from "next/image";
import co1 from "../../img/1.jpg";
import co2 from "../../img/2.jpg";
import co3 from "../../img/3.jpg";
import co4 from "../../img/4.jpg";
import co5 from "../../img/5.jpg";
import co6 from "../../img/6.jpg";
import co7 from "../../img/7.jpg";
import co8 from "../../img/8.jpg";
import co9 from "../../img/9.jpg";
import co10 from "../../img/10.jpg";

const Card = () => {
  const cards = [
    { img: co1, name: "Churches" },
    { img: co2, name: "Ambulances" },
    { img: co3, name: "Wildlife Education Centre" },
    { img: co4, name: "Community Health" },
    { img: co5, name: "Education" },
    { img: co6, name: "Engineering" },
    { img: co7, name: "Environment" },
    { img: co8, name: "Hospital" },
    { img: co9, name: "Livelihoods" },
    { img: co10, name: "University" },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-center font-roboto text-[35px] font-bold text-orange-500 mb-8">
        Our projects touch many areas of life... <br />
        ...they&apos;re all about reducing the impact of poverty.
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative w-72 h-[450px] rounded-lg overflow-hidden shadow-lg cursor-pointer text-white"
          >
            <div className="absolute top-0 left-0 w-full h-full hover:border-4 hover:border-green-700 hover:border-double">
              <Image
                src={card.img}
                alt={`Card Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="opacity-100 transition-opacity duration-200 ease-out hover:opacity-90"
              />
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-summer-org text-white font-semibold rounded-[50px] hover:bg-green-700">
                {card.name}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import Image from "next/image";
import gt3 from "../../img/gt3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Events = () => {
  const events = [
    {
      title: "Fundraiser for Kids",
      date: "Aug 25, 2018",
      location: "Ballroom New York",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris.",
      image: gt3,
    },
    {
      title: "Charity Run",
      date: "Sep 10, 2018",
      location: "Central Park",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris.",
      image: gt3,
    },
    {
      title: "Gala Dinner",
      date: "Oct 5, 2018",
      location: "Hilton Hotel",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris.",
      image: gt3,
    },
  ];

  return (
    <div className="w-full h-auto bg-[#FCF8F9]">
      <div className="flex justify-center gap-[200px] py-12">
        <div className="flex-col">
          <h1 className="font-lora text-[35px] font-bold border-b-4 border-green-700 inline-block px-12 mr-2">
            Upcoming Events
          </h1>
          {events.map((event, index) => (
            <div key={index} className="flex w-[600px] mt-8 gap-10">
              <Image
                src={event.image}
                objectFit="cover"
                alt={event.title}
                className="w-[144px] h-[144px]"
              />
              <div className="flex-col font-mon tracking-normal">
                <h1 className="text-[20px] font-medium">{event.title}</h1>
                <div className="flex">
                  <h4 className="text-[12px] border-r-2 border-red-300 pr-4 mt-1">
                    {event.date}
                  </h4>
                  <h4 className="text-[12px] pl-4 mt-1">{event.location}</h4>
                </div>
                <p className="text-gray-400 mt-4">{event.description}</p>
                <button className="no-underline text-[16px] tracking-wide mt-1 text-summer-org">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h1 className="font-lora text-[35px] font-bold border-b-4 border-green-700 inline-block px-12 mr-2">
            Featured Cause
          </h1>
          <div className="flex-col bg-[#EEF3F5] mt-6 h-[504px] ">
            <div className="w-[604px] h-auto flex gap-4 px-10">
              <div className="mt-[80px]">
                <Image
                  src={events[0].image}
                  objectFit="cover"
                  alt={events[0].title}
                  className="w-[300px] h-[230px]"
                />
              </div>
              <div className="w-[504px] flex-col mt-[80px]">
                <h1 className="text-[20px] font-medium">{events[0].title}</h1>
                <div className="flex">
                  <h4 className="text-[12px] border-r-2 border-red-300 pr-4 mt-1">
                    {events[0].date}
                  </h4>
                  <h4 className="text-[12px] pl-4 mt-1">
                    {events[0].location}
                  </h4>
                </div>
                <p className="text-gray-400 mt-4">{events[0].description}</p>
                <button className="bg-summer-org hover:bg-green-700 text-white text-[12px] mx-auto font-medium px-8 py-4 rounded-full mt-5 flex items-center transition-all duration-500 ease-in-out">
                  Donate Now
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-2 h-[10px] w-[10px]"
                  />
                </button>
              </div>
            </div>
            <div className="relative mt-14 mx-auto mb-6 px-10 w-[90%]">
              <div className="w-full h-[10px] bg-summer-org rounded-lg "></div>
              <div className="absolute top-[-18px] left-[70%] h-[45px] w-[45px]   border-2 border-white rounded-full bg-summer-org flex items-center justify-center">
                <p className="text-[13px] text-center text-white">83%</p>
              </div>
            </div>
            <div className="flex justify-between mt-4 px-10">
              <p>Raised: £56 880</p>
              <p>Goal: £70 000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;

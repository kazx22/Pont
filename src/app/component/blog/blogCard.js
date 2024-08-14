import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faComment } from "@fortawesome/free-solid-svg-icons";
const BlogCard = ({ image, date, heading, text, path }) => {
  // console.log(text);
  text = text.split(" ").slice(0, 15).join(" ");
  const newDate = date.split("T");
  return (
    <div className="relative flex-col w-[400px] h-[650px] mt-5 bg-[#e0d8cb]">
      <div className="relative">
        {/* <Image src={image} alt="Blog" className="w-full h-[530px]" /> */}
        <img src={image} alt="" className="w-full h-[300px]" />
      </div>
      <div className="w-[300px] h-[50px] bg-[#F2F0EB] rounded-l m-auto absolute left-1/2 mt-[-20px] ml-[-150px] flex justify-center items-center gap-1 z-10">
        <FontAwesomeIcon
          icon={faCalendarDays}
          className="h-[15px] w-[15px] text-summer-org"
        />
        <p className="text-[12px] font-medium font-popins mt-1">{newDate[0]}</p>
        <FontAwesomeIcon
          icon={faComment}
          className="h-[15px] w-[15px] ml-1 text-summer-org mt-1"
        />
        <p className="text-[12px] font-medium font-popins mt-1 text-summer-org">
          3 Comments
        </p>
      </div>
      <h3 className="text-[18px] font-bold text-center font-roboto mt-12">
        {heading}
      </h3>
      <p className="p-6 text-center text-[16px]">{text}</p>
      <div className="text-center">
        <Link href={path} passHref>
          <button className="mt-2 px-8 py-4  bg-summer-org text-white font-semibold rounded-[50px] hover:bg-green-700">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

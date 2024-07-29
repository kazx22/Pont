import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faComment } from "@fortawesome/free-solid-svg-icons";
const Post = ({ img, blog, blogPara }) => {
  return (
    <div className=" w-[30%]">
      <div className="relative flex-col w-[400px] h-[580px] ml-10 bg-[#e0d8cb]">
        <div className="relative">
          <Image src={img} alt="Blog" className="w-[400px] h-[300px]" />
        </div>

        <div className="w-[300px] h-[50px] bg-[#F2F0EB] rounded-l m-auto absolute left-1/2 mt-[-20px] ml-[-150px] flex justify-center items-center gap-1 z-10">
          <FontAwesomeIcon
            icon={faCalendarDays}
            className="h-[15px] w-[15px] text-summer-org"
          />
          <p className="text-[12px] font-medium font-popins mt-1">1/7/2024</p>
          <FontAwesomeIcon
            icon={faComment}
            className="h-[15px] w-[15px] ml-1 text-summer-org mt-1"
          />
          <p className="text-[12px] font-medium font-popins mt-1 text-summer-org">
            3 Comments
          </p>
        </div>
        <h3 className="text-[22px] text-center font-medium font-roboto mt-12">
          {blog}
        </h3>
        <p className="p-6 text-center text-[16px]">{blogPara}</p>
        <button className="bg-summer-org hover:bg-green-700 text-white text-[15px] m-auto font-medium p-3 px-6 rounded-full flex items-center transition-all duration-500 ease-in-out">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Post;

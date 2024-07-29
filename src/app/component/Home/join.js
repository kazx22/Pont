import React from "react";
import co1 from "../../img/11.jpg";
import co2 from "../../img/12.jpg";
import co3 from "../../img/13.jpg";
import Image from "next/image";
const Join = () => {
  const cards = [
    { img: co1, name: "Fundraiser" },
    { img: co2, name: "Give" },
    { img: co3, name: "Volunteer" },
  ];
  return (
    <div className="mt-10 w-flll h-auto" id="join">
      <div className="flex justify-center gap-12 items center  py-[50px] bg-[#F2F0EB]">
        <div className="w-[55%] flex-col gap-12 justify-center items-center pr-20 mt-10">
          <h4 className="text-summer-org">Welcome To Pont</h4>
          <h1 className="text-[45px] text-black font-medium">
            We want people in Rhondda Cynon Taf to join us to make a difference
          </h1>
          <p className="text-[#666] text-[20px] py-8 font-popins">
            There&apos;s so much learning, satisfaction and enjoyment in sharing
            lives. You can be part of it People in Mbale have the power to
            <br className="mt-4" />
            <br className="mt-4" />
            improve the lives of their communities. PONT gives people in Wales
            the chance to give their time, skills or money to support them, and
            make a real specific difference.
          </p>
          <p className="text-[#666] text-[20px] font-popins border-b-2 border-summer-org inline-block">
            There&apos;s lots of ways you can join in:
          </p>

          <div className="flex items-center mt-8 gap-4">
            {cards.map((card, ind) => (
              <div
                key={ind}
                className="h-[206px] w-[200px] bg-white rounded flex-col transition ease-out duration-300 hover:bg-green-700 hover:text-white "
              >
                <Image
                  src={card.img}
                  alt={card.name}
                  className="w-[100px] h-[100px] rounded-full  m-auto mt-8 transition-transform transform hover:scale-105 hover:translate-y-[-20px]"
                />
                <h3 className="text-[20px] text-center font-bold font-roboto transition ease-out duration-300 mt-2 hover:text-white">
                  {card.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
        <div className="h-auto w-[400px] bg-[#38311E]">
          <div className="flex-col justify-center items-center px-10 py-16">
            <h4 className="text-summer-org  font-popins text-[10px]">
              DONATE NOW
            </h4>
            <h1 className="text-[25px] text-white font-medium mt-1">
              Giving is the greatest act of grace
            </h1>
            <h4 className="text-summer-org  font-popins text-[10px] mt-4">
              Full Name
            </h4>

            <input
              type="text"
              className="mt-2 w-full h-10 bg-[#423C29] px-4 text-[16px] rounded-sm"
              placeholder="Your Full Name"
            />

            <h4 className="text-summer-org  font-popins text-[10px] mt-8">
              Email Address
            </h4>

            <input
              type="text"
              className="mt-2 w-full h-10 bg-[#423C29] px-4 text-[16px] rounded-sm"
              placeholder="Your Email Address"
            />

            <h4 className="text-summer-org  font-popins text-[10px] mt-8">
              Select Courses
            </h4>
            <select
              name="category"
              id="category"
              className="mt-2 w-full h-10 bg-[#423C29] px-4 text-[16px] text-[#9DA1A7] rounded-sm"
            >
              <option className="text-[#9DA1A7]" value="" disabled selected>
                Select a category
              </option>
              <option value="education">Education</option>
              <option value="environment">Environment</option>
              <option value="university">University</option>
            </select>

            <h4 className="text-summer-org  font-popins text-[10px] mt-8">
              Amount to Give
            </h4>

            <input
              type="text"
              className="mt-2 w-full h-10 bg-[#423C29] px-4 text-[16px] rounded-sm"
              placeholder="Amount"
            />
            <button className="bg-summer-org hover:bg-green-700 text-white text-[22px] m-auto font-medium px-12 py-4 rounded-full mt-8 flex items-center transition-all duration-500 ease-in-out">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;

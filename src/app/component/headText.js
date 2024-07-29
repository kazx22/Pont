import React from "react";

const HeadText = ({
  heading1,
  heading2,
  para1,
  para2,
  subHeading1,
  subHeading2,
  subPara,
  links,
}) => {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-lora text-[40px] font-bold border-b-4 border-green-700 inline-block">
          {heading1}
        </h1>
        <button className="bg-summer-org hover:bg-green-700 text-white text-[15px] font-medium px-5 py-1 rounded-[10px] flex items-center transition-all duration-500 ease-in-out">
          Support Our Work
        </button>
      </div>

      <p className="text-[20px] mt-10 font-popin">
        {para1.split("*").map((item, ind) =>
          ind % 2 === 1 ? (
            <a
              href={links.shift()}
              className="text-green-700 font-bold"
              key={ind}
            >
              {item}
            </a>
          ) : (
            <span key={ind}>{item}</span>
          )
        )}
      </p>

      {heading2 && (
        <div className="flex justify-between mt-20">
          <h1 className="font-lora text-[40px] font-bold border-b-4 border-green-700 inline-block">
            {heading2}
          </h1>
          <button className="bg-summer-org hover:bg-green-700 text-white text-[15px] font-medium px-5 py-1 rounded-[10px] flex items-center transition-all duration-500 ease-in-out">
            Support Our Work
          </button>
        </div>
      )}
      {para2 && (
        <p className="text-[20px] mt-10 font-popin">
          {para2.split("*").map((item, ind) =>
            ind % 2 === 1 ? (
              <a
                href={links.shift()}
                className="text-green-700 font-bold"
                key={ind}
              >
                {item}
              </a>
            ) : (
              <span key={ind}>{item}</span>
            )
          )}
        </p>
      )}

      {subHeading1 && (
        <h2 className="font-lora text-summer-org mt-10 text-[30px] font-bold border-b-4 border-green-700 inline-block">
          {subHeading1}
        </h2>
      )}
      {subPara && (
        <p className="text-[20px] mt-8 pr-32 font-popin">
          {subPara[0].split("*").map((item, ind) =>
            ind % 2 === 1 ? (
              <a
                href={links.shift()}
                className="text-green-700 font-bold"
                key={ind}
              >
                {item}
              </a>
            ) : (
              <span key={ind}>{item}</span>
            )
          )}
        </p>
      )}
      {subHeading2 && (
        <h2 className="font-lora text-[30px] text-summer-org mt-6 font-bold border-b-4 border-green-700 inline-block">
          {subHeading2}
        </h2>
      )}
      {subPara && (
        <p className="text-[20px] mt-8 pr-32 font-popin">
          {subPara[1].split("*").map((item, ind) =>
            ind % 2 === 1 ? (
              <a
                href={links.shift()}
                className="text-green-700 font-bold"
                key={ind}
              >
                {item}
              </a>
            ) : (
              <span key={ind}>{item}</span>
            )
          )}
        </p>
      )}
    </div>
  );
};

export default HeadText;

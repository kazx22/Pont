import React from "react";
import { FaCheckCircle } from "react-icons/fa";
const List = ({ text }) => {
  const bulletins = text.split("-");

  return (
    <div>
      <ul className="mt-6 ml-6 space-y-4">
        {bulletins.map((item, ind) => (
          <li
            key={ind}
            className="flex items-center bg-gray-100 p-4 rounded-md shadow-md w-full"
          >
            <FaCheckCircle className="text-green-500 mr-4" />
            <span className="text-lg font-medium text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;

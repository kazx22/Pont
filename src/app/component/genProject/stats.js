"use client";
import React, { useMemo, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSchoolFlag,
  faChalkboardUser,
  faPersonChalkboard,
  faUsers,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

const StatC = ({ stat }) => {
  const statsRef = useRef(null);
  const trials = useMemo(
    () => [
      { icon: faSchoolFlag, count: stat.amount_1, text: stat.title_1 },
      { icon: faChalkboardUser, count: stat.amount_2, text: stat.title_2 },
      {
        icon: faPersonChalkboard,
        count: stat.amount_3,
        text: stat.title_3,
      },
      {
        icon: faUsers,
        count: stat.amount_4,
        text: stat.title_4,
      },
      {
        icon: faBook,
        count: stat.amount_5,
        text: stat.title_5,
      },
      {
        icon: faBook,
        count: stat.amount_6,
        text: stat.title_6,
      },
    ],
    [stat]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove(
              "translate-x-full",
              "translate-x-neg-full",
              "opacity-0"
            );
            entry.target.classList.add("translate-x-0", "opacity-100");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    const items = statsRef.current.querySelectorAll(".stat-item");
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full h-auto px-20 py-10" ref={statsRef}>
      <div className="grid grid-cols-3 gap-8">
        {trials.map((trial, index) => (
          <div
            key={index}
            className={`stat-item flex flex-col items-center p-4 bg-white text-summer-org hover:bg-summer-org hover:text-white transition duration-5000 ease-in-out transform ${
              index % 2 === 0 ? "translate-x-neg-full" : "translate-x-full"
            } opacity-0`}
          >
            <FontAwesomeIcon icon={trial.icon} size="3x" className="mb-4" />
            <div className="text-2xl font-bold mb-2">{trial.count}</div>
            <div className="text-center text-lg">{trial.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatC;

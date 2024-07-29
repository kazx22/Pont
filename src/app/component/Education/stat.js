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

const Stat = () => {
  const statsRef = useRef(null);
  const trials = useMemo(
    () => [
      { icon: faSchoolFlag, count: 56, text: "Schools Linked" },
      { icon: faChalkboardUser, count: 56, text: "Teachers Attended Training" },
      {
        icon: faPersonChalkboard,
        count: 34,
        text: "Teachers from Wales visited Uganda",
      },
      {
        icon: faUsers,
        count: 1200,
        text: "Teachers from Uganda Visited Wales",
      },
      {
        icon: faBook,
        count: 2000,
        text: "Books for Ugandan schools",
      },
    ],
    []
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

export default Stat;

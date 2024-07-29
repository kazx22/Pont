"use client";
import React, { useMemo, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckMedical,
  faSchoolFlag,
  faUserNurse,
  faHandHoldingHeart,
  faGlassWaterDroplet,
  faKitMedical,
} from "@fortawesome/free-solid-svg-icons";

const Stats = () => {
  const statsRef = useRef(null);

  const trials = useMemo(
    () => [
      {
        icon: faTruckMedical,
        count: 34,
        text: "Motorbike Ambulances",
      },
      { icon: faSchoolFlag, count: 56, text: "Schools Twinned" },
      {
        icon: faUserNurse,
        count: 1200,
        text: "Health Workers Trained",
      },
      {
        icon: faHandHoldingHeart,
        count: 2000,
        text: "Families Given a Goat",
      },
      {
        icon: faGlassWaterDroplet,
        count: 6000,
        text: "People with Clean Water",
      },
      {
        icon: faKitMedical,
        count: 500000,
        text: "People Accessing Health Care",
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
      {
        threshold: 0.1,
      }
    );

    const items = statsRef.current.querySelectorAll(".stat-item");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full h-auto px-20 py-10" ref={statsRef}>
      <h1 className="text-center font-roboto text-[35px] font-bold text-orange-500 mb-8">
        We&apos;re impacting lives
      </h1>
      <div className="grid grid-cols-3 gap-8">
        {trials.map((trial, index) => (
          <div
            key={index}
            className={`stat-item flex flex-col items-center p-4 bg-white text-green-700 hover:bg-green-700 hover:text-white transition duration-5000 ease-in-out transform ${
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

export default Stats;

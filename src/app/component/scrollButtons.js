"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollButtons = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToJoin = () => {
    const joinSection = document.getElementById("join");
    if (joinSection) {
      joinSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-2">
      <button
        className="h-[100px] w-[105px] rounded-lg bg-summer-org hover:bg-white text-white hover:text-summer-org flex items-center justify-center transition-colors"
        onClick={scrollToTop}
      >
        <FontAwesomeIcon
          icon={faArrowUp}
          className="h-[40px] w-[40px] transition-colors"
        />
      </button>
      <button
        className="h-[100px] w-[105px] text-[24px] rounded-lg bg-summer-org hover:bg-white text-white hover:text-summer-org flex items-center justify-center transition-colors font-bold"
        onClick={scrollToJoin}
      >
        Donate
      </button>
    </div>
  );
};

export default ScrollButtons;

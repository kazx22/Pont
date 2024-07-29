"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import co1 from "../../img/1.jpg";
import co2 from "../../img/2.jpg";
import co3 from "../../img/3.jpg";
import co4 from "../../img/4.jpg";
import co5 from "../../img/5.jpg";
import co6 from "../../img/6.jpg";
import co7 from "../../img/7.jpg";
import co8 from "../../img/8.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Gallery = () => {
  const images = [co1, co2, co3, co4, co5, co6, co7, co8];
  const [Vis, setVis] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVis(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={galleryRef}
      className={`grid grid-cols-4 gap-0 transition-opacity duration-1000 ${
        Vis ? "opacity-100" : "opacity-0"
      }`}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="group relative overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          <Image
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <button className="rounded-full bg-white px-4 py-2 text-black flex items-center justify-center">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="h-[20px] w-[20px] text-summer-org"
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;

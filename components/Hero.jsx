import React from "react";
import backgroundImage from "../assets/images/bgHero.png";
import { FaCalendarAlt, FaComments, FaEye } from "react-icons/fa";

export default function Hero() {
  return (
    <div
      className="flex flex-col gap-2 items-center justify-center relative pb-10"
      style={{ height: "65vh", backgroundImage: `url(${backgroundImage})` }}
    >
      <button className="bg__primary p-3 px-12 rounded text-white mb-4">
        Hi-Tech
      </button>
      <p className="text-white md:w-2/3 mx-auto text-center text-lg md:text-5xl">
        Certainty listening no behaviour existence assurance situation
      </p>
      <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-white text-base md:text-2xl mt-4">
        <p>Fredson</p>
        <p className="flex items-center gap-2">
          <FaCalendarAlt></FaCalendarAlt> Jan / 15 / 2022
        </p>
        <p className="flex items-center gap-2">
          <FaComments></FaComments> 127
        </p>
        <p className="flex items-center gap-2">
          <FaEye></FaEye> 301
        </p>
      </div>
      <div className="absolute bottom-2 left-0 w-full flex items-center justify-center gap-4">
        {Array.from(new Array(5)).map((u, index) => {
          return (
            <div
              key={index}
              className={`text-white h-4 w-4 rounded-full cursor-pointer ${
                index === 0 ? "bg__primary" : "bg-gray-100"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

import React from "react";
import backgroundImage from "../assets/images/bgHero.png";

export default function Hero() {
  return (
    <div
      className="flex flex-col gap-2 items-center justify-center"
      style={{ height: "60vh", backgroundImage: `url(${backgroundImage})` }}
    >
      <button className="bg__primary p-3 px-12 rounded text-white">
        Hi-Tech
      </button>
      <p
        className="text-white md:w-2/3 mx-auto text-center"
        style={{ fontSize: 50 }}
      >
        Certainty listening no behaviour existence assurance situation
      </p>
      <div className="flex gap-2 text-white text-2xl">
        <p>Fredson</p>
        <p>Jan / 15 / 2022</p>
        <p>127</p>
        <p>301</p>
      </div>
    </div>
  );
}

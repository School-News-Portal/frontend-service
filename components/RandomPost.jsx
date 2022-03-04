import Image from "next/image";
import React from "react";
import { FaCalendarAlt, FaComments, FaEye } from "react-icons/fa";
import randomPostPic from "../assets/images/randomPost.png";

export default function OurPics() {
  const randomPost = {
    id: 1,
    title:
      'Fredson said, "It was a tight game both teams played at their best".',
    image: randomPostPic,
    category: "Sports",
  };
  return (
    <div>
      <h1 className="text__primary border-b-2 pb-3 border__primary">
        RANDOM POST
      </h1>

      <div className="space-y-2 my-5">
        <div className="relative w-full h-48">
          <Image
            src={randomPost.image}
            alt=""
            layout="fill"
            objectFit="none"
            quality={100}
          ></Image>
          <p className="absolute top-1 left-2 bg__primary text-white rounded px-4 py-1">
            {randomPost.category}
          </p>
        </div>
        <div>
          <h3 className="text-xs" style={{ color: "#4D4F5C" }}>
            {randomPost.title}
          </h3>
          <div
            style={{ color: "#919192", fontSize: "0.6rem" }}
            className="flex flex-col md:flex-row gap-2 text-xs my-2 items-center"
          >
            <p>Oreste</p>
            <div className="flex items-center gap-1">
              <FaCalendarAlt></FaCalendarAlt> <p>Jan / 15 / 2022</p>
            </div>
            <div className="flex items-center gap-1">
              <FaComments></FaComments> <p>127</p>
            </div>
            <div className="flex items-center gap-1">
              <FaEye></FaEye> <p>301</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

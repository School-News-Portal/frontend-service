import Image from "next/image";
import React from "react";
import { FaCalendarAlt, FaComments, FaEye } from "react-icons/fa";
import pic1 from "../assets/images/pic1.png";
import pic2 from "../assets/images/pic2.png";
import pic3 from "../assets/images/pic3.png";
import pic4 from "../assets/images/pic4.png";

export default function OurPics() {
  const picPosts = [
    {
      id: 1,
      title: "Certainty listening no behavior existence assurance situation",
      image: pic1,
      category: "Photography",
    },
    {
      id: 2,
      title: "Certainty listening no behavior existence assurance situation",
      image: pic2,
      category: "Travels",
    },
    {
      id: 3,
      title: "Certainty listening no behavior existence assurance situation",
      image: pic3,
      category: "Life Style",
    },
    {
      id: 4,
      title: "Football isn't just a game but a teacher of values and scrifices",
      image: pic4,
      category: "Sports",
    },
  ];
  return (
    <div>
      <h1 className="text__primary border-b-2 pb-3 border__primary font-bold">
        OUR PICS
      </h1>
      {picPosts.map((pic, i) => (
        <div key={i} className="space-y-2 my-5">
          <div className="relative w-full h-48">
            <Image
              src={pic.image}
              alt=""
              layout="fill"
              objectFit="none"
              quality={100}
            ></Image>
            <p className="absolute top-1 left-2 bg__primary text-white rounded px-4 py-1">
              {pic.category}
            </p>
          </div>
          <div>
            <h3 className="text-xs" style={{ color: "#4D4F5C" }}>
              {pic.title}
            </h3>
            <div
              style={{ color: "#919192", fontSize: "0.6rem" }}
              className="flex flex-col md:flex-row gap-2 text-xs my-2 items-center"
            >
              <p>Author</p>
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
      ))}
    </div>
  );
}

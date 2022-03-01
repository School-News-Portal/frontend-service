import Image from "next/image";
import React from "react";
import { FaCalendarAlt, FaComments, FaEye } from "react-icons/fa";
import popular1 from "../assets/images/popular1.png";
import popular2 from "../assets/images/popular2.png";
import popular3 from "../assets/images/popular3.png";

export default function HomeSideContent() {
  const popularPosts = [
    {
      id: 1,
      title: "Lorem ipsum dolor lit sit amet consectetur adipiscing",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      image: popular1,
    },
    {
      id: 2,
      title: "Lorem ipsum dolor lit sit amet consectetur adipiscing",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      image: popular2,
    },
    {
      id: 3,
      title: "Lorem ipsum dolor lit sit amet consectetur adipiscing",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      image: popular3,
    },
  ];
  return (
    <div className="my-6 pl-4">
      <div>
        <h1 className="text__primary border-b-2 pb-3 border__primary">
          POPULAR POSTS
        </h1>
        {popularPosts.map((popular, i) => (
          <div key={i} className="flex gap-4 my-2">
            <div className="relative w-1/3 h-24">
              <Image
                src={popular.image}
                alt=""
                layout="fill"
                objectFit="none"
                quality={100}
              ></Image>
            </div>
            <div className="w-2/3">
              <h3 className="text-base" style={{ color: "#4D4F5C" }}>
                {popular.title}
              </h3>
              <div
                style={{ color: "#919192" }}
                className="flex flex-col md:flex-row gap-2 text-xs my-2 items-center"
              >
                <p>Fredson</p>
                <p className="flex items-center gap-1">
                  <FaCalendarAlt></FaCalendarAlt> <p>Jan / 15 / 2022</p>
                </p>
                <p className="flex items-center gap-1">
                  <FaComments></FaComments> <p>127</p>
                </p>
                <p className="flex items-center gap-1">
                  <FaEye></FaEye> <p>301</p>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

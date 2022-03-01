import Image from "next/image";
import Link from "next/link";
import React from "react";
import news1 from "../assets/images/news1.png";
import news2 from "../assets/images/news2.png";
import news3 from "../assets/images/news3.png";
import { FaCalendarAlt, FaComments, FaEye } from "react-icons/fa";

export default function HomePosts() {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor lit sit amet consectetur adipiscing",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      image: news1,
    },
    {
      id: 12,
      title: "Lorem ipsum dolor lit sit amet consectetur adipiscing",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      image: news2,
    },
    {
      id: 3,
      title: "Lorem ipsum dolor lit sit amet consectetur adipiscing",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      image: news3,
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <div
          key={post.id}
          className="my-8"
          style={{ borderBottom: "1px dashed grey" }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "400px",
            }}
          >
            <Image
              alt=""
              src={post.image}
              layout="fill"
              objectFit="none"
              quality={100}
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center my-4 mb-10">
            <button className="bg__primary p-2 px-6 rounded text-white">
              Tech
            </button>
            <h3 className="mt-2 text-2xl" style={{ color: "#4D4F5C" }}>
              {post.title}
            </h3>
            <div
              style={{ color: "#919192" }}
              className="flex flex-col md:flex-row gap-2 md:gap-6 text-base mt-4"
            >
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
            <p className="text-center mt-2" style={{ color: "#7C7C91" }}>
              {post.content}
            </p>
            <div className="w-full flex justify-end mt-2">
              <Link href={`/posts/${post.id}`}>
                <p className="text__primary cursor-pointer">READ MORE &gt;</p>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

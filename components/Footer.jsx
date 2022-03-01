import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import logo from "../assets/images/logo.png";

export default function Footer() {
  const router = useRouter();

  const links = [
    {
      title: "Quick Links",
      sublinks: [
        { title: "Gallery", url: "/gallery" },
        { title: "Sports", url: "/sports" },
        { title: "Technology", url: "/tech" },
        { title: "Entertainment", url: "/entertainment" },
      ],
    },
    {
      title: "Support",
      sublinks: [
        { title: "Terms Condition", url: "/terms" },
        { title: "Privacy & Privacy", url: "/privacy" },
        { title: "Copyright Issue", url: "/copyright" },
        { title: "Get Help", url: "/help" },
      ],
    },
    {
      title: "Join Us",
      sublinks: [
        { title: "Become Teacher", url: "/teacher" },
        { title: "Become Student", url: "/student" },
        { title: "Become Both", url: "/apply" },
        { title: "Patnership", url: "/partnership" },
      ],
    },
    {
      title: "About Us",
      sublinks: [
        { title: "About Company", url: "/about" },
        { title: "Contact Us", url: "/contact" },
        { title: "Our Story", url: "/story" },
      ],
    },
  ];

  return (
    <div className="py-10 w-full" style={{ backgroundColor: "#E8E8E8" }}>
      <div className="footer-links flex flex-col md:flex-row md:justify-center w-full md:px-20 px-4 ">
        <div className="w-full md:w-1/5 flex items-center justify-center">
          <Image
            src={logo}
            height={100}
            width={100}
            objectFit="contain"
            alt="Logo"
          ></Image>
        </div>
        {links.map((link, i) => (
          <div key={i} className="w-full md:w-1/5">
            <h2 className="font-bold text__primary my-4">{link.title}</h2>
            {link.sublinks.map((sublink, j) => (
              <div
                onClick={() => router.push(sublink.url)}
                key={j}
                className="w-full cursor-pointer "
                style={{ color: "#919192" }}
              >
                {sublink.title}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div
        className="w-full mt-10 mb-5 bg__primary"
        style={{ height: "0.04rem" }}
      ></div>
      <div
        className="w-full flex flex-col md:flex-row items-center justify-around h-10 font-mono"
        style={{ color: "#919192" }}
      >
        <p>Copyright &copy; 2021 - {new Date().getFullYear()} News Portal</p>
        <p className="cursor-pointer">Go to To</p>
      </div>
    </div>
  );
}

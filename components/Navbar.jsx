import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const router = useRouter();

  const middleLinks = [
    {
      title: "HOME",
      url: "/",
    },
    {
      title: "TECHNOLOGY",
      url: "/tech",
    },
    {
      title: "SPORTS",
      url: "/sports",
    },
    { title: "ENTERTAINMENT", url: "/entertainment" },
    { title: "GALLERY", url: "/gallery" },
  ];

  const rightLinks = [
    {
      title: "LOGIN",
      url: "/login",
    },
    {
      title: "REGISTER",
      url: "/register",
    },
    { title: "EN", url: "/en" },
  ];

  return (
    <div className="md:px-20 flex justify-between">
      <Image src={logo} height={4} width={100} objectFit="contain"></Image>
      <div className="flex flex-col md:flex-row gap-2">
        {middleLinks.map((link) => {
          return (
            <div
              className="py-4 p-2"
              key={link.url}
              style={{
                borderTop: router.asPath == link.url ? "2px solid #FF4141" : "",
              }}
            >
              <Link href={link.url} className="text-xs">
                {link.title}
              </Link>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col md:flex-row gap-2">
        {rightLinks.map((link) => {
          return (
            <div
              className="py-4 p-2"
              key={link.url}
              style={{
                borderTop: router.asPath == link.url ? "4px solid #FF4141" : "",
              }}
            >
              <Link href={link.url}>{link.title}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

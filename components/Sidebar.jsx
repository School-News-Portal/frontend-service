import React from "react";
import logo from "../assets/images/logo.png";
import Image from "next/image";

export default function Sidebar() {
  const links = [
    { title: "Home", url: "/", active: true },
    { title: "Categories", url: "/" },
    { title: "Sub-categories", url: "/" },
    { title: "News", url: "/" },
    { title: "Messages", url: "/", badge: "8" },
    { title: "Settings", url: "/" },
  ];
  return (
    <div className="flex flex-col items-center py-6 h-full">
      <Image
        width="100"
        height="100"
        objectFit="contain"
        src={logo}
        className="mx-auto"
      ></Image>
      <div className="flex-1 flex flex-col justify-between pt-14 w-full">
        <div className="space-y-4 w-full">
          {links.map((link, index) => {
            return (
              <div
                key={index}
                className={`cursor-pointer w-full pl-10 flex items-center justify-between h-10 ${
                  link.active ? "border-l-2 border__primary" : ""
                }`}
              >
                <p className="font-semibold" style={{ color: "#919192" }}>
                  {link.title}
                </p>
                {link.badge && (
                  <div className="mr-10 text-white bg__primary rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm">
                    {link.badge}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className={`cursor-pointer w-full pl-10 flex items-center h-10`}>
          <p className="font-semibold" style={{ color: "#919192" }}>
            Logout
          </p>
        </div>
      </div>
    </div>
  );
}

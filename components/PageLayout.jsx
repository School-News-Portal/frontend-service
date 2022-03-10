import React from "react";
import Sidebar from "./Sidebar";

export default function PageLayout() {
  return (
    <div className="flex">
      <div
        className="w-1/5 h-screen sticky top-0 left-0"
        style={{ backgroundColor: "#E8E8E8" }}
      >
        <Sidebar></Sidebar>
      </div>
      <div className="w-4/5 ml-1">
        <div
          className="w-full h-20"
          style={{ backgroundColor: "#E8E8E8" }}
        ></div>
      </div>
    </div>
  );
}
